const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//Gets all Category data and related Product data
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Gets specific category by provided id value and associated Product data
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!categoryData) {
      return res.status(404).json({ message: 'Category not found, please try again.' });
    }
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

//POST request to create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(400).json(error);
  }
});

//PUT request to update a specific category
router.put('/:id', async (req, res) => {
  const { category_name } = req.body;
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'No category found, please try again.'});
    }

    category.category_name = category_name;
    await category.save();

    return res.status(200).json({ message: 'Updated category successfully!' });
  } catch (error) {
    return res.status(500).json(error);
  }
});

//DELETE request to delete category by id
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
    return res.status(404).json({ message: 'Category not found.' });
    }
    //find products in the category to delete to delete associations
    const products = await Product.findAll({ where: {category_id: req.params.id }});

    await Product.destroy({ where: { category_id: req.params.id }});

    await Category.destroy({ where: { id: req.params.id }});

    res.status(200).json({ message: 'Category and associated products successfully deleted.' });
  } catch (error) {
    res.status(500).json(error);
  }

});

module.exports = router;

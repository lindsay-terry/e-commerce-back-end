const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//Gets all Tag data and related Product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Gets specific Tag by id and associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!tagData) {
      return res.status(404).json({ message: 'Tag not found, please try again.'});
    }
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

//POST request to create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (error) {
    res.status(400).json(error);
  }
});

//PUT request to update a specific tag
router.put('/:id', async (req, res) => {
  const { tag_name } = req.body;
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      return res.status(404).json({ message: 'No tag found, please try again.'});
    }

    tag.tag_name = tag_name;
    await tag.save();

    return res.status(200).json({ message: 'Updated tag successfully.' });
  } catch (error) {
    return res.status(500).json(error);
  }
});

//DELETE request to delete tag by id
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      return res.status(404).json({ message: 'No tag found, please try again.'});
    }
    res.status(200).json({ message: 'Tag successfully deleted.' });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

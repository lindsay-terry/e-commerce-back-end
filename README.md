# e-commerce-back-end
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This is a back-end application for an e-commerce site using Express.js for the API configuration, and Sequelize to interact with the PostgreSQL database.  I was given starter code and challenged to create the models and associations between them, as well as the routes to carry out all the CRUD operations.  The functionality of the application provides users a way to, using a back-end endpoint tool such as Insomnia, interact with a database using api routes to view, add to, modify, or delete categories of products, products, and tags associated with products to have full control over the data integrity of an e-commerce database.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)

## Installation
Installation instructions for application:
npm i

## Usage
Click [here]() for a video demonstration of the application.

To use this project, ensure Node.js and PostgreSQL are installed and clone repository.  Create a .env file to store credentials and install all dependencies according to the instructions in the installation section.  Using postgreSQL, run the schema file to create the database and the command **npm run seed** to seed the database.  **Node server.js** is the command to start the application.  With the server running, navigate to Insomnia or your preferred API client to interact with the application.  Perform GET/POST/PUT/DELETE requets using any of the following api routes:

* **api/categories** to view all categories or add a category
* **api/categories/:id** to view, modify, or delete a specific category
* **api/products** to view all products or add a product
* **api/products/:id** to view, modify, or delete a specific product
* **api/tags** to view all tags or add a tag
* **api/tags/:id** to view, modify, or delete a specific tag

Create categories to organize products:  products correspond to categories and can be further organized by tags (see all your "blue" products, regardless of what category they belong to).  Deleting a category removes all associated products, so no need to worry about products without categories.  Maintain your data integrity and complete control over the organiziation of your e-commerce database.

![Screenshot of application being viewed in Insomnia](./assets/images/ecommerce.png)

## License
This project is operating under the MIT license.  For more detailed information, please click [here](https://opensource.org/license/mit).

## Contributing
See my contact information 

## Credits
N/A

## Tests
To run tests for the application:
N/A

## Questions
Contact me for any questions regarding this project:

GitHub: [lindsay-terry](https://github.com/lindsay-terry)

Email: lindsaytee66@gmail.com

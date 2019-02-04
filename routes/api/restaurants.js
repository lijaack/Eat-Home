//const router = require("express").Router();
//const booksController = require("../../controllers/eatHomeController.js");
//
//// Matches with "/api/books"
//router.route("/")
//  .get(eatHomeController.findAll)
//  .post(eatHomeController.create);
//
//// Matches with "/api/books/:id"
//router
//  .route("/:id")
//  .get(eatHomeController.findById)
//  .put(eatHomeController.update)
//  .delete(eatHomeController.remove);
//
//module.exports = router;


module.exports = function(app) {
 
    const restaurants = require('../../controllers/eatHomeController.js');
 
    // Create a new Book
    app.post('/api/restaurants/create', restaurants.create);
 
    // Retrieve all Books
    app.get('/api/restaurants', restaurants.findAll);
 
    // Retrieve a single Book by Id
    app.get('/api/books/:bookId', books.findById);
	 
    // Update a Book with Id
    app.put('/api/books/:bookId', books.update);
 
    // Delete a Book with Id
    app.delete('/api/books/:bookId', books.delete);
}
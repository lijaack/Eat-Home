import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  signUp: function(newuser) {
    console.log("hello")
    return axios.post("/signup", newuser, function() {
  })
  }
};

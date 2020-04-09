import axios from "axios";

export default {
  // Gets all todos
  getTodos: function() {
    return axios.get("/api/todos/");
  },
  // Gets the todo with the given id
  getTodo: function(id) {
    return axios.get("/api/todos/" + id);
  },
  // Saves a todo to the database
  saveTodo: function(todoData) {
    return axios.post("/api/todos", todoData);
  },
  updateTodo: function(todoData) {
    return axios.put("/api/todos/" + todoData._id, todoData);
  },
  // register a user
  register: function(userInput) {
    return axios.post("/api/user", {
      username: userInput.email,
      password: userInput.password
    });
  },
  // login a user
  login: function(userInput) {
    return axios.post("/api/user/login", {
      username: userInput.email,
      password: userInput.password
    });
  },
  // logout a user
  logout: function() {
    return axios.post("/api/user/logout");
  },
  // see if user is logged in
  status: function() {
    return axios.get('/api/user')
  }
};

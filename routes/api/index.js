const router = require("express").Router();
const todosRoutes = require("./todos");
const userRoutes = require("./user");

// Todos routes, now we're at /api/todos
router.use("/todos", todosRoutes);

// user routes
router.use("/user", userRoutes);

module.exports = router;

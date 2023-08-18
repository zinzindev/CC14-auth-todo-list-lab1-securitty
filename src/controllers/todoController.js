const { Todo } = require('../models');

exports.createTodo = async (req, res, next) => {
	try {
		const { title, completed } = req.body;

		const todo = await Todo.create({ title, completed, userId: req.user.id });
		res.status(201).json({ todo });
	} catch (error) {
		next(error);
	  }
};
exports.getAllTodo = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};
exports.getTodoById = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};
exports.updateTodo = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};
exports.deleteTodo = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};

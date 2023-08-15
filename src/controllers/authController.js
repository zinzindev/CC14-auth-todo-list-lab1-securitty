const bcrypt = require('bcryptjs');

const {User} = require('../models')

exports.register = async (req, res, next) => {
	try {
		const { username, email, password, confirmPassword } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({
				message: 'password and confirm password did not match',
			});
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		await User.create({ username, email, password: hashedPassword });

		res.status(201).json({ message: 'user created' });
	} catch (error) {
		next(error);
	}
};

exports.login = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};

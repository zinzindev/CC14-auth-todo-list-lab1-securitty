module.exports = (req, res, next) => {
	res.status(404).json({ message: 'resourse not found on this server' });
};

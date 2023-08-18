const jwt = require('jsonwebtoken');

const { User } = require('../models');

module.exports = async (req, res, next) => {
	try {
		const authorization = req.headers.authorization;

		if (!authorization || !authorization.startsWith('Bearer')) {
			return res
				.status(401)
				.json({ message: 'you are not unauthorized' });
		}

		const token = authorization.split(' ')[1];
		if (!token) {
			return res
				.status(401)
				.json({ message: 'you are not unauthorized' });
		}

		const payload = jwt.verify(token, 'datascience');

		const user = await User.findOne({ where: { id: payload.id } });
		if (!user) {
			return res
				.status(401)
				.json({ message: 'you are not unauthorized' });
		}

		// req.aaaaaaa = user;  //ใน middleware จะใช้ req ร่วมกัน เราสามารถ modify เพื่อส่งค่าข้าม middleware ไปใน req object ได้
		req.user = user;

		next();
	} catch (error) {
		next(error);
	}
};

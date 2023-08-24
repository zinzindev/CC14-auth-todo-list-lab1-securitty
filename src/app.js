// Fontend = CC14-react-secondary-todo-list  -> on github

require('dotenv').config();

const cors = require('cors');
const express = require('express');

// const { sequelize } = require('./models'); // sync เสร็จแล้วลบ(comment)ออก
// sequelize.sync({ alter: true }); // sync เสร็จแล้วลบ(comment)ออก

const authRoute = require('./routes/authRoute');
const todoRoute = require('./routes/todoRoute');

const authenticateMiddleware = require('./middlewares/authenticate');
const errorMiddleware = require('./middlewares/error');
const notFoundMiddleware = require('./middlewares/notFound');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute);
app.use('/todos', authenticateMiddleware, todoRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

// process.env = { PORT: '8007' };
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port: ${port}`));

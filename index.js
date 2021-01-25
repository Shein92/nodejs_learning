const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const exphb = require('express-handlebars');
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');
const cardRoutes = require('./routes/card');
const User = require('./models/user');

const app = express();

const hbs = exphb.create({
	defaultLayout: 'main',
	extname: 'hbs',
	handlebars: allowInsecurePrototypeAccess(Handlebars)
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(async (req, res, next) => {
	try {
		const user = await User.findById('6009972b2a9abc263485e401');
		req.user = user;
		next()
	} catch (e) {
		console.log(e);
	}
})

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))
app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);
app.use('/card', cardRoutes);

// app.get('/', (req, res) => {
// res.status(200);
// // res.sendFile(path.join(__dirname, 'views', 'index.html'));
// res.render('index', {
// 	title: 'Main page',
// 	isHome: true,
// });
// });

// app.get('/courses', (req, res) => {
// 	res.status(200);
// 	// res.sendFile(path.join(__dirname, 'views', 'about.html'));
// 	res.render('courses', {
// 		title: 'Courses',
// 		isCourses: true
// 	});
// });

// app.get('/add', (req, res) => {
// 	res.status(200);
// 	res.render('add', {
// 		title: 'Add course',
// 		isAdd: true
// 	});
// })

const PORT = process.env.PORT || 3000;

async function start() {

	try {
		const url = 'mongodb+srv://Shein92:Locard1992@cluster0.1otci.mongodb.net/shop';
		//<dbname>?retryWrites=true&w=majority

		await mongoose.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});

		const candidate = await User.findOne();

		if (!candidate) {
			const user = new User({
				email: 'vasyl@ukr.net',
				name: 'Vasyl',
				cart: { items: [] }
			});

			await user.save();
		}

		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
}

start();

const pass = "Locard1992";
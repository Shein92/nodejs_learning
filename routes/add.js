const { Router } = require('express');
const Course = require('../models/course');
const router = Router();

router.get('/', (req, res) => {
	res.status(200);
	res.render('add', {
		title: 'Add course',
		isAdd: true
	});
});

router.post('/', async (req, res) => {
	// console.log(req.body);
	// const course = new Course(req.body.title, req.body.price, req.body.img);
	const course = new Course({
		title: req.body.title,
		price: req.body.price,
		img: req.body.img,
		userId: req.user
	});

	try {
		await course.save();
		res.redirect('/courses');
	} catch (e) {
		console.log(e);
	}
	// course.save().then(res => console.log(res)).catch(err => console.log(err))
})

module.exports = router;
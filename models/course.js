const {Schema, model} = require('mongoose');

const course = new Schema({
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	img: String, 
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});



module.exports = model('Course', course);
// const uuid = require('uuid');
// const fs = require('fs');
// const path = require('path');

// class Course {
// 	constructor(title, price, img) {
// 		this.title = title;
// 		this.price = price;
// 		this.img = img;
// 		this.id = uuid.v1();
// 	}

// 	// save() {
// 	// 	const courses = Course.getAll();

// 	// 	courses.then(res => console.log('Courses ', res)).catch(err => console.log(err));
// 	// }

// 	toJSON() {
// 		return {
// 			title: this.title,
// 			price: this.price,
// 			img: this.img,
// 			id: this.id
// 		}
// 	}

// 	async save() {
// 		const courses = await Course.getAll();
// 		courses.push(this.toJSON());

// 		return new Promise((res, rej) => {
// 			fs.writeFile(path.join(__dirname, '..', 'data', 'courses.json'), JSON.stringify(courses), (err) => {
// 				if(err) {
// 					rej(err)
// 				} else {
// 					res(courses)
// 				}
// 			})
// 		})

// 		// console.log('Courses ', courses);
// 	}

// 	static async update(course) {
// 		const courses = await Course.getAll();

// 		// courses.map(c => c.id === course ? {...c, title = course.title, price = course.price, img = course.img} : c );
// 		const idx = courses.findIndex(c => c.id === course.id);
// 		courses[idx] = course;

// 		return new Promise((res, rej) => {
// 			fs.writeFile(path.join(__dirname, '..', 'data', 'courses.json'), JSON.stringify(courses), (err) => {
// 				if(err) {
// 					rej(err)
// 				} else {
// 					res();
// 				}
// 			})
// 		})
// 	}

// 	static getAll() {
// 		return new Promise((res, rej) => {
// 			fs.readFile(path.join(__dirname, '..', 'data', 'courses.json'),'utf-8', (err, content) => {
// 					if (err) {
// 						rej(err);
// 					} else {
// 						res(JSON.parse(content));
// 					}
// 				}
// 			)
// 		})
// 	}

// 	static async getByID(id) {

// 		const courses = await Course.getAll();
// 		return courses.find(course => course.id === id);
// 		}
// }

// module.exports = Course;
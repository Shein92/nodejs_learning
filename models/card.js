// const path = require('path');
// const fs = require('fs');

// // const p = path.join(path.dirname(process.mainModule.filename), 'data', 'card.json');
// const p = path.join(path.dirname(require.main.filename), 'data', 'card.json');


// class Card {
// 	constructor() {

// 	}

// 	static async add(course) {
// 		const card = await Card.fetch();

// 		const idx = card.courses.findIndex(c => c.id === course.id);
// 		const candidate = card.courses[idx];
		
// 		if(candidate) {
// 			//course already exists
// 			candidate.count++;
// 			card.courses[idx] = candidate;
// 		} else {
// 			//need add a course
// 			course.count = 1;
// 			card.courses.push(course)
// 		}

// 		card.price += +course.price;

// 		return new Promise((res, rej) => {
// 			fs.writeFile(p, JSON.stringify(card), (err) => {
// 				if(err) {
// 					rej(err);
// 				} else {
// 					res();
// 				}
// 			})
// 		})
//     }

// 	static async fetch() {
// 		return new Promise((res, rej) => {
// 			fs.readFile(p, 'utf-8', (err, content) => {
// 				if (err) {
// 					rej(err)
// 				} else {
// 					res(JSON.parse(content));
// 				}
// 			})
// 		})
// 	}

// 	static async remove(id) {
// 		const card = await Card.fetch();

// 		const idx = card.courses.findIndex(c => c.id === id);
// 		const course = card.courses[idx];

// 		if(course.count === 1) {
// 			//delete
// 			card.courses = card.courses.filter(c => c.id !== id);
// 		} else {
// 			//change quantity
// 			card.courses[idx].count--
// 		}

// 		card.price -= +course.price;

// 		return new Promise((res, rej) => {
// 			fs.writeFile(p, JSON.stringify(card), (err) => {
// 				if(err) {
// 					rej(err)
// 				} else {
// 					res(card)
// 				}
// 			})
// 		})
// 	}
// };

// module.exports = Card;
const { Schema, model } = require('mongoose');

const user = new Schema({
	email: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	cart: {
		items: [
			{
				count: {
					type: Number,
					required: true,
					default: 1
				},
				courseId: {
					type: Schema.Types.ObjectId,
					ref: 'Course',
					required: true,
				}
			}
		]
	}
});

user.methods.addToCart = function (course) {
	const clonedItems = [...this.cart.items];
	const idx = clonedItems.findIndex(c => {
		return c.courseId.toString() === course._id.toString();
	});

	if(idx >= 0) {
		clonedItems[idx].count = clonedItems[idx].count + 1;
	} else {
		clonedItems.push({
			courseId: course._id,
			count: 1
		})
	}

	// const newCart = {item: clonedItems};
	// this.cart = newCart
	this.cart = {items: clonedItems}

	return this.save();
}

module.exports = model('User', user);
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

// const FollowerSchema = new mongoose.Schema(
// 	{
// 		userID: {
// 			type: String
// 		}
// 	},	
// 	{ timestamps: true }
// );

const RequestSchema = new mongoose.Schema(
	{
		comments: {
			type: String
		},
		follow_request: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
);

const ResourceSchema = new mongoose.Schema(
	{
		categories: {
			type: String,
			enum: ["housing", "food", "other"],
		}
		,
		userID: {
			type: String
		},
		title: {
			type: String,
			required: [true, 'title is required']
		},
		description: {
			type: String,
			required: [true, 'description is required']
		}
		,
		location: {
			type: String,
			required: [true, "location is required"]
		},
		food_quanity: {
			type: Number
		}
		,
		housing_quantity: {
			type: Number
		},
		otherName: {
			type: String,
			// required: [true, "Name is required"],
			minlength: [3, "Name must be 8 characters or longer"]
		},
		otherQuantity: {
			type: Number
		}
	},
	{ timestamps: true }
)

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, "First name is required"]
		},
		lastName: {
			type: String,
			required: [true, "Last name is required"]
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
			message: "Please enter a valid email"
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [8, "Password must be 8 characters or longer"]
		},
		// followers: [FollowerSchema],
		followers: {
			type: Array,
		},
		userPosts: [ResourceSchema],
		resource_request: [RequestSchema]
	},
	{ timestamps: true }
);


UserSchema.virtual('confirmPassword')
	.get(() => this._confirmPassword)
	.set(value => this._confirmPassword = value);
//Creates a virtual field called confirmPassword that is used to validate the password matches confirm --> Getter and setter are creating temporary fields for cP

//pre is saving the user to db, validate the user object password matches. if they dont match, this.invalidate() will create a valid error message
UserSchema.pre('validate', function (next) {
	if (this.password !== this.confirmPassword) {
		this.invalidate('confirmPassword', 'Password must match confirm password');
	}
	next();//after this is done go to the next step
});

//Hashes password before saving it to the db
UserSchema.pre('save', function (next) {
	bcrypt.hash(this.password, 10)
		.then(hash => {
			this.password = hash;
			next();
		});
});


const User = mongoose.model("user", UserSchema);

module.exports = User;
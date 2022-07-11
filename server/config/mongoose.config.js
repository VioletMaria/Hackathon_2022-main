const mongoose = require("mongoose");

const wintersdebug = '127.0.0.1'

mongoose.connect("mongodb://" + wintersdebug + "/hackathon_2022", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));
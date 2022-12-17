const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
        "company": String,
		"postedAt": String,
		"city": String,
		"location": String,
		"role": String,
		"level": String,
		"contract": String,
		"position": String,
		"language": String
});

const jobModel = new mongoose.model("job",jobSchema);

module.exports = jobModel;
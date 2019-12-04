const express = require('express');
const app = express();

// Joi package for json validations
const Joi = require('joi');


//Used for POST json body req or response
//Calling app.use method to help json
//body processing, this actually returns a middleware
//to process req and res body json
app.use(express.json());

const courses = [
    { id: 1, name: "aaa", cost: 100 },
    { id: 2, name: "bbb", cost: 200 },
    { id: 3, name: "ccc", cost: 300 },
    { id: 4, name: "ddd", cost: 400 },
];

// Update a course using HTTP PUT
app.put('/api/courses/:id', (req, res) => {

    // Fetch course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    // If course dont exist throw 404
    if (!course) res.status(404).send('This course is not found..Please check Id again');

    //Create a Schema
    const schema = {
        name: Joi.string().min(3).required()
    };

    // Validate request with schema created
    const result = Joi.validate(req.body, schema);

    // Throw error
    if (result.error) {
        res.status(400).send(result.error.details[0].message); // Gives only 1st Param
        return;
    }

    // Update course info
    course.name = req.body.name;
    res.send(course);
});

 // Moving validation code as seperate function
app.put('/api/courses/optimisedUpdate/:id', (req, res) => {

    //Using object parameterisation
    const { error } = validateCourseReqBody(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    //Fetch course
    const course = courses.find(c => c.id === parseInt(req.params.id));

    // Update course info
    course.name = req.body.name;
    res.send(course);
});

//Function to generalise validate method
function validateCourseReqBody(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    //return result = Joi.validate(course, schema);
    return Joi.validate(course, schema);
}

// Pick value of Port as ENV VAR if configured
// else use 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.......`);
});
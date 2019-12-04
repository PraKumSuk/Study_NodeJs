const express = require('express');
const app = express();

// Joi module for JSON Validations
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

// Add Course
app.post('/api/courses/add', (req, res) => {

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});


// Add Course with basic validation for request param
app.post('/api/courses/addValidOnly', (req, res) => {

    if (!req.body.name || req.body.name.length < 3) {
        // 400 bad request
        res.status(400).send('Name is required and should be atleast 3 characters');
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.post('/api/courses/addJoiValidOnly', (req, res) => {

    //Create a Schema for Request Body Json
    const schema = {
        name: Joi.string().min(3).required()
    };

    //Validate request body
    const result = Joi.validate(req.body, schema);

    //console.log(result);
    if (result.error) {
        //res.status(400).send(result.error); //to get detailed error i.e. all params by default
        res.status(400).send(result.error.details[0].message); // Gives only 1st Param
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

// Pick value of Port as ENV VAR if configured
// else use 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.......`);
});
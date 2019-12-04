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

// Test Service
app.get('/', (req, res) => {
    res.send('Hello Welcome to SPKs RESTful API Service Node JS App with Express library');
});

// Courses Service
app.get('/api/courses', (req, res) => {
    res.send([111, 222, 333]);
});

// Courses Service with Request Param
app.get('/api/courses/:id', (req, res) => {
    console.log(`Value received in request is ${req.params.id}`);
    //res.send(req.params.id); //to get course id

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('This course is not found..Please check Id again');
    res.send(course);
});

// Courses Service with Request Query Param
// i.e. ?name=something&gender=male
app.get('/api/date/:day/:month/:year', (req, res) => {
    console.log(`Value received in request is ${req.params.day}`);
    res.send(req.params); //prints all
});

// Courses Service with Request Query Param
// i.e. ?name=something&gender=male
app.get('/api/others', (req, res) => {
    console.log(`Value received in request is ${req.query}`);
    res.send(req.query); //prints all
});

//Some HTTP POST Services Now
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

// Update a course using HTTP PUT
app.put('/api/courses/:id', (req, res) => {

    //Check if course exist else return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('This course is not found..Please check Id again');

    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message); // Gives only 1st Param
        return;
    }

    // Update course info
    course.name = req.body.name;
    res.send(course);
});

// Removing duplicate code for validations
//using object restructing
app.put('/api/courses/optimisedUpdate/:id', (req, res) => {

    //here {error} refers to req.body.error
    //i.e. picks specific param value from object
    //validate and get error param only
    const { error } = validateCourseReqBody(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    return;
    }

    const course = courses.find(c => c.id === parseInt(req.params.id));

    // Update course info
    course.name = req.body.name;
    res.send(course);
});

// Delete Service
app.delete('/api/courses/delete/:id', (req, res) => {

    console.log('request received...........');
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('This course is not found..Please check Id again');

    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);
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
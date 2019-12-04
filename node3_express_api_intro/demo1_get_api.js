const express = require('express');
const app = express();

// Setting up some courses data
const courses = [
    { id: 1, name: "aaa", cost: 100 },
    { id: 2, name: "bbb", cost: 200 },
    { id: 3, name: "ccc", cost: 300 },
    { id: 4, name: "ddd", cost: 400 },
];

// Health Check or a test Service
app.get('/', (req, res) => {
    res.send('Hello Welcome to SPKs RESTful API Service Node JS App with Express library');
});

// Get all Courses Service
app.get('/api/courses', (req, res) => {
    res.send([111, 222, 333]);
});

// Get Course By Course Id as a Request Param
app.get('/api/courses/:id', (req, res) => {

    console.log(`Value received in request is ${req.params.id}`);
    //res.send(req.params.id); //to get course id

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('This course is not found..Please check Id again');
    res.send(course);
});

// Demo Date Service with Request Query Param
app.get('/api/date/:day/:month/:year', (req, res) => {

    console.log(`Value received in request is ${req.params.day}`);
    res.send(req.params); //returns all
});

// Courses Service with Request Query Param
// i.e. ?name=something&gender=male
app.get('/api/others', (req, res) => {

    console.log(`Value received in request is ${req.query}`);
    res.send(req.query); //prints all
});

// Set Port value from ENV VAR else
// use this
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.......`);
});
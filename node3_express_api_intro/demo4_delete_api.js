const express = require('express');
const app = express();

// Joi package for json validations
const Joi = require('joi');

const courses = [
    { id: 1, name: "aaa", cost: 100 },
    { id: 2, name: "bbb", cost: 200 },
    { id: 3, name: "ccc", cost: 300 },
    { id: 4, name: "ddd", cost: 400 },
];

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

// Pick value of Port as ENV VAR if configured
// else use 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.......`);
});
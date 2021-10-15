const express = require('express');
const app = express();

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Listening on port ${port}...`, ));

//READ ALL the donuts in the donuts_db
app.get('/donuts', (req, res) => {
    res.send(['Donut_1', 'Donut_2', 'Donut_3', 'Donute_Number']);
})
//READ ONE of the donuts in the donuts_db
app.get('/donuts/:id', (req, res) => {
    res.send('Donut by ID');
})

//CREATE new data on the donuts_db 
app.post('/donuts', (req, res) => {
    res.send('Success Message (add new donut to db)');
})


//UPDATE donuts_db by ID
app.patch('/donuts/:id', (req, res) => {
    res.send('Success Message (update existing donut)');
})


//DELETE a portion of the donuts_db by ID
app.delete('/donuts/:id', (req, res) => {
    res.send('Success Message (delete existing donut)');
})


const express = require('express');
const app = express();

const myNumbers = [
{ id: 1, name: 'one' },
{ id: 2, name: 'Two' },
{ id: 3,  name: 'Three' }
]

app.get('/', (req, res) => {
  res.send('I am in the game!');
});

 app.get('/api/number/:id', (req, res) => {
    const numId = myNumbers.find( c => c.id === parseInt(req.params.id));

    if(!numId) res.status(404).send('A wrong one!');

    res.send(numId);
 })

const port = process.env.PORT || 3000;

let server = app.listen(port, () => {
	console.log(`Connected on port ${port}`);
});

module.exports = server;

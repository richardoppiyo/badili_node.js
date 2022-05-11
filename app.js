const express = require('express');
const app = express();

const lookup = 
{ 5: "L", 7: 'R', 57:'LR' }


app.get('/', (req, res) => {
  res.send('I am in the game!');
});

 app.get('/api/number/:id(\\d+)', (req, res) => {

    let { id } = req.params;
    const mod5 = 5, mod7 = 7;

        if((+id % mod5 === 0) && ( +id % mod7 === 0)) {
          res.send({
            value: lookup[57]
          })
          id = lookup[57];
        } else if(+id % mod5 === 0) {
          res.send({
            value: lookup[mod5]
          })
          id = lookup[mod5];
        } else if (+id % mod7 === 0) {
          res.send({
            value: lookup[mod7]
          })
          id = lookup[mod7];
        }

        res.send({
            value: id
        })
        res.send({
            value: id
        })
 })

const port = process.env.PORT || 3000;

let server = app.listen(port, () => {
	console.log(`Connected on port ${port}`);
});

module.exports = server;

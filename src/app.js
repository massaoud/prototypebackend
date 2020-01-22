import express from 'express';
/*import dotenv from 'dotenv';*/

require ('dotenv').config();


const app = express();


const port = process.env.PORT;   


app.get('/', (req, res) => {
    res.json({
        msg: 'ok welcome'
    })

});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

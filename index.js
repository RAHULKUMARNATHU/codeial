// require  libraries
const express = require('express');
const app = express();
const port = 8000;

//listening here

app.listen(port ,function(err){
    if(err){
        // console.log('Error',err);
        console.log(`Error in running the server:${err}`);

    }
    console.log(`Server is running on the port: ${port}`);

});
module.exports.home = function(req , res){

    console.log(req.cookies)
    res.cookie("user_id",11)
    return res.render('home' , {
        title :"Home"
    });
    
    // return res.end('<h1>Express is up for Codeial!! </h1>')
}


// module.exports.profile = function(req ,res){
//     // res.end('<h1>User Profile </h1>');

//     return res.render('./user_profile' , {
//         title :"User_Profile"
//     });
// }

// render profile page 
module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title : 'User Profile'
    });
}

// render sign up page
module.exports.signUp = function(req , res){
    return res.render('user_sign_up' , {
    title : 'Codial | Sign Up'
    });

}

// render sign in page
module.exports.signIn = function(req , res){
    return res.render('user_sign_in' , {
        title: 'Codial | Sign In'
    });

}



//get sing up data
module.exports.create =function(req ,res){
//TODO later

}

// sign in and create a session for the user
module.exports.createSession = function(req ,res){
    // TODO later
}
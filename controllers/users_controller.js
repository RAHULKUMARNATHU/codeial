// module.exports.profile = function(req ,res){
//     // res.end('<h1>User Profile </h1>');

//     return res.render('./user_profile' , {
//         title :"User_Profile"
//     });
// }
module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title : 'User Profile'
    });
}


module.exports.signUp = function(req , res){
    return res.render('user_sign_up' , {
    title : 'Codial | Sign Up'
    });
    
}


module.exports.signIn = function(req , res){
    return res.render('user_sign_in' , {
        title: 'Codial | Sign In'
    });

}
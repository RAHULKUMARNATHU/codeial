// module.exports.profile = function(req ,res){
//     // res.end('<h1>User Profile </h1>');

//     return res.render('./user_profile' , {
//         title :"User_Profile"
//     });
// }
module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title : 'User Profile'
    })
}
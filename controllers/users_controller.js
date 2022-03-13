
const User = require('../models/user');

// let's keep it same as before 

module.exports.profile = function(req, res){
   
    User.findById(req.params.id , function(err , user ){
        return res.render('user_profile', {
            title : 'User Profile',
            profile_user:user
        });
    });
    
}


// module.exports.update =function(req ,res){
//     if(req.user.id == req.params.id){
//         User.findByIdAndUpdate(req.params.id , req.body , function(err , user){
//             return res.redirect('back');
//         });
//     }else{
//         return res.status(401).send('Unauthorized');
//     }
// }

module.exports.update = async function(req ,res){
        if(req.user.id == req.params.id){
            try{
                
                let user = await User.findById(req.params.id);
                User.uploadedAvatar(req , res , function(err){
                    if(err){
                        console.log('****Multer Error',err)
                    }
                    // console.log(req.file);
                    
                    user.name = req.body.name;
                    user.email = req.body.email;

                    if(req.file){
                        // this is saving the path of the uploaded file into the avatar field int he user
                        user.avatar = User.avatarPath + '/' + req.file.filename 
                    }
                    user.save();
                    return res.redirect('back');
               
                });

            }catch(err){
                req.flash('error' , err);
                return res.redirect('back');
            }



        }else{
            req.flash('error','unauthorized')
            return res.status(401).send('Unauthorized');
            }



}

// render sign up page
module.exports.signUp = function(req , res){
   
    if(req.isAuthenticated()){
      return   res.redirect('/users/profile');
    }
   
    return res.render('user_sign_up' , {
    title : 'Codial | Sign Up'
    });

}

// render sign in page
module.exports.signIn = function(req , res){
   
   if(req.isAuthenticated()){
      return  res.redirect('/users/profile');
   }
    return res.render('user_sign_in' , {
    title: 'Codial | Sign In'
    });

}



//get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}



// sign in and create a session for the user
module.exports.createSession = function(req,res){
    req.flash('success','Logged in Successfully');
    return res.redirect('/');
}

// Sign out 
module.exports.destroySession = function(req , res){
    req.logout();
    req.flash('success' , 'You have logged out !');
    return res.redirect('/')
}
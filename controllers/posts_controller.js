const Post = require("../models/post");
const Comment = require('../models/comment');


module.exports.create = async function(req , res){
    
    
    try{
        let post = await Post.create({
            content : req.body.content,
            user : req.user._id
        });
        
        post=await post.populate('user')

        if(req.xhr){
            return res.status(200).json({
                data:{
                    post:post
                },
                message:"Post created!"
            })
        }


        req.flash('success','Post published!');
        return res.redirect('back');

    }catch(err){
        req.flash('error', err);
        return res.redirect('back');
    } 
}



module.exports.destroy = async function(req , res){
   
   try{
       
        let post = await Post.findById(req.params.id );
        // .id means converting the object id into string
        if(post.user == req.user.id){
        let postId = post._id
            post.remove();

            await Comment.deleteMany({post: req.params.id} )

            if (req.xhr) {
                return res.status(200).json({
                    data: {
                        postId: postId,
                    },
                    message: "Post and Associated Comments deleted successfully",
                });
            }
            
                req.flash('success','Post and associated comments deleted');
                return res.redirect('back');

            
        }else{
            req.flash('error','You can not delete this post!');
            return res.redirect('back');
        }


    }catch(err){
        req.flash('Error' , err);
        return res.redirect('back');
    }

}

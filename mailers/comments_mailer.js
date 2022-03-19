const nodeMailer = require('../config/nodemailer');

// This is another way of exporting a method 
exports.newComment = (comment) => {
    // console.log('inside newComment mailer');
    let htmlString = nodeMailer.renderTemplate({comment:comment.comment} , '/comments/new_comment.ejs');

    nodeMailer.transporter.sendMail({
        from : 'rahulkumars9572@gmail.com',
        to :comment.userDet.user.email,
        subject:"New Comment Published !",
        html : htmlString
},(err ,info) => {
    if (err){
    console.log('Error in Sending mail',err)
    return;
    }
    console.log('Message Sent' , info);
    return;

    });
}
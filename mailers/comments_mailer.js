const nodeMailer = require('../config/nodemailer');

// This is another way of exporting a method 
exports.newComment = (comment) => {
    console.log('inside newComment mailer');
    

    nodeMailer.transporter.sendMail({
        from : 'rahulkumars9572@gmail.com',
        to :comment.userDet.user.email,
        subject:"New Comment Published !",
        html : '<h1>Yup ,Your Comment is Now Published!!</h1>'
},(err ,info) => {
    if (err){
    console.log('Error in Sending mail',err)
    return;
    }
    console.log('Message Sent' , info);
    return;

    });
}
const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');
console.log("rotating-file-system",rfs)
// Logging for production
const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: logDirectory
});



const development = {
    name: 'development',
    // assests file scss to css :: index.js
    asset_path :'/assets',
    // secretkey :: index.js
    session_cookie_key : 'blahSomething',
    // database :: mongoose.js
    db:'codieal_development',
    // nodemailer
    smtp:{
        service:'gmail',
        host : 'smtp.gmail.com',
        port :587,
        secure:false,
        auth:{
            user:'rahulvaidya148@gmail.com',
            pass:'7669Shiva@'
        }
    },
    // passport-google-auth
    google_client_id:"720989164459-uaqjfsbti2akcfohdtbmitjjcib4rue2.apps.googleusercontent.com",
    google_client_secret:"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",
    google_callback_url:"http://localhost:8000/users/auth/google/callback",
    // passport-jwt
    jwt_secret:'codeial',
    
    // Logging for production
    morgan: {
        mode: 'dev',
        options: {stream: accessLogStream}
    }


}

// mongodb+srv://kumarrahul9572:7669Shiva@@cluster0.tmye6.mongodb.net/?retryWrites=true&w=majority

const production = {
    name: 'production',
    // assests file scss to css :: index.js
    asset_path : process.env.CODEIAL_ASSET_PATH,
    // secretkey :: index.js
    session_cookie_key : process.env.CODEIAL_SESSION_COOKIE_KEY,
    // database :: mongoose.js
    db : process.env.CODEIAL_DB,
    // nodemailer
    smtp:{
        service:'gmail',
        host : 'smtp.gmail.com',
        port :587,
        secure:false,
        auth:{
            user:process.env.CODEIAL_GMAIL_USERNAME,
            pass:process.env.CODEIAL_GMAIL_PASSWORD
        }
    },
    // passport-google-auth
    google_client_id: process.env.CODEIAL_GOOGLE_CLIENT_ID,
    google_client_secret:process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
    google_callback_url:process.env.CODEIAL_GOOGLE_CLIENT_URL,
    // passport-jwt
    jwt_secret:process.env.CODEIAL_JWT_SECRET,
   
    // Logging for production
    morgan: {
        mode: 'combined',
        options: {stream: accessLogStream}
    }

}





module.exports = eval(process.env.CODEIAL_ENVIRONMENT) == undefined ? development : eval(process.env.CODEIAL_ENVIRONMENT);

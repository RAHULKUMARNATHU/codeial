
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
    



}

const production = {
    name: 'production'
}




module.exports = development;

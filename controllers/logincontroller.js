module.exports.loginGet = (req,res)=>{
    pageMessage = {
        title: 'Login',
        layout: 'loginlayout.hbs'
    }
    res.render('login',pageMessage);
}
module.exports.loginPost = (req,res)=>{
    pageMessage = {
        title: 'Login',
        layout: 'loginlayout.hbs'
    }
    res.render('login',pageMessage);
}

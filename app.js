const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoConnection = require('./dao/mongodao');
const loginRouter = require('./routers/loginrouter');
const PORT = 28003;

const app = express();

app.engine('hbs', exphbs({extname:'hbs',defaultLayout:'main.hbs'}));
//app.engine('hbs', exphbs({extname:'hbs', defaultLayout:'layout.hbs'}));

app.set('view engine', 'hbs');
app.set('uygulamaAdi','tigem');

app.use('/public',express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use('/login',loginRouter);
app.use('/',loginRouter);

app.post('/login',(req,res)=>{
    //active drectory de kullanicı var ise
    //
    //9
    console.log(req.body.kullaniciadi);
    console.log(req.body.txtPassword);

    if(req.body.kullaniciadi =='asdf'){
        //session tanımlaması yapılacak.
        res.render('home');
    }else{

    let message={};
    message.title='login';
    message.layout='loginlayout.hbs';
    message.pageMessage=`kullanıcı adı veya parola hatalı !!!`;
    res.render('login',message);
}
});

// router.get('/', function(req, res) {
//     res.render('home', {layout: 'viewBLayout.hbs'});
// });

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`);
});

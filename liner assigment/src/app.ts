import cors from 'cors';
import express from 'express';
import models from './database';
import cookieParser from 'cookie-parser';
import { crud, sign } from './routes/index.route';
import session from 'express-session';
import morgan from 'morgan';

require('dotenv').config();


const app:express.Application = express();

app.set('port', process.env.PORT || 8080);

models.sequelize.sync().then(()=>{
    console.log("DB 연결 성공");
}).catch(err => {
    console.log("DB 연결 실패");
    console.log(err);
})


if(process.env.PORT){
  app.use(morgan('combined'));
  app.use(cors({
      origin : /liner\.com$/,
      credentials : true
  }));  
}else{
    app.use(morgan('dev'));
    app.use(cors({
        origin : true,
        credentials : true
    }));
}

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(
    session({
        secret : process.env.SESSION_SECRET,
        resave : false,
        cookie : {
            path : '/',
            sameSite : 'none',
            domain : process.env.PORT ? '.liner.com' : undefined,
            secure : false, // https => true
            httpOnly : true,
            maxAge : 60000 * 60,
        }
    })
)

app.use('/crud', crud);
app.use('/sign', sign);

app.listen(app.get('port'), ()=> {
    console.log('Success')
})
import cors from 'cors';
import express from 'express';
import models from './database';
import cookieParser from 'cookie-parser';
import { crud, sign } from './routes/index.route';
import session from 'express-session';
import morgan from 'morgan';
import DB from './database'
import { resign } from './controllers/sign/index.controller';

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

app.get('/insertData', async (req, res)=>{
    const {themes} = DB
    const insertData = await themes.bulkCreate([
        {colorNumber : 1, colorHex : "#ffff8d", themeId : 1},
        {colorNumber : 2, colorHex : "#a5f2e9", themeId : 1},
        {colorNumber : 3, colorHex : "#ffd5c8", themeId : 1},
        {colorNumber : 1, colorHex : "#f6f0aa", themeId : 2},
        {colorNumber : 2, colorHex : "#d3edd1", themeId : 2},
        {colorNumber : 3, colorHex : "#f9d6c1", themeId : 2},
        {colorNumber : 1, colorHex : "#f4ff40", themeId : 3},
        {colorNumber : 2, colorHex : "#8affd7", themeId : 3},
        {colorNumber : 3, colorHex : "#ffc477", themeId : 3},
    ])
    res.send(insertData);
})

app.listen(app.get('port'), ()=> {
    console.log('Success')
})
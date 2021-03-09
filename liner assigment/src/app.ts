import cors from 'cors';
import express from 'express';
import models from './database';
import cookieParser from 'cookie-parser';
import { crud, sign } from './routes/index.route';
import session from 'express-session';

require('dotenv').config();

const PORT:number = 8080;
const app:express.Application = express();

models.sequelize.sync().then(()=>{
    console.log("DB 연결 성공");
}).catch(err => {
    console.log("DB 연결 실패");
    console.log(err);
})

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use(
    session({
        secret : process.env.SESSION_SECRET,
        resave : false,
        cookie : {
            path : '/',
            sameSite : 'none',
            secure : true,
            httpOnly : true,
            maxAge : 60000 * 60,
        }
    })
)

app.use('/crud', crud);
app.use('/sign', sign);

app.listen(PORT, ()=> {
    console.log('Success')
})
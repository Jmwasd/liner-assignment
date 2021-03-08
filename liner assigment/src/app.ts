import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import models from './database';

const PORT:number = 8080;
const app:express.Application = express();

models.sequelize.sync().then(()=>{
    console.log("DB 연결 성공");
}).catch(err => {
    console.log("DB 연결 실패");
    console.log(err);
})

app.use(express.json());
app.use(cors());

app.listen(PORT, ()=> {
    console.log('Success')
})
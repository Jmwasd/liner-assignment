import DB from '../../database';
import bcrypt from 'bcrypt';
import {expressFn} from '../../types/common.interface';
import { sign } from 'jsonwebtoken'

require('dotenv').config();

const accessKey = process.env.ACCESS_SECRET;
const refreshKey = process.env.REFRESH_SECRET;

const login:expressFn = async(req, res)=>{
    const {users} = DB
    const {email, password} : 
    {email : string, password : string} = req.body;

    const userInfo = await users.findOne({
        where : { email : email},
        raw : true
    })
    const checkPassword:boolean = await bcrypt.compare(password, userInfo.password)

    if(checkPassword){

        const accessToken:string = sign({
            userId : userInfo.userId,
            userName : userInfo.userName,
            email : userInfo.email
        },accessKey, {
            expiresIn : '1h'
        });

        const refreshToken:string = sign({
            userId : userInfo.userId,
        },refreshKey, {
            expiresIn : '3h'
        });

        req.session.save(()=>{
            req.session.token = refreshToken;
        });

        res.status(200)
        .cookie('accessToken', accessToken, {httpOnly : true, secure:true})
        .send({
            userId : userInfo.userId,
            userName : userInfo.userName,
            email : userInfo.email
        });

    }else{
        res.status(400).send('user not exist');
    }
};

export default login;
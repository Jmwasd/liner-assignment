import {expressFn} from '../../types/common.types';
import bcrypt from 'bcrypt';
import DB from '../../database';

const saltRound:number = 10;

const signup: expressFn = async(req, res)=>{
    const {users} = DB
    const {email, userName, password} :
    {email : string, userName : string, password : string} = req.body;

    const checkUser = await users.findOne({where : {email : email}});

    if(!checkUser){
        const hashPassword:string = await bcrypt.hash(password, saltRound);
        
        await users.create({
            email : email, 
            userName : userName, 
            password : hashPassword
        })

        res.status(200).send('200 ok')

    }else{
        res.status(400).send('user exist')
    }
};

export default signup;
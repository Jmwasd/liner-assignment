import DB from '../../database';
import {expressFn} from '../../types/common.types';

const resign: expressFn = async(req, res)=>{
    const {highlights,users,pages} = DB;
    const {userId} = req.body

    await users.destroy({
        where : {id : userId}
    })
    
    await highlights.destroy({
        where : {userId : userId}
    })

    await pages.destroy({
        where : {userId : userId}
    })
};

export default resign;
import {expressFn, highlightType, pageType} from '../../types/common.types';
import DB from '../../database';
import { Op } from 'sequelize';
const {pages, highlights, themes} = DB;

const read: expressFn = async(req, res)=>{
    const {userId, pageId, pageUrl} = req.body;

    const readFn = async (id) =>{
        await highlights.findAll({
            where : {[Op.and]: [
                {userId : userId},
                {pageId : id}
            ]},
            order : [['updatedAt', "ASC"]],
            attributes : {exclude: ['createdAt','updatedAt']}
        }).then((result:Array<highlightType>)=>{
            res.send(result);
        });
    }

    if(!pageId && !pageUrl){
        const allUserInfo = await pages.findAll({
            where : {userId : userId},
            attributes : [["id","pageId"],"pageUrl"],
            order : [['updatedAt', "ASC"]],
            include : [
                {
                    model : highlights,
                    order : [['updatedAt', "ASC"]],
                    attributes : {exclude: ['createdAt','updatedAt']}
                }
            ]
        })
        res.send(allUserInfo);
    } else if(pageId){
        readFn(pageId);
    }else if(!pageId){      
        const findPageId : pageType = await pages.findOne({
            where : {pageUrl : pageUrl}
        })
        readFn(findPageId.id)
    }

    
};

export default read;
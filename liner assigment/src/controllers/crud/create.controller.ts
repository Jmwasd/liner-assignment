import {expressFn, highlightType, userType} from '../../types/common.types';
import DB from '../../database'
import {pageType} from '../../types/common.types'
import { Op } from 'sequelize';
const {pages, highlights} = DB;

const create: expressFn = async(req, res)=>{
    const {userId, pageUrl, colorHex, text} = req.body;

    const pageData:[pageType,boolean] = await pages.findOrCreate({
        where : {
            [Op.and] : [{userId : userId},{pageUrl : pageUrl}]
        },
        defaults : {
            userId : userId,
            pageUrl : pageUrl
        }
    })

    await highlights.create({
        userId : userId,
        pageId : pageData[0].id,
        colorHex : colorHex,
        text : text
    }).then((result)=>{
        return result.get({plain:true})
    }).then(result=>{
        delete result["updatedAt"];
        delete result["createdAt"]
        res.send(result)
    })
    
}

export default create;



import { Op } from 'sequelize';
import DB from '../../database';
import {expressFn, highlightType} from '../../types/common.types';

const deletes: expressFn = async(req, res)=>{
    const {highlights,pages} = DB;
    const {userId , highlightId} = req.body;

    const findHighlightData:highlightType = await highlights.findOne({
        where : {highlightId : highlightId}
    })

    await highlights.destroy({
        where : {[Op.and]: [
            {userId : userId},
            {highlightId : highlightId}
        ]}
    }).then(()=>{
        return highlights.findOne({
            where : {[Op.and]: [
                {userId : userId},
                {pageId : findHighlightData.pageId}
            ]}
        })
    }).then((result : highlightType | undefined)=>{
        if(!result){
            pages.destroy({
                where : {id : findHighlightData.pageId}
            })
        }
        res.send("200 OK");
    })


};

export default deletes;
import DB from '../../database';
import {Op} from 'sequelize'
import {expressFn, highlightType, themeType} from '../../types/common.types';
const {highlights, themes, users} = DB;

const update: expressFn = async(req, res)=>{
    const {themeId, highlightId, userId, colorHex, text} = req.body;

    if(!themeId){

        const findHighlight = await highlights.findOne({
            where : {highlightId : highlightId}
        });
    
        const updateFn = async(text = findHighlight.text, color = findHighlight.colorHex) =>{
            await highlights.update({
                colorHex : color,
                text : text
            },{
                where : {[Op.and]:[{userId : userId}, {highlightId : highlightId}]}
            }).then(()=>{
                return highlights.findOne({
                    where : {highlightId : highlightId},
                    raw : true
                })
            }).then((result:highlightType)=>{
                delete result["updatedAt"];
                delete result["createdAt"];
                res.status(200).send(result);
            })
        };
    
        updateFn(text, colorHex);

    }else{

        const highlightAll:Array<highlightType> = await highlights.findAll({
            where : {userId : userId},
        });
    
        highlightAll.map(async(data:highlightType)=>{
            const findData:themeType =await themes.findOne({where : {colorHex : data.colorHex},raw:true});
            await themes.findOne({
                where : {[Op.and] : [
                    {colorNumber : findData.colorNumber},
                    {themeId : themeId}
                ]}
            }).then((result:themeType)=>{
                highlights.update({
                    colorHex:result.colorHex
                },{
                    where : {highlightId : data.highlightId}
                })
                users.update({
                    themeId : themeId
                },{
                    where : {userId : userId}
                })
            })
        })
    
        res.send("200 OK");

    }

};

export default update;
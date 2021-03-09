import {expressFn} from '../../types/common.interface';
import DB from '../../database'

interface userType {
    userId : number;
    email : string;
    password : string;
    userName : string;
}

interface textType {
    pages_pageId: number;
    text : string;
    highlightId : number;
}

interface pageType {
    pageId: number;
    users_userId : number;
    pageUrl : string;
}

interface colorType {
    pages_highlightId: number;
    colorHex : string;
    theme : number;
}

const create: expressFn = async(req, res)=>{
    const {users,pages,colors,texts} = DB;
    const {userId, pageUrl, colorHex, text} = req.body;

    //없는 컬러를 주게 됬을 경우에 요청 color로 color테이블에서 찾고 없으면
    //401 에러 응답 있으면 200 응답

    //그러나 라이너를 사용해본 결과 사용자가 컬러를 정해진 범위 내에서만 선택할 수 있기 때문에
    //무조건  color테이블에 있는 값만 요청값으로 올 것으로 가정했다.
    const findUser: userType = await users.findOne({
        where: {userId : userId},
        raw:true
    });

    const createPageUrl: pageType = await pages.create({
        pageUrl: pageUrl, 
        users_userId: findUser.userId
    }).then(result =>{
        return result.get({plain:true})
    });

    const createColor: colorType = await colors.create({
        colorHex: colorHex,
    });

    const createText: textType = await texts.create({
        text: text, 
        pages_pageId: createPageUrl.pageId
    })

    

}

export default create;
import {Sequelize, Model, DataTypes} from 'sequelize';

export class texts extends Model{
    public pages_pageId: number;
    public text : string;
    public highlightId : number;
}

export default function (sequelize: Sequelize) : typeof texts {
    texts.init(
        {
            pages_pageId : {
                type : DataTypes.INTEGER
            },
            text : {
                type : DataTypes.STRING
            },
            highlightId : {
                type : DataTypes.INTEGER
            },
        },
        {
            timestamps : false,
            tableName: 'texts',
            sequelize,
        },
    )

    return texts;
}
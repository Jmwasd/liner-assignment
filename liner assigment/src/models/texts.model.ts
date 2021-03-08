import {Sequelize, Model, DataTypes} from 'sequelize';
import { colors } from './colors.model';

export class texts extends Model{
    public pages_pageId: number;
    public text : string;
    public highlightId : number;

    public readonly createdAt !: Date;
    public readonly updatedAt !: Date;
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
            tableName: 'texts',
            sequelize,
        },
    )

    return texts;
}
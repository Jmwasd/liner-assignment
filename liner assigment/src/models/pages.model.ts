import {Sequelize, Model, DataTypes} from 'sequelize';
import { texts } from './texts.model';

export class pages extends Model{
    public pageId: number;
    public users_userId : number;
    public pageUrl : string;

    public readonly createdAt !: Date;
    public readonly updatedAt !: Date;
}

export default function (sequelize: Sequelize) : typeof pages {
    pages.init(
        {
            pageId : {
                type : DataTypes.INTEGER
            },
            users_userId : {
                type : DataTypes.INTEGER
            },
            pageUrl : {
                type : DataTypes.STRING
            },
        },
        {
            tableName: 'pages',
            sequelize,
        },
    )


    return pages;
}
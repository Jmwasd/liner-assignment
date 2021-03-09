import {Sequelize, Model, DataTypes} from 'sequelize';

export class pages extends Model{
    public pageId: number;
    public users_userId : number;
    public pageUrl : string;
}

export default function (sequelize: Sequelize) : typeof pages {
    pages.init(
        {
            pageId : {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
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
            timestamps : false,
            tableName: 'pages',
            sequelize,
        },
    )


    return pages;
}
import {Sequelize, Model, DataTypes} from 'sequelize';

export class pages extends Model{
    public id: number;
    public userId : number;
    public pageUrl : string;

    public readonly createdAt : Date;
    public readonly updatedAt : Date;
}

export default function (sequelize: Sequelize) : typeof pages {
    pages.init(
        {
            id : {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type : DataTypes.INTEGER
            },
            userId : {
                type : DataTypes.INTEGER
            },
            pageUrl : {
                type : DataTypes.STRING,
            },
        },
        {
            tableName: 'pages',
            sequelize,
        },
    )


    return pages;
}
import {Sequelize, Model, DataTypes} from 'sequelize';

export class highlights extends Model{
    public highlightId : number;
    public userId: number;
    public text : string;
    public pageId : number;
    public colorHex : string;
    
    public createdAt : Date;
    public updatedAt : Date;
}

export default function (sequelize: Sequelize) : typeof highlights {
    highlights.init(
        {
            highlightId : {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type : DataTypes.INTEGER
            },
            userId : {
                type : DataTypes.INTEGER,
            },
            text : {
                type : DataTypes.STRING
            },
            pageId : {
                type : DataTypes.INTEGER,
            },
            colorHex : {
                type : DataTypes.STRING,
            },
        },
        {
            tableName: 'highlights',
            sequelize,
        },
    )

    return highlights;
}
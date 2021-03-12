import {Sequelize, Model, DataTypes} from 'sequelize';

export class themes extends Model{
    public id: number;
    public colorNumber : number;
    public colorHex : string;
    public themeId : number;

    public createdAt : Date;
    public updatedAt : Date;
}

export default function (sequelize: Sequelize) : typeof themes {
    themes.init(
        {
            id : {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type : DataTypes.INTEGER
            },
            colorNumber : {
                type : DataTypes.INTEGER
            },
            colorHex : {
                type : DataTypes.STRING
            },
            themeId : {
                type : DataTypes.INTEGER
            },
        },
        {
            tableName: 'themes',
            sequelize,
        },
    )

    return themes;
}
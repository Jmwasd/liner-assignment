import {Sequelize, Model, DataTypes} from 'sequelize';

export class themes extends Model{
    public id: number;
    public colorNumber : number;
    public colorHex : string;
    public themeId : number;

    public readonly createdAt : Date;
    public readonly updatedAt : Date;
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
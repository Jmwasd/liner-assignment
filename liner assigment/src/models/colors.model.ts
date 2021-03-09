import {Sequelize, Model, DataTypes} from 'sequelize';

export class colors extends Model{
    public pages_highlightId: number;
    public colorHex : string;
    public theme : number;
}

export default function (sequelize: Sequelize) : typeof colors {
    colors.init(
        {
            pages_highlightId : {
                type : DataTypes.INTEGER
            },
            colorHex : {
                type : DataTypes.STRING
            },
            theme : {
                type : DataTypes.STRING
            },
        },
        {
            timestamps : false,
            tableName: 'colors',
            sequelize,
        },
    )

    return colors;
}
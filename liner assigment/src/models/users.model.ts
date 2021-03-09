import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class users extends Model{
  public userId : number;
  public email: string;
  public password: string;
  public userName : string;
}

export default function (sequelize: Sequelize): typeof users {
  users.init(
    {
      userId : {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type : DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      userName : {
        type : DataTypes.STRING
      }
    },
    {
      timestamps : false,
      tableName: 'users',
      sequelize,
    },
  );

  return users;
}

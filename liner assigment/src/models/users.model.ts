import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class users extends Model{
  public id : number;
  public theme_id : number;
  public email: string;
  public password: string;
  public userName : string;

  public readonly createdAt : Date;
  public readonly updatedAt : Date;
}

export default function (sequelize: Sequelize): typeof users {
  users.init(
    {
      id : {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type : DataTypes.INTEGER
      },
      theme_id : {
        type : DataTypes.INTEGER,
        defaultValue : 1
      },
      email: {
        type: DataTypes.STRING,
        validate : {
          isEmail : true
        }
      },
      password: {
        type: DataTypes.STRING
      },
      userName : {
        type : DataTypes.STRING
      }
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return users;
}

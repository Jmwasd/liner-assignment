import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { pages } from './pages.model';

export class users extends Model{
  public email: string;
  public password: string;
  public userName : string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof users {
  users.init(
    {
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
      tableName: 'users',
      sequelize,
    },
  );

  return users;
}

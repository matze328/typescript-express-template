import { DataTypes, Model } from 'sequelize';
import todoSequelize from '../setup/database';
import { UserAttributes } from '../../interfaces/db-models/UserAttributes';

// Define the User model
class UserModel extends Model implements UserAttributes {
  public id!: number;
  public email!: string;
  public name!: string;
  public password!: string;
  public profileImgUrl?: string;

  static initializeModel() {
    UserModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        profileImgUrl: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize: todoSequelize,
        tableName: 'Users',
        defaultScope: {
          attributes: { exclude: ['password'] },
        },
      },
    );
  }
}

UserModel.initializeModel();

export default UserModel;

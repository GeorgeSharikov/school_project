import {sequelize} from '../dbConnection.js'
import pkg from "sequelize";
const {DataTypes} = pkg

export const UserModel = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    status: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING, defaultValue: false},
    userArticles: {type: DataTypes.STRING},
    comments: {type: DataTypes.STRING},
})

export const ArticleModel = sequelize.define('article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    titleParagraph: {type: DataTypes.STRING},
    titleImage: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
    likeCount: {type: DataTypes.STRING},
    comments: {type: DataTypes.RANGE(DataTypes.INTEGER)},
})

UserModel.hasMany(ArticleModel)
ArticleModel.belongsTo(UserModel)
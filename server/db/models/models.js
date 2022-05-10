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
    bookmarks: {type: DataTypes.STRING},
})

export const ArticleModel = sequelize.define('article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    title_paragraph: {type: DataTypes.TEXT},
    title_image: {type: DataTypes.STRING},
    content: {type: DataTypes.TEXT},
    like_count: {type: DataTypes.STRING},
    author_id: {type: DataTypes.INTEGER}
})

UserModel.hasMany(ArticleModel)
ArticleModel.belongsTo(UserModel)
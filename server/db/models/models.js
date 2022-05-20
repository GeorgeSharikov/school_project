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
    title_image: {type: DataTypes.TEXT},
    content: {type: DataTypes.TEXT},
    like_count: {type: DataTypes.INTEGER},
    userId: {type: DataTypes.INTEGER, foreignKey: true},
    is_moderated: {type: DataTypes.BOOLEAN, defaultValue: false},
    is_draft: {type: DataTypes.BOOLEAN, defaultValue: false},
    json_article_data: {type: DataTypes.TEXT},
    show_blocks_id: {type: DataTypes.STRING}
})

UserModel.hasMany(ArticleModel)
ArticleModel.belongsTo(UserModel)


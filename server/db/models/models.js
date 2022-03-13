import {sequalize} from '../dbConnection.js'
import pkg from "sequelize";
const {DataTypes} = pkg

export const User = sequalize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    avatar: {type: DataTypes.STRING},
    articles: {type: DataTypes.RANGE(DataTypes.INTEGER)},
    comments: {type: DataTypes.RANGE(DataTypes.INTEGER)},
})

export const Article = sequalize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    titleParagraph: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    image: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
    likeCount: {type: DataTypes.STRING},
    comments: {type: DataTypes.RANGE(DataTypes.INTEGER)},
})

User.hasMany(Article)
Article.belongsTo(User)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // id: {
        //     type: DataTypes.INTEGER,
        //     primarykey: true,
        //     allowNull: false,
        //     autoIncrement: true
        // },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // },
        // post_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'post',
        //         key: 'id'
        //     }
        // },
        // comment_text: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // }
    },
    {
        sequelize,
        // freezeTableName: true,
        // underscored: true,
        // modelName: 'comment'
    }
);

module.exports = Comment;
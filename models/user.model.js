const { STRING, INTEGER } = require("sequelize");
const db = require("../config/db");

const User = db.define({
    id:{
        type:INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,

    },
    username:{
        type: STRING,
        allowNull: false,
    },
    email:{
        type: STRING,
        unique: true,
        allowNull: false,
        validate:{
            isEmail: true,
        },
    },
    password:{
        type: STRING,
        allowNull: false,
    },
},{
    timestamps: true,
});

module.exports = User;
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
    carId: DataTypes.STRING,
    comment: DataTypes.TEXT,
    userId: DataTypes.STRING 
    })
    return Comment
   }
   
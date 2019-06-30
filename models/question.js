module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
      query: DataTypes.STRING,
      a: DataTypes.STRING,
      b: DataTypes.STRING,
      c: DataTypes.STRING,
      d: DataTypes.STRING,
      correct: DataTypes.STRING
    });
    return Question;
  };
  
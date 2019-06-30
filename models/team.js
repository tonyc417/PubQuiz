module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
      teamName: DataTypes.STRING,
      score: { type: DataTypes.INTEGER, defaultValue: 0 }
    });
    return Team;
  };
  
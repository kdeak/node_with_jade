"use strict";

module.exports = function (sequelize, DataTypes) {
  var Jelenlet = sequelize.define("Jelenlet", {
    name: {type: DataTypes.STRING, field: "name"}
  }, {
    schema: "hr",
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: false,
    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: false,
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true
  });

  return Jelenlet;
};
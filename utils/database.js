const Sequelize = require("sequelize");
const sequelize = new Sequelize("expense_tracker", "root", "ANni2616@sql%", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

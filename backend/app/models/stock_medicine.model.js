module.exports = (sequelize, Sequelize) => {
  const stock_Medicine = sequelize.define("stock_medicine", {
    med_name: {
      type: Sequelize.STRING,
    },
    med_batchNo: {
      type: Sequelize.STRING,
    },
    med_qty: {
      type: Sequelize.INTEGER,
    },
  });

  return stock_Medicine;
};

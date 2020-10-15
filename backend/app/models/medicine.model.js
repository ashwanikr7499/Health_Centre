module.exports = (sequelize, Sequelize) => {
  const Medicine = sequelize.define("medicine", {
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

  return Medicine;
};

module.exports = (sequelize, Sequelize) => {
  const Patient = sequelize.define("patient", {
    pat_visitor_id: {
      type: Sequelize.STRING,
    },
    pat_name: {
      type: Sequelize.STRING,
    },
    pat_prel: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA",
    },
    pat_mid: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA",
    },
    pat_dose: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA",
    },
    pat_ndays: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA",
    },
    pat_mqty: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA",
    },
    pat_visit_date: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA",
    },
    pat_doc_id: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA",
    },
    pat_m_status: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA", 
    },
    pat_med_issued_by: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA",
    },
    pat_med_issued_on: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA",
    },
    pat_visit_no: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA",
    },
    pat_press_no: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA",
    },
    pat_batch_no: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "NA",
    },
  }); 

  return Patient;
};

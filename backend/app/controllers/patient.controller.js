const db = require("../models");
const Patient = db.patients;
const Op = db.Sequelize.Op;

// Create and Save a new Patient
exports.create = (req, res) => {
  // Validate request
  if (!req.body.pat_visitor_id) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Patient
  const patient = {
    pat_visitor_id: req.body.pat_visitor_id,
    pat_name: req.body.pat_name,
    pat_prel: req.body.pat_prel,
    pat_mid: req.body.pat_mid,
    pat_dose: req.body.pat_dose,
    pat_ndays: req.body.pat_ndays,
    pat_mqty: req.body.pat_mqty,
    pat_visit_date: req.body.pat_visit_date,
    pat_doc_id: req.body.pat_doc_id,
    pat_m_status: req.body.pat_m_status,
    pat_med_issued_by: req.body.pat_med_issued_by,
    pat_med_issued_on: req.body.pat_med_issued_on,
    pat_visit_no: req.body.pat_visit_no,
    pat_press_no: req.body.pat_press_no,
    pat_batch_no: req.body.pat_batch_no,
  };

  // Save Patient in the database
  Patient.create(patient)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Patient.",
      });
    });
};

// Retrieve all Patients from the database.
exports.findAll = (req, res) => {
  const pat_name = req.query.pat_name;
  var condition = pat_name ? { pat_name: { [Op.like]: `%${pat_name}%` } } : null;

  Patient.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving patients.",
      });
    });
};

// Find a single Patient with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Patient.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Patient with id=" + id,
      });
    });
};

// Update a Patient by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Patient.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Patient was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Patient with id=${id}. Maybe Patient was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Patient with id=" + id,
      });
    });
};

// Delete a Patient with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Patient.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Patient was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Patient with id=${id}. Maybe Patient was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Patient with id=" + id,
      });
    });
};

// Delete all Patients from the database.
exports.deleteAll = (req, res) => {
  Patient.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Patients were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all patients.",
      });
    });
};

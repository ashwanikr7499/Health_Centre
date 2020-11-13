const db = require("../models");
const Medicine = db.medicines;
const Op = db.Sequelize.Op;

// Create and Save a new Medicine
exports.create = (req, res) => {
  // Validate request
  if (!req.body.med_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Medicine
  const medicine = {
    med_name: req.body.med_name,
    med_batchNo: req.body.med_batchNo,
    med_qty: req.body.med_qty ? req.body.med_qty : 0,
  };

  // Save Medicine in the database
  Medicine.create(medicine)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Medicine.",
      });
    });
};

// Retrieve all Medicines from the database.
exports.findAll = (req, res) => {
  const med_name = req.query.med_name;
  var condition = med_name ? { med_name: { [Op.like]: `%${med_name}%` } } : null;

  Medicine.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving medicines.",
      });
    });
};

// Find a single Medicine with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Medicine.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Medicine with id=" + id,
      });
    });
};

// Update a Medicine by the id in the request
exports.update = (req, res) => {
 
  Medicine.update(req.body, {
    where: { id: req.params.id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Medicine was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Medicine with id=${id}. Maybe Medicine was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Medicine with id=" + id,
      });
    });
};

// Delete a Medicine with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Medicine.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Medicine was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Medicine with id=${id}. Maybe Medicine was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Medicine with id=" + id,
      });
    });
};

// Delete all Medicines from the database.
exports.deleteAll = (req, res) => {
  Medicine.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Medicines were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all medicines.",
      });
    });
};

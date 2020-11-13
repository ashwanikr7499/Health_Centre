const db = require("../models");
const stock_Medicine = db.stock_medicines;
const Op = db.Sequelize.Op;

// Create and Save a new stock_Medicine
exports.create = (req, res) => {
  // Validate request
  if (!req.body.med_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a stock_Medicine
  const stock_medicine = {
    med_name: req.body.med_name,
    med_batchNo: req.body.med_batchNo,
    med_qty: req.body.med_qty ? req.body.med_qty : 0,
  };

  // Save stock_Medicine in the database
  stock_Medicine.create(stock_medicine)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the stock_Medicine.",
      });
    });
};

// Retrieve all Medicines from the database.
exports.findAll = (req, res) => {
  const med_name = req.query.med_name;
  var condition = med_name ? { med_name: { [Op.like]: `%${med_name}%` } } : null;

  stock_Medicine.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving stock_medicines.",
      });
    });
};

// Find a single stock_Medicine with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  stock_Medicine.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving stock_Medicine with id=" + id,
      });
    });
};

// Update a stock_Medicine by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  stock_Medicine.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "stock_Medicine was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update stock_Medicine with id=${id}. Maybe stock_Medicine was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating stock_Medicine with id=" + id,
      });
    });
};

// Delete a stock_Medicine with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  stock_Medicine.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "stock_Medicine was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete stock_Medicine with id=${id}. Maybe stock_Medicine was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete stock_Medicine with id=" + id,
      });
    });
};

// Delete all Medicines from the database.
exports.deleteAll = (req, res) => {
  stock_Medicine.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Medicines were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all stock_medicines.",
      });
    });
};
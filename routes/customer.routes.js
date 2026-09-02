const express = require("express");

const router = express.Router();

const { getAllCustomers,
    getCustomerById,
    getCustomersByCity,
    searchCustomersByName,
    getUniqueCities
} = require("../controllers/customer.controller");

// API 1 — Get All Customers
router.get("/", getAllCustomers);


// // API 3 — Get Customers by City
router.get("/city/:city", getCustomersByCity);


// API 4 — Search Customers by Name
router.get("/search/:name", searchCustomersByName);


// API 5 — Get Unique Cities
router.get("/cities", getUniqueCities);

// API 2 — Get Customer by ID
router.get("/:id", getCustomerById);

module.exports = router;
const express = require("express");

const router = express.Router();

const { getAllOrders,
    getOrderById,
    getOrdersByStatus,
    getOrdersByCustomer,
    getOrdersByDateRange,
    getOrdersSortedByDate,
    getOrderStatusStats,
    getCustomersWithMoreThanTwoOrders
} = require("../controllers/orders.controller");

// API 21 — Get All Orders
router.get("/", getAllOrders);

// API 23 — Get Orders by Status
router.get("/status/:status", getOrdersByStatus);

// API 25 — Orders by Date Range
router.get("/date-range", getOrdersByDateRange);

// API 26 — Orders Sorted by Date
router.get("/sort", getOrdersSortedByDate);

// API 27 — Order Status Statistics
router.get("/status-stats", getOrderStatusStats);

// API 28 — Customers with More Than 2 Orders
router.get("/frequent-customers", getCustomersWithMoreThanTwoOrders);

// API 24 — Get Orders by Customer
router.get("/customer/:customer_id", getOrdersByCustomer);

// API 22 — Get Order by ID
router.get("/:id", getOrderById);

module.exports = router;
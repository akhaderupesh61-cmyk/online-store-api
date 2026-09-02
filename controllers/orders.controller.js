const db = require("../config/db")

// Level 4 — Orders & Order Filtering //

// API 21 — Get All Orders

const getAllOrders = async (req, res) => {
    try {
        let query = `select * from orders`;
        let result = await db.query(query);
        console.log("get result:", result[0])
        res.json({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.log("get error:", error)
        res.json({
            success: false
        });
    }
};

// API 22 — Get Order by ID

const getOrderById = async (req, res) => {
    try {
        let id = Number(req.params.id);
        let query = `select * from orders
        where id=?`;
        let result = await db.query(query, [id]);
        console.log("get result:", result[0])
        res.json({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.log("get error:", error)
        res.json({
            success: false
        });
    }
};

// API 23 — Get Orders by Status

const getOrdersByStatus = async (req, res) => {
    try {
        let status = req.params.status;
        let query = `select * from orders
        where status=?`;
        let result = await db.query(query, [`${status}`]);
        console.log("get result:", result[0])
        res.json({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.log("get error:", error)
        res.json({
            success: false
        });
    }
};

// API 24 — Get Orders by Customer

const getOrdersByCustomer = async (req, res) => {
    try {
        let customer_id = req.params.customer_id;
        let query = `select * from orders
        where customer_id=?`;
        let result = await db.query(query, [customer_id]);
        console.log("get result:", result[0])
        res.json({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.log("get error:", error)
        res.json({
            success: false
        });
    }
};


// API 25 — Orders by Date Range

const getOrdersByDateRange = async (req, res) => {
    try {
        const { start_date, end_date } = req.query;

        let query = `select * from orders
        where order_date between ? and ?`;
        let result = await db.query(query, [start_date, end_date]);
        console.log("get result:", result[0])
        res.json({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.log("get error:", error)
        res.json({
            success: false
        });
    }
};

// API 26 — Orders Sorted by Date
const getOrdersSortedByDate = async (req, res) => {
    try {
        let order = req.query.order;

        let query = `select * from orders
        order by order_date ${order}`;
        let result = await db.query(query);
        console.log("get result:", result[0])
        res.json({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.log("get error:", error)
        res.json({
            success: false
        });
    }
};

// API 27 — Order Status Statistics

const getOrderStatusStats = async (req, res) => {
    try {

        let query = `select status, count(*) as total_orders
        from orders
        group by status`;
        let result = await db.query(query);
        console.log("get result:", result[0])
        res.json({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.log("get error:", error)
        res.json({
            success: false
        });
    }
};


// API 28 — Customers with More Than 2 Orders
const getCustomersWithMoreThanTwoOrders = async (req, res) => {
    try {

        let query = `select customer_id, count(*) as total_orders
        from orders
        group by customer_id
        having count(*)>2`;
        let result = await db.query(query);
        console.log("get result:", result[0])
        res.json({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.log("get error:", error)
        res.json({
            success: false
        });
    }
}




module.exports = {
    getAllOrders,
    getOrderById,
    getOrdersByStatus,
    getOrdersByCustomer,
    getOrdersByDateRange,
    getOrdersSortedByDate,
    getOrderStatusStats,
    getCustomersWithMoreThanTwoOrders
}
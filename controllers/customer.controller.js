const db = require("../config/db");

// Level 1 — Basic SELECT & WHERE //


// API 1 — Get All Customers

const getAllCustomers = async (req, res) => {
    try {
        let query = "select * from customers";
        let result = await db.query(query);
        console.log("get result:", result[0]);
        res.send({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.log("get error:", error);
        res.send({
            success: false
        })
    }
};

// API 2 — Get Customer by ID

const getCustomerById = async (req, res) => {
    try {
        let id = Number(req.params.id);
        let query = `select * from customers
        where id=?`;
        let [result] = await db.query(query, [id]);
        console.log("get result:", result);
        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        console.log("get error:", error)
        success: false
    }

};

//API 3 — Get Customers by City

const getCustomersByCity = async (req, res) => {
    try {
        let city = req.params.city;
        let query = `select * from customers
    where city=?`;
        let result = await db.query(query, [city]);
        console.log("get result:", result[0]);
        res.json({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.log("get error:", error)
        success: false
    }

};

// API 4 — Search Customers by Name

const searchCustomersByName = async (req, res) => {
    try {
        let name = req.params.name;
        let query = `select * from customers 
    where name like ?`;
        let result = await db.query(query, [`%${name}`]);
        console.log("get result:", result[0]);
        res.json({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.log("get error:", error)
        success: false
    }

};

// API 5 — Get Unique Cities
const getUniqueCities = async (req, res) => {
    try {

        let query = `select distinct city from customers`;
        let result = await db.query(query);
        console.log("get result:", result[0]);
        res.json({
            success: true,
            data: result[0]
        });
    } catch (error) {
        console.log("get error:", error)
        success: false
    }

};


module.exports = {
    getAllCustomers,
    getCustomerById,
    getCustomersByCity,
    searchCustomersByName,
    getUniqueCities
};
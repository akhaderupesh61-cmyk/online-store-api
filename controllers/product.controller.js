const db = require("../config/db")

// Level 2 — Products & Filtering //

// API 6 — Get All Products
const getAllProducts = async (req, res) => {
    try {
        let query = `select * from products`;
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


// API 7 — Get Products by Category
const getProductsByCategory = async (req, res) => {
    try {
        let category = req.params.category;
        let query = `select * from products
    where category=?`;
        let result = await db.query(query, [category]);
        console.log("get result:", result[0]);
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

// API 8 — Search Products
const searchProductsByName = async (req, res) => {
    try {
        let name = req.query.product_name;
        let query = `select * from products
    where product_name like?`;
        let result = await db.query(query, [`%${name}%`]);
        console.log("get result:", result[0]);
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

// API 9 — Products by Price Range
const productsByPriceRange = async (req, res) => {
    try {
        const { min_price, max_price } = req.query
        let query = `select * from products `;
        if(min_price>0 || max_price>0){
            query+= `where price between ${min_price} and ${max_price}`;
        }

        let result = await db.query(query)
        console.log("get result:", result[0]);
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

// API 10 — Products Above Price
const productsAbovePrice = async (req, res) => {
    // 
    try {
        let price = req.params.price
        let query = `select * from products where 
    price >?`;
        let result = await db.query(query, [price])
        console.log("get result:", result[0]);
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

// API 11 — Sort Products by Price
const sortProductsByPrice = async (req, res) => {
    try {
        let order = req.params.order;
        let query = `select * from products
    order by price ${order}`;
        let result = await db.query(query);
        console.log("get result:", result[0]);
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

// API 12 — Get Unique Categories
const getUniqueCategories = async (req, res) => {
    try {
        let query = `select distinct category from products`;
        let result = await db.query(query);
        console.log("get result:", result[0]);
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

// API 13 — Products Out of Stock 
const productsOutOfStock = async (req, res) => {
    try {
        let query = `select * from products
        where stock=0`;
        let result = await db.query(query);
        console.log("get result:", result[0]);
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

// Level 3 — Aggregate Functions, GROUP BY & HAVING //

// API 14 — Product Statistics
const getProductStats = async (req, res) => {
    try {
        let query = `select count(*) as total_products,
        avg(price) as average_products,
        min(price) as lowest_product,
        max(price) as highest_product,
        sum(stock) as total_stock
         from products`;
        let result = await db.query(query);
        console.log("get result:", result[0]);
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

// API 15 — Category Statistics
const getCategoryStats = async (req, res) => {
    try {
        let query = `select category,
        count(*) as Total_product,
    avg(price) as average_price,
    min(price) as lowest_price,
    max(price) as highest_price
    from products
    group by category`;
        let result = await db.query(query);
        console.log("get result:", result[0]);
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


// API 16 — Categories with More Than 2 Products
const getProductsByCategoryWithCount = async (req, res) => {
    try {
        let query = `select category, 
        count(*) as total_products
        from products
        group by category
        having count(*)>2`;
        let result = await db.query(query);
        console.log("get result:", result[0]);
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


// API 17 — Categories by Minimum Average Price
const getCategoriesByMinimumAveragePrice = async (req, res) => {
    try {
        let price = req.query.minimum_price;
        let query = `select category, avg(price) as average_price 
        from products
        group by category
        having avg(price)>?`;
        let result = await db.query(query, [price]);
        console.log("get result:", result[0]);
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

// API 18 — Category Price Range
const getCategoryPriceRange = async (req, res) => {
    try {

        let query = `select category, 
        min(price) as minimum_price,
        max(price) as maximum_price
        from products
        group by category`;
        let result = await db.query(query);
        console.log("get result:", result[0]);
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


// API 19 — Categories with High Stock
const getCategoriesWithHighStock = async (req, res) => {
    try {

        let query = `select category, 
        sum(stock) as total_stock
        from products
        group by category
        having sum(stock)>50`;
        let result = await db.query(query);
        console.log("get result:", result[0]);
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

// API 20 — Product Count by Category
const getProductCountByCategory = async (req, res) => {
    try {

        let query = `select category, 
        count(*) as total_products
        from products
        group by category`;
        let result = await db.query(query);
        console.log("get result:", result[0]);
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

module.exports = {
    getAllProducts,
    getProductsByCategory,
    searchProductsByName,
    productsByPriceRange,
    productsAbovePrice,
    sortProductsByPrice,
    getUniqueCategories,
    productsOutOfStock,
    getProductStats,
    getCategoryStats,
    getProductsByCategoryWithCount,
    getCategoriesByMinimumAveragePrice,
    getCategoryPriceRange,
    getCategoriesWithHighStock,
    getProductCountByCategory
};
const express = require("express");
const router = express.Router();

const { getAllProducts,
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
} = require("../controllers/product.controller")


// API 6 — Get All Products
router.get("/", getAllProducts);

// API 7 — Get Products by Category
router.get("/category/:category", getProductsByCategory);

// API 8 — Search Products
router.get("/search", searchProductsByName);

// Products by Price Range
router.get("/price-range", productsByPriceRange)

// API 10 — Products Above Price
router.get("/above-price/:price", productsAbovePrice)

// API 11 — Sort Products by Price
router.get("/sort/:order", sortProductsByPrice)

// API 12 — Get Unique Categories
router.get("/categories", getUniqueCategories);

// API 13 — Products Out of Stock
router.get("/out-of-stock", productsOutOfStock);

// API 14 — Product Statistics
router.get("/stats", getProductStats);

// API 15 — Category Statistics
router.get("/category-stats", getCategoryStats);

// API 16 — Categories with More Than 2 Products
router.get("/categories/popular", getProductsByCategoryWithCount);

// API 17 — Categories by Minimum Average Price
router.get("/categories/average-price", getCategoriesByMinimumAveragePrice);

// API 18 — Category Price Range
router.get("/categories/price-range", getCategoryPriceRange);

// API 19 — Categories with High Stock
router.get("/categories/stock", getCategoriesWithHighStock);

// API 20 — Product Count by Category
router.get("/count-by-category",getProductCountByCategory);

module.exports = router;
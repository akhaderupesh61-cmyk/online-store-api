const express = require("express");
const app = express();
const customerRoutes = require("../routes/customer.routes");
const productRoutes = require("../routes/product.routes");
const orderRoutes = require("../routes/orders.routes");
const PORT = 8089;

app.use(express.json());

// Level 1 APIs
app.use("/api/customers", customerRoutes);

// Level 2 APIs & Level 3 APIs
app.use("/api/products", productRoutes);

// Level 4 APIs
app.use("/api/orders", orderRoutes);

// Level 5 APIs

app.listen(PORT, () => {
    console.log(`Server is started on port: ${PORT}`);
});

module.exports = app;
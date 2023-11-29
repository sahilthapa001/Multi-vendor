const express = require("express");

const appRouter = express.Router();

appRouter.get("/", (req, res) => {
	res.send("appRouter");
});

const userRouter = require("./user");
const sellerRouter = require("./seller");
const orderRouter = require("./order");

appRouter.use("/user", userRouter);
appRouter.use("/seller", sellerRouter);
app.Router.use("/order", orderRouter);

module.exports = appRouter;

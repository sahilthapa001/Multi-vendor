const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const orderRouter = express.Router();

orderRouter.get("/", (req, res) => {
	res.send("ordeRouter");
});

orderRouter.post(
	"/create",
	catchAsyncErrors(async (req, res, next) => {
		const { cart, shippingAddress, userId } = req.body;
	})
);

orderRouter.get(
	"/find/:id", // Define the parameter in the route path
	catchAsyncErrors(async (req, res, next) => {
		try {
			const orderId = req.params.id; // Access the `id` parameter from the request
			const foundOrder = await Order.findById(orderId);

			if (foundOrder) {
				res.status(200).json(foundOrder);
			} else {
				res.status(404).json({ message: "Order not found" });
			}
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	})
);
module.exports = orderRouter;

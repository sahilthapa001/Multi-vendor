const jwt = require("jsonwebtoken");
const User = require("../model/User");

const LWPError = require("../utils/error");
const catchAsyncErrors = require("./catchAsyncErrors");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) {
		return next(new LWPError("please login to continue", 401));
	}

	const decoded = jwt.verify(token, process.env.JWT_SECRET);

	req.user = await User.findById(decoded.id);

	next();
});

exports.isSeller = catchAsyncErrors(async(req,res, next) => {
    const {shop_token} = req.cookies;
    if(!shop_token){
        return next(new LWPError("please login to continue",401));
    }

    const decoded =jwt.verify(shop_token, process.env.JWT_SECRET);

    req.seller = await Shop.findById(decoded.id);
    next();
})

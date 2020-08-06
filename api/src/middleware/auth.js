const jwt = require("jsonwebtoken");
const { User } = require("../models");
const secret = process.env.JWT_SECRET;

module.exports = {
  authenticated: async (ctx, next) => {
    if (!ctx.headers.authorization) ctx.throw(403, "No token.");

    const token = ctx.headers.authorization.split(" ")[1];

    try {
      ctx.request.jwtPayload = jwt.verify(token, secret);
    } catch (err) {
      ctx.throw(err.status || 403, err.text);
    }

    await next();
  },
  auth: async function (ctx, next) {
    if (ctx.state.user) {
      ctx.user = await User.findById(ctx.state.user._id);
    } else {
      ctx.user = null;
    }

    return next();
  },
};

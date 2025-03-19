const user = require("../models/userModel");
const jwt = require("jsonwebtoken");

const requireAuth = async (req, res, next) => {
  console.log("Authorization Header:", req.headers.authorization);

  // Extract the Authorization header from the request
  const { authorization } = req.headers;

  // If no authorization header is provided, return an error
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required!" });
  }

  // Split the header into "Bearer" and token
  const parts = authorization.split(" ");

  // If the format is incorrect, return an error
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res
      .status(401)
      .json({ error: "Authorization token must be in Bearer <token> format!" });
  }

  // Extract the token
  const token = parts[1];

  // If the token is empty, return an error
  if (!token) {
    return res.status(401).json({ error: "Token is empty!" });
  }

  console.log("Verifying token:", token); // Log the token

  try {
    // Verify the token and extract the user ID (_id)
    const { _id } = jwt.verify(token, process.env.SECRET);

    // Attach the user to the request object
    req.user = await user.findOne({ _id }).select("_id");

    // If the user doesn't exist, return an error
    if (!req.user) {
      return res.status(401).json({ error: "user not found!" });
    }

    // If everything is fine, proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Improved error logging
    console.error("Error during JWT verification:", error.message);
    console.error(error); // To log the entire error object

    // Handle specific JWT errors like expired tokens
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token has expired!" });
    }

    // Handle any other unexpected errors
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(400).json({ error: "Invalid token!" });
    }

    // Handle missing secret or JWT malformed
    if (error instanceof SyntaxError) {
      return res.status(400).json({ error: "Malformed token!" });
    }

    // General fallback error handling
    return res.status(401).json({ error: "Request is not authorized!" });
  }
};

module.exports = requireAuth;

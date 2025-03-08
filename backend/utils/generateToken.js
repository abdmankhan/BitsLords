import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  // console.log("Generating token for user:", userId);

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" ? true : false,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token; // Return the token
};

export default generateToken;

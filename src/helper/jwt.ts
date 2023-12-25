import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY!;

interface payloadToken {
  id: number;
}

export const createToken = (data: payloadToken) => {
  const expiresIn = "1h";
  return jwt.sign(data, secretKey, { expiresIn });
};

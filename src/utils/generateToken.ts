import jwt from "jsonwebtoken";
import { JWTPayload } from "./types";


export function generateJWT(jwtPayload: JWTPayload): string {
    const PrivateKey = process.env.JWT_SECRET as string;

  const token = jwt.sign(jwtPayload, PrivateKey, {
    expiresIn: "30d",
  });
}

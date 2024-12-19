import jwt from "jsonwebtoken";
import { JWTPayload } from "./types";
import { serialize } from "cookie";

//Generate JWT Token
export function generateJWT(jwtPayload: JWTPayload): string {
    const PrivateKey = process.env.JWT_SECRET as string;

  const token = jwt.sign(jwtPayload, PrivateKey, {
    expiresIn: "30d",
  });

  return token;
}

// Ser Cookie with JWT
export function setCookie(jwtPayload: JWTPayload): string {
    const token = generateJWT(jwtPayload);

    const cookie = serialize("jwtToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return cookie;
}

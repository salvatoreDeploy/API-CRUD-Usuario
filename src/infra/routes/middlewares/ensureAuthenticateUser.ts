import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import Auth from "../../../config/Auth";

interface IPayload {
  sub: string;
}

export function ensureAuthenticateUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const auhtHeader = request.headers.authorization;

  if (!auhtHeader) {
    return response.status(401).json({
      message: "Token Not Empty",
    });
  }

  const [, token] = auhtHeader.split(" ");

  const { secret_token } = Auth;

  try {
    const { sub } = verify(token, secret_token) as IPayload;

    request.user_id = sub;

    next();
  } catch (err) {
    return response.status(401).json({
      message: "Token Invalid",
    });
  }
}

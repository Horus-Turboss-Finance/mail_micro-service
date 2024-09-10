import { catchSync } from './catchAsync';
import { errorCode } from '../config/types';
import { NextFunction, Response, Request } from 'express';
import { ResponseException } from '../utils/responseException';
import { CompareSignature } from "signed-service"

export const isAuthService = catchSync(async (req : Request, res : Response, next : NextFunction) => {
  let signature = req.body.token;

  let data = false;
  if(signature) {
    // Attention au split . -> Check si [2] undefined
    data = await CompareSignature(signature);
  }
  if(!data) throw new ResponseException(errorCode.Forbidden, "Clé d'accès invalide");
  next();
})
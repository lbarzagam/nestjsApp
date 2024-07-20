import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    const {authorization} = req.headers;
    if(!authorization)
      throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
    
    if(authorization!== '123xyz')
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    next();
  }
}

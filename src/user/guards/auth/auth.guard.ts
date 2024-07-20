import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { HttpAdapterHost } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  
  canActivate( context: ExecutionContext, ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();    
    console.log(request.url);
    if(request.url === '/task/greet')
      return false
    return true;
  }
}

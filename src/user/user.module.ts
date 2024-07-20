import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LoggerMiddleware } from './midleware/logger/logger.middleware';
import { AuthMiddleware } from './midleware/auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
   /* consumer.apply(LoggerMiddleware).forRoutes(
      {path:'/users', method: RequestMethod.GET},
      {path:'/users', method: RequestMethod.POST}
    ).apply(AuthMiddleware).forRoutes('users')/*/
  }
}

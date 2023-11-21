import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { createOrderDTO } from 'create-order-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @EventPattern('create_order')
  findUser(data) {
    console.log('finding user with data', data);
  }

  @MessagePattern('bill_order')
  findUserToBill({ userId, price }: createOrderDTO) {
    console.log(`finding user to bill with user id of ${userId}`);
    return this.appService.findUserToBill(userId, price);
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

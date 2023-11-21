import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findUserToBill(userId: string, price: number) {
    console.log(`finding user to bill with id of ${userId}`);
    return { id: userId, name: 'John Doe', price };
  }
  getHello(): string {
    return 'Hello World!';
  }
}

import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // params
  // @Get('products/:productId')
  // getProduct(@Param('productId') productId: string) {
  //   return `product ${productId}`;
  // }

  // // params
  // @Get('category/:id/:productId')
  // getCateory(@Param('productId') productId: string, @Param('id') id: string) {
  //   return `product ${productId} ${id}`;
  // }
}

import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import { PositiveIntPipe } from '../pipes/positiveint.pipe';
import { SuccessInterceptor } from '../common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('/')
  getAllCats() {
    // throw new HttpException('api broken', 401);
    console.log('hello controller');
    return { cats: 'get all cat api' };
  }

  @Get('/:id')
  getCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    // console.log(typeof param);
    console.log(param);
    return 'get one cat';
  }

  @Post('/')
  postCat() {
    return 'create cat';
  }

  @Put('/:id')
  putCat() {
    return 'update cat';
  }

  @Patch('/:id')
  patchCat() {
    return 'update partial cat';
  }

  @Delete('/:id')
  deleteCat() {
    return 'delete cat';
  }
}

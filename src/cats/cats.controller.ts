import {
  Controller,
  Delete,
  Get,
  HttpException,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../http-exception.filter';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('/')
  getAllCats() {
    throw new HttpException('api broken', 401);
    return 'all cats';
  }

  @Get('/:id')
  getCat() {
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

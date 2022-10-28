import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatsSchema } from './cats.schema';
import { CatsRepository } from './cats.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cat.name, schema: CatsSchema }]),
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository],
})
export class CatsModule {}

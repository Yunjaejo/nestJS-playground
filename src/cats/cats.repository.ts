import { HttpException, Injectable } from '@nestjs/common';
import { Cat } from './cats.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatsRequestDto } from './dto/cats.request.dto';

@Injectable()
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async findCatByEmail(email: string): Promise<Cat | null> {
    return this.catModel.findOne({ email });
  }

  async existsByEmail(email: string): Promise<object> {
    return this.catModel.exists({ email });
  }

  async create(cat: CatsRequestDto): Promise<Cat> {
    return await this.catModel.create(cat);
  }
}

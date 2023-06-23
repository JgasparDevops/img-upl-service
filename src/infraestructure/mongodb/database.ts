import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { MongooseError } from 'mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.configService.get<string>('database.uri'),
      connectionErrorFactory: (error: MongooseError) => {
        /*  
            in this place manage the logs
        */
        return error;
      },
      retryDelay: 5000,
      retryAttempts: 5,
    };
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './modules/mail/mail.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { GithubModule } from './github/github.module';

@Module({
  imports: [
    MailModule,
    //dotenv configuration
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GithubModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

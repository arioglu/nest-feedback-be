import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FeedbackController } from './feedback/feedback.controller';
import { Feedback } from './feedback/feedback.model';
import { FeedbackService } from './feedback/feedback.service';

@Module({
  imports: [ConfigModule.forRoot(), Feedback],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class AppModule {}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { Feedback } from './feedback.model';
import { FeedbackService } from './feedback.service';

@Controller('feedbacks')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get('all')
  getAllFeedbacks(): Feedback[] {
    return this.feedbackService.getAllFeedbacks();
  }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'inserted',
  })
  @Post()
  postFeedback(@Body('message') message: string) {
    const feedbackId = this.feedbackService.insertFeedback(
      message,
      new Date().getTime(),
    );

    return {
      id: feedbackId,
    };
  }
}

import { Injectable } from '@nestjs/common';
import { Feedback } from './feedback.model';
import axios from 'axios';

import { v4 as uuid } from 'uuid';

@Injectable()
export class FeedbackService {
  private feedbacks: Feedback[] = [];

  insertFeedback(message: string, timestamp: number) {
    let retVal = null;
    const feedback = new Feedback(message, uuid(), timestamp);
    this.feedbacks.push(feedback);

    axios
      .post(process.env.SHEETS_API_URL, feedback)
      .then((res) => {
        retVal = res.data.id;
      })
      .catch((err) => console.log(err));

    return feedback.id;
  }

  getAllFeedbacks(): Feedback[] {
    return [...this.feedbacks];
  }
}

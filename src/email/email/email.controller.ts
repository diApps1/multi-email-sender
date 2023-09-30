// src/email/email.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmails(@Body() recipients: string[], @Body() subject: string, @Body() text: string): Promise<void> {
    for (const recipient of recipients) {
      await this.emailService.sendEmail(recipient, subject, text);
    }
  }
}

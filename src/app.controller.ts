import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('email')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post('send')
  async sendEmails(@Body() emailData: { recipients: string[], subject: string, text: string }): Promise<{ message: string }> {
    const { recipients, subject, text } = emailData;
    for (const recipient of recipients) {
      console.log(recipient)
      try {
        await this.appService.sendEmail(recipient, subject, text);
      } catch (error) {
        throw new HttpException(`Error sending email to ${recipient}: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
    
    return { message: 'Emails sent successfully' };
  }
}

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AppService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.titan.email', // Replace with your SMTP server host
      port: 465, // Replace with the appropriate port
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'danny.martin@diapps.tech', // Your email address
        pass: 'Alilovesyou@420', // Your email password (consider using an app-specific password)
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: 'Ali Shiekh',
      to,
      subject,
      text,
    };

    await this.transporter.sendMail(mailOptions);
  }
}

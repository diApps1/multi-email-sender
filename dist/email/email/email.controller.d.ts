import { EmailService } from './email.service';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendEmails(recipients: string[], subject: string, text: string): Promise<void>;
}

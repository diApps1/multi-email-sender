import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sendEmails(emailData: {
        recipients: string[];
        subject: string;
        text: string;
    }): Promise<{
        message: string;
    }>;
}

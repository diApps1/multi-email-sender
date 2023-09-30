export declare class AppService {
    private transporter;
    constructor();
    sendEmail(to: string, subject: string, text: string): Promise<void>;
}

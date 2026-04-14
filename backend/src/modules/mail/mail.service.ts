import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
    private transporter: any = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    async sendMail(mailDTO: any) {
        const { name, email, message } = mailDTO;
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: process.env.EMAIL_RECEIVER,
            subject: `New message from ${name} by portfolio contact`,
            text: message,
        };
        await this.transporter.sendMail(mailOptions);
    }

}

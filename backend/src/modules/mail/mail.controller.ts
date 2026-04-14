import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailDTO } from './DTO/MailDTO';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}


  @Post('send')
  @UsePipes(new ValidationPipe())
  async sendMail(
    @Body() mailDTO: MailDTO
  ) {
    try {
      await this.mailService.sendMail(mailDTO);
      return {
        success: true,
        error: false,
        message: 'Email sent successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || 'Failed to send email',
        error: true,
      };
    }
  }
}

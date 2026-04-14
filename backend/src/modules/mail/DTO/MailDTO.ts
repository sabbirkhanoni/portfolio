import { IsDefined, IsString, IsEmail, MaxLength, Min, MinLength } from 'class-validator';

export class MailDTO {
    @IsDefined()
    @IsString()
    @MinLength(2, {
        message: 'Name must be at least 2 characters',
    })
    @MaxLength(50, {
        message: 'Name cannot exceed 50 characters',
    })
    name: string;

    @IsDefined()
    @IsString()
    @IsEmail({}, {
        message: 'Invalid email format',
    })
    @MaxLength(200, {
        message: 'Email cannot exceed 200 characters',
    })
    email: string;

    @IsDefined()
    @IsString()
    @MaxLength(1000, {
        message: 'Message cannot exceed 1000 characters',
    })
    message: string;
}
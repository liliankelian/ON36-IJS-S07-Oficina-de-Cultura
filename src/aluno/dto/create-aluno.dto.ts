import { IsNotEmpty, IsEmail, IsNumber, Max, IsString, max, MAX } from 'class-validator';

const currentDate = new Date();
const currentYear = currentDate.getFullYear()

export class CreateAlunoDto {
    
    @IsString()
    nome:string;
    
    @IsString()
    endereco: string;

    @IsString()
    telefone:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNumber()
    @Max(currentYear - 16)
    anoNascimento:number;

    
}

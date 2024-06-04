import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

class UserDto {
  @IsEmail()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;
}

export class CreateUserDto extends UserDto {
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class CreatedUserDto extends UserDto {
  _id: string;
}

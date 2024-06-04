import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { UserEnum } from '@app/userlib/enums/user.enum';
import { CreateUserDto, CreatedUserDto } from '@app/userlib/dtos/user.dto';

@Controller(UserEnum.USER_CONTROLLER_PATH)
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async signup(@Body() user: CreateUserDto): Promise<CreatedUserDto> {
    return await this.gatewayService.publishSignupMessage(user);
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { CreateOptionDto } from '../dto/create-option.dto';
import { OptionService } from '../services/option.service';

@Controller('option')
export class OptionController {
  constructor(private optionService: OptionService) {}

  @Post('')
  async saveOptionToQuestion(@Body() optionDto: CreateOptionDto) {
    return await this.optionService.saveOptionToQuestion(optionDto);
  }
}

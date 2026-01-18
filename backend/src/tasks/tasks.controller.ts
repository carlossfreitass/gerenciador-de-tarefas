import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() data: CreateTaskDto) {
    return this.tasksService.create(data);
  }

  @Get()
  getTask() {
    return this.tasksService.list();
  }

  @Put(':id')
  editTask(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateTaskDto) {
    return this.tasksService.edit(id, data);
  }
}

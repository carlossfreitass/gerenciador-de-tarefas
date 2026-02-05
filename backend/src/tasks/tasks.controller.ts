import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
  Query,
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
  listTask() {
    return this.tasksService.list();
  }

  @Get('suggest-title')
  suggestTitle(@Query('description') description: string) {
    return this.tasksService.suggest(description);
  }

  @Put(':id')
  editTask(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateTaskDto) {
    return this.tasksService.edit(id, data);
  }

  @Patch(':id/complete')
  completeTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.complete(id);
  }

  @Patch(':id/incomplete')
  incompleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.incomplete(id);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.delete(id);
  }
}

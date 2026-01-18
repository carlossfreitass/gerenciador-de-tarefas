import { Body, Controller, Post, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

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
}

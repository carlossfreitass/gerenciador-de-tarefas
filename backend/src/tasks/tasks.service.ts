import { Injectable } from '@nestjs/common';
import { TasksRepository } from './repositories/tasks.repository';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  create(data: CreateTaskDto) {
    return this.tasksRepository.create(data);
  }

  list() {
    return this.tasksRepository.list();
  }
}

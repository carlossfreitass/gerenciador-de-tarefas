import { Injectable } from '@nestjs/common';
import { TasksRepository } from './repositories/tasks.repository';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  create(data: CreateTaskDto) {
    const newTask = {
      title: data.title,
      description: data.description,
    };

    return this.tasksRepository.save(newTask);
  }

  list() {
    return this.tasksRepository.listAll();
  }
}

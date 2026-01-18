import { Injectable } from '@nestjs/common';
import { TasksRepository } from './repositories/tasks.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  create(data: CreateTaskDto) {
    return this.tasksRepository.create(data);
  }

  list() {
    return this.tasksRepository.list();
  }

  edit(id: number, data: UpdateTaskDto) {
    return this.tasksRepository.edit(id, data);
  }

  complete(id: number) {
    return this.tasksRepository.complete(id);
  }

  incomplete(id: number) {
    return this.tasksRepository.incomplete(id);
  }
}

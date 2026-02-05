/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

  async suggest(description: string) {
    if (!description) {
      throw new Error('Description is required!');
    }

    const url = `http://localhost:5000/suggest-title?description=${encodeURIComponent(description)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Erro ao gerar título');
    }

    const data = await response.json();
    return data;
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

  delete(id: number) {
    return this.tasksRepository.delete(id);
  }
}

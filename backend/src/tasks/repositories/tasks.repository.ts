import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TasksRepository {
  constructor(private prismaService: PrismaService) {}

  async save(newTask: Prisma.TaskCreateInput) {
    const sendTask = await this.prismaService.prisma.task.create({
      data: newTask,
    });

    return sendTask;
  }

  async listAll() {
    const listTask = await this.prismaService.prisma.task.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });

    return listTask;
  }
}

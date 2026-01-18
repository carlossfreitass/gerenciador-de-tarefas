import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TasksRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.TaskCreateInput) {
    const sendTask = await this.prismaService.prisma.task.create({
      data: data,
    });

    return sendTask;
  }

  async list() {
    const list = await this.prismaService.prisma.task.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });

    return list;
  }
}

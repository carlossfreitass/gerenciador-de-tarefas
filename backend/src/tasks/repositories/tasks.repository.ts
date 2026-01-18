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

  async edit(id: number, data: Prisma.TaskUpdateInput) {
    const edit = await this.prismaService.prisma.task.update({
      where: { id },
      data: data,
    });

    return edit;
  }

  async complete(id: number) {
    const complete = await this.prismaService.prisma.task.update({
      where: { id },
      data: {
        completed: true,
      },
    });

    return complete;
  }

  async incomplete(id: number) {
    const incomplete = await this.prismaService.prisma.task.update({
      where: { id },
      data: {
        completed: false,
      },
    });

    return incomplete;
  }
}

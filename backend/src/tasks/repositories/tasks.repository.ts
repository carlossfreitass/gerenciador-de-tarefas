import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TasksRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.TaskCreateInput) {
    return await this.prismaService.prisma.task.create({
      data: data,
    });
  }

  async list() {
    return await this.prismaService.prisma.task.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async edit(id: number, data: Prisma.TaskUpdateInput) {
    return await this.prismaService.prisma.task.update({
      where: { id },
      data: data,
    });
  }

  async complete(id: number) {
    return await this.prismaService.prisma.task.update({
      where: { id },
      data: {
        completed: true,
      },
    });
  }

  async incomplete(id: number) {
    return await this.prismaService.prisma.task.update({
      where: { id },
      data: {
        completed: false,
      },
    });
  }

  async delete(id: number) {
    return await this.prismaService.prisma.task.delete({
      where: { id },
    });
  }
}

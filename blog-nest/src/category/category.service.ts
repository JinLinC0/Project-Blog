import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: {
        title: createCategoryDto.title,
      }
    });
  }

  // 查找所有栏目
  findAll() {
    return this.prisma.category.findMany();
  }

  // 根据id查找
  findOne(id: number) {
    return this.prisma.category.findFirst({
      where: { id }
    });
  }

  // 根据id修改
  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: { id },
      data: {
        title: updateCategoryDto.title,
      }
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({
      where: { id }
    });
  }
}

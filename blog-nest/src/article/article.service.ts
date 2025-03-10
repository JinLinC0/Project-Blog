import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService, private config: ConfigService) { }

  // 创建一条文章数据
  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({
      data: {
        title: createArticleDto.title,
        content: createArticleDto.content,
        categoryId: Number(createArticleDto.categoryId),
      }      
    });
  }

  // 分页查询文章数据
  async findAll(page = 1) {
    const row = this.config.get('ARTICLE_ROW');
    // 查询到所有文章，并设置分页
    const articles = await this.prisma.article.findMany({
      skip: (page - 1) * row,
      take: Number(row),
    });

    const total = await this.prisma.article.count();

    return {
      meta: {
        current_page: page,  // 当前页
        page_row: Number(row),     // 每页显示多少条
        total,  // 统计文章总数
        total_page: Math.ceil(total / row),  // 总页数
      },
      data: articles,   // 返回文章数据
    };
  }

  // 通过id查询具体的文章
  findOne(id: number) {
    return this.prisma.article.findFirst({
      where: { id }
    });
  }

  // 通过id更新文章
  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: {
        title: updateArticleDto.title,
        content: updateArticleDto.content,
        categoryId: Number(updateArticleDto.categoryId),
      }  
    });
  }

  // 通过id删除文章
  remove(id: number) {
    return this.prisma.article.delete({
      where: { id }
    });
  }
}

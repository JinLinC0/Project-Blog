import { PrismaClient } from "@prisma/client";
import { hash } from "argon2";
import { Random } from "mockjs";
import _ from "lodash";

const prisma = new PrismaClient();   // 生成一个操作mysql的客户端

async function main() {
    await prisma.user.create({
        data: {
            name: "admin",
            password: await hash("admin123"),
        },
    });

    for (let i = 1; i < 6; i++) {
        await prisma.category.create({
            data: {
                title: Random.ctitle(3, 10),
            },
        });
    }

    for (let i = 0; i < 10; i++) {
        await prisma.article.create({
            data: {
                title: Random.ctitle(10, 30),   // 随机生成标题：10-30个字符
                content: Random.cparagraph(30, 50),   // 随机生成中文段落：30-50句话
                categoryId: _.random(1, 5),
            },
        });
    }
}

main()
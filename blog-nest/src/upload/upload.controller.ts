import { Controller, Post, UploadedFile } from '@nestjs/common';
import { UploadDocument, UploadImage } from './decorator/upload.decorator';

@Controller('upload')
export class UploadController {
    @Post('image')
    @UploadImage()
    image(@UploadedFile() file: Express.Multer.File) {
        return file
    }

    @Post('document')
    @UploadDocument()
    document(@UploadedFile() file: Express.Multer.File) {
        return file
    }
}

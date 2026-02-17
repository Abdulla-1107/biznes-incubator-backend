import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { ApiTags, ApiOperation, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { UploadService } from './upload.service';

const imageFilter = (req: any, file: Express.Multer.File, cb: Function) => {
  if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp|svg)$/)) {
    return cb(
      new BadRequestException('Faqat rasm fayllari qabul qilinadi'),
      false,
    );
  }
  cb(null, true);
};

const fileFilter = (req: any, file: Express.Multer.File, cb: Function) => {
  if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp|svg|pdf)$/)) {
    return cb(
      new BadRequestException('Faqat rasm yoki PDF fayllar qabul qilinadi'),
      false,
    );
  }
  cb(null, true);
};

const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

@ApiTags('Upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  // Bitta rasm yuklash (partner logo, mentor photo, startup logo)
  @Post('image')
  @ApiOperation({ summary: 'Bitta rasm yuklash' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage,
      fileFilter: imageFilter,
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    }),
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Fayl yuklanmadi');

    return {
      url: this.uploadService.getFileUrl(file.filename),
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
    };
  }

  // PDF yoki rasm yuklash (pitchDeck, fileUrl)
  @Post('file')
  @ApiOperation({ summary: 'PDF yoki rasm yuklash' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage,
      fileFilter,
      limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Fayl yuklanmadi');

    return {
      url: this.uploadService.getFileUrl(file.filename),
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
    };
  }
}

import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/utils/multer.config';
import { baseUrl } from 'src/utils/network';
import * as path from 'path';

@Controller('files')
export class FilesController {
  @Get('output/:folderName/:filename')
  async getFile(
    @Param('folderName') folderName: string,
    @Param('filename') filename: string,
    @Res() res,
  ): Promise<any> {
    const fileDir = path.join('output', folderName);
    res.sendFile(filename, { root: fileDir });
  }

  @Post('upload/:folderName')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('folderName') folderName: string,
  ) {
    if (!file) {
      throw new Error('No file uploaded.');
    }

    const fileLink = `${baseUrl}files/output/${folderName}/${file.filename}`;

    return { link: fileLink };
  }
}

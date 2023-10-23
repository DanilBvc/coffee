import { diskStorage } from 'multer';
import * as fs from 'fs';

export const multerConfig = {
  storage: diskStorage({
    destination: (req, file, cb) => {
      const folderName = req.params.folderName || 'default';
      const destination = `output/${folderName}`;

      if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination, { recursive: true });
      }

      cb(null, destination);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    },
  }),
};

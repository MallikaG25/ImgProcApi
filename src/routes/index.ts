import express, { Request, Response } from 'express';
import fs from 'fs';
const routes = express.Router();
import path from 'path';
import sharpImage from '../sharp/imgsharp';

routes.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    let  name = req.query.filename;
    let height = Number(req.query.height);
    let width = Number(req.query.width);

    if (!height || !name || !width || height <= 0 || width <= 0) {
      res
        .status(400)
        .send(
          'Error pls provide correct filename, height and width for Example http://localhost:3000/images?filename=fjord&height=100&width=200'
        );
      return;
    }

    const orig_image = `${path.resolve(
      __dirname,
      `./../../Photos/original_images/${name}.jpg`
    )}`;

    const new_path = `${path.resolve(
      __dirname,
      `./../../Photos/resized_images/${name}_${height}*${width}.jpg`
    )}`;

    if (fs.existsSync(new_path)) {
      res.sendFile(new_path);
    }
    else {
      await sharpImage(height, width, orig_image, new_path);
      res.sendFile(new_path);
    }
  } 
  catch (error) {
    res
      .status(500)
      .send(
        'Error occured while fetching image or No such file exist 500 pls enter correct filename'
      );
  }
});

export default routes;

import path from 'path';
import sharpImage from '../../sharp/imgsharp';

const filename = 'palmtunnel';
const height = 100;
const width = 200;
const orig_path = `${path.resolve(
__dirname,
  `./../../Photos/original_images/${filename}.jpg`
)}`;

const new_path = `${path.resolve(
  __dirname,
  `./../../Photos/resized_images/${filename}_${height}*${width}.jpg`
)}`;
describe('image resize successfully', (): void => {
  it('rejects promise if something went wrong', async (): Promise<void> => {
    await expectAsync(
      sharpImage(height, width, orig_path, new_path)
    ).toBeResolved();
  });
});

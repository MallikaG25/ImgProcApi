import sharp from 'sharp';

const sharpImage = (
  height: number,
  width: number,
  orig_path: string,
  new_path: string
): Promise<sharp.OutputInfo> => {
  return sharp(orig_path).resize(width, height).toFile(new_path);
};
export default sharpImage;

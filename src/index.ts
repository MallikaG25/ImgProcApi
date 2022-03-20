import express, { Request, Response } from 'express';
import routes from './routes/.';

const app = express();
const port = 3000;

app.use('/images', routes);

app.get('/', (req: Request, res: Response): void => {
  res
    .status(200)
    .send(
      '<h2>Welcome Image processing Api</h2><p>pls right in url the size you want for image Example: http://localhost:3000/images?filename=fjord&height=200&width=200</p>'
    );
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

export default app;

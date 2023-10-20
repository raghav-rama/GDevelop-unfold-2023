import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(`
    <html>
      <body>
        <form action="/zk-signup" method="post">
          <button type="submit">Submit POST Request to /abc</button>
        </form>
      </body>
    </html>
  `);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;

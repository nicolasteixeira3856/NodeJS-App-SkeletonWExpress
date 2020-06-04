import { Request, Response } from 'express';

class IndexController {
    index (request: Request, response: Response) {
        return response.send("Hello World!")
    }
}

export default IndexController;
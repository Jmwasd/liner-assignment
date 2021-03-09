import { Request, Response } from 'express';
import { Session } from 'express-session'

declare module 'express-session' {
 interface Session {
    token: string;
  }
}
export type expressFn = (req: Request, res: Response) => void;
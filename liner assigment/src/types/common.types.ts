import { Request, Response } from 'express';
import {} from 'sequelize'

declare module 'express-session' {
 interface Session {
    token: string;
  }
}

export interface userType {
  id : number;
  theme_id : number;
  email : string;
  password : string;
  userName : string;
  createdAt : Date;
  updatedAt : Date;
}

export interface pageType {
  id: number;
  userId : number;
  pageUrl : string;
  createdAt : Date;
  updatedAt : Date;
}

export interface highlightType {
  highlightId : number;
  userId: number;
  pageId : number;
  colorHex : string;
  text : string;
  createdAt : Date;
  updatedAt : Date;
}


export interface themeType {
  id: number;
  colorNumber : number;
  colorHex : string;
  themeId : number;
  createdAt : Date;
  updatedAt : Date;
}


export type expressFn = (req: Request, res: Response) => void;

// export type createType = (_pageUrl : pageType, _highlight : bucketType) => void;
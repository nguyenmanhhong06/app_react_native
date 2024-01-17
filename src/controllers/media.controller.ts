import { NextFunction, Request, Response } from 'express'

export const uploadImagesController = async (req: Request, res: Response, next: NextFunction) => {
  // const url = await mediaServices.handleUploadFile(req)
  return res.json({
    // result: url
  })
}

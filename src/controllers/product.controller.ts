import { NextFunction, Request, Response } from 'express'
import { productService } from '~/services/product.service'

export const createProductController = async (req: Request, res: Response, next: NextFunction) => {
  const result = await productService.createProduct(req.body)
  return res.json({ message: 'Create product success', result })
}

export const getAllProductController = async (req: Request, res: Response, next: NextFunction) => {
  const result = await productService.getAllProduct()
  return res.json({ message: 'get all product success', result })
}

export const getProductIdController = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const result = await productService.getProductId(id)
  return res.json({ message: 'get product success', result })
}

import { Product } from '~/models/schemas/Product.schema'
import { databaseService } from './databases.service'
import { ObjectId } from 'mongodb'

class ProductService {
  async createProduct(payload: any) {
    const result = await databaseService.product.insertOne(new Product(payload))
    return result
  }

  async getAllProduct() {
    const result = await databaseService.product.find({}).toArray()
    return result
  }

  async getProductId(id: string) {
    const result = await databaseService.product.findOne({ _id: new ObjectId(id) })
    return result
  }
}
export const productService = new ProductService()

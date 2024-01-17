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
  async searchProduct(key: string) {
    const regexSearch = String(new RegExp(key))
    const result = await databaseService.product
      .find({
        $text: { $search: regexSearch }
      })
      .toArray()
    return result
  }
  async getProduct(status: string) {
    const result = await databaseService.product
      .aggregate([
        {
          $match: {
            type: Number(status)
          }
        }
      ])
      .toArray()
    return result
  }
}
export const productService = new ProductService()

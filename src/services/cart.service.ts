import { Cart } from '~/models/schemas/Cart.schema'
import { databaseService } from './databases.service'
import { ObjectId } from 'mongodb'

class CartService {
  async addToCart(user_id: string, product: any) {
    const cart = await databaseService.cart.findOne({
      product_id: new ObjectId(product.product_id),
      user_id: new ObjectId(user_id)
    })
    if (cart) {
      return await databaseService.cart.updateOne({ _id: cart._id }, { $set: { amount: cart.amount + 1 } })
    }
    const result = await databaseService.cart.insertOne(
      new Cart({
        ...product,
        user_id: new ObjectId(user_id),
        product_id: new ObjectId(product.product_id),
        amount: 1
      })
    )
  }
  async getCart(user_id: string) {
    return await databaseService.cart
      .aggregate([
        {
          $match: {
            user_id: new ObjectId(user_id)
          }
        },
        {
          $lookup: {
            from: 'products',
            localField: 'product_id',
            foreignField: '_id',
            as: 'result'
          }
        },
        {
          $addFields: {
            result: {
              $arrayElemAt: ['$result', 0]
            }
          }
        }
      ])
      .toArray()
  }
  async deleteCart(id: string, user_id: string) {
    return await databaseService.cart.deleteOne({ product_id: new ObjectId(id), user_id: new ObjectId(user_id) })
  }
}

export const cartService = new CartService()

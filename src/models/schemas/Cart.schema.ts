import { ObjectId } from 'mongodb'
import { ProductStatus } from '~/constant/enum'

interface CartType {
  _id?: ObjectId
  product_id: ObjectId
  user_id: ObjectId
  amount: number
  created_at?: Date
  updated_at?: Date
}
export class Cart {
  _id: ObjectId
  product_id: ObjectId
  user_id: ObjectId
  amount: number
  created_at: Date
  updated_at: Date
  constructor(product: CartType) {
    this._id = product._id || new ObjectId()
    this.product_id = product.product_id
    this.user_id = product.user_id
    this.amount = product.amount
    this.created_at = product.created_at || new Date()
    this.updated_at = product.updated_at || new Date()
  }
}

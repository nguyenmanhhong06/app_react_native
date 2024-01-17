import { ObjectId } from 'mongodb'
import { ProductStatus } from '~/constant/enum'

interface ProductType {
  _id?: ObjectId
  product_name: string
  price: string
  product_image: string
  product_sub_img: string[]
  color: string[]
  description: string
  type: ProductStatus
  created_at?: Date
  updated_at?: Date
}
export class Product {
  _id: ObjectId
  product_name: string
  price: string
  product_image: string
  product_sub_img: string[]
  color: string[]
  description: string
  type: ProductStatus
  created_at: Date
  updated_at: Date
  constructor(product: ProductType) {
    this._id = product._id || new ObjectId()
    this.product_name = product.product_name
    this.price = product.price
    this.product_image = product.product_image
    this.product_sub_img = product.product_sub_img
    this.color = product.color
    this.description = product.description
    this.type = product.type
    this.created_at = product.created_at || new Date()
    this.updated_at = product.updated_at || new Date()
  }
}

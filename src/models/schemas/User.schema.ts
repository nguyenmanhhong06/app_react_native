import { ObjectId } from 'mongodb'

interface UserType {
  _id?: ObjectId
  email: string
  password: string
  full_name: string
  created_at?: Date
  updated_at?: Date
}
export class User {
  _id: ObjectId
  email: string
  full_name: string
  password: string
  created_at: Date
  updated_at: Date
  constructor(user: UserType) {
    this._id = user._id || new ObjectId()
    this.full_name = user.full_name
    this.email = user.email
    this.password = user.password
    this.created_at = user.created_at || new Date()
    this.updated_at = user.updated_at || new Date()
  }
}

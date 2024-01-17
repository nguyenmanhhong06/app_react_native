import { Collection, Db, MongoClient, ServerApiVersion } from 'mongodb'
import { Cart } from '~/models/schemas/Cart.schema'
import { Medias } from '~/models/schemas/Media.schema'
import { Product } from '~/models/schemas/Product.schema'
import { User } from '~/models/schemas/User.schema'

const uri = `mongodb+srv://manhhong:123456789a@test.pxyp0xt.mongodb.net/test`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db('app-db')
  }
  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log(error)
    }
  }

  get user(): Collection<User> {
    return this.db.collection('users')
  }
  get medias(): Collection<Medias> {
    return this.db.collection('medias')
  }
  get product(): Collection<Product> {
    return this.db.collection('products')
  }
  get cart(): Collection<Cart> {
    return this.db.collection('carts')
  }
}
export const databaseService = new DatabaseService()

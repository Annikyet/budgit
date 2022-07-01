import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CategorySchema } from '../models/Category';
import { TransactionSchema } from '../models/Transaction';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Transactions = mongoose.model('Transactions', TransactionSchema)
  Categories = mongoose.model('Categories', CategorySchema)
}

export const dbContext = new DbContext()

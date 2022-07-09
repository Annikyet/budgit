import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TransactionsService {
async create(newTransaction) {
  const dbTransaction = await dbContext.Transactions.create(newTransaction)
  if (!dbTransaction) {
    throw new BadRequest("transaction does not exist")
  }
  return dbTransaction
}

async getAll(accountId) {
  if (!accountId) {
    throw new BadRequest("User not logged in")
  }
  const allTransactions = await dbContext.Transactions.find({accountId: accountId})
  return allTransactions
}


}

export const transactionsService = new TransactionsService()
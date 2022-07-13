import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { logger } from '../utils/Logger'

class TransactionsService {
async create(newTransaction) {
  const dbTransaction = await dbContext.Transactions.create(newTransaction)
  if (!dbTransaction) {
    throw new BadRequest("transaction does not exist")
  }
  return dbTransaction
}

// TODO need to populate categories
async getAll(accountId) {
  if (!accountId) {
    throw new BadRequest("User not logged in")
  }
  const allTransactions = await dbContext.Transactions.find({accountId: accountId})
  return allTransactions
}

async update(accountId, transactionId, update) {
  if (!transactionId) {
    throw new BadRequest('Bad transaction id')
  }
  let original = await dbContext.Transactions.findById(transactionId)
  if (!update) {
    throw new BadRequest('Transcaction DNE')
  }
  if (accountId != original.accountId) {
    throw new BadRequest('Das nacho transaction')
  }
  // logger.log('original: ' + original)
  // logger.log('update: ' + update)
  original.categoryId = update.categoryId || original.categoryId
  original.amount = update.amount || original.amount
  original.date = update.date || original.date
  original.payee = update.payee || original.payee
  original.comment = update.comment || original.comment
  update = await dbContext.Transactions.findByIdAndUpdate(transactionId, original)
  return update
}

async remove(accountId, transactionId) {
  if (!transactionId) {
    throw new BadRequest('Bad transaction id')
  }
  const original = await dbContext.Transactions.findById(transactionId)
  if (!original) {
    throw new BadRequest('Transaction DNE')
  }
  if (original.accountId != accountId) {
    throw new BadRequest('Das nacho transaction')
  }
  await dbContext.Transactions.findByIdAndRemove(transactionId)
  return await this.getAll(accountId)
}


}

export const transactionsService = new TransactionsService()

// async update(id, update) {
//   const original = await dbContext.Projects.findById(id).populate('creator', 'name picture')
//   if (original.creatorId.toString() != update.creatorId) {
//     throw new BadRequest("you don't have permission to edit that project")
//   }
//   original.name = update.name ? update.name : original.name
//   original.description = update.description ? update.description : original.description
//   original.category = update.category ? update.category : original.category
//   original.save()
//   return update
// }
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { getCents } from '../utils/Dollars'


// TODO build the service to get some real data
class TransactionsService {

  // async createProject(body){
  //   const res = await api.post('api/projects', body)
  //   logger.log('created project', res.data)
  //   AppState.accountProjects.push(res.data)
  // }

  async getAll() {
    const res = await api.get('api/transactions')
    // logger.log('transactions: ' + res.data)
    AppState.transactions = res.data
  }

  // TODO test this
  async update(transaction) {
    // transaction.amount = getCents(transaction.dollars)
    // console.log(transaction._id)
    const res = await api.put('api/transactions/' + transaction._id, transaction)
    // console.log('transactionUpdate: ' + res.data)
    // AppState.transactions.find((t) => t._id == transactionId) = res.data
  }
}

export const transactionsService = new TransactionsService()
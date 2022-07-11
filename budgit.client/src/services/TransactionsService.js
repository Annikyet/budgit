import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


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
}

export const transactionsService = new TransactionsService()
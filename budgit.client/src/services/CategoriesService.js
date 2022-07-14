import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { transactionsService } from "./TransactionsService"


class CategoriesService {
  async getAll() {
    const res = await api.get('api/categories')
    // console.log(res.data)
    AppState.categories = res.data
  }

  async create(newCatName) {
    const res = await api.post('api/categories', {name: newCatName})
    AppState.categories.push(res.data)
  }

  async getOverview() {
    // console.log('categories service call')
    await transactionsService.getAll()
    let overview = {
      name: 'Overview',
      budgeted: 0,
      targetAmt: 0, // this should eventually do something
      transactions: AppState.transactions
    }
    for (const c in AppState.categories) {
      overview.budgeted += AppState.categories[c].budgeted
    }
    AppState.activeCategory = overview
  }
}

export const categoriesService = new CategoriesService()
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


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
}

export const categoriesService = new CategoriesService()
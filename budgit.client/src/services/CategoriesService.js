import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class CategoriesService {
  async getAll() {
    const res = await api.get('api/categories')
    // console.log(res.data)
    AppState.categories = res.data
  }
}

export const categoriesService = new CategoriesService()
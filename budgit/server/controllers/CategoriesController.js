import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { categoriesService } from '../services/CategoriesService'
import BaseController from '../utils/BaseController'


export class CategoriesController extends BaseController {
  constructor() {
    super('api/categories')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .put('/:id', this.modify)
      .delete('/:id', this.remove)
  }

  async create(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const data = await categoriesService.create(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const data = await categoriesService.getAll(req.userInfo.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const data = await categoriesService.getById(req.params.id, req.userInfo.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async modify(req, res, next) {
    try {
      const data = await categoriesService.modify(req.body, req.params.id, req.userInfo.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const data = await categoriesService.remove(req.params.id, req.userInfo.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
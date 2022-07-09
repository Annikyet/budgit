import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { categoriesService } from '../services/CategoriesService'
import { transactionsService } from '../services/TransactionsService'
import BaseController from '../utils/BaseController'

// export class CategoriesController extends BaseController {
//   constructor() {
//     super('api/categories')
//     this.router
//       .use(Auth0Provider.getAuthorizedUserInfo)
//       .post('', this.create)
//       .get('', this.getAll)
//       .get('/:id', this.getById)
//       .put('/:id', this.modify)
//       .delete('/:id', this.remove)
//   }

export class TransactionsController extends BaseController {
  constructor() {
    super('api/transactions')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .get('', this.getAll)
  }

  async create(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const dbTransaction = await transactionsService.create(req.body)
      return res.send(dbTransaction)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const allTransactions = await transactionsService.getAll(req.userInfo.id)
      return res.send(allTransactions)
    } catch (error) {
      next(error)
    }
  }
}
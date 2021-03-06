import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { categoriesService } from '../services/CategoriesService'
import { transactionsService } from '../services/TransactionsService'
import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'

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
      .put('/:id', this.update)
      .delete('/:id', this.remove)
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

  // TODO test this
  async update(req, res, next) {
    try {
      // I'm tired of losing the people I love...
      // logger.log(req)
      const updatedTransaction = await transactionsService.update(req.userInfo.id, req.params.id, req.body)
      // I'm tired of not being enough...
      return res.send(updatedTransaction)
    } catch (error) {
      // I'm tired of life...
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const transList = await transactionsService.remove(req.userInfo.id, req.params.id)
      return res.send(transList)
    } catch (error) {
      next(error)
    }
  }
}
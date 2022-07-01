import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'


class CategoriesService {
  async create(newCategory) {
    const dbCategory = await dbContext.Categories.create(newCategory)
    if (!dbCategory) {
      throw new BadRequest('Category does not exist')
    }
    return dbCategory
  }
  
  async getAll(accountId) {
    if (!accountId) {
      throw new BadRequest('you must be logged in')
    }
    const categories = await dbContext.Categories.find({accountId: accountId})
    return categories
  }

  async getById(categoryId, accountId) {
    const category = await dbContext.Categories.find({accountId: accountId, _id: categoryId})
    if (!category){
      throw new BadRequest('Invalid Id')
    }
    // if (accountId != category.accountId) {
    //   // TODO this still is a data leak, because it tells the attacker that the category exists
    //   throw new BadRequest('das nacho category')
    // }
    return category
  }
  
  // TODO modify()
  async modify(update, categoryId, accountId) {
    let original = await this.getById(categoryId, accountId)
    if (!original) {
      throw new BadRequest('category does not exist')
    }
    original.name = update.name || original.name
    original.budgeted = update.budgeted || original.budgeted
    original.targetAmt = update.targetAmt || original.targetAmt
    original.targetStart = update.targetStart || original.targetStart
    original.targetFreq = update.targetFreq || original.targetFreq
    original.targetUnit = update.targetUnit || original.targetUnit
    update = await dbContext.Categories.findByIdAndUpdate(categoryId, original)
  }
  
  // TODO delete()
}
  
export const categoriesService = new CategoriesService
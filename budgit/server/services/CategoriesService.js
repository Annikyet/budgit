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
    const categories = await dbContext.Categories.find({accountId: accountId}).populate('transactions')
    return categories
  }

  async getById(categoryId, accountId) {
    // needs to be findOne to not wrap object inside an object
    const category = await dbContext.Categories.findOne({accountId: accountId, _id: categoryId}).populate('transactions')
    if (!category){
      throw new BadRequest('Invalid Id')
    }
    return category
  }
  
  // TODO modify()
  async modify(update, categoryId, accountId) {
    let original = await this.getById(categoryId, accountId)
    if (!original) {
      throw new BadRequest('category does not exist')
    }
    // throw new BadRequest(original)
    original.name = update.name || original.name
    original.budgeted = update.budgeted || original.budgeted
    original.targetAmt = update.targetAmt || original.targetAmt
    original.targetStart = update.targetStart || original.targetStart
    original.targetFreq = update.targetFreq || original.targetFreq
    original.targetUnit = update.targetUnit || original.targetUnit
    await original.save()
    // this works because original is a mongoose object - but it only works if it's findOne - not an object of object
    return original
  }
  
  async remove(categoryId, accountId) {
    const category = await this.getById(categoryId, accountId)
    if (!category) {
      throw new BadRequest('category does not exist')
    }
    category.remove()
    return category
  }
}
  
export const categoriesService = new CategoriesService
import mongoose from 'mongoose'
import { TransactionSchema } from './Transaction'
const Schema = mongoose.Schema


export const CategorySchema = new Schema(
  {
    /** @property {ObjectId} [accountId] -ID of the account this category belongs to */
    accountId: {type: Schema.Types.ObjectId, required: true},
    
    /** @property {String} [name] -name of the category */
    name: {type: String, required: true},

    /** @property {Number} [budgeted] -amount currently budgeted towards this category */
    budgeted: {type: Number, default: 0},

    /** @property {Number} [targetAmt] -target amount to be budgeted */
    // TODO default?
    targetAmt: {type: Number, default: 0},

    /** @property {String} [targetStart] -start date for target cycle, in ISO format ('YYYY-MM-DD') */
    // TODO default?
    targetStart: {type: String},

    /** @property {Number} [targetFreq] -frequency of target refill, in targetUnits */
    // TODO default?
    targetFreq: {type: String},

    /** @property {String} [targetUnit] -unit of refill frequency */
    targetUnit: {
      type: String,
      enum: [
        'day',      // days
        'month',    // calendar months (always lands on same day of the month)
        'year',     // calendar years (always lands on same date)
        'once',     // target is needed only once, ie savings goal
        'balance'   // target is always needed, ie emergency fund
      ]
      // TODO default?
    }
  },
  {timestamps: true, toJSON: {virtuals: true}}
)

// TODO this probably won't work
CategorySchema.virtual('transactions', {
  localField: '_id',
  foreignField: 'categoryId',
  ref: 'Transactions'
  // ,justOne: true
})
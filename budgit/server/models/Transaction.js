import mongoose from 'mongoose'
const Schema = mongoose.Schema


export const TransactionSchema = new Schema(
  {
    /** @property {ObjectId} [accountId] -ID of the account this transaction belongs to */
    accountId: {type: Schema.Types.ObjectId, required: true},

    /** @property {ObjectId} [categoryId] -ID of the spending category this transaction belongs to */
    categoryId: {type: Schema.Types.ObjectId},
    
    /** @property {Number} [amount] - number of cents spent (negative is income) */
    amount: {type: Number, required: true},
    
    /** @property {String} [date] -ISO date this transaction occured ('YYYY-MM-DD') */
    date: {type: String, required: true},
    
    /** @property {String} [payee] -name of who this transaction was paid to/from */
    payee: {type: String},
    
    /** @property {String} [comment] -user comments about transaction */
    comment: {type: String}
  }
)
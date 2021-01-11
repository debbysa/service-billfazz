import { Config } from './classes/Config'
import { DepositBillFazz } from './classes/Deposit-billfazz'
require('dotenv').config()

let config = new Config(
  process.env.URL || '',
  process.env.USERNAME || '',
  process.env.PASSWORD || ''
)

let depositService = new DepositBillFazz(config)
// get deposit
depositService.getDeposit()

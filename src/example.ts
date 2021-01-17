import { PrepaidTransaction } from './classes/prepaid/PrepaidTransaction-billfazz'
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

let prepaidService = new PrepaidTransaction(config)

const req = {
  destinationNo: '081330441663',
  refId: 'ORDER-001',
  productCode: 'TLKM5',
}

// prepaidService.doPrepaidTransaction(req)

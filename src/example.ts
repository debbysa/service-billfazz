import { PrepaidTransaction } from './classes/prepaid/PrepaidTransaction-billfazz'
import { Config } from './classes/Config'
import { DepositBillFazz } from './classes/Deposit-billfazz'
import { AdviceBillFazz } from './classes/Advice-billfazz'
import { InquiryPostpaid } from '.'
require('dotenv').config()

let config = new Config(
  process.env.URL || '',
  process.env.USERNAME || '',
  process.env.PASSWORD || ''
)

let depositService = new DepositBillFazz(config)
// get deposit
// depositService.getDeposit()

let prepaidService = new PrepaidTransaction(config)

const req = {
  destinationNo: '081330111222',
  refId: 'ORDER-011',
  productCode: 'TLKM5',
}
// console.log(req)

// prepaidService.doPrepaidTransaction(req)

let advice = new AdviceBillFazz(config)
// advice.checkStatusByRefId('ORDER-011')

let inquiryBpjs = new InquiryPostpaid(config)
// inquiryBpjs.getInquiryPostpaidBpjs({
//   destinationNo: '8800112233445',
//   productCode: 'BPJSKS',
//   month: 1,
// })

import { Config } from './classes/Config'
import { PrepaidTransaction } from './classes/prepaid/PrepaidTransaction-billfazz'
import { InformationElectricityPrepaid } from './classes/prepaid/GetInformationElectricityPrepaid'
import { InformationEWalletPrepaid } from './classes/prepaid/GetInformationEWalletPrepaid'
import { InquiryPostpaid } from './classes/postpaid/InquiryPostpaid'
import { PostpaidTransaction } from './classes/postpaid/PostpaidTransaction-billfazz'
import { AdviceBillFazz } from './classes/Advice-billfazz'
import { DepositBillFazz } from './classes/Deposit-billfazz'
import { ProductBillFazz } from './classes/Product-billfazz'
import { ProductType } from './interfaces/enum'
import {
  IprepaidTransaction,
  IElectricityInformation,
  IEWalletInformation,
} from './interfaces/prepaid-transaction.interface'
import {
  InquiryPostpaidGeneral,
  InquiryPostpaidBpjs,
  InquiryPostpaidPbb,
  IPostpaidTransaction,
} from './interfaces/postpaid-transaction.interface'

export {
  Config,
  PrepaidTransaction,
  InformationElectricityPrepaid,
  InformationEWalletPrepaid,
  InquiryPostpaid,
  PostpaidTransaction,
  AdviceBillFazz,
  DepositBillFazz,
  ProductBillFazz,
  // interface
  ProductType,
  IprepaidTransaction,
  IElectricityInformation,
  IEWalletInformation,
  InquiryPostpaidGeneral,
  InquiryPostpaidBpjs,
  InquiryPostpaidPbb,
  IPostpaidTransaction,
}

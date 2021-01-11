export interface InquiryPostpaidGeneral {
  destinationNo: string
  productCode: string
}

export interface InquiryPostpaidBpjs {
  destinationNo: string
  productCode: string
  month: number
}

export interface InquiryPostpaidPbb {
  destinationNo: string
  productCode: string
  year: string
}

export interface IPostpaidTransaction {
  inquiryId: string
  refId: string // order id or reference id
  callbackUrl?: string
}

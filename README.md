# Service BillFazz

You want to connect your API to a financial service solution BillFazz? Now, you can use this API service to handle it.

## Installation

Install `service-billfaz`

```bash
npm install service-billfazz
```

Import (in Typescript) or Require (in Javascript) the package in your project

```bash
// typescript
import {
    Config,
    PrepaidTransaction,
    InformationElectricityPrepaid,
    InformationEWalletPrepaid,
    InquiryPostpaid,
    PostpaidTransaction,
    AdviceBillFazz,
    DepositBillFazz,
    ProductBillFazz,
    ProductType,
    IprepaidTransaction,
    IElectricityInformation,
    IEWalletInformation,
    InquiryPostpaidGeneral,
    InquiryPostpaidBpjs,
    InquiryPostpaidPbb,
    IPostpaidTransaction,
} from "service-billfazz"

// javascript
const {
    Config,
    PrepaidTransaction,
    InformationElectricityPrepaid,
    InformationEWalletPrepaid,
    InquiryPostpaid,
    PostpaidTransaction,
    AdviceBillFazz,
    DepositBillFazz,
    ProductBillFazz,
    ProductType,
    IprepaidTransaction,
    IElectricityInformation,
    IEWalletInformation,
    InquiryPostpaidGeneral,
    InquiryPostpaidBpjs,
    InquiryPostpaidPbb,
    IPostpaidTransaction,
} = require("service-billfazz)
```

## Quick Start

This is example to implement service-billfazz in Javascript:

```bash
const {
    Config,
    PrepaidTransaction,
    InformationElectricityPrepaid,
    InformationEWalletPrepaid,
    InquiryPostpaid,
    PostpaidTransaction,
    AdviceBillFazz,
    DepositBillFazz,
    ProductBillFazz,
    ProductType,
    IprepaidTransaction,
    IElectricityInformation,
    IEWalletInformation,
    InquiryPostpaidGeneral,
    InquiryPostpaidBpjs,
    InquiryPostpaidPbb,
    IPostpaidTransaction,
} = require("service-billfazz");

// config your domain_url, api_key, and api_secret to access BillFazz
const config = new Config(
    "domain_url",
    "username or api_key",
    "password or api_secret")

// using endpoint of deposit
const depositService = new DepositBillFazz(config)

// get deposit
depositService.getDeposit()
```

note : Advice is using for Order check

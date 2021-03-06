import axios from 'axios'
import { Config } from '../Config'
import {
  InquiryPostpaidGeneral,
  InquiryPostpaidBpjs,
  InquiryPostpaidPbb,
} from '../../interfaces/postpaid-transaction.interface'

export class InquiryPostpaid {
  private cfg: Config

  constructor(config: Config) {
    this.cfg = config
  }

  getInquiryPostpaidGeneral = async (data: InquiryPostpaidGeneral) => {
    let headers = {
      'Content-Type': 'application/json',
    }

    try {
      const response = await axios.post(this.cfg.domain_url + '/api/v1/postpaid/inquiry', data, {
        headers,
        auth: {
          username: this.cfg.api_key || '',
          password: this.cfg.api_secret || '',
        },
      })
      return {
        data: response.data,
        status: response.status,
      }
    } catch (error) {
      if (error.response) {
        console.log('inquiry postpaid response = ', error.response.data)
        console.log('status error = ', error.response.status)
        return {
          status: error.response.status,
          data: error.response.data,
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request)
        return {
          message: error.request,
        }
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('inquiry postpaid Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }

  getInquiryPostpaidBpjs = async (data: InquiryPostpaidBpjs) => {
    let headers = {
      'Content-Type': 'application/json',
    }

    try {
      const response = await axios.post(this.cfg.domain_url + '/api/v1/postpaid/inquiry', data, {
        headers,
        auth: {
          username: this.cfg.api_key || '',
          password: this.cfg.api_secret || '',
        },
      })

      console.log(response.data)

      return {
        data: response.data,
        status: response.status,
      }
    } catch (error) {
      if (error.response) {
        console.log('response data = ', error.response.data)
        console.log('status error = ', error.response.status)
        return {
          status: error.response.status,
          data: error.response.data,
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request)
        return {
          message: error.request,
        }
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }

  getInquiryPostpaidPbb = async (data: InquiryPostpaidPbb) => {
    let headers = {
      'Content-Type': 'application/json',
    }

    try {
      const response = await axios.post(this.cfg.domain_url + '/api/v1/postpaid/inquiry', data, {
        headers,
        auth: {
          username: this.cfg.api_key || '',
          password: this.cfg.api_secret || '',
        },
      })

      return {
        data: response.data,
        status: response.status,
      }
    } catch (error) {
      if (error.response) {
        console.log('response data = ', error.response.data)
        console.log('status error = ', error.response.status)
        return {
          status: error.response.status,
          data: error.response.data,
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request)
        return {
          message: error.request,
        }
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }
}

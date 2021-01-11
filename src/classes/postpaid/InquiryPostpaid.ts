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
    try {
      const response = await axios.post(this.cfg + '/api/v1/postpaid/inquiry', data, {
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

  getInquiryPostpaidBpjs = async (data: InquiryPostpaidBpjs) => {
    try {
      const response = await axios.post(this.cfg + '/api/v1/postpaid/inquiry', data, {
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

  getInquiryPostpaidPbb = async (data: InquiryPostpaidPbb) => {
    try {
      const response = await axios.post(this.cfg + '/api/v1/postpaid/inquiry', data, {
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

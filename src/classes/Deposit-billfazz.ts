import axios from 'axios'
import { Config } from './Config'

export class DepositBillFazz {
  private cfg: Config

  constructor(config: Config) {
    this.cfg = config
  }

  getDeposit = async () => {
    try {
      const response = await axios.get(this.cfg.domain_url + '/api/v1/app/deposits/balance', {
        auth: {
          username: this.cfg.api_key || '',
          password: this.cfg.api_secret || '',
        },
      })

      console.log('deposit response = ', response.data)
      console.log('status = ', response.status)

      return {
        data: response.data,
        status: response.status,
      }
    } catch (error) {
      if (error.response) {
        console.log('deposit response = ', error.response.data)
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
        console.log('getDeposit Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }
}

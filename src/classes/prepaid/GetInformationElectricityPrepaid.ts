import axios from 'axios'
import { IElectricityInformation } from '../../interfaces/prepaid-transaction.interface'
import { Config } from '../Config'

export class InformationElectricityPrepaid {
  private cfg: Config

  constructor(config: Config) {
    this.cfg = config
  }

  getInformationElectricityPrepaid = async (data: IElectricityInformation) => {
    let headers = {
      'Content-Type': 'application/json',
    }

    try {
      const response = await axios.post(this.cfg.domain_url + '/api/v1/prepaid/info', data, {
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
        console.log('electricity info response = ', error.response.data)
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
        console.log('electricity info Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }
}

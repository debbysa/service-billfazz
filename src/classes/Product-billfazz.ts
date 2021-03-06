import axios from 'axios'
import { Config } from './Config'
import { ProductType } from '../interfaces/enum'

export class ProductBillFazz {
  private cfg: Config

  constructor(config: Config) {
    this.cfg = config
  }

  getAllProduct = async () => {
    try {
      const response = await axios.get(this.cfg.domain_url + '/api/v1/products/client', {
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
        console.log('getAllProduct response = ', error.response.data)
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
        console.log('getAllProduct Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }

  getProductBySearchQuery = async (searchQuery: string) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/api/v1/products/client?searchQuery=${searchQuery}`,
        {
          auth: {
            username: this.cfg.api_key || '',
            password: this.cfg.api_secret || '',
          },
        }
      )

      return {
        data: response.data,
        status: response.status,
      }
    } catch (error) {
      if (error.response) {
        console.log('getProductBySearchQuery response = ', error.response.data)
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
        console.log('getProductBySearchQuery Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }

  getProductByType = async (type: ProductType) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/api/v1/products/client?type=${type}`,
        {
          auth: {
            username: this.cfg.api_key || '',
            password: this.cfg.api_secret || '',
          },
        }
      )

      return {
        data: response.data,
        status: response.status,
      }
    } catch (error) {
      if (error.response) {
        console.log('getProductByType response = ', error.response.data)
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
        console.log('getProductByType Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }

  getProductByOperatorType = async (operatorType: string) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/api/v1/products/client?operatorType=${operatorType}`,
        {
          auth: {
            username: this.cfg.api_key || '',
            password: this.cfg.api_secret || '',
          },
        }
      )

      return {
        data: response.data,
        status: response.status,
      }
    } catch (error) {
      if (error.response) {
        console.log('getProductByOperatorType response = ', error.response.data)
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
        console.log('getProductByOperatorType Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }

  getActiveProduct = async (status: boolean) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/api/v1/products/client?active=${status}`,
        {
          auth: {
            username: this.cfg.api_key || '',
            password: this.cfg.api_secret || '',
          },
        }
      )

      return {
        data: response.data,
        status: response.status,
      }
    } catch (error) {
      if (error.response) {
        console.log('getActiveProduct response = ', error.response.data)
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
        console.log('getActiveProduct Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }

  getProblemProduct = async (status: boolean) => {
    try {
      const response = await axios.get(
        this.cfg.domain_url + `/api/v1/products/client?problem=${status}`,
        {
          auth: {
            username: this.cfg.api_key || '',
            password: this.cfg.api_secret || '',
          },
        }
      )

      return {
        data: response.data,
        status: response.status,
      }
    } catch (error) {
      if (error.response) {
        console.log('getProblemProduct response = ', error.response.data)
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
        console.log('getProblemProduct Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }
}

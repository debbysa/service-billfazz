export class Config {
  domain_url: string
  api_key: string
  api_secret: string

  get targetUrl() {
    return this.domain_url
  }

  constructor(domain_url: string, api_key: string, api_secret: string) {
    this.domain_url = domain_url
    this.api_key = api_key
    this.api_secret = api_secret
  }
}

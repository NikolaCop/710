import { ProxyState } from '../AppState.js'
import { api } from './AxiosService.js'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      ProxyState.account = res.data
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }
}

export const accountService = new AccountService()

import { ClientOptions, SnippetsClient } from '@ranna-go/ranna-ts';
import LocalStorageUtil from './localstorage';
import { apiKey } from './store';

export class ClientWrapper extends SnippetsClient {
  constructor(endpoint: string, options?: ClientOptions) {
    const key = LocalStorageUtil.get<string>('apikey');
    if (key) apiKey.set(key);
    super(endpoint, options);
  }

  async login(
    username: string,
    masterKey: string,
    remember: boolean = false
  ): Promise<any> {
    const res = await client.exchangeAPIToken(username, masterKey);
    apiKey.set(res.token);
    if (remember) LocalStorageUtil.set('apikey', res.token);
  }

  logout() {
    apiKey.set('');
    LocalStorageUtil.del('apikey');
  }
}

export const client = new ClientWrapper(process.env.snippetsEndpoint);

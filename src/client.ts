import { ClientOptions, SnippetsClient } from '@ranna-go/ranna-ts';
import LocalStorageUtil from './localstorage';
import { apiKey } from './store';

export class ClientWrapper extends SnippetsClient {
  constructor(endpoint: string, options?: ClientOptions) {
    super(endpoint, options);
  }

  logout() {
    apiKey.set('');
    LocalStorageUtil.del('apikey');
  }
}

export const client = new ClientWrapper(process.env.snippetsEndpoint);
const key = LocalStorageUtil.get<string>('apikey');
if (key) apiKey.set(key);

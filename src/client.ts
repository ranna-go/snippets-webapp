import { SnippetsClient } from '@ranna-go/ranna-ts';
import LocalStorageUtil from './localstorage';
import { apiKey } from './store';

export const client = new SnippetsClient(process.env.snippetsEndpoint);
const key = LocalStorageUtil.get<string>('apikey');
if (key) {
  apiKey.set(key);
  client.clientOptions.auth = 'bearer ' + key;
}

import { writable } from 'svelte/store';
import LocalStorageUtil from './localstorage';

export const masterKey = writable('');
export const apiKey = writable(LocalStorageUtil.get('apikey', ''));

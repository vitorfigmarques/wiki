import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  storage = localStorage;
  constructor() {}

  getItem(key: string) {
    return JSON.parse(this.storage.getItem(key) as any);
  }

  setItem(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  hasItem(key: string) {
    return this.storage.getItem(key) !== null;
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

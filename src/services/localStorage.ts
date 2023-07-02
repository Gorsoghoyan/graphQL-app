import { PersistentStorage } from "../types";

class LocalStorage implements PersistentStorage {
  getItem(key: string): string | null {
    const item = localStorage.getItem(key);

    if (item === null) return null;

    if (item === "null") return null;
    if (item === "undefined") return null;

    return JSON.parse(item);
  }
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
};

export const localStorage = new LocalStorage();
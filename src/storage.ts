class Storage {
  storage = localStorage ? localStorage : sessionStorage;

  set(key: string, value: any) {
    this.storage.setItem(`${key}`, JSON.stringify(value));
  }

  get(key: string) {
    try {
      return JSON.parse(this.storage.getItem(`${key}`) || '');
    } catch (err) {
      return this.storage.getItem(`${key}`);
    }
  }

  delete(key: string) {
    this.storage.removeItem(`${key}`);
  }

  clear() {
    this.storage.clear();
  }
}

export default new Storage();

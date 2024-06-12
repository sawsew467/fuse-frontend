const webLocalStorage = {
  set(key: string, rawValue: any) {
    localStorage.setItem(key, JSON.stringify(rawValue));
  },

  get(key: string) {
    const rawData = localStorage.getItem(key) || '';
    const data = rawData ? JSON.parse(rawData) : null;

    return data;
  },
};

export default webLocalStorage;

type Listener = (params?: any) => void;
interface ListenerMap {
  [name: string]: Set<Listener>;
}

class Revent {
  listenerMap: ListenerMap = {};

  on = (name: string, listener: Listener) => {
    this.listenerMap[name]
      ? this.listenerMap[name].add(listener)
      : (this.listenerMap[name] = new Set().add(listener));
  };
  emit = (name: string, ...args: any[]) => {
    this.listenerMap[name].forEach(listener => {
      listener(...args);
    });
  };
  remove = (name: string, listener: Listener) => {
    this.listenerMap[name] && this.listenerMap[name].delete(listener);
  };
  clear = (name?: string) => {
    if (name) {
      this.listenerMap[name].clear();
    } else {
      Object.keys(this.listenerMap).forEach(name => {
        this.listenerMap[name].clear();
      });
    }
  };
}

export default Revent;

const _throttleCache: any = {};
export const throttle = (id: string, ms: number, fn: any) => {
  if (ms <= 0) fn();
  const t = _throttleCache;
  if (!t[id]) {
    t[id] = {
      lock: false,
      timer: undefined,
    };
  }
  if (t[id].timer) {
    clearTimeout(t[id].timer);
  }
  t[id].timer = setTimeout(() => {
    t[id].lock = false;
  }, ms);
  if (!t[id].lock) {
    fn();
  }
  t[id].lock = true;
};

export default throttle;
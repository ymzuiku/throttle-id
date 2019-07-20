# throttle-id

> Size only 296b, no dependencies

Use `id` split cache sapce's throttle

```ts
import throttle from 'throttle-id';

throttle('the-id', 300, () => {
  console.log('same id, throttle at 300ms');
});
```

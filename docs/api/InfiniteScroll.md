---
---

# InfiniteScroll

InfiniteScroll is a React component which uses IntersectionObserver to implement the functionality of infinitely scrolling.

## Parameters

```tsx
interface Props {
  isLoading: boolean;
  hasMore: boolean;
  next: () => unknown;
  threshold?: number;
  root?: Element | Document | null;
  rootMargin?: string;
  reverse?: boolean;
  children?: JSX.Element[];
}

declare function InfiniteScroll({
  isLoading,
  hasMore,
  next,
  threshold,
  root,
  rootMargin,
  reverse,
  children,
}: Props): JSX.Element;
```

### `isLoading`

`InfiniteScroll` will use `isLoading` to determine whether it can call `next()` or not. If `isLoading` is `true`, then `InfiniteScroll` will stop calling `next()` when the last item is displayed in the viewport.

### `hasMore`

Used to determine whether there are more items to display. If the last item is displayed in the viewport and `hasMore` is `true`, then `InfiniteScroll` will call `next()`.

### `next`

If `isLoading` is `false` and `hasMore` is `true`, then this function will be called when this last item is displayed in the viewport.

### `threshold`

Indicate at what percentage of the last item's visibility the `next` function should be called. 0 means `next` will be called as soon as the last item shows up in the viewport. 1 means that `next` will be called only when the last item is fully visible in the viewport.

The range of `threshold` is 0 ~ 1, and the default value is `0`.

### `root`

This property will be used as the viewport for checking visibility of the last or the first item. Must be the ancestor of the item. Defaults to the browser viewport.

### `rootMargin`

A string which specifies a set of offsets to add to the root's bounding box.

:::tip

Since `InfiniteScroll` is implemented with IntersectionObserver, you can find more information about `threshold`, `root` and `rootMargin` on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

:::

### `reverse`

Set this property to `true` means that `InfiniteScroll` will call `next` when the first item shows up in the viewport. This property is usually used to implement the chatbox behavior.

:::note

If your `next` function prepend the new data to the previous data, the first item will always show up on the top. This will cause `InfiniteScroll` continuously call `next`. Make sure write some code to prevent this circumstance or use [`useScrollToOld`](./useScrollToOld.md);

:::

### `children`

`InfiniteScroll` will pass ref to your children, if your children is a custom component, make sure using `React.forwardRef` to forward ref to its container.

---
---

# InfiniteScroll

InfiniteScroll is a React component which uses IntersectionObserver to implement the functionality of infinitely scrolling.

## Parameters

```tsx
interface Data<T> {
  key?: React.Key;
  props: T;
}

interface Props<T, P extends HTMLElement> {
  isLoading: boolean;
  hasMore: boolean;
  Item: React.ForwardRefExoticComponent<T & React.RefAttributes<P>>;
  itemData: Data<T>[];
  next: () => unknown;
}

function InfiniteScroll<T, P extends HTMLElement>({
  isLoading,
  hasMore,
  Item,
  itemData,
  next,
}: Props<T, P>): JSX.Element;
```

### `isLoading`

`InfiniteScroll` will use `isLoading` to determine whether it can call `next()` or not. If `isLoading` is `true`, then `InfiniteScroll` will stop calling `next()` when the last item is displayed in the viewport.

### `hasMore`

Used to determine whether there are more items to display. If the last item is displayed in the viewport and `hasMore` is `true`, then `InfiniteScroll` will call `next()`.

### `Item`

A React component with `React.forwardedRef`. `InfiniteScroll` will pass a callback function to the last item's ref in order to determine whether the last item is displayed in the viewport.

### `itemData`

An array of objects. The object in this array has 2 properties called `key` and `props`.

#### `key`

Since `InfiniteScroll` will use `map()` to generate the `Item` component, it needs a key to help React distinguish between components. If the items in `InfiniteScroll` will be deleted or moved, then you should specify a key.

If `key` is not specified, then `InfiniteScroll` will use the index as a key.

#### `props`

The properties that will be passed to `Item` component. Its type should be the same as `Item`'s props.

### `next`

If `isLoading` is `false` and `hasMore` is `true`, then this function will be called when this last item is displayed in the viewport.

### `threshold`

Indicate at what percentage of the last item's visibility the `next` function should be called. 0 means `next` will be called as soon as the last item shows up in the viewport. 1 means that `next` will be called only when the last item is fully visible in the viewport.

Default value is `0`.

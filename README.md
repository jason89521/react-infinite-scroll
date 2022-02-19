# React Infinite Scroll Component

[![npm (scoped)](https://img.shields.io/npm/v/@yuxuan-zheng/react-infinite-scroll)](https://www.npmjs.com/package/@yuxuan-zheng/react-infinite-scroll)
[![npm](https://img.shields.io/npm/dm/@yuxuan-zheng/react-infinite-scroll)](https://www.npmjs.com/package/@yuxuan-zheng/react-infinite-scroll)

A react library provides a react component that implements functionality of infinite scrolling.

## Usage

```tsx
interface ItemProps {
  foo: string;
  bar: number;
}

function Item(props: ItemProps, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <div className="item" ref={ref}>
      {props.foo}, {props.bar}
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadNext = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (page === 3) {
        setHasMore(false);
        return;
      }
      setPage(page + 1);
    }, 1000);
  };

  const createItemData = () => {
    const data = [];
    for (let i = 0; i < page * 10; i++) {
      data.push({
        key: i.toString(),
        props: {
          foo: 'hello',
          bar: i,
        },
      });
    }
    return data;
  };

  return (
    <div className="box">
      <InfiniteScroll
        itemData={createItemData()}
        Item={React.forwardRef(Item)}
        isLoading={isLoading}
        hasMore={hasMore}
        next={loadNext}
      />
    </div>
  );
}
```

## Types

```ts
interface Data<T> {
  key?: string;
  props: T;
}

interface Props<T, P extends HTMLElement> {
  isLoading: boolean;
  hasMore: boolean;
  Item: React.ForwardRefExoticComponent<T & React.RefAttributes<P>>;
  itemData: Data<T>[];
  next: () => unknown;
}
```

## Props

| name        | description                                                                                                                                                                                               |
| :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isLoading` | Pass `true` when starting loading data; otherwise pass `false`                                                                                                                                            |
| `hasMore`   | Pass `true` when there is no more data to load; otherwise pass `false`                                                                                                                                    |
| `Item`      | A custom component wrapped with `React.forwardRef`. Make sure that the custom component pass ref to its container element, otherwise this component will not work.                                        |
| `itemData`  | This component will use the `key` property to help React identify which items have changed, added or removed. If the `key` property is not specified, this component will use the index of item as a key. |
| `next`      | Function that will be called when the last item displayed in viewport                                                                                                                                     |


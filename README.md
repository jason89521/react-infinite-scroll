# React Infinite Scroll Component

[![npm (scoped)](https://img.shields.io/npm/v/@yuxuan-zheng/react-infinite-scroll)](https://www.npmjs.com/package/@yuxuan-zheng/react-infinite-scroll)
[![npm](https://img.shields.io/npm/dm/@yuxuan-zheng/react-infinite-scroll)](https://www.npmjs.com/package/@yuxuan-zheng/react-infinite-scroll)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@yuxuan-zheng/react-infinite-scroll)](https://www.npmjs.com/package/@yuxuan-zheng/react-infinite-scroll)

A react library provides a react component that implements functionality of infinite scrolling.

## Usage

```tsx
interface Data {
  id: number;
  username: string;
}

function Item(props: Data, ref: React.ForwardedRef<HTMLLIElement>) {
  return (
    <li ref={ref}>
      <span>{props.username}</span>
    </li>
  );
}

function InfiniteList() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setpage] = useState(1);

  useEffect(() => {
    fakeApi(0).then(res => {
      setData(res);
    });
  }, []);

  const fetchNext = async () => {
    setIsLoading(true);
    const newData = await fakeApi(page);
    setData([...data, ...newData]);
    setpage(page + 1);
    setIsLoading(false);
  };

  const itemData = data.map(datum => ({
    props: datum,
  }));

  return (
    <ul>
      <InfiniteScroll
        isLoading={isLoading}
        hasMore={true}
        Item={React.forwardRef(Item)}
        itemData={itemData}
        next={fetchNext}
      />
    </ul>
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

## Todos

- [ ] Completed demo page
- [ ] Custom IntersectionObserver options
- [ ] Custom order to trigger calling next()
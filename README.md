# React Infinite Scroll Component

A react library provides a react component that implements functionality of infinite scrolling.

## Usage

```tsx
function Item(props: { bar: number }, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <div ref={ref}>
      {props.bar}
    </div>
  );
}
const WithRef = React.forwardRef(Item);

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

  const createItemsProps = () => {
    const itemsProps = [];
    for (let i = 0; i < page * 10; i++) {
      itemsProps.push({ bar: i });
    }
    return itemsProps;
  };

  return (
    <div className="box">
      <InfiniteScroll
        itemsProps={createItemsProps()}
        Item={WithRef}
        isLoading={isLoading}
        hasMore={hasMore}
        next={loadNext}
        loader="loading..."
      />
    </div>
  );
}
```

## Props

| name         | type                                                                       | description                                                                                                                                                        |
| :----------- | :------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isLoading`  | `boolean` **required**                                                     | Pass `true` when starting loading data; otherwise pass `false`                                                                                                     |
| `hasMore`    | `boolean` **required**                                                     | Pass `true` when there is no more data to load; otherwise pass `false`                                                                                             |
| `loader`     | `React.ReactNode`                                                          | This property will be shown in the bottom when `isLoading` is `true`                                                                                               |
| `Item`       | `React.ForwardRefExoticComponent<T & React.RefAttributes<P>>` **required** | A custom component wrapped with `React.forwardRef`. Make sure that the custom component pass ref to its container element, otherwise this component will not work. |
| `itemsProps` | `T[]` **required**                                                         | Array of `Item`'s properties.                                                                                                                                      |
| `next`       | `() => unknown` **required**                                               | A function that will be called when the last item displayed in viewport                                                                                            |


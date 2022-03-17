# useScrollToOld

When you are using reverse `InfiniteScroll`, you may want to record the position before prepending the new data and then scroll to the original position after prepending the new data. `useScrollToOld` helps you to do this.

## Parameters

```tsx
declare function useScrollToOld<T extends HTMLElement>(ref: React.RefObject<T>): [() => void, () => void];
```

### `ref`

Rhe reference of your scrollable container.

## Returns

### `scrollToOld`

The first value in the returned array is `scrollToOld`. It allow you to scroll to the original position.

:::note

If you didn't specify the old scroll position, then `scrollToOld` will scroll your scrollable container to the top.

:::

### `recordScroll`

The second value in the returned array is `recordScroll`. Use `recordScroll` to record the original scroll position.

## Example

```tsx
function ReverseExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Data[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);
  const [scrollToOld, recordScroll] = useScrollToOld(containerRef);

  const next = async () => {
    setIsLoading(true);
    const newData = await fakeApi(page);
    const reverseData = [...newData].reverse();
    recordScroll(); // record old scroll position
    setData(oldData => [...reverseData, ...oldData]);
    setPage(oldPage => oldPage + 1);
    setIsLoading(false);
    scrollToOld(); // scroll to old position
  };

  useEffect(() => {
    fakeApi(0).then(initData => {
      setData([...initData].reverse());
      if (!containerRef.current) return;
      const scrollTop = containerRef.current.scrollHeight - containerRef.current.clientHeight;
      containerRef.current?.scrollTo({ top: scrollTop });
    });
  }, []);

  return (
    <ul ref={containerRef}>
      <InfiniteScroll isLoading={isLoading} hasMore={true} next={next} threshold={1} reverse>
        {data.map(datum => {
          return (
            <ListItem key={datum.id} title={datum.title} id={datum.id}>
              <div>I am a JSX element</div>
            </ListItem>
          );
        })}
      </InfiniteScroll>
    </ul>
  );
}
```

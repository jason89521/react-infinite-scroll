---
id: getting-started
title: Getting started
---

## Installation

You can use `yarn` or `npm` to install this package.

```bash
# use yarn
yarn add @yuxuan-zheng/react-infinite-scroll
# use npm
npm install @yuxuan-zheng/react-infinite-scroll
```

## Create a component with `InfiniteScroll`

```tsx
import InfiniteScroll from '@yuxuan-zheng/react-infinite-scroll';

function InfiniteList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setpage] = useState(0);

  useEffect(() => {
    fakeApi(page).then(initData => {
      setData(initData);
      setPage(page + 1);
    });
  }, []);

  const fetchNext = async () => {
    setIsLoading(true);
    const newData = await fakeApi(page);
    setData([...data, ...newData]);
    setpage(page + 1);
    setIsLoading(false);
  };

  return (
    <ul>
      <InfiniteScroll isLoading={isLoading} hasMore={page < 3} next={fetchNext}>
        {data.map(datum => {
          return <li key={datum.id}>Hello</li>;
        })}
      </InfiniteScroll>
    </ul>
  );
}
```

## Create your `Item` component

You can also use a custom component in `InfiniteScroll`, but you should make sure the component pass `ref` to its container correctly.

```tsx
export interface ItemProps {
  data: any;
}

function Item(props: ItemProps, ref: React.FowardedRef<HTMLLIElement>) {
  return <li ref={ref}>{props.data}</li>;
}

export default React.forwardRef(Item);
```

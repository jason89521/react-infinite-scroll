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

## Create your `Item` component

To use React Infinite Scroll, you need to create a custom `Item` component and then pass a `React.ForwardedRef` to its container.

```tsx
interface ItemProps {
  id: number;
  data: any;
}

function Item(props: ItemProps, ref: React.FowardedRef<HTMLLIElement>) {
  return <li ref={ref}>{props.data}</li>;
}
```

:::note

You should make sure that your `Item` component pass ref to its container element, otherwise React Infinite Scroll will not work properly.

:::

## Create a component with `InfiniteScroll`

```tsx
import InfiniteScroll from 'InfiniteScroll';

function InfiniteList() {
  const [data, setData] = useState<ItemProps>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setpage] = useState(0);

  useEffect(() => {
    // the return type of fakeApi is Promise<ItemProps[]>
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

  const itemData = data.map(datum => ({
    key: datum.id,
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

The 5 properties in the above example are required. For more information about these properties, please see the [API Reference page.](api/infinite-scroll.md)

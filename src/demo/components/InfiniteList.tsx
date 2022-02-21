import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'lib';
import fakeApi, { Data } from 'demo/fakeApi';

interface InfiniteScrollProps {
  className?: string;
}

function Item(props: Data, ref: React.ForwardedRef<HTMLLIElement>) {
  return (
    <li ref={ref} className="flex items-center p-5 text-2xl bg-emerald-400 text-slate-50">
      <span>{props.username}</span>
    </li>
  );
}

function InfiniteList({ className }: InfiniteScrollProps) {
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
    key: datum.id,
    props: datum,
  }));

  return (
    <ul className={`${className} h-[50vh] max-h-[50vh] overflow-auto space-y-2`}>
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

export default InfiniteList;

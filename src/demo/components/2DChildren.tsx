import React from 'react';
import ListItem from './ListItem';
import InfiniteScroll from 'InfiniteScroll';
import 'index.css';

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

function TwoDExample() {
  return (
    <ul>
      <InfiniteScroll
        isLoading={false}
        hasMore={false}
        next={() => {
          return;
        }}
      >
        {arr.map(item =>
          item.map(num => {
            return (
              <ListItem key={num} title={num.toString()} id={num}>
                <div>I am a JSX element</div>
              </ListItem>
            );
          })
        )}
      </InfiniteScroll>
    </ul>
  );
}

export default TwoDExample;

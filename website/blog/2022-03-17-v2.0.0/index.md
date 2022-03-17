---
title: Release v2.0.0
authors: xuan
---

When I created this package, I didn't know that React has a convenient api called `React.Children.map`. As a result, I used `props.Item` and `props.itemData` to render the children of `InfiniteScroll`. To be honest, this approach made this package not intuitive.

After I learned `React.Children.map`, this api can make this package more intuitive and more easy to use. As a result, I deleted `props.Item` and `props.itemData` from `InfiniteScroll`, and used `React.Children.map` and `React.cloneElement` to pass reference to the child that should be observed.

Now you can use `InfiniteScroll` like other component, just pass the items to its children, it will call the `next` function when the observed child shows up in the viewport.

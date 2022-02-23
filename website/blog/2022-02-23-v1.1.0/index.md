---
title: Release v1.1.0
authors: xuan
---

In v1.1.0, there is a new property called `threshold` in `InfiniteScroll`. Since `InfiniteScroll` is implemented with `IntersectionObserver`, is is easy to implement the threshold functionality. The only thing that is different with `IntersectionObserver` is `InfiniteScroll` does not allow passing number array to `threshold`.

<!--truncate-->

The reason why `InfiniteScroll` does not allow passing number array to `threshold` is that I think it is weird. Normally you will set the loading status to be `true` when your application is going to load data. If you pass the loading status to `isLoading`, then `InfiniteScroll` will not call `next` because you tell it that you are loading data.

That is, although you pass an array like `[0.25, 0.5, 0.75, 1]`, the `next` will be called only once. As a result, it will not work as expected.

If you think that supporting number array is necessary, you can make an issue with why it is necessary. I will implement the functionality if I think you are right.

I'm trying to learn [Jest](https://jestjs.io/) in order to test this package. So before the next time I release a new version, I am going to add some test to this package.

See you next time!

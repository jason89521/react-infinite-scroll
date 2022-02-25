---
id: intro
title: Introduction
---

# Introduction

`InfiniteScroll` is an component which implements the functionality of infinitely scrolling. It helps you write less code when you want a component scroll infinitely in your application.

## Easy to use

To make `InfiniteScroll` work, you just need to tell it whether your application is loading and are there more data to load, then create your `Item` component with `React.forwardRef` and an array with a specific type. Finally, pass a function which should be called when the last item displayed in the viewport.

## No pollution

`InfiniteScroll` does not add extra HTML elements to your application. That is, you don't have to worry about adding extra styling because it doesn't break your DOM structure.

## Supports reverse scrolling

Want to implement a chatbox with infinitely scrolling? `InfiniteScroll` provides a reverse version and a hook to scroll to the original position for you.

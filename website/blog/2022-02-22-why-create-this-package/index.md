---
title: Why Create This Package
authors: xuan
---

Hi all, I'm Xuan, the author of this package. In this post I want to talk about why I create this package.

I started learning front-end development about 6 months ago. During the time I learned front-end knowledge, I found that there are so many awesome packages in NPM. This does motivate me to create my own package.

However, I didn't know what kind of package I want to create. So I decided to practice React by finishing the projects on [Frontend Mentor](https://www.frontendmentor.io/) until I find out what kind of package I want to create.

At the end of January, Dcard provided a job opportunity of frontend intern. It required job seeker to complete a project that should call GitHub API to display the list of one user's repositories. The list should load 10 repositories at the first time. When user scrolls down to the bottom of the list, it should load the next 10 repositories until there is no more repository to load.

When I searched for how to implement the functionality of infinitely scrolling, I found some packages implementing this functionality. These packages indeed solve the problem, but they will add extra HTML elements to the DOM of my application. Maybe the extra elements work well at most of the time, but I thought it may need extra styling when the CSS become more complicated.

**I don't want to do extra styling**

Hence, I started implement the functionality by myself. I used the approach in [this video](https://www.youtube.com/watch?v=NZKUirTtxcg&t=2s) to implement the functionality of infinitely scrolling.

After finishing the project, I realized that the package about infinitely scrolling without extra elements is a good idea for publishing my own package. As a result, I started to create this package.

The first big problem I encountered was how to bundle my package. Since I'm a lazy guy, I don't want to start from scratch. It spend me a lot of time to find the tool which supports creating a library package quickly. Finally, I found that [Vite](https://vitejs.dev/) may be a good choice for me.

Since I want to provide type declaration of this package, I wrote this package in TypeScript. However, there was an another problem comes up, it seemed that Vite didn't support TypeScript well with the library mode. I can write code in TypeScript, but I cannot generate a type declaration when I want to build this package. After searching the solution, I decided to generate the type declaration manually. I write another TypeScript config file called `tsconfig.lib.json`, then run `tsc --project tsconfig.lib.json` to generate the type declaration. I know this approach may not be the best solution, but it works. That's enough!

Writing a library package is really interesting to me. I got really excited when I developed this package and wrote the documentation of this package. I plan to add more features to this package, the following list is what I want to implement in the next version.

- Threshold for the last item
- Inverse direction to scroll
- Another approach to use infinitely scrolling by using hook

If you like this package, please give me a star on GitHub. I will very happy to see there are people who like this package.

See you next time!

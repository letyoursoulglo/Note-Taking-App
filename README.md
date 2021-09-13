# Note Taking App

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Links

- Live Site URL: [Note Taking App Live Site](https://letyoursoulglo.github.io/Note-Taking-App/)

## My process

### Built with

- Semantic HTML5 markup
- Javascript
- Bootstrap


### What I learned

During this project I learned quite a few javascript concepts as well as how to incorporate the local storage of a browser.

Here are a few examples of code that I learned about during this project:


```js
localStorage.setItem();
localStorage.getItem();
```

```js
let now = new Date();
let dateTime = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} | ${now.getHours()}:${now.getMinutes()}`
```
This code is used to prevent HTML and Script injections:

```js
.replace(/</g, "&lt;").replace(/>/g, "&gt;")
```

I also learned about addition assignment used here:

```js
notesHolder.forEach(function(element,index){
  noteHtml += `
    <div class='card mx-4 my-2 bg-dark text-white myNote' style='width: 18rem;'>
      <div class="card-body">
        <h6>${element.time}</h6>
        <p class="card-text">${element.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        <button id='${index}' onclick=deleteNote(this.id) class='btn btn-warning'>Delete</button>
      </div>
    </div>

  `;
});
```
When completing the project I tried two different ways of doing it, however the second way of completing the project did not work out. I still have to figure out how to get the note taking app to completely work with that process. However, during that process I did learn the concept of Conditional (ternary) operator:

```js
let notesHolders = localStorage.getItem('notes')
  ? JSON.parse(localStorage.getItem('notes'))
  : []
```

### Continued development

As a self-taught developer, I have a good grasp on using HTMl and CSS, of course there is more I can learn. However I still need to further develop my skills in Javascript. With the goal of becoming a full-time web developer, I will continue my studies as well as continue to build projects using javascript.

### Useful resources

Here are a few links that helped me.

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment) - Addition assignment (+=)

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) - Conditional (ternary) operator

- [gitconnected] (https://levelup.gitconnected.com/build-a-note-taking-application-using-vanilla-javascript-c364d088967f) - This is the blog post that I got the idea from. I learned so much by starting this project and following along. 

- [LogRocket Blog](https://blog.logrocket.com/localstorage-javascript-complete-guide/) - This article help with figuring out how to use local storage with javascript.

- [stackoverflow] (https://stackoverflow.com/questions/20855482/preventing-html-and-script-injections-in-javascript) - Preventing HTML and Script injections in Javascript

- [taniarascia] (https://www.taniarascia.com/how-to-use-local-storage-with-javascript/) - This blog post was a guide that I used for the second method of create the note taking app.

## Author

- Website - [Coming Soon]
- Twitter - [YoungGifted_Blk](https://twitter.com/YoungGifted_Blk)

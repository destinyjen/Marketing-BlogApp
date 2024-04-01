const username = document.getElementById("username");
const title = document.getElementById("title");
const content = document.getElementById("content");
const form = document.querySelector("form");


form.addEventListener("submit", function (event) {
    event.preventDefault();

  const post = {
    username: username.value,
    title: title.value,
    content: content.value,
    
  };

// get the blog post array from local storage
const storedPosts = JSON.parse(localStorage.getItem("blogPosts"));
console.log(storedPosts,localStorage.getItem("blogPosts"));
// parse the array, turn the string back into a data structure
let blogPosts = storedPosts || [];
// add our new post into the array
blogPosts.push(post);
// put the post array back in local storage
localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
window.location.href = "blog.html";

});

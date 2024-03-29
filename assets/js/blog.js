const storedPosts = JSON.parse(localStorage.getItem("blogPosts"));
console.log(storedPosts,localStorage.getItem("blogPosts"));

const blogPosts = storedPosts || []

const blogContent = document.getElementById("content");

for (let index = 0; index < blogPosts.length; index++) {
    const post = blogPosts[index];

    console.log(post);

    let article = document.createElement("article")
    let title = document.createElement("h2")
    let username = document.createElement("p")
    let content = document.createElement("p")

    title.textContent = post.title;
    content.textContent = post.content;
    username.textContent = "Posted by: " + post.username;

   article.appendChild(title);
   article.appendChild(content);
   article.appendChild(username);

   blogContent.appendChild(article);
}

document.getElementById("btn").onclick = function () {
    window.location.href = "index.html";
};






const blogForm = document.querySelector("#blog-form");
const postTitle = document.querySelector("#post-title");
const postUrl = document.querySelector("#post-url")
const postMsg = document.querySelector("#post-msg");
const blogList = document.querySelector("#post-list");


document.addEventListener("DOMContentLoaded", LoadPosts);
function LoadPosts() {
    let posts = getPostsFromLocalStorage();
    posts.forEach(post => {
        addPostToDom(post)
    });
}

blogForm.addEventListener("submit", AddPost);

function AddPost(e) {

    e.preventDefault();

    const blogTitle = postTitle.value.trim();
    const postImg = postUrl.value.trim();
    postUrl.setAttribute("src", postImg);
    const blogMsg = postMsg.value.trim();


    if (blogTitle !== "" && postImg !== "" && blogMsg !== "") {
        const post = {
            id: Date.now(),
            title: blogTitle,
            img: postImg,
            msg: blogMsg
        };
        addPostToDom(post);
        savePostToLocalStorage(post)

    }
    postTitle.value = "";
    postUrl.value = "";
    postMsg.value = "";
};


function savePostToLocalStorage(post) {
    const getPost = getPostsFromLocalStorage();
    getPost.push(post)
    localStorage.setItem("posts", JSON.stringify(getPost))
}

function getPostsFromLocalStorage() {
    const getPost = JSON.parse(localStorage.getItem("posts")) || [];
    return getPost;
}

function attachEventListner(post, div) {
    const deleteBtn = div.querySelector(".delete-btn");
    const editBtn = div.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", function () {
        handleDelete(post.id, div)
    });
    editBtn.addEventListener("click", function () {
        handleEdit(post.id, div);
        // console.log("clicked");
    })
}

function handleEdit(postId, div) {
    const title = div.querySelector(".post-title");
    const url = div.querySelector(".img");
    const msg = div.querySelector(".post-txt");
    const newTitle = prompt("enter new title post", title.textContent);
    const newImg = prompt("enter new Url!", url.src);
    const newMsgPost = prompt("Write new post here!", msg.textContent);
    title.textContent = newTitle;
    if (newTitle !== null && newImg !== null && newMsgPost !== null && newTitle.trim() !== "" && newImg !== "" && newMsgPost !== "") {
        title.textContent = newTitle;
        url.src = newImg;
        msg.textContent = newMsgPost;
        updatePost(postId, newTitle, newImg, newMsgPost);
    }

}

function updatePost(postId, newTitle, newImg, newMsgPost) {
 
    const posts = getPostsFromLocalStorage();
    const post = posts.find(post => post.id === postId);

    if (post) {
        post.title = newTitle;
        post.img = newImg;
        post.msg = newMsgPost;
    }

    localStorage.setItem("posts", JSON.stringify(posts));
}




function handleDelete(id, div) {
    let posts = getPostsFromLocalStorage();
    posts = posts.filter(post => post.id != id);
    localStorage.setItem("posts", JSON.stringify(posts))
    div.remove();
}

function addPostToDom(post) {
    const div = document.createElement('div');
    div.className = 'post';
    div.dataset.id = post.id;

    div.innerHTML = `  
          <h2 class="post-title">${post.title}</h2>
          <img class="img"
           src="${post.img}"
            alt=""
          />
          <p class="post-txt">${post.msg}</p>
          <button class="edit-btn">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        `;
    blogList.appendChild(div);
    attachEventListner(post, div);

}
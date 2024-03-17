document.addEventListener("DOMContentLoaded", function() {
    const inputId = document.getElementById("postId");
    const searchBtn = document.getElementById("searchBtn");
    const postContainer = document.getElementById("postContainer");
    const commentsBtn = document.getElementById("commentsBtn");
    const commentsContainer = document.getElementById("commentsContainer");

    function getPostById(id) {
        return new Promise((resolve, reject) => {
            if (id < 1 || id > 100) {
                reject(new Error("Неприпустимий ідентифікатор. Ідентифікатор має бути від 1 до 100."));
            } else {
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Помилка запиту до сервера");
                        }
                        return response.json();
                    })
                    .then(data => resolve(data))
                    .catch(error => reject(error));
            }
        });
    }

    function displayPost(post) {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        postContainer.appendChild(postElement);
    }

    function displayComments(comments) {
        commentsContainer.innerHTML = "<h3>Коментарі:</h3>";
        comments.forEach(comment => {
            const commentElement = document.createElement("div");
            commentElement.innerHTML = `<p><strong>${comment.name}</strong>: ${comment.body}</p>`;
            commentsContainer.appendChild(commentElement);
        });
    }

    searchBtn.addEventListener("click", function() {
        const postId = +(inputId.value);
        postContainer.innerHTML = "";
        commentsContainer.innerHTML = "";

        getPostById(postId)
            .then(post => {
                displayPost(post);
                commentsBtn.style.display = "block";
            })
            .catch(error => alert(error.message));
    });

    commentsBtn.addEventListener("click", function() {
        const postId = +(inputId.value);
        commentsContainer.innerHTML = "";

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Помилка запиту до сервера");
                }
                return response.json();
            })
            .then(data => displayComments(data))
            .catch(error => alert(error.message));
    });
});

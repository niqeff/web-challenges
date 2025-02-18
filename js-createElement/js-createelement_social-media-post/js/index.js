console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newTitle = document.createElement("h1");
newTitle.textContent = "Social Media Post";
document.body.append(newTitle);

const newPost = document.createElement("article");
newPost.classList.add("post");
document.body.append(newPost);

const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newPost.append(newPostContent);

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");
newPost.append(newPostFooter);

const newPostFooterSpan = document.createElement("span");
newPostFooterSpan.classList.add("post__username");
newPostFooterSpan.textContent = "@username";
newPostFooter.append(newPostFooterSpan);

const newPostFooterButton = document.createElement("button");
newPostFooterButton.classList.add("post__button");
newPostFooterButton.setAttribute("type", "button");
newPostFooterButton.setAttribute("data-js", "like-button2");
newPostFooterButton.textContent = "♥ Like";
newPostFooter.append(newPostFooterButton);
newPostFooterButton.addEventListener("click", handleLikeButtonClick);

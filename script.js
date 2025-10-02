// Like button
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
let likes = 0;

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.textContent = likes;
});

// Comment Section Toggle
const commentBtn = document.getElementById("commentBtn");
const commentSection = document.querySelector(".comment-section");
commentBtn.addEventListener("click", () => {
  commentSection.classList.toggle("hidden");
});

// Add Comment
const addComment = document.getElementById("addComment");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");

addComment.addEventListener("click", () => {
  const text = commentInput.value.trim();
  if (text !== "") {
    const p = document.createElement("p");
    p.textContent = text;
    commentList.appendChild(p);
    commentInput.value = "";
  }
});

// Share Button
const shareBtn = document.getElementById("shareBtn");
shareBtn.addEventListener("click", () => {
  alert("Post link copied (Demo)!");
});

// Menu Dots
const menuDots = document.querySelector(".menu-dots");
const menuOptions = document.querySelector(".menu-options");
menuDots.addEventListener("click", () => {
  menuOptions.classList.toggle("hidden");
});

// Save Photo
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
  alert("Photo saved to gallery (Demo)!");
  menuOptions.classList.add("hidden");
});

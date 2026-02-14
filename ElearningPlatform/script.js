function updateProgress() {
  localStorage.setItem("courseCompleted", "Web Development Basics");
  alert("Course marked as completed!");
}

window.onload = function() {
  const progressStatus = document.getElementById("progress-status");
  if (progressStatus) {
    const completed = localStorage.getItem("courseCompleted");
    if (completed) {
      progressStatus.textContent = `You have completed: ${completed}`;
    }
  }
};


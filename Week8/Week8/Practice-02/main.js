const box = document.getElementById("box");

document.querySelectorAll("button[data-color]").forEach(button => {
  button.addEventListener("click", () => {
    box.style.backgroundColor = button.dataset.color;      // เปลี่ยนสี
    box.textContent = button.dataset.color.toUpperCase();  // เปลี่ยนข้อความ
  });
});

//Happy Olaf 066
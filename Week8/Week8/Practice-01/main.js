const box = document.getElementById("box");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const toggleBtn = document.getElementById("toggle");

// เพิ่มเส้นขอบ
addBtn.addEventListener("click", () => {
    box.classList.add("bordered");
});

// ลบเส้นขอบ
removeBtn.addEventListener("click", () => {
    box.classList.remove("bordered");
});

// สลับเส้นขอบ
toggleBtn.addEventListener("click", () => {
    box.classList.toggle("bordered");
});

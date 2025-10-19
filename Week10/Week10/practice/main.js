document.addEventListener("DOMContentLoaded", function () {
    // โหลดค่าจาก localStorage ถ้ามี
    const bgColor = localStorage.getItem("bgColor") || "#ffffff";
    const fontColor = localStorage.getItem("fontColor") || "#000000";
    const fontSize = localStorage.getItem("fontSize") || "medium";

    // ตั้งค่าให้กับหน้า
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
    document.body.style.fontSize = fontSize;

    // ตั้งค่าให้ input
    document.getElementById("bgColor").value = bgColor;
    document.getElementById("fontColor").value = fontColor;
    document.getElementById("fontSize").value = fontSize;

});

// ปุ่ม Save

document.getElementById("saveBtn").addEventListener("click", function () {
    const bg = document.getElementById("bgColor").value;
    const font = document.getElementById("fontColor").value;
    const size = document.getElementById("fontSize").value;
    localStorage.setItem("bgColor", bg);
    localStorage.setItem("fontColor", font);
    localStorage.setItem("fontSize", size);
    document.body.style.backgroundColor = bg;
    document.body.style.color = font;
    document.body.style.fontSize = size;
    alert("บันทึกการตั้งค่าเรียบร้อยแล้ว!");

});

// ปุ่ม Reset

document.getElementById("resetBtn").addEventListener("click", function () {
    localStorage.removeItem("bgColor"),
        localStorage.removeItem("fontColor"),
        localStorage.removeItem("fontSize");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.body.style.fontSize = "medium";
    document.getElementById("bgColor").value = "#ffffff";
    document.getElementById("fontColor").value = "#000000";
    document.getElementById("fontSize").value = "medium";

});
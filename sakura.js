function createSakura() {
    const sakura = document.createElement("div");
    sakura.classList.add("sakura");

    // สุ่มตำแหน่งแนวนอน
    sakura.style.left = Math.random() * window.innerWidth + "px";

    // สุ่มขนาด
    const size = Math.random() * 10 + 10;
    sakura.style.width = size + "px";
    sakura.style.height = size + "px";

    // สุ่มความเร็วการร่วง
    const duration = Math.random() * 5 + 5;
    sakura.style.animationDuration = duration + "s";

    document.querySelector(".sakura-container").appendChild(sakura);

    // ลบเมื่อร่วงถึงล่าง
    setTimeout(() => {
        sakura.remove();
    }, duration * 1000);
}

// สร้างกลีบใหม่ทุก ๆ 300ms
setInterval(createSakura, 300);
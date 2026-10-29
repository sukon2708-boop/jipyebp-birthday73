const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
Happy 28th Birthday 🤍 ขอให้ปีนี้เป็นอีกปีที่ดีของที่รัก มีความสุขกับชีวิตในแบบที่ต้องการ มีเงินใช้ไม่ขาดมือ และมีพลังใจในวันที่เหนื่อย ขอให้เราเป็นความสบายใจของกันและกัน คอยสนับสนุนกันในวันที่ดี และจับมือกันผ่านวันที่ยากไปให้ได้ ขอบคุณที่มีกัน ขอให้เราอยู่ด้วยกันไปอีกนานๆเลย

เค้ารักพี่โอมนะ 🌟🎂

`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});

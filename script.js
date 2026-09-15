document.getElementById("year").textContent = new Date().getFullYear();
const menu=document.querySelector(".menu"), nav=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="70px";nav.style.left="0";nav.style.right="0";nav.style.padding="18px";nav.style.background="#071426";nav.style.flexDirection="column";nav.style.gap="12px"});
document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const note=document.getElementById("formNote");
  note.textContent="Thanks! Your message is ready. Connect this form to your email service before publishing.";
  note.style.color="#1689ff";
});
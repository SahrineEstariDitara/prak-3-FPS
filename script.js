// getElementById ===
const btnJudul = document.getElementById("btnJudul");
btnJudul.addEventListener("click", () => {
  const judul = document.getElementById("judul");
  judul.style.color = judul.style.color === "darkorange" ? "" : "darkorange";
});

// getElementsByClassName
const btnPesan = document.getElementById("btnPesan");
btnPesan.addEventListener("click", () => {
  const bio = document.getElementsByClassName("new-paragraf")[0];
  const pesanBaru = document.createElement("p");
  pesanBaru.textContent = "Halo! Ini pesan dari sharinee🫠💫.";
  pesanBaru.style.color = "green";
  bio.appendChild(pesanBaru);
});

// getElementsByTagName
const btnTag = document.getElementById("btnTag");
btnTag.addEventListener("click", () => {
  const semuaP = document.getElementsByTagName("p");
  for (let p of semuaP) {
    p.style.fontStyle = "italic";
    p.style.fontSize = "18px";
  }
});

document.querySelectorAll("#btnAll").forEach((btnAll) => {
  btnAll.addEventLsistener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
    const dark = body.classList.contains("dark-mode");
    body.style.background = dark ? "#000" : "";
    body.style.color = dark ? "#fff" : "";
    document.querySelectorAll(".  ").forEach((b) => {
      b.style.background = dark ? "#333" : "";
      b.style.color = dark ? "#fff" : "";
      b.style.border = dark ? "1px solid #555" : "";
    });
  });
});

// getElementsByName() → ubah nilai otomatis dari field "nama"
// document.getElementById('btnNama').addEventListener('click', () => {
//   const inputNama = document.getElementsByName('nama')[0];
//   inputNama.value = 'Mahasiswa UNISA';
// });

document.getElementById("btnNama").addEventListener("click", () => {
  let elements = document.getElementsByName("nama");
  document.getElementById("tampilkan").innerHTML = elements[0].value;
});

// membuat tombol clik unutk menampilkan navbar//
var togglebtn = document.querySelector(".togglebtn");
var navlinks = document.querySelector(".navlinks");
var links = document.querySelectorAll(".navlinks li");

togglebtn.addEventListener("click", function () {
  this.classList.toggle("click");
  navlinks.classList.toggle("open");
});

var typed = new Typed("#typed-name", {
  strings: ["Sahrine Estari Ditara"],
  typeSpeed: 100, // Kecepatan mengetik (ms)
  backSpeed: 30, // Kecepatan menghapus (ms)
  backDelay: 1500, // Jeda sebelum menghapus (ms)
  loop: true, // Ulang terus efeknya
  showCursor: true,
  smartBackspace: false,
});

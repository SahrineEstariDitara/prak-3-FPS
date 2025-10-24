var typed = new Typed("#typed-name", {
  strings: ["Sahrine Estari Ditara"],
  typeSpeed: 100,
  backSpeed: 30,
  backDelay: 1500,
  loop: true,
  showCursor: true,
  smartBackspace: false,
});
$(document).ready(function () {
  // Event saat form dikirim
  $(".contact-form").on("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman
    showPopup("Pesan berhasil dikirim!");
  });

  // Event tambahan: klik tombol Contact Here
  $("#btnPesan").click(function () {
    showPopup("Tombol Contact diklik!");
  });

  // Fungsi untuk menampilkan popup dengan animasi
  function showPopup(message) {
    // Ubah teks popup
    $("#popup-text").text(message);

    // Tampilkan popup dengan efek fadeIn
    $("#popup").stop(true, true).fadeIn(400).addClass("show");

    // Ubah style border agar dinamis
    $("#popup").css("border", "1px solid #fff");

    // Tambahkan elemen HTML tebal pada teks
    $("#popup-text").html("<b>" + message + "</b>");

    // Setelah 3 detik, sembunyikan popup dengan efek fadeOut
    setTimeout(function () {
      $("#popup").fadeOut(400).css("animation", "slideOut 0.5s ease forwards");
    }, 3000);
  }
});

// ==== Fitur Dark Mode dengan jQuery ====
$(document).ready(function () {
  const toggleBtn = $("#theme-toggle");
  const body = $("body");
  const moonIcon = $("#moon-icon");
  const sunIcon = $("#sun-icon");

  // Cek tema tersimpan di localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.addClass("dark-mode");
    moonIcon.addClass("icon-hidden");
    sunIcon.removeClass("icon-hidden");
  }

  // Event klik tombol toggle
  toggleBtn.click(function () {
    toggleBtn.addClass("rotate");
    setTimeout(() => toggleBtn.removeClass("rotate"), 500);

    // Ganti tema
    body.toggleClass("dark-mode");

    // Animasi ikon
    moonIcon.toggleClass("icon-hidden");
    sunIcon.toggleClass("icon-hidden");

    // Simpan preferensi pengguna
    if (body.hasClass("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});

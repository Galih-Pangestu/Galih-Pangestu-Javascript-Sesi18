const data = new Date();

const tugasForm = document.querySelector("#tugas-form");
const tugasInput = document.querySelector("#tugas-input");
const daftarTugas = document.querySelector("#daftar-tugas");
const ubahForm = document.querySelector("#ubah-form");
const ubahInput = document.querySelector("#ubah-input");
const batalUbahBtn = document.querySelector("#batal-ubah-btn");

let nilaiInputLama;

/* Tanggal dan Waktu */
const waktuElm = new Date();
const sekarang = new Date(waktuElm);
document.getElementById("tgl").innerHTML = sekarang.toDateString();

function waktu() {
  const data = new Date();
  let j = data.getHours();
  let m = data.getMinutes();
  let d = data.getSeconds();

  if (j < 10) {
    j = "0" + j;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (d < 10) {
    d = "0" + d;
  }

  document.getElementById("w").innerHTML = j + ":" + m + ":" + d;
  setTimeout("waktu()", 500);
}

tugasForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputNilai = tugasInput.value;
  if (inputNilai) {
    simpanTugas(inputNilai); //simpan function
  }
});

const simpanTugas = (text) => {
  const tuga = document.createElement("div");
  tuga.classList.add("tuga");

  const tugasJudul = document.createElement("h4");
  tugasJudul.innerText = text;
  tuga.appendChild(tugasJudul);

  const selesaiBtn = document.createElement("button");
  selesaiBtn.classList.add("selesai-tugas");
  selesaiBtn.innerHTML = "Selesai";
  tuga.appendChild(selesaiBtn);

  const ubahBtn = document.createElement("button");
  ubahBtn.classList.add("ubah-tugas");
  ubahBtn.innerHTML = "Ubah";
  tuga.appendChild(ubahBtn);

  const hapusBtn = document.createElement("button");
  hapusBtn.classList.add("hapus-tugas");
  hapusBtn.innerHTML = "Hapus";
  tuga.appendChild(hapusBtn);

  daftarTugas.appendChild(tuga);
  tugasInput.value = "";
  tugasInput.focus();
};

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let tugasJudul;

  if (parentEl && parentEl.querySelector("h4")) {
    tugasJudul = parentEl.querySelector("h4").innerText;
  }
  if (targetEl.classList.contains("selesai-tugas")) {
    parentEl.classList.toggle("done");
  }
  if (targetEl.classList.contains("hapus-tugas")) {
    parentEl.remove();
  }
  if (targetEl.classList.contains("ubah-tugas")) {
    toggleForms();
    ubahInput.value = tugasJudul;
    nilaiInputLama = tugasJudul;
  }
});

const toggleForms = () => {
  ubahForm.classList.toggle("hide");
  tugasForm.classList.toggle("hide");
  daftarTugas.classList.toggle("hide");
};

batalUbahBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});

ubahForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const ubahNilaiInput = ubahInput.value;
  if (ubahNilaiInput) {
    gantiTugas(ubahNilaiInput); //ganti value
  }
  toggleForms();
});

const gantiTugas = (text) => {
  const tugas = document.querySelectorAll(".tuga");
  tugas.forEach((tuga) => {
    let tugasJudul = tuga.querySelector("h4");

    if (tugasJudul.innerText === nilaiInputLama) {
      tugasJudul.innerText = text;
    }
  });
};

const A = './assets/images/';

// Prefer the highest-resolution crops available from the supplied designs.
const highResolutionImages = {
  'kaaba-courtyard.jpg': 'kaaba-card-hd.png',
  'kaaba-panorama.jpg': 'kaaba-hero-hd.png',
  'madinah-sunrise.jpg': 'madinah-card-hd.png',
  'nabawi-courtyard.jpg': 'nabawi-hd.png',
  'mosque-arches.jpg': 'arches-card-hd.png',
  'quiet-arches.jpg': 'arches-portrait-hd.png',
  'hotel-room.jpg': 'hotel-hd.png',
  'consultation-room.jpg': 'office-hd.png',
  'travel-suitcase.jpg': 'suitcase-hd.png',
  'packing-feature.jpg': 'packing-hd.png'
};

function imageFile(name) {
  return highResolutionImages[name] || name;
}

const packages = [
  { title: 'Umrah Tenang', type: 'REGULER', days: '9 hari', date: '12 Februari 2027', price: 'Rp28.900.000', image: 'kaaba-courtyard.jpg', blurb: 'Ritme ibadah yang lapang dengan pendampingan terarah.' },
  { title: 'Umrah Nyaman', type: 'PREMIUM', days: '12 hari', date: '9 Maret 2027', price: 'Rp36.500.000', image: 'madinah-sunrise.jpg', blurb: 'Waktu perjalanan lebih longgar untuk beribadah dan beristirahat.' },
  { title: 'Umrah Keluarga', type: 'KELUARGA', days: '12 hari', date: '16 April 2027', price: 'Rp33.800.000', image: 'mosque-arches.jpg', blurb: 'Susunan perjalanan yang nyaman untuk keluarga lintas generasi.' },
  { title: 'Umrah Refleksi', type: 'REGULER', days: '12 hari', date: '14 Mei 2027', price: 'Rp31.200.000', image: 'nabawi-courtyard.jpg', blurb: 'Ruang yang cukup untuk memperlambat langkah dan merenung.' },
  { title: 'Umrah Utama', type: 'PREMIUM', days: '9 hari', date: '11 Juni 2027', price: 'Rp38.900.000', image: 'kaaba-panorama.jpg', blurb: 'Pilihan premium dengan perhatian pada detail kecil perjalanan.' },
  { title: 'Umrah Bersama', type: 'KELUARGA', days: '9 hari', date: '9 Juli 2027', price: 'Rp30.600.000', image: 'quiet-arches.jpg', blurb: 'Kebersamaan yang hangat dalam alur perjalanan yang terarah.' }
];

const gallery = [
  ['kaaba-courtyard.jpg', 'Makkah, menjelang pagi', 'Makkah'],
  ['madinah-sunrise.jpg', "Cahaya hangat di Madinah", 'Madinah'],
  ['mosque-arches.jpg', 'Ritme lengkung & cahaya', 'Arsitektur'],
  ['nabawi-courtyard.jpg', 'Halaman Masjid Nabawi', 'Madinah'],
  ['hotel-room.jpg', 'Ruang untuk beristirahat', 'Akomodasi'],
  ['travel-suitcase.jpg', 'Persiapan sebelum perjalanan', 'Persiapan'],
  ['quiet-arches.jpg', 'Detail yang menenangkan', 'Arsitektur'],
  ['kaaba-panorama.jpg', 'Pemandangan Masjidil Haram', 'Makkah'],
  ['consultation-room.jpg', 'Ruang konsultasi yang diusulkan', 'Kantor']
];

const articles = [
  ['packing-feature.jpg', 'PERSIAPAN', '7 menit baca', 'Sebelum berangkat: panduan persiapan Umrah yang lebih tenang', '14 Oktober 2026'],
  ['madinah-sunrise.jpg', 'DESTINASI', '5 menit baca', 'Madinah, ruang untuk melambat dan merenung', '10 Oktober 2026'],
  ['travel-suitcase.jpg', 'TIPS PERJALANAN', '4 menit baca', 'Isi koper secukupnya, siapkan yang benar-benar penting', '6 Oktober 2026'],
  ['quiet-arches.jpg', 'KELUARGA', '6 menit baca', 'Merencanakan Umrah bersama keluarga lintas generasi', '2 Oktober 2026'],
  ['kaaba-panorama.jpg', 'DESTINASI', '5 menit baca', 'Mengenal Makkah melalui perjalanan yang lebih terarah', '28 September 2026'],
  ['travel-suitcase.jpg', 'PERSIAPAN', '4 menit baca', 'Catatan dokumen: apa yang perlu diperiksa sebelum memesan', '24 September 2026']
];

const faqItems = [
  ['Apakah harga dan jadwal sudah resmi?', 'Belum. Semua paket, harga, tanggal, hotel, dan penugasan maskapai di konsep ini merupakan contoh. Penawaran resmi perlu dikonfirmasi dengan data perusahaan yang terverifikasi.'],
  ['Dokumen apa yang perlu disiapkan?', 'Paspor, dokumen identitas, serta persyaratan perjalanan terbaru. Daftar final akan disampaikan pada saat konsultasi.'],
  ['Bisakah berangkat bersama keluarga?', 'Bisa. Pilihan keluarga disusun dengan ritme yang lebih adaptif untuk beberapa kelompok usia.'],
  ['Bagaimana alur konsultasi dan pemesanan?', 'Sampaikan kebutuhan melalui formulir, lalu konsultan akan menghubungi Anda untuk membahas pilihan dan langkah berikutnya.']
];

function img(name, alt = '') {
  return `<img src="${A}${imageFile(name)}" alt="${alt}" loading="lazy">`;
}

function eyebrow(text) {
  return `<p class="eyebrow">${text}</p>`;
}

function crumb(label) {
  return `<p class="breadcrumb"><a href="?page=home">Beranda</a> / ${label}</p>`;
}

function packageCard(item, compact = false) {
  return `<article class="package-card${compact ? ' compact' : ''}">
    <div class="card-image">${img(item.image, item.title)}<span>Visual ilustratif • Bukan dokumentasi aktual</span></div>
    <div class="card-body">
      <p class="card-kicker">${item.type} • ${item.days}</p>
      <h3>${item.title}</h3>
      <p class="muted">Keberangkatan contoh • ${item.date}</p>
      <p class="package-details">Maskapai ilustratif: Saudia<br>Hotel A Makkah • Hotel B Madinah<br>Hotel & penugasan belum terverifikasi</p>
      <p class="price-label">Harga contoh mulai dari / orang</p>
      <strong class="price">${item.price}</strong>
      <p class="fineprint">Simulasi kamar berempat • Bukan penawaran resmi</p>
      <a class="button button-outline button-full" href="?page=detail">Lihat detail paket ↗</a>
    </div>
  </article>`;
}

function faq(title = 'Hal yang ingin Anda ketahui', intro = 'Informasi awal untuk membantu Anda merencanakan. Detail layanan masih berupa konsep demo.') {
  return `<section class="section section-white faq-section">
    <div class="container two-col-title">
      <div>${eyebrow('PERTANYAAN UMUM')}<h2>${title}</h2><p>${intro}</p></div>
      <div class="faq-list">${faqItems.map((item, i) => `<details ${i === 0 ? 'open' : ''}><summary>${item[0]} <span>+</span></summary><p>${item[1]}</p></details>`).join('')}</div>
    </div>
  </section>`;
}

function cta() {
  return `<section class="section cta-strip"><div class="container cta-inner"><div>${eyebrow('MULAI DARI PERCAKAPAN')}<h2>Rencanakan perjalanan dengan lebih tenang.</h2><p>Ceritakan waktu keberangkatan dan kebutuhan Anda. Kanal konsultasi akan tersedia setelah data resmi dilengkapi.</p></div><div class="cta-action"><a class="button" href="?page=contact">Konsultasi via WhatsApp ↗</a><small>CTA demo • Belum terhubung ke WhatsApp</small></div></div></section>`;
}

function footer() {
  return `<footer class="footer"><div class="container"><div class="footer-title"><h2>Langkah yang tenang.<br>Perjalanan yang bermakna.</h2><a class="button button-dark" href="?page=contact">Diskusikan rencana Umrah ↗</a></div><div class="footer-grid"><div><h3>Traguna Tour</h3><p>UMRAH • TRAVEL<br>Pendampingan personal dan persiapan terarah.</p><p>Perjalanan suci, dipersiapkan sepenuh hati.</p></div><div><h4>JELAJAHI</h4><p><a href="?page=home">Beranda</a>　/　<a href="?page=packages">Paket Umrah</a><br><a href="?page=about">Tentang Kami</a>　/　<a href="?page=gallery">Galeri</a><br><a href="?page=articles">Artikel</a>　/　<a href="?page=contact">Kontak</a></p></div><div><h4>HUBUNGI KAMI</h4><p>Alamat kantor akan ditambahkan<br>WhatsApp & email menunggu data resmi<br>Instagram • YouTube • Facebook<br>Placeholder kanal sosial</p></div></div><p class="copyright">© Traguna Tour • Informasi legal dan izin menunggu data perusahaan terverifikasi.</p></div></footer>`;
}

function homePage() {
  return `<section class="hero">
    <div class="hero-image"><img src="${A}kaaba-hero-hd.png" alt="Masjidil Haram saat fajar" fetchpriority="high"></div>
    <div class="container hero-content">${eyebrow('PERJALANAN SUCI, DIPERSIAPKAN SEPENUH HATI')}<h1>Menuju Tanah Suci,<br>dengan hati<br>yang lebih tenang.</h1><p>Ruang untuk ibadah. Waktu untuk merenung. Temukan konsep perjalanan Umrah dengan persiapan yang jelas dan pendampingan yang personal.</p><div class="button-row"><a class="button button-light" href="?page=contact">Konsultasi via WhatsApp ↗</a><a class="button button-ghost" href="?page=packages">Jelajahi paket contoh →</a></div><small>Konsep demo • CTA belum terhubung • Visual ilustratif</small></div>
  </section>
  <section class="trust-strip"><div class="container trust-grid"><div>${eyebrow('PRINSIP LAYANAN YANG DIUSULKAN • BUKAN KLAIM OPERASIONAL')}</div><div><h3>Informasi transparan</h3><p>Rincian biaya & perjalanan sebelum memutuskan.</p></div><div><h3>Pendampingan personal</h3><p>Kebutuhan jamaah menjadi awal percakapan.</p></div><div><h3>Persiapan terarah</h3><p>Panduan dokumen, perlengkapan, dan manasik.</p></div></div></section>
  <section class="section packages-home"><div class="container"><div class="section-heading with-action"><div>${eyebrow('PILIHAN PERJALANAN • PAKET DEMO')}<h2>Temukan ritme perjalanan Anda.</h2><p>Contoh pilihan untuk beragam kebutuhan. Harga, tanggal, hotel, dan maskapai belum menjadi penawaran resmi.</p></div><a class="button button-outline" href="?page=packages">Semua paket ↗</a></div><div class="package-grid three">${packages.slice(0, 3).map(p => packageCard(p)).join('')}</div></div></section>
  <section class="section dark-story"><div class="container split-media"><div class="framed-image">${img('quiet-arches.jpg', 'Lorong masjid yang tenang')}<small>01 / Ruang untuk lebih khusyuk • Nuansa destinasi</small></div><div>${eyebrow('LEBIH DARI PERJALANAN • KONSEP LAYANAN')}<h2>Detail kecil.<br>Ketenangan yang berarti.</h2><p>Kami membayangkan layanan yang memberi ruang untuk fokus pada ibadah, tanpa mengabaikan kebutuhan perjalanan.</p><ol class="lined-list"><li><span>01</span><div><strong>Sebelum berangkat</strong><p>Rencana dokumen dan perlengkapan yang mudah dipahami.</p></div></li><li><span>02</span><div><strong>Selama perjalanan</strong><p>Konsep koordinasi perjalanan dan pendampingan sesuai kebutuhan.</p></div></li><li><span>03</span><div><strong>Di setiap keputusan</strong><p>Penjelasan biaya dan kondisi layanan secara tertulis.</p></div></li></ol></div></div></section>
  <section class="section steps"><div class="container">${eyebrow('ALUR PEMESANAN YANG DIUSULKAN')}<h2>Empat langkah, satu niat baik.</h2><p>Ilustrasi alur layanan. Pemesanan aktual hanya setelah identitas perusahaan, izin, dan penawaran resmi diverifikasi.</p><div class="steps-grid">${[['01','Ceritakan rencana','Diskusikan waktu, anggaran, dan kebutuhan keluarga.'],['02','Kenali pilihan','Tinjau rincian paket, hotel, dan kondisi pembayaran.'],['03','Siapkan perjalanan','Periksa dokumen terkini dan ikuti persiapan manasik.'],['04','Berangkat terarah','Konfirmasi jadwal final serta kontak pendamping resmi.']].map(s => `<div><span>${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('')}</div></div></section>
  <section class="section testimonial"><div class="container testimonial-grid"><div>${eyebrow('RUANG CERITA JAMAAH')}<h2>Pengalaman nyata layak diceritakan dengan jujur.</h2></div><div class="quote-card"><h3>Testimoni jamaah akan ditampilkan setelah verifikasi.</h3><p>Area ini disiapkan untuk pengalaman dengan persetujuan jamaah. Belum ada kutipan, identitas pelanggan, atau penilaian yang dipublikasikan.</p><small>PLACEHOLDER TESTIMONI • BUKAN ULASAN</small></div></div></section>
  <section class="section home-gallery"><div class="container"><div class="section-heading">${eyebrow('RANGKAIAN SUASANA')}<h2>Ada ketenangan di setiap sudut.</h2><p>Pilihan visual destinasi ilustratif; bukan dokumentasi perjalanan pelanggan Traguna Tour.</p></div><div class="gallery-feature"><div>${img('kaaba-panorama.jpg', 'Masjidil Haram')}</div><div>${img('madinah-sunrise.jpg', 'Masjid Nabawi')}${img('mosque-arches.jpg', 'Arsitektur masjid')}</div></div><a class="button button-outline" href="?page=gallery">Lihat galeri ilustratif ↗</a></div></section>
  ${faq()}${cta()}${footer()}`;
}

function packagesPage() {
  return `<section class="page-intro"><div class="container">${crumb('Paket Umrah')}${eyebrow('KOLEKSI PERJALANAN • PAKET DEMO')}<h1>Perjalanan yang sesuai dengan Anda.</h1><p>Bandingkan durasi, waktu, dan kenyamanan. Semua rincian berikut adalah simulasi, bukan ketersediaan atau penawaran resmi.</p><form class="searchbar" data-search-packages><input type="search" placeholder="Nama paket atau destinasi" aria-label="Cari paket"><button class="button" type="submit">Cari paket ↗</button></form></div></section>
  <section class="section catalog"><div class="container catalog-grid"><aside class="filter-panel"><div class="filter-title"><strong>Sesuaikan pilihan</strong><button type="button" data-reset>Reset</button></div><p class="muted">Filter visual • Tampilan statis, tidak menyaring hasil</p><label>Rentang harga</label><p>Rp25 juta — Rp40 juta</p><input type="range" min="25" max="40" value="40"><label>Bulan keberangkatan</label><select><option>Semua bulan 2027</option></select><label>Durasi</label><div class="chips"><button class="active">Semua</button><button>9 hari</button><button>12 hari</button></div><label>Kategori perjalanan</label><div class="chips"><button class="active">Semua</button><button>Reguler</button><button>Premium</button><button>Keluarga</button></div></aside><div><div class="result-head"><span><strong>6</strong> paket contoh • Semua keberangkatan</span><select><option>Urutkan: Rekomendasi</option></select></div><div class="package-grid two" data-package-grid>${packages.map(p => packageCard(p)).join('')}</div><div class="pagination"><b>1</b><span>Halaman tunggal • 6 contoh</span></div></div></div></section>
  <section class="section compare"><div class="container">${eyebrow('SEBELUM MEMILIH')}<h2>Lihat lebih dari sekadar harga.</h2><p>Pastikan setiap rincian cocok dengan kebutuhan Anda. Informasi ini merupakan panduan umum, bukan janji fasilitas.</p><div class="info-grid">${[['▣','Akomodasi & mobilitas','Tanyakan nama hotel final, lokasi, pilihan kamar, dan akses untuk jamaah dengan kebutuhan mobilitas.'],['⌁','Jadwal & transportasi','Periksa waktu transit, bagasi, durasi di setiap kota, dan potensi perubahan jadwal penerbangan.'],['▤','Biaya & ketentuan','Baca fasilitas, biaya tambahan, ketentuan pembatalan, serta penawaran tertulis sebelum pembayaran.']].map(i => `<article><i>${i[0]}</i><h3>${i[1]}</h3><p>${i[2]}</p></article>`).join('')}</div></div></section>
  ${faq()}${cta()}${footer()}`;
}

function detailPage() {
  const itinerary = [
    ['Jakarta → Madinah','Berkumpul di bandara, pemeriksaan dokumen, dan penerbangan sesuai jadwal final.'],
    ['Tiba di Madinah','Transfer menuju hotel, waktu istirahat, dan orientasi area sekitar Masjid Nabawi.'],
    ['Madinah & persiapan','Waktu ibadah mandiri dan pengenalan agenda perjalanan.'],
    ['Madinah → Makkah','Persiapan ihram sesuai bimbingan, perjalanan menuju Makkah, lalu pelaksanaan Umrah.'],
    ['Makkah • waktu ibadah','Waktu ibadah dan istirahat. Sesuaikan aktivitas dengan kondisi tubuh.'],
    ['Mengenal Makkah','Agenda pengenalan destinasi dan refleksi perjalanan secara terarah.'],
    ['Makkah • agenda mandiri','Hari untuk ibadah, refleksi, dan kebutuhan personal jamaah.'],
    ['Makkah → Jeddah','Perjalanan menuju Jeddah, istirahat, dan persiapan penerbangan pulang.'],
    ['Kembali ke Indonesia','Penerbangan pulang dan penutupan rangkaian perjalanan.']
  ];
  return `<section class="detail-hero"><div class="container">${crumb('Paket Umrah / Umrah Tenang')}${eyebrow('REGULER • 9 HARI • PAKET DEMO')}<h1>Umrah Tenang</h1><p>Perjalanan dengan ruang untuk ibadah dan istirahat. Rancangan rute Madinah–Makkah dengan keberangkatan contoh 12 Februari 2027.</p><div class="detail-gallery"><div>${img('kaaba-courtyard.jpg', 'Masjidil Haram')}</div><div>${img('madinah-sunrise.jpg', 'Masjid Nabawi')}${img('hotel-room.jpg', 'Kamar hotel')}</div></div><small>Seluruh foto adalah ilustrasi destinasi dan suasana. Bukan dokumentasi perjalanan maupun fasilitas yang telah diverifikasi.</small></div></section>
  <section class="section overview"><div class="container overview-grid"><div>${eyebrow('TENTANG PERJALANAN')}<h2>Sederhana dalam rencana, bermakna dalam perjalanan.</h2><p>Paket contoh untuk jamaah yang mengutamakan ritme perjalanan terarah. Rincian layanan, jadwal, dan ketersediaan baru dapat dipastikan melalui penawaran resmi.</p><div class="facts"><div><span>Keberangkatan contoh</span><strong>12 Februari 2027</strong></div><div><span>Durasi perjalanan</span><strong>9 hari • Rute ilustratif</strong></div><div><span>Kota keberangkatan</span><strong>Jakarta • Contoh</strong></div><div><span>Komposisi kamar</span><strong>Berempat • Simulasi</strong></div></div></div><aside class="price-box">${eyebrow('SIMULASI • BUKAN PENAWARAN')}<span>Harga contoh mulai dari / orang</span><strong>Rp28.900.000</strong><p>Kamar berempat • 9 hari<br>Keberangkatan 12 Februari 2027</p><hr><p><b>Rincian harga contoh</b><br>Bertiga — Rp29.900.000<br>Berdua — Rp34.000.000<br>Berdua + 1 — Rp32.400.000</p><a class="button button-full" href="?page=contact">Tanya paket via WhatsApp ↗</a></aside></div></section>
  <section class="section accommodation"><div class="container">${eyebrow('AKOMODASI & PENERBANGAN • ILUSTRATIF')}<h2>Kenali detail kenyamanan Anda.</h2><p>Nama hotel menggunakan placeholder. Foto, lokasi, fasilitas, dan penugasan maskapai belum terverifikasi.</p><div class="hotel-grid"><article>${img('hotel-room.jpg','Kamar Hotel A')}<div><h3>Hotel A • Makkah</h3><p>Contoh: 4 malam • Kamar berempat</p><p>Lokasi dan jarak ke Masjidil Haram menunggu konfirmasi. Fasilitas contoh: kamar mandi dalam dan area makan.</p></div></article><article>${img('hotel-room.jpg','Kamar Hotel B')}<div><h3>Hotel B • Madinah</h3><p>Contoh: 3 malam • Kamar berempat</p><p>Lokasi dan jarak ke Masjid Nabawi menunggu konfirmasi. Fasilitas contoh: kamar mandi dalam dan area makan.</p></div></article></div><article class="airline-card"><span>✈</span><div><h3>Saudia • Penugasan maskapai ilustratif</h3><p>Rute mungkin Jakarta → Madinah, transit → Jakarta. Nomor penerbangan, waktu, bagasi, dan kelas layanan menunggu verifikasi.</p></div></article></div></section>
  <section class="section itinerary"><div class="container itinerary-grid"><div>${eyebrow('RANGKAIAN PERJALANAN • 9 HARI')}<h2>Satu hari, satu ruang untuk hadir.</h2><p>Itinerary contoh. Urutan, durasi, dan kegiatan dapat berubah mengikuti penerbangan, ketentuan resmi, kondisi lapangan, serta kesiapan jamaah.</p>${img('madinah-sunrise.jpg','Madinah')}</div><ol>${itinerary.map((x,i)=>`<li><span>0${i+1}</span><div><strong>${x[0]}</strong><p>${x[1]}</p></div></li>`).join('')}</ol></div></section>
  <section class="section clarity"><div class="container">${eyebrow('RINCIAN FASILITAS & KETENTUAN')}<h2>Jelas sejak awal.</h2><p>Komponen contoh untuk bahan diskusi. Fasilitas dan biaya hanya berlaku setelah tercantum pada penawaran resmi.</p><div class="info-grid">${[['◎','Fasilitas contoh','Tiket penerbangan sesuai konfirmasi • Akomodasi kamar berempat • Transportasi antarkota • Manasik & pendampingan.'],['⊘','Belum termasuk','Pembuatan atau perpanjangan paspor • Keperluan pribadi • Biaya bagasi berlebih • Layanan di luar itinerary.'],['▤','Persyaratan awal','Paspor sesuai aturan masa berlaku • Dokumen identitas • Pernyataan visa terkini • Ketentuan kesehatan yang berlaku.']].map(i=>`<article><i>${i[0]}</i><h3>${i[1]}</h3><p>${i[2]}</p></article>`).join('')}</div></div></section>
  ${faq('Pertanyaan seputar paket ini','Informasi awal untuk membantu Anda merencanakan. Detail layanan masih berupa konsep demo.')}
  <section class="section alternatives"><div class="container">${eyebrow('ALTERNATIF PERJALANAN • DEMO')}<h2>Pilihan lain untuk dipertimbangkan.</h2><div class="package-grid two">${packages.slice(1,3).map(p=>packageCard(p,true)).join('')}</div></div></section>
  <section class="package-cta"><div class="container"><span>Umrah Tenang • Rp28.900.000</span><a class="button" href="?page=contact">Konsultasi paket via WhatsApp ↗</a><small>Tampilan sticky • CTA belum terhubung</small></div></section>${footer()}`;
}

function aboutPage() {
  return `<section class="page-intro compact-intro"><div class="container">${crumb('Tentang Kami')}${eyebrow('MENGENAL TRAGUNA TOUR')}<h1>Perjalanan dimulai dari kepercayaan.</h1><p>Traguna Tour adalah konsep brand perjalanan Umrah untuk pasar Indonesia. Profil, cerita, dan struktur layanan berikut bersifat ilustratif, bukan riwayat perusahaan nyata.</p></div></section>
  <section class="section profile"><div class="container split-media"><div>${img('quiet-arches.jpg','Arsitektur masjid')}<small>Visual ilustratif • Bukan dokumentasi perjalanan</small></div><div>${eyebrow('PROFIL ILUSTRATIF')}<h2>Perjalanan yang baik berawal dari rasa percaya.</h2><p>Traguna Tour berangkat dari gagasan sederhana: merencanakan Umrah seharusnya terasa jelas, manusiawi, dan tidak terburu-buru. Pilihan perjalanan perlu dijelaskan dengan bahasa yang mudah dipahami.</p><p>Kami membayangkan agensi yang mendengarkan kebutuhan jamaah, menyajikan rincian layanan secara transparan, dan menjaga komunikasi dari persiapan hingga kepulangan.</p><hr><small>Brand demo • Riwayat, lokasi, tim, dan pengalaman aktual menunggu data perusahaan terverifikasi.</small></div></div></section>
  <section class="section dark-quote"><div class="container two-col-title"><div>${eyebrow('CERITA YANG DIUSULKAN')}<h2>Bukan sekadar tiba.<br>Tetapi hadir.</h2></div><div><h3>Di antara jadwal, koper, dan dokumen, ada niat yang ingin dijaga.</h3><p>Cerita konsep ini menempatkan ketenangan jamaah sebagai pusat perjalanan. Keterbukaan informasi membantu keluarga berdiskusi. Agenda yang masuk akal memberi ruang untuk istirahat.</p><small>Narasi ilustratif • Tidak menyatakan tahun berdiri, jumlah jamaah, ataupun pengalaman operasional.</small></div></div></section>
  <section class="section values"><div class="container">${eyebrow('ARAH LAYANAN • ILUSTRATIF')}<h2>Nilai yang ingin kami bawa.</h2><div class="value-grid"><article class="featured"><i>◉</i><h3>Visi konsep</h3><p>Menjadi ruang perencanaan Umrah yang mengutamakan kejelasan informasi, kepedulian, dan perjalanan yang bermakna.</p></article><article><i>⌘</i><h3>Misi konsep</h3><p>01 Menyampaikan rincian layanan secara terbuka.<br>02 Mendengarkan kebutuhan jamaah dan keluarga.<br>03 Membantu persiapan melalui informasi yang terarah.<br>04 Mengutamakan verifikasi data dan komunikasi.</p></article></div></div></section>
  <section class="section proof"><div class="container">${eyebrow('PENGALAMAN & REKAM JEJAK')}<h2>Bukti yang layak dipercaya, bukan angka yang dibuat-buat.</h2><p>Data pengalaman operasional belum tersedia. Area ini disiapkan untuk rekam jejak perusahaan yang dapat diverifikasi sebelum publikasi.</p><div class="info-grid">${[['▣','Riwayat perjalanan','Dokumentasi keberangkatan dan penyelenggaraan menunggu data resmi.'],['▣','Pendampingan jamaah','Profil pembimbing dan pengalaman pendamping menunggu verifikasi.'],['▣','Jejaring layanan','Informasi kerja sama hotel dan transportasi hanya ditampilkan setelah validasi.']].map(i=>`<article><i>${i[0]}</i><h3>${i[1]}</h3><p>${i[2]}</p></article>`).join('')}</div></div></section>
  <section class="section team"><div class="container">${eyebrow('ORANG DI BALIK PERJALANAN • STRUKTUR KONSEP')}<h2>Peran berbeda, perhatian yang sama.</h2><p>Tidak ada nama atau profil staf nyata dalam demo ini. Struktur berikut menunjukkan peran layanan yang diusulkan.</p><div class="team-grid">${[['Konsultan perjalanan','Mendengarkan kebutuhan dan menjelaskan pilihan perjalanan.'],['Koordinator operasional','Mengelola jadwal, dokumen, serta koordinasi layanan.'],['Pendamping jamaah','Membantu komunikasi dan orientasi selama perjalanan.']].map(i=>`<article><i>♙</i><h3>${i[0]}</h3><p>${i[1]}</p><small>PROFIL ILUSTRATIF • BUKAN STAF AKTUAL</small></article>`).join('')}</div></div></section>
  <section class="section legal"><div class="container two-col-title"><div>${eyebrow('LEGALITAS & IZIN')}<h2>Informasi resmi harus dapat diperiksa.</h2></div><article><h3>Informasi legal dan izin menunggu data perusahaan terverifikasi.</h3><p>Nama badan usaha, alamat resmi, dan izin penyelenggaraan belum tersedia. Tidak ada nomor izin, sertifikasi, atau klaim terdaftar pada konsep ini.</p><hr><small>Sebelum memesan nyata, verifikasi legalitas penyelenggara melalui kanal resmi yang berlaku.</small></article></div></section>
  <section class="section office"><div class="container">${eyebrow('RUANG BERTEMU • PLACEHOLDER KANTOR')}<h2>Percakapan yang hangat, keputusan yang lebih jelas.</h2><p>Gambar kantor merupakan ilustrasi suasana yang diusulkan, bukan lokasi Traguna Tour. Alamat dan foto aktual akan ditambahkan setelah verifikasi.</p><div class="office-grid">${img('consultation-room.jpg','Ruang konsultasi')}${img('travel-suitcase.jpg','Persiapan konsultasi')}</div></div></section>
  ${cta()}${footer()}`;
}

function galleryPage() {
  return `<section class="page-intro gallery-intro"><div class="container">${crumb('Galeri')}${eyebrow('CATATAN VISUAL • SELURUH GAMBAR ILUSTRATIF')}<h1>Tanah Suci, dalam bingkai yang tenang.</h1><p>Koleksi visual untuk mengenal destinasi dan suasana perjalanan. Bukan dokumentasi jamaah, hotel aktual, atau kantor Traguna Tour.</p><div class="filter-chips" data-gallery-filter>${['Semua','Makkah','Madinah','Arsitektur','Akomodasi','Persiapan','Kantor'].map((x,i)=>`<button class="${i===0?'active':''}" data-filter="${x}">${x}</button>`).join('')}</div><p class="fineprint">9 visual ilustratif • Filter dan pembesaran gambar hanya ditampilkan sebagai bagian desain.</p><div class="masonry" data-gallery>${gallery.map((g,i)=>`<button class="gallery-item g${i+1}" data-category="${g[2]}" data-image="${g[0]}" aria-label="Perbesar ${g[1]}">${img(g[0],g[1])}<span>Visual ilustratif • Bukan dokumentasi aktual</span><strong>${g[1]}</strong><small>${g[2]} • Koleksi konsep</small></button>`).join('')}</div><div class="notice"><strong>Dokumentasi asli akan ditampilkan setelah verifikasi.</strong><p>Foto perjalanan nyata memerlukan persetujuan pihak yang terlihat di dalamnya. Detail tanggal dan keterangan perjalanan akan disertakan saat tersedia.</p></div></div></section>
  <section class="section video-section"><div class="container">${eyebrow('CERITA DALAM VIDEO • PLACEHOLDER')}<h2>Ruang bagi pengalaman yang autentik.</h2><p>Video testimoni jamaah akan ditampilkan setelah verifikasi dan persetujuan. Tidak ada rekaman atau ulasan pelanggan dalam konsep ini.</p><div class="video-grid">${[['Persiapan & pendampingan','Testimoni jamaah akan ditampilkan setelah verifikasi.'],['Suasana selama perjalanan','Area ini bukan pemutar video aktif.'],['Cerita keluarga','Testimoni hanya akan hadir dengan persetujuan.']].map(v=>`<article><div class="video-placeholder">▢<small>VIDEO BELUM TERSEDIA</small></div><h3>${v[0]}</h3><p>${v[1]}</p></article>`).join('')}</div></div></section>
  <section class="section visual-note"><div class="container two-col-title"><div>${eyebrow('KETERANGAN VISUAL')}<h2>Gambar yang indah, konteks yang jelas.</h2></div><div><p>Visual pada situs demo menggambarkan destinasi dan suasana yang diusulkan. Foto tidak membuktikan fasilitas, kemitraan, atau perjalanan yang telah diselenggarakan.</p><p class="gold">Contoh keadaan lightbox tersedia sebagai tampilan interaktif.</p></div></div></section>${cta()}${footer()}<dialog class="lightbox"><button aria-label="Tutup">×</button><img alt="Gambar galeri diperbesar"><p></p></dialog>`;
}

function articlesPage() {
  return `<section class="page-intro article-intro"><div class="container">${crumb('Artikel')}${eyebrow('JURNAL PERJALANAN • REDAKSI KONSEP')}<h1>Bekal pengetahuan, sebelum melangkah.</h1><p>Catatan persiapan, destinasi, dan perjalanan keluarga. Konten edukasi umum; bukan fatwa, nasihat medis, atau jaminan persyaratan perjalanan.</p><article class="featured-article"><div>${img('packing-feature.jpg','Koper dan perlengkapan perjalanan')}</div><div>${eyebrow('PILIHAN REDAKSI • PERSIAPAN')}<h2>Sebelum berangkat: panduan persiapan Umrah yang lebih tenang</h2><p>Dari dokumen hingga ritme istirahat, susun langkah kecil yang membantu Anda berangkat dengan persiapan lebih terarah.</p><p>14 Oktober 2026 • 7 menit baca<br>Redaksi Traguna Tour</p><a href="#articles">Baca panduan ↗</a></div></article></div></section>
  <section class="section article-list" id="articles"><div class="container"><div class="section-heading with-action"><div>${eyebrow('BACAAN UNTUK PERJALANAN ANDA')}<h2>Temukan perspektif baru.</h2><div class="filter-chips">${['Semua','Persiapan','Destinasi','Tips perjalanan','Keluarga'].map((x,i)=>`<button class="${i===0?'active':''}">${x}</button>`).join('')}</div></div><label class="article-search">Cari artikel<input type="search" placeholder="Topik atau kata kunci ⌕" data-article-search></label></div><p class="fineprint">6 artikel konsep • Pencarian & kategori merupakan tampilan statis.</p><div class="article-grid" data-article-grid>${articles.map(a=>`<article>${img(a[0],a[3])}<p class="card-kicker">${a[1]} • ${a[2]}</p><h3>${a[3]}</h3><p class="muted">${a[4]} • Redaksi Traguna Tour</p><a href="#">Baca artikel ↗</a></article>`).join('')}</div><div class="pagination"><b>1</b><span>6 artikel • Halaman tunggal</span></div></div></section>
  <section class="section editorial"><div class="container two-col-title"><div>${eyebrow('CATATAN REDAKSI')}<h2>Pengetahuan yang baik tetap perlu diperbarui.</h2></div><div><p>Ketentuan visa, kesehatan, dan akses destinasi dapat berubah. Periksa informasi terbaru dari instansi resmi sebelum mengambil keputusan. Untuk pertanyaan ibadah, konsultasikan kepada pembimbing yang kompeten.</p><hr><p class="gold">Artikel disusun untuk konsep demo • Visual ilustratif • Bukan nasihat profesional individual</p></div></div></section>${cta()}${footer()}`;
}

function contactPage() {
  return `<section class="section contact-page"><div class="container">${crumb('Kontak')}<div class="contact-grid"><div><div class="contact-intro">${eyebrow('MARI MERENCANAKAN • KANAL DEMO')}<h1>Setiap perjalanan dimulai dari percakapan.</h1><p>Ceritakan rencana dan kebutuhan Anda. Alamat kantor, nomor WhatsApp, email, dan kanal sosial menunggu data perusahaan terverifikasi.</p></div><div class="contact-card"><i>◯</i><h2>Mulai dengan konsultasi personal.</h2><p>Diskusikan waktu berangkat, kebutuhan keluarga, dan pilihan perjalanan. Kanal WhatsApp belum tersedia dalam demo.</p><a href="#contact-form">Konsultasi via WhatsApp ↗</a><small>CTA statis • Tidak ada nomor atau tujuan operasional</small></div><div class="contact-details"><h3>Kantor Traguna Tour</h3><p>Alamat kantor akan ditambahkan<br>Tidak ada alamat kunjungan resmi pada konsep ini.</p><h3>Email & telepon</h3><p>Belum tersedia</p><h3>Usulan jam konsultasi</h3><p>Senin–Jumat　09.00–17.00 WIB<br>Sabtu　　　　09.00–13.00 WIB<br>Minggu & hari libur　Dengan janji</p><h3>Temukan kami nanti</h3><p>Instagram • YouTube • Facebook — Placeholder kanal sosial, belum ada akun resmi terhubung.</p></div></div><form class="contact-form" id="contact-form" novalidate><div>${eyebrow('FORMULIR MINAT • TAMPILAN STATIS')}<h2>Ceritakan rencana Anda.</h2><p>Contoh formulir. Tidak mengirim atau menyimpan data; jangan masukkan data pribadi pada demo.</p></div><label>Nama lengkap<input name="name" placeholder="Nama Anda" required></label><label>Email<input name="email" type="email" placeholder="Alamat email Anda" required></label><label>Nomor WhatsApp<input name="phone" placeholder="Nomor untuk konsultasi" required></label><label>Bulan keberangkatan<select name="month"><option>Pilih bulan⌄</option><option>Februari 2027</option><option>Maret 2027</option><option>April 2027</option></select></label><label>Jumlah calon jamaah<select name="people"><option>Pilih jumlah⌄</option><option>1 orang</option><option>2 orang</option><option>3–5 orang</option></select></label><label>Pesan atau kebutuhan khusus<textarea name="message" placeholder="Ceritakan waktu, anggaran, atau kebutuhan perjalanan Anda."></textarea></label><label class="checkbox"><input type="checkbox" required><span>Saya memahami bahwa isi formulir demo ini tidak dikirim. Persetujuan privasi resmi akan ditambahkan pada layanan nyata.</span></label><button class="button button-full" type="submit">Kirim permintaan • Demo ↗</button><small class="form-status">Tombol statis • Tidak ada pengiriman formulir</small></form></div></div></section>
  <section class="section map-section"><div class="container"><div>${eyebrow('RUANG BERTEMU • LOKASI BELUM TERSEDIA')}<h2>Kunjungan setelah alamat dikonfirmasi.</h2><p>Map dan visual kantor merupakan placeholder. Tidak menunjukkan alamat nyata atau rute perjalanan.</p>${img('consultation-room.jpg','Ilustrasi ruang kantor')}</div><div class="map-placeholder"><i>⌾</i><h3>Peta kantor akan ditambahkan</h3><p>Menunggu alamat resmi terverifikasi.<br>Placeholder ini bukan peta navigasi.</p></div><small>Untuk kunjungan nyata, pastikan alamat dan jadwal melalui kanal resmi perusahaan terlebih dahulu.</small></div></section>${faq('Sebelum menghubungi kami','Informasi awal untuk membantu Anda merencanakan. Detail layanan masih berupa konsep demo.')}${footer()}`;
}

const pages = { home: homePage, packages: packagesPage, detail: detailPage, about: aboutPage, gallery: galleryPage, articles: articlesPage, contact: contactPage };

function currentPage() {
  const requested = new URLSearchParams(location.search).get('page') || 'home';
  return pages[requested] ? requested : 'home';
}

function bindInteractions(page) {
  document.querySelector('.menu-toggle')?.addEventListener('click', e => {
    const button = e.currentTarget;
    const isOpen = document.body.classList.toggle('menu-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.filter-chips button, .chips button').forEach(button => button.addEventListener('click', () => {
    button.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  }));

  const galleryFilter = document.querySelector('[data-gallery-filter]');
  galleryFilter?.addEventListener('click', e => {
    const button = e.target.closest('button');
    if (!button) return;
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-gallery] .gallery-item').forEach(item => item.hidden = filter !== 'Semua' && item.dataset.category !== filter);
  });

  const lightbox = document.querySelector('.lightbox');
  document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
    if (!lightbox) return;
    lightbox.querySelector('img').src = `${A}${imageFile(button.dataset.image)}`;
    lightbox.querySelector('p').textContent = button.querySelector('strong').textContent;
    lightbox.showModal();
  }));
  lightbox?.querySelector('button')?.addEventListener('click', () => lightbox.close());
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });

  document.querySelector('[data-search-packages]')?.addEventListener('submit', e => {
    e.preventDefault();
    const query = new FormData(e.currentTarget).get('query') || e.currentTarget.querySelector('input').value;
    document.querySelectorAll('[data-package-grid] .package-card').forEach(card => card.hidden = query && !card.textContent.toLowerCase().includes(String(query).toLowerCase()));
  });

  document.querySelector('[data-article-search]')?.addEventListener('input', e => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('[data-article-grid] article').forEach(card => card.hidden = query && !card.textContent.toLowerCase().includes(query));
  });

  document.querySelector('.contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const status = e.currentTarget.querySelector('.form-status');
    status.textContent = e.currentTarget.checkValidity() ? 'Terima kasih. Ini adalah formulir demo sehingga data tidak dikirim.' : 'Lengkapi kolom wajib sebelum melanjutkan.';
    status.classList.add('visible');
  });

  document.querySelectorAll('[data-nav]').forEach(link => link.classList.toggle('active', link.dataset.nav === page));
}

const page = currentPage();
document.title = `${{home:'Beranda',packages:'Paket Umrah',detail:'Umrah Tenang',about:'Tentang Kami',gallery:'Galeri',articles:'Artikel',contact:'Kontak'}[page]} — Traguna Tour`;
document.getElementById('app').innerHTML = pages[page]();
bindInteractions(page);

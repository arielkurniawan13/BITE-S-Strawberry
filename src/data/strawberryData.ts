import timPhoto from '../assets/images/tim-bites-asli.jpeg';
import imgStroberiharga15k from '../assets/images/stroberiharga15k.jpeg';
import imgStroberiharga4k from '../assets/images/stroberiharga4k.jpeg';
import imgjusstroberi from '../assets/images/jusstroberi.jpeg';
import imgStroberiGradeA from '../assets/images/stroberigradea.jpg';
import imgStroberiGradeAB from '../assets/images/stroberigradeab.jpg';
import imgStroberiGradeABC from '../assets/images/stroberigradeabc.jpg';
import imgstroberifrozen from '../assets/images/stroberifrozen.jpeg';
import imgOutletSampingPolresSalatiga from '../assets/images/outletsampingpolressalatiga.jpeg';
import imgOutletSeberangBRINanggulan from '../assets/images/outletseberangbrinanggulan.jpeg';
import imgOutletKemiri from '../assets/images/outletkemiri.jpeg';
import imgKemasanStroberi from '../assets/images/kemasanstroberi.jpeg';
export interface Outlet {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  address: string;
  landmark: string;
  mapsUrl: string;
  openingHours: string;
  status: string;
  image: string;
  phone: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'all' | 'fresh' | 'package' | 'frozen';
  price: number;
  originalPrice?: number;
  unit: string;
  description: string;
  badges: string[];
  rating: number;
  reviewsCount: number;
  image: string;
  isBestSeller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  productBought: string;
  date: string;
  photoUrl?: string;
  adminReply?: string;
  tag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const BRAND_CONFIG = {
  name: "BITE'S",
  altName: "BiteBites",
  tagline: "Fresh Strawberry, Happy Every Day!",
  subheadline: "Nikmati kesegaran strawberry pilihan dengan kualitas terbaik dari kebun lokal untuk menemani hari-harimu.",
  whatsappNumber: "081818193311",
  whatsappUrl: "https://wa.me/6281818193311",
  instagramHandle: "@bites_strawberrysalatiga",
  instagramUrl: "https://www.instagram.com/bites_strawberrysalatiga?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==",
  tiktokHandle: "@bites.fruit",
  tiktokUrl: "https://www.tiktok.com/@bites.fruit?is_from_webapp=1&sender_device=pc",
  operatingHours: "06.00 – 17.00 WIB (Buka Setiap Hari)",
  city: "Salatiga, Jawa Tengah",
};

export const OUTLETS: Outlet[] = [
  {
    id: "outlet-1",
    name: "Outlet 1 — Samping Polres Salatiga",
    shortName: "Outlet Polres Salatiga",
    tagline: "Outlet Utama & Stand Fresh",
    address: "Jl. Sukowati (Tepat di samping Polres Salatiga), Kalicacing, Kec. Sidorejo, Kota Salatiga, Jawa Tengah",
    landmark: "Samping Polres Salatiga",
    mapsUrl: "https://maps.app.goo.gl/73vit83r3MYn9Jha8",
    openingHours: "06.00 – 17.00 WIB",
    status: "Buka Setiap Hari",
    image: imgOutletSampingPolresSalatiga,
    phone: "081818193311",
  },
  {
    id: "outlet-2",
    name: "Outlet 2 — Seberang BRI Nanggulan Salatiga",
    shortName: "Outlet BRI Nanggulan",
    tagline: "Stand Fresh Harian",
    address: "Area BRI Unit Nanggulan, Jl. Raya Tingkir - Suruh, Nanggulan, Kota Salatiga, Jawa Tengah",
    landmark: "BRI Unit Nanggulan Salatiga",
    mapsUrl: "https://maps.app.goo.gl/T1UZW6tY3XUHHHSs5",
    openingHours: "06.00 – 17.00 WIB",
    status: "Buka Setiap Hari",
    image: imgOutletSeberangBRINanggulan,
    phone: "081818193311",
  },
  {
    id: "outlet-3",
    name: "Outlet 3 — Kemiri Raya 1 Salatiga",
    shortName: "Outlet Kemiri Raya",
    tagline: "Stand Fresh Harian",
    address: "Jl. Kemiri Raya No. 1, Salatiga, Kec. Sidorejo, Kota Salatiga, Jawa Tengah",
    landmark: "Kemiri Raya 1 Salatiga",
    mapsUrl: "https://maps.app.goo.gl/3wWbVtJSMmSozHv28",
    openingHours: "06.00 – 17.00 WIB",
    status: "Buka Setiap Hari",
    image: imgOutletKemiri,
    phone: "081818193311",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Strawberry Pack Besar",
    category: "fresh",
    price: 15000,
    originalPrice: 15000,
    unit: "250gr",
    description: "Buah pilihan berukuran jumbo, manis segar, merah merona, dan dipetik langsung setiap pagi dari kebun lokal pilihan.",
    badges: ["FRESH", "BEST SELLER"],
    rating: 4.9,
    reviewsCount: 250,
    image: imgStroberiharga15k,
    isBestSeller: true,
  },
  {
    id: "prod-2",
    name: "Strawberry Pack Kecil",
    category: "fresh",
    price: 4000,
    unit: "66,67gr",
    description: "Pengalaman seru stroberi organik segar kualitas prima dengan tangkai utuh, manis asam seimbang dan wangi alami.",
    badges: ["FRESH", "ORGANIK"],
    rating: 4.9,
    reviewsCount: 142,
    image: imgStroberiharga4k,
    isBestSeller: false,
  },
  {
    id: "prod-3",
    name: "Jus Strawberry",
    category: "package",
    price: 12000,
    originalPrice: 12000,
    unit: "250 ml",
    description: "Paket segar favorit keluarga, porsi pas dan ramah di kantong, sangat cocok untuk camilan harian dan sajian meja makan.",
    badges: ["FRESH", "HEMAT"],
    rating: 4.9,
    reviewsCount: 210,
    image: imgjusstroberi,
    isBestSeller: true,
  },
  {
    id: "prod-4",
    name: "Stroberi Manis Grade A",
    category: "fresh",
    price: 75000,
    unit: "/kg",
    description: "Ukuran besar, bentuk sempurna, warna merah merata, kualitas terbaik.",
    badges: ["FRESH", "FAVORIT"],
    rating: 4.8,
    reviewsCount: 96,
    image: imgStroberiGradeA,
    isBestSeller: false,
  },
  {
    id: "prod-7",
    name: "Stroberi Manis Grade AB",
    category: "fresh",
    price: 65000,
    unit: "/kg",
    description: "Ukuran sedang-bentuk sempurna, warna merah merata, kualitas terbaik",
    badges: ["FRESH", "PREMIUM"],
    rating: 4.7,
    reviewsCount: 90,
    image: imgStroberiGradeAB,
    isBestSeller: false,
  },
  {
    id: "prod-5",
    name: "Stroberi Manis Grade ABC",
    category: "package",
    price: 55000,
    unit: "/kg",
    description: "Ukuran bervariasi, bentuk sempurna, warna merah menarik, kualitas terbaik.",
    badges: ["HEMAT", "BEST DEAL"],
    rating: 4.9,
    reviewsCount: 115,
    image: imgStroberiGradeABC,
    isBestSeller: true,
  },
  {
    id: "prod-6",
    name: "Strawberry Frozen",
    category: "frozen",
    price: 40000,
    unit: "/kg",
    description: "Stroberi utuh beku higienis tanpa tangkai, siap blender untuk jus segar, smoothie bowl, selai homemade, atau topping dessert.",
    badges: ["PRAKTIS", "BEKU SEGAR"],
    rating: 4.8,
    reviewsCount: 68,
    image: imgstroberifrozen,
    isBestSeller: false,
  },
];

export const ADVANTAGES = [
  {
    id: "adv-1",
    title: "Strawberry Fresh",
    subtitle: "Dipetik Langsung",
    description: "Dari kebun lokal pilihan, buah dipetik pagi hari sehingga tiba di outlet dalam kondisi segar bugar dan wangi khas stroberi.",
    icon: "Sprout",
  },
  {
    id: "adv-2",
    title: "Dipilih & Disortir",
    subtitle: "Sortir Manual Ketat",
    description: "Setiap butir stroberi melalui proses seleksi manual teliti untuk memisahkan buah cacat dan memastikan hanya buah prima yang kamu bawa pulang.",
    icon: "CheckCheck",
  },
  {
    id: "adv-3",
    title: "Harga Terjangkau",
    subtitle: "Langsung dari Sumber",
    description: "Kami memotong rantai distribusi panjang sehingga pelanggan Salatiga bisa menikmati buah stroberi berkualitas premium dengan harga bersahabat.",
    icon: "Coins",
  },
  {
    id: "adv-4",
    title: "Stok Harian Selalu Baru",
    subtitle: "Tanpa Pengawet",
    description: "Pasokan baru setiap hari tanpa sistem simpan berhari-hari. Kesegaran alami murni tanpa lilin atau bahan pengawet apa pun.",
    icon: "Clock",
  },
];

export const PROMOS = [
  {
    id: "promo-2",
    tag: "SPECIAL DEALS",
    title: "Gratis Pengantaran Area Salatiga Kota",
    desc: "Pesan minimal 3 box stroberi varian apa saja, tim BITE'S siap antar langsung ke depan rumah kamu tanpa ongkir tambahan.",
    validUntil: "Area Salatiga Kota & Sekitarnya",
    accentColor: "#F28C18",
    productPreset: "Paket Hemat Keluarga",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-testi-1",
    title: "Stroberi Mika Fresh Manteb Manis",
    caption: "Testimoni WhatsApp: 'baik kak, mantebb poll maniss seger' — Stroberi pilihan di kemasan mika rapi.",
    category: "Testimoni Pelanggan",
    imageUrl: "/src/assets/images/testi_clamshell_1791628141617.jpg",
  },
  {
    id: "gal-testi-2",
    title: "Stroberi Gede-Gede 2 Mika",
    caption: "Testimoni WhatsApp: 'makasihh gede2, manis juga rasa nyaaa, next order lg deh'",
    category: "Testimoni Pelanggan",
    imageUrl: "/src/assets/images/testi_two_packs_1791628191932.jpg",
  },
  {
    id: "gal-testi-3",
    title: "Stroberi Segar + Cokelat Nikmat",
    caption: "Testimoni WhatsApp: 'strawberrynya gede2 fresh maniss definisi puas makan strawberry 😍😍🤤'",
    category: "Testimoni Pelanggan",
    imageUrl: "/src/assets/images/testi_choc_bowl_1791628207966.jpg",
  },
  {
    id: "gal-testi-4",
    title: "Stroberi Mangkok Gemoy Gemes",
    caption: "Testimoni WhatsApp: 'puas juga sama rasa strawberry nya manis seger 👍 gemoy gemoy gemes 🤤'",
    category: "Testimoni Pelanggan",
    imageUrl: "/src/assets/images/testi_gemoy_bowl_1791628222684.jpg",
  },
  {
    id: "gal-testi-5",
    title: "Stroberi Ndut-Ndut Siap Antar",
    caption: "Testimoni WhatsApp: 'dah sampe kaak, ndut ndut bangeeeettt, makasihhh yaaa'",
    category: "Testimoni Pelanggan",
    imageUrl: "/src/assets/images/testi_black_bowl_1791628269882.jpg",
  },
  {
    id: "gal-0",
    title: "Tim & Kru BITE'S Salatiga",
    caption: "Senyum hangat kru dan keluarga besar BITE'S Healthy Food siap menyambutmu di outlet.",
    category: "Tim & Outlet",
    imageUrl: timPhoto,
  },
  {
    id: "gal-1",
    title: "Stroberi Segar Berkilau",
    caption: "Warna merah cerah merona hasil panen pagi hari dengan tekstur juicy dan manis.",
    category: "Buah Segar",
    imageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "gal-3",
    title: "Kemasan Rapi & Higienis",
    caption: "Kemas mika transparan menjaga buah tetap bernapas dan tidak mudah memar.",
    category: "Kemasan",
    imageUrl: imgKemasanStroberi,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-wa-1",
    name: "Pelanggan BITE'S (WhatsApp)",
    location: "Salatiga",
    rating: 5,
    comment: "baik kak, mantebb poll maniss seger",
    adminReply: "wiiihhhh mantapp kakk, izin posting ya kak 🙏",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    productBought: "Paket Stroberi Mika Fresh",
    date: "Jum, 22 Mei",
    photoUrl: "/src/assets/images/testi_clamshell_1791628141617.jpg",
    tag: "Manteb Pol Manis Seger",
  },
  {
    id: "testi-wa-2",
    name: "Pelanggan BITE'S (WhatsApp)",
    location: "Salatiga",
    rating: 5,
    comment: "sudah ya kaa, makasihh gede2, manis juga rasa nyaaa, next order lg deh",
    adminReply: "Terima kasih banyak yaa kakk sudah order di BITES FRUIT ya kak, sehat selalu 🤗",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    productBought: "2 Pack Stroberi Jumbo",
    date: "11.52 WIB",
    photoUrl: "/src/assets/images/testi_two_packs_1791628191932.jpg",
    tag: "Gede-Gede & Manis",
  },
  {
    id: "testi-wa-3",
    name: "Pelanggan BITE'S (WhatsApp)",
    location: "Salatiga",
    rating: 5,
    comment: "haii kak mau kasih testimoni strawberrynya gede\" fresh maniss definisi puas makan strawberry wkwk 😍😍🤤",
    adminReply: "Kakk terima kasih banyak yaa sudah mereview PO strawberry kami, senang dengarnyaa kakk 🥰🙏",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    productBought: "PO Stroberi + Camilan Cokelat",
    date: "Sab, 16 Mei",
    photoUrl: "/src/assets/images/testi_choc_bowl_1791628207966.jpg",
    tag: "Puas Makan Stroberi!",
  },
  {
    id: "testi-wa-4",
    name: "Pelanggan BITE'S (WhatsApp)",
    location: "Salatiga",
    rating: 5,
    comment: "sama2 kak, puas juga sama rasa strawberry nya manis seger 👍 gemoy gemoy gemes 🤤",
    adminReply: "Wihh lucukkk kakk, Izin posting ya kakk 🙏",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    productBought: "Stroberi Mangkok Fresh",
    date: "Jum, 22 Mei",
    photoUrl: "/src/assets/images/testi_gemoy_bowl_1791628222684.jpg",
    tag: "Gemoy-Gemoy Gemes",
  },
  {
    id: "testi-wa-5",
    name: "Pelanggan BITE'S (WhatsApp)",
    location: "Salatiga",
    rating: 5,
    comment: "dah sampe kaak, ndut ndut bangeeeettt, makasihhh yaaa",
    adminReply: "Makasii yaa kakk, Izin posting kakk 🙏",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    productBought: "Delivery Stroberi Jumbo",
    date: "Jum, 15 Mei",
    photoUrl: "/src/assets/images/testi_black_bowl_1791628269882.jpg",
    tag: "Ndut-Ndut Banget",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Bagaimana cara memesan strawberry di BITE'S?",
    answer: "Sangat mudah! Kamu cukup klik tombol 'Pesan via WhatsApp' di website ini atau pilih produk dari katalog. Form pesanan akan menyusun format pesan otomatis yang langsung terhubung ke admin WhatsApp kami di 081818193311.",
    category: "Pemesanan",
  },
  {
    question: "Di mana saja lokasi outlet resmi BITE'S di Salatiga?",
    answer: "Saat ini BITE'S memiliki 3 titik outlet di Salatiga: (1) Samping Polres Salatiga, (2) Depan BRI Unit Nanggulan Salatiga, dan (3) Jl. Kemiri Raya No. 1 Salatiga. Semua lokasi dapat kamu buka langsung dengan Google Maps melalui menu Lokasi di website ini.",
    category: "Lokasi",
  },
  {
    question: "Jam berapa outlet BITE'S buka setiap hari?",
    answer: "Outlet kami buka setiap hari mulai pukul 06.00 hingga 17.00 WIB (selama persediaan buah hari itu masih ada). Karena stroberi dipasok segar setiap pagi, kami sarankan memesan lebih awal untuk mendapatkan varian favorit.",
    category: "Operasional",
  },
  {
    question: "Apakah bisa melakukan pengambilan sendiri (Pickup) di outlet?",
    answer: "Bisa banget! Kamu bisa pesan terlebih dahulu via WhatsApp untuk hold stok dan menentukan jam pickup di outlet pilihanmu (Polres, Nanggulan, atau Kemiri Raya) agar tidak kehabisan saat datang.",
    category: "Pemesanan",
  },
  {
    question: "Apakah melayani pesan antar (Delivery) ke rumah?",
    answer: "Ya, kami melayani pengiriman area Kota Salatiga dan sekitarnya melalui kurir lokal atau pengantaran khusus. Tersedia promo bebas ongkir untuk minimal pemesanan 3 box!",
    category: "Pengiriman",
  },
  {
    question: "Bagaimana cara menyimpan stroberi agar tetap segar lebih lama?",
    answer: "Simpan stroberi dalam lemari es (chiller) dalam wadah berventilasi atau wadah tertutup yang dialasi tisu kering. Cuci stroberi hanya sesaat sebelum hendak dimakan agar buah tidak cepat lembek.",
    category: "Tips Buah",
  },
];

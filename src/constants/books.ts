const author_url = "/authors/";
const category_url = "/";

export const books = [
  {
    id: "1",
    description: "This is a book about a",
    short_description: "This is a book about a",
    name: "অপুর সংকেত",
    authors: [
      {
        id: "5",
        name: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
        slug: "bibhutibhushan-bandopadhyay",
        image: {
          src: author_url + "5.jpg",
        },
      },
    ],
    categories: [
      {
        id: "10",
        src: category_url + "1.webp",
        name: "উপন্যাস",
        slug: "uponnas",
      },
    ],
    regular_price: 1000,
    sale_price: 250,
    images: [{ id: "lal", name: "lal.img", src: "/books/b (1).jpg" }],
    quantity: 8,
    condition: "New",
    slug: "apura-sanket",
  },
  {
    id: "2",
    description: "This is a book about a",
    short_description: "This is a book about a",
    name: "অপুর সংকেত",
    authors: [
      {
        id: "1",
        name: "হুমায়ূন আহমেদ",
        slug: "humayun-ahmed",
        image: {
          src: author_url + "1.jpg",
        },
      },
    ],
    categories: [
      {
        id: "10",
        src: category_url + "1.webp",
        name: "উপন্যাস",
        slug: "uponnas",
      },
    ],
    regular_price: 1000,
    sale_price: 1000,
    images: [{ id: "lal", name: "lal.img", src: "/books/b (1).jpg" }],
    quantity: 8,
    condition: "New",
    slug: "apura-sanket",
  },
  {
    id: "3",
    description: "A timeless tale of love and war",
    short_description: "Love and war",
    name: "বিষাদ সিন্ধু",
    authors: [
      {
        id: "3",
        name: "সমরেশ মজুমদার",
        slug: "somoreesh-majumdar",
        image: {
          src: author_url + "3.png",
        },
      },
    ],
    categories: [
      {
        id: "11",
        src: category_url + "2.webp",
        name: "ঐতিহাসিক",
        slug: "oitihasik",
      },
    ],
    regular_price: 1200,
    sale_price: 900,
    images: [{ id: "bishad", name: "bishad.img", src: "/books/b (2).jpg" }],
    quantity: 5,
    condition: "New",
    slug: "bishad-sindhu",
  },
  {
    id: "4",
    description: "A journey through the eyes of an adventurer",
    short_description: "Adventurer's journey",
    name: "চাঁদের পাহাড়",
    authors: [
      {
        image: {
          src: author_url + "4.jpg",
        },
        id: "4",
        name: "কাজী নজরুল ইসলাম",
        slug: "kazi-najrul-islam",
      },
    ],
    categories: [
      {
        id: "12",
        src: category_url + "3.webp",
        name: "রোমাঞ্চ",
        slug: "romanch",
      },
    ],
    regular_price: 950,
    sale_price: 850,
    images: [{ id: "chander", name: "chander.img", src: "/books/b (3).jpg" }],
    quantity: 7,
    condition: "New",
    slug: "chander-pahar",
  },
  {
    id: "5",
    description: "A deep dive into the realms of science fiction",
    short_description: "Science fiction",
    name: "পৃথিবীর বাইরে",
    authors: [
      {
        image: {
          src: author_url + "7.jpg",
        },
        id: "7",
        name: "রবীন্দ্রনাথ ঠাকুর",
        slug: "robindranath-thakur",
      },
    ],
    categories: [
      {
        id: "13",
        src: category_url + "4.webp",
        name: "বিজ্ঞান কল্পকাহিনী",
        slug: "biggan-kalpokahini",
      },
    ],
    regular_price: 800,
    sale_price: 650,
    images: [
      { id: "prithibir", name: "prithibir.img", src: "/books/b (4).jpg" },
    ],
    quantity: 12,
    condition: "New",
    slug: "prithibir-baire",
  },
  {
    id: "6",
    description: "Exploring the wonders of human nature",
    short_description: "Human nature",
    name: "মানবিক দৃষ্টিকোণ",
    authors: [
      {
        image: null,
        id: "8",
        src: author_url + "8.jpg",
        name: "সুকান্ত ভট্টাচার্য",
        slug: "sukanto-vottacharjo",
      },
    ],
    categories: [
      {
        id: "14",
        src: category_url + "5.webp",
        name: "নিবন্ধ",
        slug: "nibondho",
      },
    ],
    regular_price: 700,
    sale_price: 600,
    images: [{ id: "manobik", name: "manobik.img", src: "/books/b (5).jpg" }],
    quantity: 9,
    condition: "New",
    slug: "manobik-drishikone",
  },
  {
    id: "7",
    description: "A collection of heartfelt poems",
    short_description: "Poetry collection",
    name: "কবিতার ভুবন",
    authors: [
      {
        image: null,
        id: "10",
        src: author_url + "6.jpg",
        name: "Jasimuddin",
        slug: "jasimuddin",
      },
    ],
    categories: [
      {
        id: "15",
        src: category_url + "6.webp",
        name: "কবিতা",
        slug: "kobita",
      },
    ],
    regular_price: 500,
    sale_price: 450,
    images: [{ id: "kobitar", name: "kobitar.img", src: "/books/b (6).jpg" }],
    quantity: 15,
    condition: "New",
    slug: "kobitar-bhubon",
  },
  {
    id: "8",
    description: "An exploration of philosophical thoughts",
    short_description: "Philosophical thoughts",
    name: "দর্শনের ছায়া",
    authors: [
      {
        image: null,
        id: "11",
        src: author_url + "7.jpg",
        name: "Aynal Haque",
        slug: "aynal-haque",
      },
    ],
    categories: [
      {
        id: "16",
        src: category_url + "7.webp",
        name: "দর্শন",
        slug: "darshan",
      },
    ],
    regular_price: 900,
    sale_price: 750,
    images: [
      { id: "darshoner", name: "darshoner.img", src: "/books/b (7).jpg" },
    ],
    quantity: 6,
    condition: "New",
    slug: "darshoner-chaya",
  },
  {
    id: "9",
    description: "The intricate world of politics",
    short_description: "Politics",
    name: "রাজনীতির গতিপথ",
    authors: [
      {
        image: null,
        id: "12",
        src: author_url + "8.jpg",
        name: "Anisuzzaman",
        slug: "anisuzzaman",
      },
    ],
    categories: [
      {
        id: "17",
        src: category_url + "8.webp",
        name: "রাজনীতি",
        slug: "rajniti",
      },
    ],
    regular_price: 1100,
    sale_price: 950,
    images: [{ id: "rajniti", name: "rajniti.img", src: "/books/b (8).jpg" }],
    quantity: 4,
    condition: "New",
    slug: "rajnitir-gatipath",
  },
  {
    id: "10",
    description: "Memoirs of a legendary figure",
    short_description: "Memoirs",
    name: "স্মৃতির পাতা",
    authors: [
      {
        image: null,
        id: "13",
        src: author_url + "9.jpg",
        name: "Begum Rokeya",
        slug: "begum-rokeya",
      },
    ],
    categories: [
      {
        id: "18",
        src: category_url + "9.webp",
        name: "স্মৃতিকথা",
        slug: "smritikotha",
      },
    ],
    regular_price: 1300,
    sale_price: 1150,
    images: [{ id: "smritir", name: "smritir.img", src: "/books/b (9).jpg" }],
    quantity: 3,
    condition: "New",
    slug: "smritir-pata",
  },
  {
    id: "11",
    description: "An in-depth analysis of historical events",
    short_description: "Historical analysis",
    name: "ইতিহাসের ধারাপাত",
    authors: [
      {
        image: null,
        id: "14",
        src: author_url + "10.jpg",
        name: "Rezaul Karim",
        slug: "rezaul-karim",
      },
    ],
    categories: [
      {
        id: "19",
        src: category_url + "10.webp",
        name: "ইতিহাস",
        slug: "itihash",
      },
    ],
    regular_price: 1250,
    sale_price: 1100,
    images: [{ id: "itihash", name: "itihash.img", src: "/books/b (10).jpg" }],
    quantity: 10,
    condition: "New",
    slug: "itihasher-dharapath",
  },
  {
    id: "12",
    description: "Stories of extraordinary lives",
    short_description: "Biographies",
    name: "জীবনের গল্প",
    authors: [
      {
        image: null,
        id: "15",
        src: author_url + "11.jpg",
        name: "Abdul Mannan",
        slug: "abdul-mannan",
      },
    ],
    categories: [
      {
        id: "20",
        src: category_url + "11.webp",
        name: "জীবনী",
        slug: "jiboni",
      },
    ],
    regular_price: 1000,
    sale_price: 900,
    images: [{ id: "jibon", name: "jibon.img", src: "/books/b (11).jpg" }],
    quantity: 8,
    condition: "New",
    slug: "jiboner-golpo",
  },
];

// const authors = [
//   {
//     name: "জহির রায়হান",
//     slug: "jahir-raihan",
//     src: author_url + "1.jpg",
//   },
// ];

// for (let i = 0; i < books.length; i++) {
//   authors.push(books[i].authors[0]);
// }

// export { authors };

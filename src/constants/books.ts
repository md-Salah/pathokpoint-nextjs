const author_url =
  "http://mdsalah.customerserver003003.eurhosting.net/test/authors/";
const category_url =
  "http://mdsalah.customerserver003003.eurhosting.net/test/categories/";

export const books = [
  {
    name: "অপুর সংকেত",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
        slug: "bibhutibhushan-bandopadhyay",
        description: "Some description about the author",
      },
      
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 1000,
    sell_price: 250,
    images: [
      "/books/b (1).jpg",
      "/books/b (2).jpg",
      "/books/b (3).jpg",
      "/books/b (4).jpg",
    ],
    quantity: 8,
    condition: "New",
    slug: "apura-sanket",
    description:
    "Apur Sansar is a novel by Bibhutibhushan Bandopadhyay. It is the third part of the Apu Trilogy. The first two parts are Pather Panchali and Aparajito. The novel was later adapted into a film of the same name by Satyajit Ray.",
    short_description: '৪৩ তম BCS পরীক্ষা',
    publisher: {
      name: "আনন্দ পাবলিশার্স",
      slug: "ananda-publishers",
    },
    isbn: "978-93-5214-000-0",
    edition: "1st Edition, 1998",
    page: 220,
    translators: [
      {
        src: author_url + "1.jpg",
        name: "Bibhutibhushan Bandopadhyay",
        slug: "bibhutibhushan-bandopadhyay",
      },
      {
        src: author_url + "1.jpg",
        name: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
        slug: "bibhutibhushan-bandopadhyay",
      },
    ],
    tags: [
      {
        name: "Search Tag 1",
        slug: "bibhutibhushan-bandopadhyay",
      },
      {
        name: "Tag 2",
        slug: "bibhutibhushan-bandopadhyay",
      },
    ],
    language: "বাংলা",
    cover: "Hardcover",
  },
  {
    name: "ফেলুদা সমগ্র",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "Satyajit Ray",
        slug: "satyajit-ray",
        description: "Some description about the author",
      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 100,
    sell_price: 80,
    images: ["/books/b (2).jpg"],
    quantity: 1,
    condition: "OLD-Like New",
    slug: "feluda-samagra",
    short_description:
      "Feluda Samagra is a collection of Feluda stories by Satyajit Ray.",
    publisher: {
      name: "আনন্দ পাবলিশার্স",
      slug: "ananda-publishers",
    },
  },
  {
    name: "পথের পাঁচালী",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "Bibhutibhushan Bandopadhyay Bibhutibhushan Bandopadhyay",
        slug: "bibhutibhushan-bandopadhyay",
        description: ''
      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    publisher: {
      name: "আনন্দ পাবলিশার্স",
      slug: "ananda-publishers",
    },
    regular_price: 1200,
    sell_price: 300,
    images: ["/books/b (3).jpg"],
    quantity: 6,
    condition: "OLD-Good Enough",
    slug: "pather-panchali",
    short_description:
      "Pather Panchali is a novel by Bibhutibhushan Bandopadhyay.",
  },
  {
    name: "শঙ্কু সমগ্র",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "Samaresh Majumdar",
        slug: "samaresh-majumdar",
        description: '',
      },
    ],
    publisher: {
      name: "আনন্দ পাবলিশার্স",
      slug: "ananda-publishers",
    },
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 1100,
    sell_price: 280,
    images: ["/books/b (4).jpg"],
    quantity: 7,
    condition: "New",
    slug: "shonku-samagra",
  },
  {
    name: "গোপাল ভার",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "Sarat Chandra Chattopadhyay",
        slug: "sarat-chandra-chattopadhyay",
        description: '',

      },
    ],
    publisher: {
      name: "আনন্দ পাবলিশার্স",
      slug: "ananda-publishers",
    },
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 1300,
    sell_price: 350,
    images: ["/books/b (5).jpg"],
    quantity: 9,
    condition: "OLD-Readeble",
    slug: "gopal-bhar",
  },
  {
    name: "দীপুর জল",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "Tarashankar Bandopadhyay",
        slug: "tarashankar-bandopadhyay",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 1400,
    sell_price: 380,
    images: ["/books/b (6).jpg"],
    quantity: 5,
    condition: "New",
    slug: "deepur-jol",
  },
  {
    name: "কবির কবিতা",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "Kazi Nazrul Islam",
        slug: "kazi-nazrul-islam",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 800,
    sell_price: 250,
    images: ["/books/b (7).jpg"],
    quantity: 10,
    condition: "New",
    slug: "kobir-kobita",
  },
  {
    name: "আগন্তুক",
    authors: [
      {
        src: "",
        name: "Premendra Mitra",
        slug: "premendra-mitra",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 1200,
    sell_price: 420,
    images: ["/books/b (8).jpg"],
    quantity: 7,
    condition: "New",
    slug: "agontuk",
  },
  {
    name: "গীতাঞ্জলি",
    authors: [
      {
        src: "",
        name: "Rabindranath Tagore",
        slug: "rabindranath-tagore",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 1000,
    sell_price: 350,
    images: ["/books/b (9).jpg"],
    quantity: 8,
    condition: "New",
    slug: "geetanjali",
  },
  {
    name: "প্রজাপতির প্রভাতে",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "Sarat Chandra Chattopadhyay",
        slug: "sarat-chandra-chattopadhyay",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 900,
    sell_price: 300,
    images: ["/books/b (10).jpg"],
    quantity: 12,
    condition: "New",
    slug: "projapotir-probhate",
  },
  {
    name: "হুমায়ুন আহমেদের শ্রেষ্ঠ উপন্যাস",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "Humayun Ahmed",
        slug: "humayun-ahmed",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 1600,
    sell_price: 480,
    images: ["/books/b (11).jpg"],
    quantity: 15,
    condition: "New",
    slug: "humayun-ahmed-best-novels",
  },
  {
    name: "সুনীল গঙ্গোপাধ্যায়ের সমগ্র",
    authors: [
      {
        src: "",
        name: "Sunil Gangopadhyay",
        slug: "sunil-gangopadhyay",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 2000,
    sell_price: 600,
    images: ["/books/b (12).jpg"],
    quantity: 20,
    condition: "New",
    slug: "sunil-gangopadhyay-samagra",
  },
  {
    name: "হুমায়ুন আজাদের গল্প",
    authors: [
      {
        src: "",
        name: "Humayun Azad",
        slug: "humayun-azad",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 1100,
    sell_price: 330,
    images: ["/books/b (13).jpg"],
    quantity: 9,
    condition: "New",
    slug: "humayun-azad-golpo",
  },
  {
    name: "ফেলুদা সমগ্র",
    authors: [
      {
        src: "",
        name: "Satyajit Ray",
        slug: "satyajit-ray",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 1800,
    sell_price: 540,
    images: ["/books/b (14).jpg"],
    quantity: 18,
    condition: "New",
    slug: "feluda-samagra",
  },
  {
    name: "ভূতের গল্প",
    authors: [
      {
        src: "",
        name: "Various",
        slug: "various",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "উপন্যাস", slug: "uponnas" },
    ],
    regular_price: 950,
    sell_price: 285,
    images: ["/books/b (15).jpg"],
    quantity: 11,
    condition: "New",
    slug: "bhuter-golpo",
  },
  {
    name: "Steal like an artist",
    authors: [
      {
        src: "",
        name: "Various",
        slug: "various",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "Fiction", slug: "fiction" },
    ],
    regular_price: 950,
    sell_price: 285,
    images: ["/books/b (15).jpg"],
    quantity: 0,
    condition: "New",
    slug: "steal-like-an-artist",
  },
  {
    name: "The Silent Observer",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "Emily Blue",
        slug: "emily-blue",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "Mystery", slug: "mystery" },
    ],
    regular_price: 1200,
    sell_price: 480,
    images: ["/books/b (4).jpg"],
    quantity: 8,
    condition: "New",
    slug: "the-silent-observer",
  },
  {
    name: "Beyond the Horizon",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "Alex Turner",
        slug: "alex-turner",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "Adventure", slug: "adventure" },
    ],
    regular_price: 890,
    sell_price: 355,
    images: ["/books/b (7).jpg"],
    quantity: 15,
    condition: "New",
    slug: "beyond-the-horizon",
  },
  {
    name: "Whispers in the Wind",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "Sarah Miller",
        slug: "sarah-miller",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "Romance", slug: "romance" },
    ],
    regular_price: 750,
    sell_price: 300,
    images: ["/books/b (12).jpg"],
    quantity: 0,
    condition: "New",
    slug: "whispers-in-the-wind",
  },
  {
    name: "Mind Games",
    authors: [
      {
        src: author_url + "1.jpg",
        name: "James Black",
        slug: "james-black",
        description: '',

      },
    ],
    categories: [
      { src: category_url + "1.webp", name: "Psychology", slug: "psychology" },
    ],
    regular_price: 1050,
    sell_price: 420,
    images: ["/books/b (17).jpg"],
    quantity: 12,
    condition: "New",
    slug: "mind-games",
  },
];

export const reviews = [
  {
    dp: "/reviews/1.png",
    author: "John Doe",
    date: "2023-01-15",
    src: "/reviews/1.png",
    description: "Amazing book! I couldn't put it down. Highly recommended!",
  },
  {
    dp: "/reviews/2.png",
    author: "Jane Smith",
    date: "2023-02-05",
    src: "/reviews/2.png",
    description:
      "A captivating read. The characters are well-developed, and the plot keeps you hooked from start to finish.",
  },
  {
    dp: "/reviews/3.png",
    author: "Alex Johnson",
    date: "2023-03-20",
    src: "/reviews/3.png",
    description:
      "This book exceeded my expectations. The storytelling is excellent, and it left a lasting impression on me.",
  },
  {
    dp: "/reviews/4.png",
    author: "Emily White",
    date: "2023-04-10",
    src: "/reviews/4.png",
    description:
      "An emotional journey. The author beautifully explores complex themes. I felt deeply connected to the characters.",
  },
  {
    dp: "/reviews/5.png",
    author: "Michael Brown",
    date: "2023-05-25",
    src: "/reviews/5.png",
    description:
      "Well-written and thought-provoking. It's a book that stays with you, making you reflect on life and relationships.",
  },
  {
    dp: "/reviews/6.png",
    author: "Michael Brown",
    date: "2023-05-25",
    src: "/reviews/6.png",
    description:
      "Well-written and thought-provoking. It's a book that stays with you, making you reflect on life and relationships.",
  },
];

const authors = [
  {
    name: "জহির রায়হান",
    slug: "jahir-raihan",
    src: author_url + "1.jpg",
  },
];

for (let i = 0; i < books.length; i++) {
  authors.push(books[i].authors[0]);
}

export { authors };

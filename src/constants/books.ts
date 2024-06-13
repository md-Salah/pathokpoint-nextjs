import { Author } from "@/interface";

const author_url = "/authors/";
const category_url = "/categories/";

export const books = [
  {
    id: "1",
    description:
      "পথের পাঁচালী হল প্রখ্যাত সাহিত্যিক বিভূতিভূষণ বন্দ্যোপাধ্যায় রচিত একটি বিখ্যাত উপন্যাস।",
    short_description:
      "পথের পাঁচালী হল প্রখ্যাত সাহিত্যিক বিভূতিভূষণ বন্দ্যোপাধ্যায় রচিত একটি বিখ্যাত উপন্যাস।",
    name: "অপুর সংকেত",
    authors: [
      {
        id: "5",
        name: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
        slug: "bibhutibhushan-bandopadhyay",
        image: {
          src: author_url + "5.jpg",
        },
        description: `১৮৯৪ সালের ১২ই সেপ্টেম্বর, বাংলা ১৩০১ সালের ২৮ ভাদ্র, কল্যাণীর কাছে মুরাতিপুর গ্রামে মামার বাড়িতে বাংলার তথা বিশ্বের অন্যতম শ্রেষ্ঠ কথা-সাহিত্যিক বিভূতিভূষণ বন্দ্যোপাধ্যায়ের জন্ম। ১৮৫৯ 
                      সালের নীল বিদ্রোহের কিছু আগে বিভূতিভূষণের পিতামহ কবিরাজ তারিণীচরণ বসিরহাট সংলগ্ন পানিতর থেকে বনগাঁর বারাকপুর গ্রামে বসবাস শুরু করেন।বিভূতিভূষণের বাবা মহানন্দ বন্দ্যোপাধ্যায় 
                      বনগাঁ উচ্চ বিদ্যালয়ে পড়াশোনা করার পরে কাশী থেকে সংস্কৃত ও হিন্দু পুরাণে শাস্ত্রী উপাধি পেয়েছিলেন। গ্রামে গ্রামে কথকতা করে সংসার নির্বাহ করতেন তিনি। তাঁর প্রথম স্ত্রী হেমাঙ্গিনী নিঃসন্তান ছিলেন।
                      দ্বিতীয় স্ত্রী মৃণালিনীর পাঁচ সন্তানের মধ্যে জ্যেষ্ঠ বিভূতিভূষণ।
                      ‘পথের পাঁচালি’ এবং ‘অপরাজিত’র পর বাঙালি পাঠক সমাজকে একটার পর একটা মহৎ উপন্যাস উপহার দিয়ে গেছে বিভূতিভূষণের লেখনী। এই উপন্যাসগুলির মধ্যে ‘দৃষ্টিপ্রদীপ’ (১৯৩৫), ‘চাঁদের পাহাড়’ 
                      (১৯৩৮), ‘আরণ্যক’ (১৯৩৯), ‘আদর্শ হিন্দু হোটেল’ (১৯৪০), ‘অনুবর্তন’ (১৯৪৩), ‘দেবযান’ (১৯৪৪) এবং ‘ইছামতি’ (১৯৫০) অধিক উল্লেখযোগ্য। একই সঙ্গে তাঁর আশ্চর্য সব ছোটগল্পের সংকলন ― 
                      ‘মেঘমল্লার’ (১৯৩১), ‘জন্ম ও মৃত্যু’ (১৯৩৭), ‘কিন্নরদল’ (১৯৩৮), ‘তালনবমী’ (১৯৪৪), ‘উপলখণ্ড’ (১৯৪৫), ‘ক্ষণভঙ্গুর’ (১৯৪৫) এবং ‘অসাধারণ’ (১৯৪৬) ― বাংলা সাহিত্যের মণিমুক্তো গুলির মধ্যে 
                      চিরস্থায়ী জায়গা করে নিয়েছে। বিভূতিভূষণ নিয়মিত দিনলিপি লিখতেন। তাঁর দিনলিপিগুলি ― ‘স্মৃতির রেখা’ (১৯৪১), ‘তৃণাঙ্কুর’ (১৯৪২), ‘ঊর্মিমূখর’ (১৯৪৪), ‘উৎকর্ণ’ (১৯৪৬) ― প্রত্যেকটি মহৎ সাহিত্য।
                      `,
      },
      {
        id: "3",
        name: "ইসমাত চুগতাই",
        slug: "ismat-chughtai",
        image: {
          src: author_url + "5.jpg",
        },
      },
    ],
    categories: [
      {
        id: "1",
        name: "BCS",
        slug: "bcs-exam",
        image: {
          src: category_url + "1.jpg",
        },
      },
      {
        id: "1",
        name: "Admission",
        slug: "admission",
        image: {
          src: category_url + "1.jpg",
        },
      },
    ],
    publisher: {
      id: "1",
      name: "Ananda Publishers",
      slug: "ananda-publishers",
    },
    regular_price: 1000,
    sale_price: 250,
    images: [{ id: "lal", name: "lal.img", src: "/books/b (1).jpg" }],
    quantity: 8,
    condition: "New",
    slug: "apura-sanket",
    edition: "1st edition, 1994",
    cover: "Hardcover",
    translators: [
      {
        id: "1",
        name: "Emme bounty",
        slug: "emme-bountry",
      },
    ],
    language: "bangla",
    isbn: "3988203892992",
    no_of_pages: 420,
    tags: [
      {
        id: "1",
        name: "Popular",
        slug: "popular",
      },
    ],
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
        image: null,
        id: "10",
        name: "উপন্যাস",
        slug: "uponnas",
      },
    ],
    publisher: {
      id: "1",
      name: "Ananda Publishers",
      slug: "ananda-publishers",
    },
    regular_price: 1000,
    sale_price: 1000,
    images: [{ id: "lal", name: "lal.img", src: "/books/b (1).jpg" }],
    quantity: 0,
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
        image: {
          src: category_url + "2.jpg",
        },
        id: "3",
        name: "Admission",
        slug: "admission",
      },
    ],
    publisher: {
      id: "1",
      name: "Ananda Publishers",
      slug: "ananda-publishers",
    },
    regular_price: 1200,
    sale_price: 900,
    images: [{ id: "bishad", name: "bishad.img", src: "/books/b (2).jpg" }],
    quantity: 0,
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
        image: {
          src: category_url + "3.png",
        },
        id: "12",
        name: "Medical",
        slug: "medical",
      },
    ],
    publisher: {
      id: "1",
      name: "Ananda Publishers",
      slug: "ananda-publishers",
    },
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
        image: {
          src: category_url + "4.jpg",
        },
        id: "13",
        name: "Job Preparation",
        slug: "job-preparation",
      },
    ],
    publisher: {
      id: "1",
      name: "Ananda Publishers",
      slug: "ananda-publishers",
    },
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
        image: null,
        id: "14",
        name: "নিবন্ধ",
        slug: "nibondho",
      },
    ],
    publisher: {
      id: "1",
      name: "Ananda Publishers",
      slug: "ananda-publishers",
    },
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
        image: null,
        id: "15",
        name: "কবিতা",
        slug: "kobita",
      },
    ],
    publisher: {
      id: "1",
      name: "Ananda Publishers",
      slug: "ananda-publishers",
    },
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
        image: null,
        id: "16",
        name: "দর্শন",
        slug: "darshan",
      },
    ],
    publisher: {
      id: "1",
      name: "Ananda Publishers",
      slug: "ananda-publishers",
    },
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
        image: null,
        id: "17",
        name: "রাজনীতি",
        slug: "rajniti",
      },
    ],
    publisher: {
      id: "1",
      name: "Ananda Publishers",
      slug: "ananda-publishers",
    },
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
        image: null,
        id: "18",
        name: "স্মৃতিকথা",
        slug: "smritikotha",
      },
    ],
    publisher: {
      id: "1",
      name: "Ananda Publishers",
      slug: "ananda-publishers",
    },
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
        image: null,
        id: "19",
        name: "ইতিহাস",
        slug: "itihash",
      },
    ],
    publisher: {
      id: "1",
      name: "Ananda Publishers",
      slug: "ananda-publishers",
    },
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
        image: null,
        id: "20",
        name: "জীবনী",
        slug: "jiboni",
      },
    ],
    publisher: {
      id: "1",
      name: "Ananda Publishers",
      slug: "ananda-publishers",
    },
    regular_price: 1000,
    sale_price: 900,
    images: [{ id: "jibon", name: "jibon.img", src: "/books/b (11).jpg" }],
    quantity: 8,
    condition: "New",
    slug: "jiboner-golpo",
  },
];

const authors: Author[] = [];
for (let i = 0; i < books.length; i++) {
  authors.push(books[i].authors[0]);
}

export { authors };

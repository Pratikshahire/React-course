const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }

  //destructuring in JS

  // const book = getBook(3);
  
  // const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;

  // // const primaryGenre = genres[0];
  // // const secondaryGenre = genres[1];

  // // console.log(primaryGenre, secondaryGenre);

  // //better with destructuring
  // const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

  // console.log(primaryGenre, secondaryGenre, otherGenres );

  // // const newArray = [genres, "epic fantasy"];
  // // newArray;

  // const newArray = [...genres, "epic fantasy"];
  // newArray;

  // //spread operator on objects

  // const updatedBook = {...book,

  //   //adding a new property
  //   moviePublicationDate: '2001-12-19',
    
  //   //overwriting an existing property
  //   pages: 1200}


  // updatedBook;


  // //normal function
  // // function getYear(str)
  // // {
  // //   return str.split("-")[0];
  // // }

  // // console.log(getYear(publicationDate));

  // //arrow function
  // const getYear = (str) => str.split("-")[0];

  // console.log(getYear(publicationDate));

  // //short circuiting in logical operators

  // function getTotalReviewCount(book) {
  //   const goodreads = book.reviews.goodreads.reviewsCount;
  //   const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  //   return goodreads + librarything;
  // }

  // console.log(getTotalReviewCount(book));

  //array methods in JS

  //1) Map method

  // const books = getBooks();

  // const x = [1,2,3,4,5].map((el) => 2 * el);

  // console.log(x);

  // const titles = books.map((book) => book.title);

  // console.log(titles);

  // const essentials = books.map((book) => ({
  //   title: book.title,
  //   author: book.author,
  // }))

  //or
  // const essentials = books.map((book) => {
  //   return {
  //     title: book.title,
  //     author: book.author,
  //   }
  // })


  // console.log(essentials);

  //2) filter method

  // const longBooks = books
  // .filter((book) => book.pages > 500)
  // .filter((book) => book.hasMovieAdaptation);

  // longBooks;

  // const adventureBooks = books.filter((book) => 
  //   book.genres.includes("adventure")
  // ).map(book => book.title);

  // adventureBooks;
  // const pagesAllBook = books.reduce((sum, book) => sum + book.pages, 0);

  // pagesAllBook;

  // const arr = [1, 6, 3, 7, 4]; 

  // const sorted = arr.sort((a,b) => a-b);

  // sorted;
  // arr;
  //so sort is not a functional method, it mutates the original arr, what we can do is we can make a cp of the og array and then aort it

  // const arr = [2, 1, 7,4,5];

  // const sorted = arr.slice().sort((a,b) => a-b);

  // sorted;
  // arr;

  //sort books by pages

  // const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);

  // sortedByPages;

  // // 1. add new object to the array

  // const newBook = {
  //   id: 6,
  //   title: "Harry Potter and the Chambers of Secrets",
  //   author: "J. K. Rowling",
  // }

  // const booksAfterAdding = [...books, newBook];

  // booksAfterAdding;


// 2. delete a book object from array

//  const booksAfterDelete = booksAfterAdding.filter((book) => book.id !== 3);

//  booksAfterDelete;

// // 3. Update a book object in the array

// const booksAfterUpdate = booksAfterDelete.map((book) => book.id === 1 ? {...book, pages: 1210} : book);

// booksAfterUpdate;

//Asynchronous tasks in JS -> fetch API

// fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(data => console.log(data));

// console.log("jonas");

//using async / await

async function getTodos() { 
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await(res.json());
  console.log(data);
}

getTodos();
console.log("jonas");


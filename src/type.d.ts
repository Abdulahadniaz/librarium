interface Book {
  id: number;
  publishedAt: string;
  title: string;
  genre: string;
  author: string;
  price: number;
  booksInCart: number;
}

interface Order {
  id: number;
  books: Book[];
  amount: number;
}

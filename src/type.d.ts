interface Book {
  id: number;
  publishedAt: string;
  title: string;
  genre: string;
  author: string;
  price: number;
}

interface Order {
  id: number,
  books: Book[];
}

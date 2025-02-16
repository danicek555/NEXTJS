import ClientBooks from "./ClientBooks";

export interface Book {
  id: number;
  name: string;
}

export default async function BooksPage() {
  const res = await fetch("http://localhost:3000/api/books");
  //await is only in async function and it stops the whole code after, firstly the fetch than other code
  //fetch is a built-in JavaScript function used to make network requests (GET, POST, etc.).
  //It sends a GET request to http://localhost:3000/api/books, expecting book data.
  //by default fetch is GET request but you can specify also others request for example POST
  // fetch("http://localhost:3000/api/books", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({ name: "New Book" })
  // });

  if (!res.ok) {
    throw new Error("Failed to load books!"); //you can Throw new Error ONLY in SERVER SIDE COMPONENTS so the page.tsx should be serverside component and the other components like adding a book should be a client side
  } //throws a new Error (javascript object) with message "Failed to load books!" and the error.tsx will caught that

  const books: Book[] = await res.json(); //Book[] means we expect books to be an array of Book objects. The square brackets ([]) tell TypeScript:
  //"This is not just one Book, but an array of Book objects."
  //res.json() parses the raw JSON response and converts it into a JavaScript array of objects.

  return <ClientBooks initialBooks={books} />;
}

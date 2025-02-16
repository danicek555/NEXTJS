"use client";

import { useState } from "react";
import { Book } from "./page";

interface ClientBooksProps {
  initialBooks: Book[]; //initialBooks is an array of Book which is object [{},{}]
}

export default function ClientBooks({ initialBooks }: ClientBooksProps) {
  //sets the initialBooks to a Array of Book objects via ClientBooksProps interface
  const [books, setBooks] = useState<Book[]>(initialBooks); //set the state Books to be a Array of Book objects also
  const [newBookName, setNewBookName] = useState("");

  async function addBook() {
    if (!newBookName.trim()) return; //ignore empty input

    const res = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // "Hey server, I'm sending JSON-formatted data!" - ✅ Not needed for GET requests, only for POST, PUT, or PATCH when sending a request body.
      body: JSON.stringify({ name: newBookName }), //converts javascript object into a json string before passing it
    });

    const newBook: Book = await res.json();

    if (res.ok) {
      setBooks([...books, newBook]); // Update UI with new book
      setNewBookName(""); // Clear input
    }
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📚 Books</h1>

      {/* List of Books */}
      <ul className="mb-4 border rounded-lg">
        {books.map((book) => (
          <li key={book.id} className="p-2 border-b last:border-none">
            {book.name}
          </li>
        ))}
      </ul>

      {/* Add a New Book */}
      <div className="flex gap-2">
        <input
          type="text"
          className="border p-2 flex-1 rounded-lg"
          placeholder="Enter book name"
          value={newBookName}
          onChange={(e) => setNewBookName(e.target.value)}
        />
        <button
          onClick={addBook}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Book
        </button>
      </div>
    </div>
  );
}

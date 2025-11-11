import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (e) => {
    //   set the newBook state to {title: 'e.target.value', author: 'e.terget.value'}
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks([...books, newBook]);
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            onChange={handleInputChange}
            placeholder="Book Title"
          />

          <input
            name="author"
            onChange={handleInputChange}
            placeholder="Book Author"
          />

          <button>Add Book</button>
        </form>
      </div>

      <ul>
        {books.map((book) => {
          return (
            <div className="bookCardsDiv">
              <h3>{book.title}</h3>
              <p>by {book.author} </p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Bookshelf;

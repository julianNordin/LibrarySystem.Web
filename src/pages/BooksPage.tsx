import { useBooks } from '../features/books/hooks/useBooks'
import BookCard from '../features/books/components/BookCard'

function BooksPage() {
  const { data: books, isLoading, isError } = useBooks()

  return (
    <div>
      <h1>Books</h1>
      {isLoading && <p>Loading books…</p>}
      {isError && <p>Something went wrong loading books.</p>}
      {books && (
        <div>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  )
}

export default BooksPage

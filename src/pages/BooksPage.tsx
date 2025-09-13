import { useBooks } from '../features/books/hooks/useBooks'
import BookCard from '../features/books/components/BookCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import EmptyState from '../components/EmptyState'

function BooksPage() {
  const { data: books, isLoading, isError } = useBooks()

  return (
    <div>
      <h1>Books</h1>
      {isLoading && <LoadingSpinner label="Loading books…" />}
      {isError && <ErrorMessage message="Something went wrong loading books." />}
      {books && books.length === 0 && <EmptyState message="No books available yet." />}
      {books && books.length > 0 && (
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

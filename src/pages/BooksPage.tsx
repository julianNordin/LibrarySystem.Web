import { useBooks } from '../features/books/hooks/useBooks'
import BookCard from '../features/books/components/BookCard'
import ErrorMessage from '../components/ErrorMessage'
import EmptyState from '../components/EmptyState'
import Skeleton from '../components/Skeleton'

function BooksPage() {
  const { data: books, isLoading, isError } = useBooks()

  return (
    <div>
      <h1>Books</h1>
      {isLoading && <Skeleton rows={5} />}
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

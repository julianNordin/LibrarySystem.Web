import { Link } from 'react-router-dom'
import type { Book } from '../../../types/domain'

interface BookCardProps {
  book: Book
}

function BookCard({ book }: BookCardProps) {
  return (
    <article>
      <h2>
        <Link to={`/books/${book.id}`}>{book.title}</Link>
      </h2>
      <p>{book.author}</p>
      <p>{book.publicationYear}</p>
    </article>
  )
}

export default BookCard

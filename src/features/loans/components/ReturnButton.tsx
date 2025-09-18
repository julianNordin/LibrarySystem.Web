import { useState } from 'react'
import { useReturnBook } from '../hooks/useReturnBook'

interface ReturnButtonProps {
  loanId: number
}

function ReturnButton({ loanId }: ReturnButtonProps) {
  const [confirming, setConfirming] = useState(false)
  const returnBook = useReturnBook()

  if (confirming) {
    return (
      <span>
        Return this book?{' '}
        <button
          type="button"
          disabled={returnBook.isPending}
          onClick={() => returnBook.mutate(loanId, { onSettled: () => setConfirming(false) })}
        >
          {returnBook.isPending ? 'Returning…' : 'Confirm'}
        </button>{' '}
        <button type="button" disabled={returnBook.isPending} onClick={() => setConfirming(false)}>
          Cancel
        </button>
      </span>
    )
  }

  return (
    <button type="button" onClick={() => setConfirming(true)}>
      Return
    </button>
  )
}

export default ReturnButton

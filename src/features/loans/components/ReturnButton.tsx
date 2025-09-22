import { useState } from 'react'
import { useReturnBook } from '../hooks/useReturnBook'
import { useToast } from '../../../context/toastContext'
import type { ApiError } from '../../../api/apiClient'

interface ReturnButtonProps {
  loanId: number
}

function ReturnButton({ loanId }: ReturnButtonProps) {
  const [confirming, setConfirming] = useState(false)
  const returnBook = useReturnBook()
  const { showToast } = useToast()

  const handleReturn = () => {
    returnBook.mutate(loanId, {
      onSuccess: () => showToast('Book returned successfully.', 'success'),
      onError: (error) => {
        const apiError = error as ApiError
        showToast(apiError.detail ?? apiError.title ?? 'Could not return this book.', 'error')
      },
      onSettled: () => setConfirming(false),
    })
  }

  if (confirming) {
    return (
      <span>
        Return this book?{' '}
        <button type="button" disabled={returnBook.isPending} onClick={handleReturn}>
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

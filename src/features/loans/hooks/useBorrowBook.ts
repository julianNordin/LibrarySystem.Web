import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loansApi } from '../../../api/loansApi'
import type { BorrowRequest } from '../../../types/domain'

export function useBorrowBook() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (request: BorrowRequest) => loansApi.borrow(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
      queryClient.invalidateQueries({ queryKey: ['members'] })
      queryClient.invalidateQueries({ queryKey: ['loans'] })
    },
  })
}

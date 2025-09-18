import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loansApi } from '../../../api/loansApi'

export function useReturnBook() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (loanId: number) => loansApi.returnLoan(loanId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
      queryClient.invalidateQueries({ queryKey: ['loans'] })
    },
  })
}

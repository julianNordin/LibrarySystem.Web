import { useQuery } from '@tanstack/react-query'
import { loansApi } from '../../../api/loansApi'

export function useLoans() {
  return useQuery({
    queryKey: ['loans'],
    queryFn: loansApi.getAll,
  })
}

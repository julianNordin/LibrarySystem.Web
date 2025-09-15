import { useQuery } from '@tanstack/react-query'
import { loansApi } from '../../../api/loansApi'

export function useOverdueLoans(enabled: boolean) {
  return useQuery({
    queryKey: ['loans', 'overdue'],
    queryFn: loansApi.getOverdue,
    enabled,
  })
}

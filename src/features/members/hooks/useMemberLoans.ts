import { useQuery } from '@tanstack/react-query'
import { loansApi } from '../../../api/loansApi'

export function useMemberLoans(memberId: number) {
  return useQuery({
    queryKey: ['loans', 'member', memberId],
    queryFn: () => loansApi.getByMember(memberId),
  })
}

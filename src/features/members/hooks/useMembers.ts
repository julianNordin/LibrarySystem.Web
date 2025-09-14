import { useQuery } from '@tanstack/react-query'
import { membersApi } from '../../../api/membersApi'

export function useMembers() {
  return useQuery({
    queryKey: ['members'],
    queryFn: membersApi.getAll,
  })
}

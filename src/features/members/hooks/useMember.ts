import { useQuery } from '@tanstack/react-query'
import { membersApi } from '../../../api/membersApi'
import type { ApiError } from '../../../api/apiClient'
import type { Member } from '../../../types/domain'

export function useMember(id: number) {
  return useQuery<Member, ApiError>({
    queryKey: ['members', id],
    queryFn: () => membersApi.getById(id),
  })
}

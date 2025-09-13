import { useQuery } from '@tanstack/react-query'
import { booksApi } from '../../../api/booksApi'
import type { ApiError } from '../../../api/apiClient'
import type { Book } from '../../../types/domain'

export function useBook(id: number) {
  return useQuery<Book, ApiError>({
    queryKey: ['books', id],
    queryFn: () => booksApi.getById(id),
  })
}

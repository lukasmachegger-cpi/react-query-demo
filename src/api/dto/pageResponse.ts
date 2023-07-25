import { z } from 'zod'

export function createPageResponseSchema<T extends z.ZodTypeAny>(itemSchema: T) {
  return z.object({
    content: z.array(itemSchema),
    page: z.number(),
    totalPages: z.number(),
    totalElements: z.number(),
    size: z.number(),
  })
}

export interface PageResponse<T> {
  content: T[]
  page: number
  totalPages: number
  totalElements: number
  size: number
}

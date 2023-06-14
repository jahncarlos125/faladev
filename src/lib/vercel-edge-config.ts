import { get } from '@vercel/edge-config'
import { z } from 'zod'

const notionPagesIdStore = z.object({
  terminal_general: z.string(),
  setup_dev: z.string(),
})

export async function getNotionPagesId() {
  const pagesId = await get('notion')

  return notionPagesIdStore.parse(pagesId)
}

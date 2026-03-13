import { marked } from 'marked'
import markedKatex from 'marked-katex-extension'
import { error } from '@sveltejs/kit'

marked.use(markedKatex({ throwOnError: false }))

const modules = import.meta.glob('/static/md/*.md', { query: '?raw', import: 'default' })

export async function load({ params }) {
  if (params.slug.includes('..') || params.slug.includes('/')) {
    error(400, 'Invalid slug')
  }

  const key = `/static/md/${params.slug}.md`
  const loader = modules[key]
  if (!loader) error(404, 'Document not found')

  const raw = (await loader()) as string
  const html = await marked(raw)
  return { html, slug: params.slug }
}

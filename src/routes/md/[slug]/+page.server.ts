import { readFileSync } from 'node:fs'
import { marked } from 'marked'
import markedKatex from 'marked-katex-extension'
import { error } from '@sveltejs/kit'

marked.use(markedKatex({ throwOnError: false }))

export async function load({ params }) {
  if (params.slug.includes('..') || params.slug.includes('/')) {
    error(400, 'Invalid slug')
  }

  try {
    const raw = readFileSync(`static/md/${params.slug}.md`, 'utf-8')
    const html = await marked(raw)
    return { html, slug: params.slug }
  } catch {
    error(404, 'Document not found')
  }
}
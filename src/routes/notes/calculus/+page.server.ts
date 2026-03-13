const modules = import.meta.glob('/static/md/*.md', { query: '?raw', import: 'default' })

export function load() {
  const md = Object.keys(modules).map((path) => path.replace('/static/md/', '').replace(/\.md$/, ''))
  return { md }
}
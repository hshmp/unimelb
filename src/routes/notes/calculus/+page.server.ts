import { readdirSync } from 'node:fs'
import { join } from 'node:path'

export function load() {
	const mdDir = join(process.cwd(), 'static/md')
	const files = readdirSync(mdDir)
	const md = files.filter((file) => file.endsWith('.md')).map((file) => file.replace(/\.md$/, ''))

	return { md }
}

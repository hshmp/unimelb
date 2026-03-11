import { readdirSync } from 'fs'
import { join } from 'path'

export function load() {
	const mdDir = join(process.cwd(), 'static/md')
	const files = readdirSync(mdDir)
	const md = files.filter((file) => file.endsWith('.md')).map((file) => file.replace(/\.md$/, ''))

	return { md }
}

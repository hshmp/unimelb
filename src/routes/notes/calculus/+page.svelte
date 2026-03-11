<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<main>
	<h1>Calculus</h1>
	<p>
		These notes are related to <a
			href="https://handbook.unimelb.edu.au/2021/subjects/mast10005"
			target="_blank">Calculus 1</a
		>
		and
		<a href="https://handbook.unimelb.edu.au/subjects/mast10006" target="_blank">Calculus 2</a>.
	</p>
	<h2>Downloads</h2>
	<p>
		Some files have an online viewer like markdown (.md) files that can be saved locally by clicking
		the <em>download button in the top right</em>.
	</p>
	<h3>MD</h3>
	<ul>
		{#each data.md as file}
			<li><a href={`/md/${file}`} target="_blank">{file}</a></li>
		{/each}
	</ul>
</main>

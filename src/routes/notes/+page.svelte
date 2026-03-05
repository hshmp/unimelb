<script>
const subjects = ['calculus', 'computing', 'linear_algebra', 'algorithms']
</script>

<main>
	<h1>Notes</h1>
	<p data-delay="250">
		Resources from both anonymous and named donors are posted here. They may be outdated or goated.
	</p>
	<p data-delay="500">
		You can open markdown files (<code>.md</code>) using <a href="https://obsidian.md" target="_blank">Obsidian</a>
		or a code editor like <a href="https://vscode.dev" target="_blank">Visual Studio Code</a>.
	</p>
	<h2>Subjects</h2>
	<div class="linkgrid">
		{#each subjects as subject, i}
			<a href={`/notes/${subject}`} class="up" data-delay={(i + 1) * 250}>{subject.toUpperCase().replaceAll('_', ' ')}</a>
		{/each}
	</div>
</main>

<style>
.linkgrid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	gap: 1rem;
}

.linkgrid a {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background: linear-gradient(var(--accent-0)) 0% 0% / 0% 100% no-repeat;
	border: 2px solid var(--accent-0);
	border-radius: 0.5rem;
	color: var(--text-0);
	text-decoration: none;
	font-weight: bold;
	transition: background 250ms ease-in-out;
}

.linkgrid a:hover {
	background-size: 100% 100%;
}
</style>
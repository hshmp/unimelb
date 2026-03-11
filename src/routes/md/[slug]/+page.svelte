<script>
	export let data
</script>

<svelte:head>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css' />
</svelte:head>

<a href="/md/{data.slug}.md" download id="download">
  <span class="material-symbols-outlined">download</span>
</a>

<article class="prose">
	{@html data.html}
</article>

<style>
article {
  max-width: 800px;
  padding: 2rem;
  margin: auto;
}

#download {
  position: fixed;
  top: 1rem;
  right: 1rem;
}

#download .material-symbols-outlined {
  font-size: 2rem; 
}

#download:hover .material-symbols-outlined {
  transform: none;
}
</style>

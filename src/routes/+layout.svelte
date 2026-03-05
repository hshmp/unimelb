<script lang="ts">
	import favicon from '$lib/assets/favicon.svg'
	import '../app.css'

	function hotkey(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') return history.back()
		if (e.key === 'ArrowRight') return history.forward()
		if (e.key === '/') return document.getElementById('home')?.click()

		const shortcuts = document.querySelectorAll('.shortcut') // small size
		shortcuts.forEach((s) => {
			if (e.key.toLowerCase() === s.textContent?.[0].toLowerCase()) {
				const a = s.parentElement as HTMLAnchorElement
				if (a.href.includes(window.location.origin) && !a.href.split('/').pop()?.includes('.')) {
					a.click()
				} else {
					window.open(a.href, '_blank')
				}
			}
		})
	}

	let { children } = $props()
</script>

<svelte:window on:keydown={hotkey}></svelte:window>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>UniMelb</title>
</svelte:head>

<a id="home" href="/">
	<span class="material-symbols-outlined">home</span>
</a>

{@render children()}

<style>
	#home {
		position: fixed;
		top: 1rem;
		left: 1rem;
		color: var(--text-0);
		z-index: 1000;
		cursor: pointer;
	}

	#home .material-symbols-outlined {
		font-size: 2rem;
		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
		transition: font-variation-settings 250ms ease-in-out;
	}

	#home .material-symbols-outlined:hover {
		transform: none;
		font-variation-settings:
			'FILL' 1,
			'wght' 700,
			'GRAD' 0,
			'opsz' 24;
	}
</style>

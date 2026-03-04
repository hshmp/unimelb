<script lang="ts">
	import favicon from '$lib/assets/favicon.svg'
	import { onMount } from 'svelte'
	import { afterNavigate } from '$app/navigation'
	import '../app.css'

	function register() {
		const shortcuts = document.querySelectorAll('.shortcut')
		document.addEventListener('keypress', (e) => {
			shortcuts.forEach((s) => {
				if (e.key.toLowerCase() === s.textContent?.[0].toLowerCase()) {
					console.log(s.parentElement?.querySelector('a'))
					s.parentElement?.click()
				}
			})
		})
		// console.log(shortcuts)
	}

	onMount(register)
	afterNavigate(register)

	let { children } = $props()
</script>

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
	font-size: 1.5rem;
	color: var(--text-0);
	z-index: 1000;
	cursor: pointer;
}

#home .material-symbols-outlined {
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
	'opsz' 24
}
</style>
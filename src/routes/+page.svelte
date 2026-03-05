<script>
const links = ['maps', 'notes']
</script>

<div class="hero">
	<a class="flex block" href="/" id="decor">
		<span class="accent">[</span>UniMelb<span class="accent">]</span>
	</a>
	<h1>Find what you need.</h1>
	<p data-delay="250">
		Navigating the university website can be confusing and keeping up with classes can be hard.
		That's why this exists. Information is now at the tip of your fingers. <em>Press letters to click links or use "/" for home!</em>
	</p>
	<div class="flex column gap">
		{#each links as link, i}
			<div data-delay={`${(i + 2) * 250}`} class="up">
				<a href={link}>
					<span class="shortcut">{link}</span>
					<span class="material-symbols-outlined">arrow_right_alt</span>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
.hero {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	height: 100vh;
	max-width: 800px;
	padding: 2rem;
	margin: auto;
}

.hero h1 {
	margin: 0;
}

@keyframes reveal {
	to {
		width: 100%;
	}
}

#decor {
	font-size: 1.25rem;
	font-weight: bold;
	color: var(--text-0);
	width: 0;
	gap: 0.25rem;
	margin-bottom: 1rem;
	overflow: hidden;
	animation: reveal 1s ease-in-out forwards;
}

h1 {
	text-transform: uppercase;
}
</style>

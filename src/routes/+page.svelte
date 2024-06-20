<script>
	import { audio } from "$lib/index.js"
	import { goto } from "$app/navigation"

	$: if ($audio) goto("/play")
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<main class="min-vh-100 bg-dark d-flex flex-column justify-content-center align-items-center gap-5">
	<div class="text-center">
		<h1 class="text-light fw-light display-3">I don't have time to roam.</h1>
		<h1 class="text-light fw-light display-3">I have things to do.</h1>
		<h1 class="text-light fw-light display-3">I have to go 🏠.</h1>
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<button class="play d-flex justify-content-center align-items-center fs-1 text-decoration-none text-dark rounded-2" on:click="{() => ($audio = true)}"
		>Play</button>
</main>

<style>
	h1,
	.play {
		font-family: "Quicksand", sans-serif;
	}

	.play {
		width: 250px;
		height: 100px;
		background: #f3f3f3;
		transition: background 0.2s;
	}

	.play:hover {
		background: #b1b1b1;
	}
</style>

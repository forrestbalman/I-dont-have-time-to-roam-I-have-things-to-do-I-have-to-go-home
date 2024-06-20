<script>
	import { goto } from "$app/navigation"
	import { onMount } from "svelte"
	import { audio } from "$lib/index.js"
	
	onMount(() => {
		if (!$audio) {
			console.log("No audio context found. Redirecting to home page.")
			goto("/")
		}
	})
</script>

<main class="bg-dark d-flex flex-column justify-content-center align-items-center gap-5">
	<div class="container min-vh-100 d-flex flex-column justify-content-center align-items-center gap-3" id="choose-a-page">
		<div class="text-center">
			<h1 class="text-light fw-light display-3">How do you want to play?</h1>
		</div>
		<div class="d-flex justify-content-center align-items-center gap-3 flex-wrap">
			<a class="d-flex justify-content-center align-items-center fs-4 text-decoration-none text-dark rounded-2 bg-light" href="/play/sheet-music"
				>Sheet music</a>
			<a class="d-flex justify-content-center align-items-center fs-4 text-decoration-none text-dark rounded-2 bg-light" href="/play/animation"
				>Animation</a>
		</div>
		<a
			class="d-flex justify-content-center align-items-center fs-4 text-decoration-none text-dark rounded-2 position-absolute bottom-0 m-3 bg-info"
			href="#learn-more">Learn More</a>
	</div>
	<div class="container min-vh-100 d-flex flex-column align-items-center gap-3 position-relative" id="learn-more">
		<a class="d-flex justify-content-center align-items-center fs-4 text-decoration-none text-dark rounded-2 m-3 bg-info" href="#choose-a-page">Back up</a>
		<div>
			<h1 class="text-warning fw-bold">Disclaimer</h1>
			<p class="text-light">
				Because of the notation I use in this piece, I recommend playing from a digital screen of some sort unless you have a page turner! Both pages
				have a visual click track <i class="bi bi-clock mx-1"></i> and will play the electronics as you progress through the piece. Your choice of notation
				can have a significant impact on the outcome of the piece. I recommend trying both to see which one you prefer.
			</p>
			<h1 class="text-light fw-light">Staff notation</h1>
			<p class="text-light">
				On this page, the website automatically scroll through the piece for you. There's also a practice mode that allows you to skip to any measure.
				If you don't have access to a screen large enough to comfortably read the music, you can also download the PDF <i
					class="bi bi-file-earmark-arrow-down ms-1"></i
				>.
			</p>
			<h1 class="text-light fw-light">Animation</h1>
			<p class="text-light">
				This page uses a visual tablature that displays incoming events. Each row corresponds to a different drum or cymbal and the icon (🦶 or <i
					class="bi bi-magic"></i
				>) indicates whether to use a foot or a stick. These timings are more precise because you can see them coming, which means there will be less
				room for interpretation.
			</p>
		</div>
	</div>
</main>

<style>
	h1,
	a {
		font-family: "Quicksand", sans-serif;
	}

	a {
		width: 150px;
		height: 75px;
		transition: background 0.2s;
	}
</style>

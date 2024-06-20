<script>
	import { audio, play, metronome, measure, reset } from "$lib/index.js"
	import { goto } from "$app/navigation"
	import { onMount } from "svelte"

	onMount(() => {
		if (!$audio) {
			console.log("No audio context found. Redirecting to home page.")
			goto("/")
		}
	})

	$: if ($measure > 1) goto(`#${$measure}`)
	$: if ($reset) goto(`#${measure}`)
</script>

<main class="bg-dark">
	<div class="container-fluid min-vh-100 d-flex flex-column align-items-center gap-3 pt-5">
		<div class="hud container-fluid position-fixed bottom-0 bg-dark d-flex flex-column gap-3 p-3">
			<button
				class="metronome w-100 rounded-2 border border-2 fs-1 {$metronome ? 'bg-light text-dark' : 'bg-dark text-light'}"
				on:click="{() => {
					$play = !$play
				}}">{$play ? "Stop" : "Start"}</button>
			<h1 class="text-light text-center m-0">{$measure}</h1>
		</div>
		<div class="score w-100 d-flex flex-column pb-3 gap-3">
			{#each new Array(69) as _, i}
				<img class="rounded-2 w-100" id="{i + 1}" src="/{i + 1}.png" alt="1" />
			{/each}
		</div>
	</div>
</main>

<style>
	.container-fluid {
		font-family: "Quicksand", sans-serif;
	}

	.metronome {
		width: 250px;
		height: 100px;
		transition: background 0.1s;
	}
</style>

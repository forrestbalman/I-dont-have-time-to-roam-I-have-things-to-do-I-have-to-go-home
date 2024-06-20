import * as Tone from "tone"
import { get, writable } from "svelte/store"

export const audio = writable(false)
export const play = writable(false)
export const metronome = writable(false)
export const measure = writable(1)
export const click = writable(false)
export const reset = writable(false)

audio.subscribe((value) => {
	if (value) {
		startAudio()
	}
})

play.subscribe((value) => {
	if (get(audio)) {
		playHandler(value)
	}
})

reset.subscribe((value) => {
	if (value) {
		measure.set(1)
		return false
	}
})

let player
async function startAudio() {
	await Tone.start()
	audio.set(true)
	Tone.getTransport().bpm.value = 60
	player = new Tone.Player("/electronics.mp3").toDestination()
	player.volume.value = 0
	player.fadeIn = 1
}

let metroRepeat, beatRepeat, beat
function playHandler(bool) {
	if (bool) {
		beat = 0
		Tone.getTransport().position = "0:0:0"
		metroRepeat = Tone.getTransport().scheduleRepeat(() => {
			metronome.update((value) => !value)
		}, "8n")
		beatRepeat = Tone.getTransport().scheduleRepeat(() => {
			measure.update((value) => {
				if (value === 70) {
					playHandler(false)
					return 1
				}
				if (beat === 4) {
					beat = 1
					return value + 1
				} else {
					beat++
					return value
				}
			})
		}, "4n")
		player.start()
		Tone.getTransport().start()
	} else {
		player.stop()
		metronome.set(false)
		measure.set(1)
		reset.set(true)
		Tone.getTransport().stop()
		Tone.getTransport().clear(metroRepeat)
		metroRepeat = null
	}
}

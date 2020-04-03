/**
 *
 * NOTE
 *
 * BaseAudioContext.createScriptProcessor() has been deprecated.
 *
 * However, as the successor, AudioWorklet, has not been adopted by
 * a wide range of browsers BaseAudioContext.createScriptProcessor()
 * is still widely supported, we will use this for now and switch
 * as soon as AudioWorklets are supported to a greater extent.
 *
 * An example of how to integrate AudioWorklets can be found here:
 * https://bitbucket.org/alvaro_maceda/notoono/src/master/
 *
 */

export default class AudioHelper {
	init = (mediaStream, socket) => {
		this.socket = socket;
		this.isSpeaking = false;
		const context = new AudioContext();
		const audioStreamSource = context.createMediaStreamSource(mediaStream);
		const audioProcessor = context.createScriptProcessor(1024, 1, 1);
		audioProcessor.onaudioprocess = this.processAudio;
		audioStreamSource.connect(audioProcessor);
		audioProcessor.connect(context.destination);
	}

	processAudio = (event) => {
		const input = event.inputBuffer.getChannelData(0);
		let sum = 0.0;
		input.forEach(item => sum += item * item);
		let volume = Math.sqrt(sum / input.length) * 200;
		if (volume > 1 && !this.isSpeaking) {
			this.isSpeaking = true;
			this.socket.emit("speaking");
		} else if (volume < 1 && this.isSpeaking) {
			this.isSpeaking = false;
			this.socket.emit("stoppedSpeaking");
		}
	}
}

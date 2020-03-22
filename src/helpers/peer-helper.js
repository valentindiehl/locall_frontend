import Peer from 'simple-peer'

export default class PeerHelper {
	peer = null;
	init = (stream, initiator) => {
		this.peer = new Peer({
			initiator: initiator,
			stream: stream,
			trickle: false,
			reconnectTimer: 1000,
			iceTransportPolicy: 'relay',
			config: {
				iceServers: [
					{urls: ['stun:stun.services.mozilla.com', 'stun:stun.l.google.com:19302']}
				]
			}
		});
		return this.peer
	};
	connect = (otherId) => {
		this.peer.signal(otherId)
	}
}

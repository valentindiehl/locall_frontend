import Peer from 'simple-peer'

export default class PeerHelper {
	init = (stream, initiator) => {
		return new Peer({
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
	};
	connect = (peer, otherId) => {
		peer.signal(otherId);
	}
}

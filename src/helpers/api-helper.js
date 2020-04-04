const ApiHelper = () => {
	'use strict';

	function fetchFromServer(endpoint, callback) {
		fetch(process.env.REACT_APP_API_URL + endpoint, {
				headers: {
					'content-type': 'application/json'
				},
				credentials: "include"
			}
		).then(res => {
			return res.json()
		}).then(res => {
			callback(res);
		});
	};

	return {
		fetchCompany: function (id, callback) {
			fetchFromServer("/api/businesses/" + id, callback);
		},

		fetchUser: function (id, callback) {
			fetchFromServer("/api/users/" + id, callback);
		}
	}
}

export default ApiHelper;

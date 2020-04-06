import axios from "axios";

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
		}).then(callback);
	};

	function postToServer(endpoint, data, onSuccess, onError) {
		axios.post(process.env.REACT_APP_API_URL + endpoint, data,
			{
				withCredentials: true
			}).then(res => {
			if (res.status === 200 || res.status === 202) {
				onSuccess(res);
			}
		}).catch(onError)
	}

	function patchToServer(endpoint, data, onSuccess, onError) {
		axios.patch(process.env.REACT_APP_API_URL + endpoint, data,
			{
				withCredentials: true
			}).then(res => {
			if (res.status === 200) {
				onSuccess(res);
			}
		}).catch(onError)
	}

	return {
		fetchCompany: function (id, callback) {
			fetchFromServer("/api/businesses/" + id, callback);
		},

		fetchUser: function (id, callback) {
			fetchFromServer("/api/users/" + id, callback);
		},

		loginUser: function (email, password, onSuccess, onError) {
			const data = {
				"account": {
					"email": email,
					"password": password
				}
			}
			postToServer('/v1/account/login', data, onSuccess, onError)
		},

		forgotPassword: function (email, onSuccess, onError) {
			const data = {
				"account": {
					"email": email
				}
			}
			patchToServer('/v1/account/password', data, onSuccess, onError);
		},

		registerUser: function (values, onSuccess, onError) {
			const data = {
				"account": {
					"name": values.name,
					"email": values.email,
					"password": values.password
				}
			}
			postToServer("/v1/account", data, onSuccess, onError);
		},

		registerBusiness: function (values, onSuccess, onError) {
			const data = {
				application: {
					email: values.email,
					businessName: values.name
				}
			}
			postToServer("/api/applications", data, onSuccess, onError);
		}
	}
}

export default ApiHelper;

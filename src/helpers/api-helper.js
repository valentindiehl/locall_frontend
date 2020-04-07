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
			return res.json();
		}).then(callback).catch(console.log);
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

	function putToServer(endpoint, data, onSuccess, onError) {
		axios.put(process.env.REACT_APP_API_URL + endpoint, data,
			{
				withCredentials: true
			}).then(res => {
			if (res.status === 200 || res.status === 202) {
				onSuccess(res)
			} else {
				onError(res);
			}
		}).catch(onError)
	}

	function deleteToServer(endpoint, onSuccess, onError) {
		axios.delete(process.env.REACT_APP_API_URL + endpoint,
			{
				withCredentials: true
			}).then(res => {
			if (res.status === 200 || res.status === 202) {
				onSuccess(res)
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
		},

		getProfile: function (callback) {
			fetchFromServer("/api/users/profile", callback);
		},

		changeUserPassword: function (values, onSuccess, onError) {
			const data = {
				user: {
					oldPassword: values.oldPassword,
					password: values.password,
					passwordVerification: values.passwordConfirm
				}
			}
			putToServer("/api/users/password", data, onSuccess, onError);
		},

		changeUserPasswordWithToken: function (values, token, onSuccess, onError) {
			const data = {
				user: {
					token: token,
					password: values.password
				}
			}
			postToServer("/api/users/setPassword", data, onSuccess, onError);
		},

		updateGastroAccount: function (values, onSuccess, onError) {
			let data = {
				business: {
					description: values.description,
					paypal: values.paypalname
				}
			};
			putToServer("/api/businesses", data, onSuccess, onError)
		},

		deleteAccount: function (onSuccess, onError) {
			deleteToServer("/api/users", onSuccess, onError)
		}
	}
}

export default ApiHelper;

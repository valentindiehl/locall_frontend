import React, {Component} from "react";
import EditUserProfileFormRenderer from "./EditUserProfileFormRenderer";
import ApiHelper from "../../../../helpers/api-helper";
import * as Yup from "yup";

export default class EditUserProfileFormComponent extends Component {

	// noinspection DuplicatedCode
	constructor(props) {
		super(props);
		this.state = {
			isFileSelected: false,
			selectedFile: null,
			editError: false
		}

		this.validationSchema = Yup.object().shape({
			userName: Yup.string().required("Bitte gib deinen Namen ein.")
		});

		this.preventPopup = this.preventPopup.bind(this);
		this.handleFileSelection = this.handleFileSelection.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getAvatarUrl = this.getAvatarUrl.bind(this);
	}

	preventPopup(event) {
		this.setState({successMessage: null})
		if (this.state.isFileSelected) {
			event.preventDefault();
			this.handleFileSelection(null);
		}
	}

	handleFileSelection(event) {
		if (!this.state.isFileSelected) {
			this.setState({
				isFileSelected: true,
				selectedFile: event.target.files[0],
			});
		} else {
			this.setState({
				isFileSelected: false,
				selectedFile: null
			})
		}

	};

	handleFocus() {
		this.setState({registerError: false, errorMessage: null, successMessage: null});
	}

	handleSubmit(values, {resetForm}) {
		const onSuccess = () => this.setState({successMessage: "Änderungen gespeichert!"})
		const onError = (err) => {
			resetForm();
			console.log(err);
			this.setState({
				editError: true,
				errorMessage: "Ups, da ist wohl etwas schief gegangen. Probiere es doch bitte später noch einmal."
			})
		}
		const data = new FormData();
		data.append("name", values.userName);
		if (!!this.state.selectedFile) data.append("avatar", this.state.selectedFile);
		console.log(data);
		ApiHelper().changeUserData(data, onSuccess, onError);
	}

	getAvatarUrl() {
		return !!this.props.userData.avatarUrl ? this.props.userData.avatarUrl : "/assets/icons/profilbild-profilbild-gelb.svg";
	}

	render() {
		return <EditUserProfileFormRenderer
			getAvatarUrl={this.getAvatarUrl}
			handleFileSelected={this.handleFileSelection}
			isFileSelected={this.state.isFileSelected}
			selectedFile={this.state.selectedFile}
			userName={this.props.userData.name}
			editError={this.state.editError}
			validationSchema={this.validationSchema}
			onFocus={this.handleFocus}
			onSubmit={this.handleSubmit}
			errorMessage={this.state.errorMessage}
			preventPopup={this.preventPopup}
			successMessage={this.state.successMessage}
		/>
	}
}

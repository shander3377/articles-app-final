import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ActivityIndicator,
	ScrollView,
} from "react-native";
import { Header, AirbnbRating } from "react-native-elements";
import axios from "axios";
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/SimpleLineIcons";
export default class All extends Component {
	constructor() {
		super();
		this.state = {
			articleDetails: {},
			isLoading: true,
		};
	}
	getArticle = async () => {
		this.setState({ isLoading: true });
		await axios
			.get("http://8a87-223-233-78-239.ngrok.io/recommend-articles")
      .then((response) => {
				this.setState({ articleDetails: response.data.data, isLoading: false });
        console.log(this.state.articleDetails.data)

      });
	};

	async componentDidMount() {
		await this.getArticle();
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.card_container}>
					<View style={styles.card_top}>
            <View style={styles.card_buttons}>
              
					

							<View style={styles.button_view3}>
								<TouchableOpacity style={styles.button3}  onPress={() => this.getArticle()}>
									<Icon name="refresh" size={30}  color="#e91e63"/>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.card_title}>
							{this.state.isLoading ? (
								<ActivityIndicator size="large" color="#00ff00" />
							) : (
								<Text style={styles.title}>
									{this.state.articleDetails.title}
								</Text>
							)}
						</View>
					</View>

					<View style={styles.card_content}>
						<ScrollView>
							{this.state.isLoading ? (
								<ActivityIndicator size="large" color="#00ff00" />
							) : (
								<Text style={styles.content}>
									{" "}
									{this.state.articleDetails.text}
								</Text>
							)}
						</ScrollView>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#180a38"

	},
	card_container: {
		margin: 20,
		flex: 1.5,
		borderWidth: 2,
		borderRadius: 20,
		borderRadius: 20,
		flexDirection: "column",
		borderColor: "#ffdd00"

	},
	card_top: {
		flex: 0.22,
		borderWidth: 2,
		borderRadius: 20,
		borderRadius: 20,
		flexDirection: "row",
		borderColor: "#ffdd00"

	},
	card_buttons: {
		flex: 1,
		borderRightWidth: 2,
		borderLeftWidth: 0,
		borderRadius: 20,
		direction: "ltr",
		borderColor: "#ffdd00"

	},
	button_view3: {
		marginTop: 60,
		borderColor: "#ffdd00"

	},
	button3: {
		marginLeft: 20,
    marginBottom: 4,
    
	},
	card_title: {
		width: 270,
	},
	title: {
		marginLeft: 5,
		fontSize: 18,
		color:"#de5080"

	},
	card_content: {
		flex: 0.78,
		marginLeft: 3,
	},
	content: {
		textAlignVertical: "auto",
		color:"#de5080"

	},
});

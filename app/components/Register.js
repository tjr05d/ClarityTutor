'use strict'; 

import React, { Component } from 'react'; 
import {
    StyleSheet, 
    TextInput,
    TouchableHighlight,
    Text, 
    View, 
} from 'react-native'

class Register extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "", 
            password: "", 
            password_confirmation: "", 
            errors: [], 
        }
    }

    async _onRegisterPressed() {
        try {
            let response = await fetch('http://localhost:3000/api/users', {
                method: 'POST', 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password,
                        password_confirmation: this.state.password_confirmation
                    }
                }) 
            }); 

            let res = await response.text(); 
            console.log("res is: " + res); 
            //left off here, handle response
        } catch(errors){

        }
    }

    render() {
        return(
            <View style={styles.container}> 
                <TextInput
                    onChangeText={(val) => this.setState({ email: val })}
                    style={styles.input}
                    placeholder="Email"
                />

                <TextInput
                    onChangeText={(val) => this.setState({ name: val })}
                    style={styles.input}
                    placeholder="Name"
                />
                <TextInput
                    onChangeText={(val) => this.setState({ password: val })}
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                />
                <TextInput
                    onChangeText={(val) => this.setState({ password_confirmation: val })}
                    style={styles.input}
                    placeholder="Email"
                    secureTextEntry={true}
                />
                <TouchableHighlight style={styles.button} onPress={this._onRegisterPressed.bind(this)}>
                    <Text style={styles.buttonText}>
                        Register
                    </Text> 
                </TouchableHighlight> 
            </View> 
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
        paddingTop: 80
    }, 
    input: {
        height: 50,
        width: 300, 
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec'
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    },
    heading: {
        fontSize: 30,
    },
    error: {
        color: 'red',
        paddingTop: 10
    },
    loader: {
        marginTop: 20
    }
}

export default Register
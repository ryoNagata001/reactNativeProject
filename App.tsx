import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Button, Input } from 'react-native-elements';

export default class App extends React.Component {
    state = {
        name: 'hoge',
        age: 33,
        text1: 'placeholder',
    };
    render() {
        return (
            <View style={this.styles.container}>
                <Card title='入力してね'>
                    <Input
                        value={this.state.text1}
                        label='text1'
                        errorMessage='error'
                        onChangeText={(t) => this.setState({ text1: t })}
                    />
                    <Button
                        title='Entry'
                        buttonStyle={{ marginTop: 30 }}
                        onPress={this.entry}
                    />
                </Card>
                <StatusBar style='auto' />
            </View>
        );
    }

    changeName = () => {
        if (this.state.name === 'hoge') {
            this.setState({
                name: 'Foo',
            });
        } else {
            this.setState({
                name: 'hoge',
            });
        }
    };

    entry = () => {
        alert(this.state.text1);
    };

    styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingVertical: 80,
            alignItems: 'center',
        },
    });

    inputStyle = StyleSheet.create({
        container: {
            width: '100%',
            padding: 100,
            backgroundColor: '#101010',
            color: '#fff',
            textAlign: 'center',
        },
    });
}

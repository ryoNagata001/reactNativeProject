import React from 'react';
import { Text } from 'react-native';

interface Props {
    to: string;
}
export default class Hello extends React.Component<Props> {
    render() {
        return <Text>Hello, {this.props.to}</Text>;
    }
}

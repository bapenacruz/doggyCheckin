import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { SocialIcon } from 'react-native-elements';


class Social extends Component {

    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        return (
            <ScrollView>
                <SocialIcon
                type='twitter'
                />

                <SocialIcon
                raised={false}
                type='gitlab'
                />

                <SocialIcon
                light
                type='medium'
                />

                <SocialIcon
                light
                raised={false}
                type='medium'
                />

                <SocialIcon
                title='Sign In With Facebook'
                button
                type='facebook'
                />

                <SocialIcon
                title='Some Twitter Message'
                button
                type='twitter'
                />

                <SocialIcon
                button
                type='medium'
                />

                <SocialIcon
                button
                light
                type='instagram'
                />
            </ScrollView>
        );
    }
}

export default Social;
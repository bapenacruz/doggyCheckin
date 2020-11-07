import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        parks: state.parks
    };
};

class Parks extends Component {
    
    static navigationOptions = {
        title: 'Parks'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderParkItem = ({item}) => {
            return (
                <View>
                    <Tile
                        title={item.name}
                        caption={item.description}
                        featured
                        onPress={() => navigate('ParkInfo', { parkId: item.id })}
                        imageSrc={{uri: baseUrl + item.image}}
                    />
                </View>
            );
        };

        return (
            <FlatList
                data={this.props.parks.parks}
                renderItem={renderParkItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Parks);

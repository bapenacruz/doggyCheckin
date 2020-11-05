import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';


const mapStateToProps = state => {
    return {
        partners: state.partners
    };
};

class Pets extends Component {
    
    static navigationOptions = {
        title: 'Pets'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderPetsItem = ({item}) => {
            return (
                <View>
                    <Tile
                        title={item.name}
                        caption={item.description}
                        featured
                        onPress={() => navigate('Pets', { partnersId: item.id })}
                        imageSrc={{uri: baseUrl + item.image}}
                    />
                </View>
            );
        };


        return (
            <FlatList
                data={this.props.partners.partners}
                renderItem={renderPetsItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Pets);

import React, { Component } from 'react';
import Pets from './PetsComponent';
import Parks from './ParksComponent';
import ParkInfo from './ParkInfoComponent';
import History from './HistoryComponent';
import Favorites from './FavoritesComponent';
import Login from './LoginComponent';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchParks, fetchComments, fetchPromotions, fetchPets } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchParks,
    fetchComments,
    fetchPromotions,
    fetchPets
};

const LoginNavigator = createStackNavigator(
    {
        Login: { screen: Login }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='sign-in'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const PetsNavigator = createStackNavigator(
    {
        Pets: { 
            screen: Pets,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='paw'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
         },
        ParkInfo: { screen: ParkInfo }
    },
    {
        initialRouteName: 'Pets',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const ParksNavigator = createStackNavigator(
    {
        Parks: { screen: Parks }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'white'
            },
            headerTitleStyle: {
                color: 'black'
            },
            headerLeft: <Icon
                    name='tree'
                    type='font-awesome'
                    color='green'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    }
);

const FavoritesNavigator = createStackNavigator(
    {
        Favorites: { screen: Favorites }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='heart'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const HistoryNavigator = createStackNavigator(
    {
        History: { screen: History }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'white'
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                    name='history'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
        })
    }
);

const CustomeDrawerContentComponent = props => (
    <ScrollView style={styles.container}>
        <SafeAreaView
         forceInset={{top: 'always', horizontal: 'never'}}
            >
            <View style={styles.drawerHeader}>
                <View style={{flew: 1}}>
                    <Image
                        source={require('./images/logo.png')}
                        style={styles.drawerImage}
                    />
                    <Text style = {styles.drawerHeaderText}>PupPlay</Text>
                </View>
            </View>
            <DrawerItems {...props}/>
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Login: {
            screen: LoginNavigator,
            navigationOptions: {
                drawerIcon: () => (
                    <Icon
                        name='sign-in'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        Pets: {
            screen: PetsNavigator,
            navigationOptions: {
                drawerLabel: 'Pets',
                drawerIcon: () => (
                    <Icon
                        name='paw'
                        type='font-awesome'
                        size={24}
                        color='black'
                    />
                )
            }
        },
        Parks: {
            screen: ParksNavigator,
            navigationOptions: {
                drawerLabel: 'Parks',
                drawerIcon: () => (
                    <Icon
                        name='tree'
                        type='font-awesome'
                        size={24}
                        color='green'
                    />
                )
            }
        },
        Favorites: {
            screen: FavoritesNavigator,
            navigationOptions: {
                drawerLabel: 'Favorites',
                drawerIcon: () => (
                    <Icon
                        name='heart'
                        type='font-awesome'
                        size={24}
                        color='red'
                    />
                )
            }
        },
        History: {
            screen: HistoryNavigator,
            navigationOptions: {
                drawerLabel: 'History',
                drawerIcon: () => (
                    <Icon
                        name='history'
                        type='font-awesome'
                        size={24}
                        color='slategray'
                    />
                )
            }
        }
    },
    {
        initialRouteName: 'Parks',
        drawerBackgroundColor: 'white',
        contentComponent: CustomeDrawerContentComponent
    }
);

const AppNavigator = createAppContainer(MainNavigator)

class Main extends Component {

    componentDidMount() {
        this.props.fetchParks();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPets();
}

    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 15,
        fontSize: 24
    }
});


/* 
json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000 
*/

export default connect(null, mapDispatchToProps)(Main);

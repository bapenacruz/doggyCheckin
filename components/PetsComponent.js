import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Modal } from 'react-native';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import { Input, CheckBox, Button, Icon } from 'react-native-elements';
import { DataTable } from 'react-native-paper';
import { Thumbnail, Picker, Item } from 'native-base';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        pets: state.pets
    };
};

class Pets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selected1: "key1",
        };
    }

    onValueChange(value) {
        this.setState({
          selected1: value,
        });
      }

    handlePet() {
        this.toggleModal();
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }
    
    static navigationOptions = {
        title: 'Pets'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderPetsItem = ({item}) => {
            return (
                <View>
                    <Collapse>
                        <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10}}>
                            <View style={{width:'100%', alignItems:'center'}}>
                                <Thumbnail style={{width: 225, height: 225, borderRadius: 112.5, alignItems:'center'}} source={{uri: baseUrl + item.image}} />
                                <Text style={styles.titleText}>{item.name}</Text>
                                <Text style={styles.captionText}>{item.description}</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                            <View style={{width:'80%'}}>
                                <Text>Breed: {item.breed}</Text>
                                <Text>Gender: {item.gender}</Text>
                                <Text>Age: {item.age}</Text>
                                <Text>Weight: {item.weight}</Text>
                                <Text>Neutured: {item.neutured}</Text>
                                <Button
                                    onPress={() => this.handlePet()}
                                    title='Update'
                                    type='clear'
                                />
                            </View>
                        </CollapseBody>
                    </Collapse>
                </View>
            );
        };

        return (
            <ScrollView>
                <FlatList
                    data={this.props.pets.pets}
                    renderItem={renderPetsItem}
                    keyExtractor={item => item.id.toString()}
                />
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.handlePet()}
                        type='clear'
                        icon={
                            <Icon
                                name='plus'
                                type='font-awesome'
                                color='blue'
                                iconStyle={{marginRight: 10}}
                            />
                        }
                        titleStyle={{color: 'blue'}}
                    />
                </View>
                <ScrollView>
                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        visible={this.state.showModal}
                        onRequestClose={() => this.toggleModal()}>
                        <View style={styles.modal}>
                            <View style={{margin: 10}}>
                                <Text style={{fontSize: 17}}>Name:</Text>
                                <Input
                                    placeholder='Name'
                                    inputContainerStyle={{borderBottomWidth:0}}
                                />
                                <Text style={{fontSize: 17}}>Breed:</Text>
                                <Input
                                    placeholder='Breed'
                                    inputContainerStyle={{borderBottomWidth:0}}
                                />
                                <Text style={{fontSize: 17}}>Gender:</Text>
                                <Picker
                                    iosHeader="Select one"
                                    mode="dropdown"
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange.bind(this)}
                                    >
                                    <Item label="Select" value="key0" />
                                    <Item label="Female" value="key1" />
                                    <Item label="Male" value="key2" />
                                </Picker>
                                <Text style={{fontSize: 17}}>Age:</Text>
                                <Picker
                                    iosHeader="Select one"
                                    mode="dropdown"
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange.bind(this)}
                                    >
                                    <Item label="Select" value="key0" />
                                    <Item label="<3mo" value="key1" />
                                    <Item label="3-6mo" value="key2" />
                                    <Item label="6-9mo" value="key3" />
                                    <Item label="9-12mo" value="key4" />
                                    <Item label="1-2yrs" value="key5" />
                                    <Item label="2-3yrs" value="key6" />
                                    <Item label="3-5yrs" value="key7" />
                                    <Item label="5-7yrs" value="key8" />
                                    <Item label="7-9yrs" value="key9" />
                                    <Item label="9-11yrs" value="key10" />
                                    <Item label="11-13yrs" value="key11" />
                                    <Item label="13-15yrs" value="key12" />
                                    <Item label=">15yrs" value="key13" />
                                </Picker>
                                <Text style={{fontSize: 17}}>Weight:</Text>
                                <Picker
                                    iosHeader="Select one"
                                    mode="dropdown"
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange.bind(this)}
                                    >
                                    <Item label="Select" value="key0" />
                                    <Item label="<10lbs" value="key1" />
                                    <Item label="10-19lbs" value="key2" />
                                    <Item label="20-29lbs" value="key3" />
                                    <Item label="30-39lbs" value="key4" />
                                    <Item label="40-59lbs" value="key5" />
                                    <Item label="60-79lbs" value="key6" />
                                    <Item label="80-99lbs" value="key7" />
                                    <Item label="100-119lbs" value="key8" />
                                    <Item label="120-150lbs" value="key9" />
                                    <Item label=">150lbs" value="key10" />
                                </Picker>
                                <Text style={{fontSize: 17}}>Neutured:</Text>
                                <Picker
                                    iosHeader="Select one"
                                    mode="dropdown"
                                    selectedValue={this.state.selected1}
                                    onValueChange={this.onValueChange.bind(this)}
                                    >
                                    <Item label="Select" value="key0" />
                                    <Item label="Yes" value="key1" />
                                    <Item label="No" value="key2" />
                                </Picker>
                                <Text style={{fontSize: 17}}>Description:</Text>
                                <Input
                                    placeholder='Description'
                                    inputContainerStyle={{borderBottomWidth:0}}
                                />
                                <View  style={{margin: 5}}>
                                    <Button
                                        onPress={() => {
                                            this.handlePet();
                                            this.resetForm();
                                        }}
                                        color='#5637DD'
                                        title='Submit'
                                    />
                                </View>
                                <View  style={{margin: 5}}>
                                    <Button
                                        onPress={() => {
                                            this.toggleModal();
                                        }}
                                        color='#808080'
                                        title='Cancel'
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    captionText: {
        fontSize: 15,
        fontStyle: "italic",
        fontFamily: "sans-serif-light"
    },
    titleText: {
      fontSize: 25,
      fontFamily: "sans-serif-light"
    },
    container: { 
        flex: 1,
        padding: 18,
        paddingTop: 35,
        backgroundColor: '#ffffff' 
      },
    HeadStyle: { 
        height: 50,
        alignContent: "center",
        backgroundColor: '#ffe0f0'
      },
    TableText: { 
        margin: 10
      }, 
    formButton: {
        margin: 20,
        marginRight: 40,
        marginLeft: 40
    },
    formCheckbox: {
        margin: 8,
        backgroundColor: null
    }
  });

export default connect(mapStateToProps)(Pets);

import React, {Component} from 'react';
import {View, TouchableOpacity, ScrollView, Image, Text, SafeAreaView} from 'react-native';
import styles from './style';
import commonStyles from '../commonStyle';
import { WHITE_COLOR } from '../../util/Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import showToast from '../../util/Toast';
import scale from '../../util/scale';

const HOME_ICON = require('../../../assets/icon_home_.png');
const ORDER_ICON = require('../../../assets/icon_order_.png');
const PROFILE_ICON = require('../../../assets/icon_profile_.png');
const BELL_ICON = require('../../../assets/icon_bell_.png');
const MENU_ICON = require('../../../assets/icon_menu_.png');
const CONTACT_ICON = require('../../../assets/icon_telephone_.png');
const LOGOUT_ICON = require('../../../assets/icon_logout_.png');
const SMALL_LOGO = require('../../../assets/icon_logo_small_.png')

export default class DrawerComponent extends Component {
    constructor (props) {
        super (props);
    }

    renderUserSection () {
        return (
            <View style={styles.drawerUserContainer}>
                <View style={styles.userRectContainer}/>
                <View style={styles.triangle}/>
                <View style={styles.userContainer}>
                    <View style={styles.userPictureContainer}/>
                    <Text style={styles.userNameText}>Name here</Text>
                    <Text style={{color: WHITE_COLOR}}>demo@gmail.com</Text>
                </View>
            </View>
        )
    }

    renderDrawerItem = (name, action, image) => {
        return (
            <TouchableOpacity onPress={() =>action()} style={styles.drawerItemContainer}>
                <View style={styles.drawerInnerItemContainer}>
                    <Image style={{height: scale(24), width: scale(24)}} source = {image} />
                </View>
                <View style={styles.drawerItemTextContainer}>
                    <Text style={styles.drawerItemText}>{name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderBottomLogo() {
        return (
            <View style={{paddingVertical: scale(20), width: scale(250), alignContent: 'center',}}>
                <Image source ={SMALL_LOGO} style={{alignSelf: 'center'}} />
                <Text style={{fontSize: scale(14), fontWeight: 'bold', textAlign: 'center', color:WHITE_COLOR}}>GURKHA VILLAGE</Text>
                <Text style={{fontSize: scale(6), fontWeight: 'bold',textAlign: 'center', color:WHITE_COLOR}}>NEPALESE RESTAURANT & BAR</Text>
            </View>
        )
    }

    render () {
        const {navigateTo} = this.props;
        return (
            <SafeAreaView style={commonStyles.safeAreaViewContainer}>
                <ScrollView showsVerticalScrollIndicator = {false} bounces = {false} style={{flex:1}}>
                    {this.renderUserSection ()}
                    {this.renderDrawerItem('Home', () => navigateTo('MenuGroupScreen'), HOME_ICON)}
                    {this.renderDrawerItem('My Orders', () => navigateTo('PastOrderScreen'), ORDER_ICON)}
                    {this.renderDrawerItem('Menu', () => navigateTo('MenuGroupScreen'), MENU_ICON)}
                     {this.renderDrawerItem('Profile', () => showToast('Feature yet to be developed'), PROFILE_ICON)}
                    {this.renderDrawerItem('Notifications', () => showToast('Feature yet to be developed'), BELL_ICON)}
                    {this.renderDrawerItem('Contact Us', () => showToast('Feature yet to be developed'), CONTACT_ICON)}
                    {this.renderDrawerItem('Log out', () => navigateTo('LoginScreen', {}, true), LOGOUT_ICON)}
                    {this.renderBottomLogo()}
                </ScrollView>
                
            </SafeAreaView>
        )
    }
}
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { styles } from './styles';

import { SignMessageButton } from '../../components/SignMessageButton';
import { ButtonBasic } from '../../components/ButtonBasic';
import { SignInput } from '../../components/SignInput';


export function SignIn() {
    
    const[emailField, setEmailField] = useState('');
    const[passwordField, setPasswordField] = useState('');
    
    const navigation = useNavigation();

    function handleSignIn(){
        navigation.navigate('Home');
    }
    function handleMessageButton(){
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Seja bem vindo!
                </Text>
                <Text style={styles.subtitle}>
                    Preencha com seus dados {"\n"}ou faça o cadastro.
                </Text>
            </View>
            <View>
                <SignInput
                    name="user"
                    placeholder="E-mail"
                    onChangeText={(t: React.SetStateAction<string>)=>setEmailField(t)}
                    value={emailField}            
                />
                <SignInput
                    name="lock"
                    placeholder="Senha"
                    onChangeText={(t: React.SetStateAction<string>)=>setPasswordField(t)}
                    password={true}
                    value={passwordField}
                />
                <ButtonBasic
                    title="Vamos começar?" 
                    activeOpacity={0.8}
                    onPress={handleSignIn}
                />    
                <Text style={styles.splitText}>
                - Ou -
                </Text>
            </View>
            <SignMessageButton
                title='Novo por aqui?'
                action='Criar uma conta'
                activeOpacity={0.9}
                onPress={handleMessageButton}
            />
        </View>
    );

}

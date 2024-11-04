import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    )
}





const MyApp = () => {
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');
    const [type, setType] = useState('');

    return (
        <View style={{ padding: 20, paddingTop: 50 }}>
            {/* Exercise 1B */}
            <Text>User Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => setType(value)}
                items={[
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Guest', value: 'Guest' },
                ]}
            />

            {/*/!* Getting input values *!/*/}
            {/*<Text>Username:</Text>*/}
            {/*<TextInput*/}
            {/*    style={{ borderWidth: 1, marginBottom: 10 }}*/}
            {/*    onChangeText={(text) => setUsername(text)}*/}
            {/*    value={username}*/}
            {/*/>*/}

            {/*<Text>Password:</Text>*/}
            {/*<TextInput*/}
            {/*    style={{ borderWidth: 1, marginBottom: 20 }}*/}
            {/*    onChangeText={(text) => setPw(text)}*/}
            {/*    value={pw}*/}
            {/*    secureTextEntry={true}*/}
            {/*/>*/}

            {/*Exercise 1a*/}
            {/*<Text>Password</Text>*/}
            {/*<TextInput style={{borderWidth: 1}}*/}

            {/*/!* Exercise 1c and d *!/*/}
            {/*<Button*/}
            {/*    title="LOG IN"*/}
            {/*    onPress={() => Alert.alert('Welcome')}*/}
            {/*/>*/}

            {/*/!* Exercise 1e *!/*/}
            {/*<TouchableOpacity onPress={() => Alert.alert('Welcome')}>*/}
            {/*    <Text style={{ textAlign: 'center', marginTop: 10 }}>LoG IN</Text>*/}
            {/*</TouchableOpacity>*/}

            {/*/!* Exercise 1f *!/*/}
            {/*<TouchableOpacity onPress={() => ToastAndroid.show('Welcome!', ToastAndroid.SHORT)}>*/}
            {/*    <Text style={{ textAlign: 'center', marginTop: 10 }}>LoG IN</Text>*/}
            {/*</TouchableOpacity>*/}


            {/* Exercise 1g */}
            <InputBox label="User name:" onChangeText={(text) => setName(text)} />

            <InputBox label="Password"  onChangeText={(text) => setPw(text)} />

            <TouchableOpacity onPress={() =>
                ToastAndroid.show('Welcome' + ' ' + type  + ' ' + name, ToastAndroid.SHORT)}>
                <Text>LoG IN</Text>
            </TouchableOpacity>

            <Text>{pw}</Text>
        </View>
    );
};

export default MyApp;

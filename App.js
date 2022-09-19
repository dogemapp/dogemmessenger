// I REALLY need to refactor all of this
/*
For the messaging function, do CTRL+F "MESSENGER" in this file
That comment is above where you need to enter your desired contacts.
Once you enter your contacts, run the app and hit DogEm on the DogEm page
It'll send a group MMS to your various Emails and Phone numbers.
*/ 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
//import * as Linking from 'expo-linking';
import * as SMS from 'expo-sms';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
/*CODE FOR THE ONBOARDING SCREEN
Components:
- DogEm logo
- Login button that will direct to the login page for existing users
- Register button that will allow new users to register for an account
*/
function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/dogemprotologo.png")} />
      <Text style={styles.regularText}> Welcome to DogEm! </Text>
      <TouchableOpacity style={styles.loginBtn} 
      title = "Login"
      accessibilityLabel='Login'
      onPress={() => navigation.navigate('Login')}>
      <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.regBtn} 
      title = "Register"
      accessibilityLabel='REGISTER'
      onPress={() => navigation.navigate('Register')}>
      <Text style={styles.regText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
}
/*CODE FOR THE LOGIN SCREEN
Components:
- DogEm logo
- Field for entering the user's email address
- Field for entering the user's password
- Forgot password option
- Login button
*/
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/dogemprotologo.png")} />
      <Text style={styles.regularText}> Log in to use DogEm </Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} 
      title = "Login"
      accessibilityLabel='Login'
      onPress={() => navigation.navigate('Home')}>
      <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
  </View>
  );
}

/*CODE FOR THE REGISTER SCREEN
Components:
- DogEm logo
- Field for entering the new user's first name
- Field for entering the new user's last name
- Field for entering the new user's email address
- Field for entering the new user's phone number
- Field for entering the new user's username
- Field for entering the new user's password
- Register
*/
function RegisterScreen({ navigation }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <Image style={styles.image} source={require("./assets/dogemprotologo.png")} />
      <Text style={styles.regularText}>
      Register with DogEm!</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your first name"
          placeholderTextColor="#003f5c"
          onChangeText={(fname) => setFname(fname)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your last name"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(lname) => setLname(lname)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your Email"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter phone number"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter a username"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(uname) => setUname(uname)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter a password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.regBtn} 
      title = "Register"
      accessibilityLabel='Register'
      onPress={() => navigation.navigate('Login')}>
      <Text style={styles.regText}>REGISTER</Text>
      </TouchableOpacity>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

/*CODE FOR THE HOME SCREEN
Components:
- DogEm logo
- N x 3 grid for contact name, number, and email
- DogEm button by each name that redirects to the DogEm page
- Edit contacts button that redirects to the contacts page 
- Logout button
*/
function HomeScreen({ navigation }) {
  const Col = ({ numRows, children }) => {
    return  (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
  }
  const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )
 
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}contentContainerStyle={styles.contentContainer}>
      <Image style={styles.image} source={require("./assets/dogemprotologo.png")} />
      <Text style={styles.regularText}>
      Welcome to your homepage!</Text>
    <View style={styles.grid}>
      <Row>
       <Col numRows={3}>
          <Text>Your Contacts List</Text>
        </Col>
      </Row>
      <Row> 
        <Col numRows={1}>
          <Text>✏️ Name</Text>
        </Col>
        <Col numRows={1}>
          <Text>☎️ Number</Text>
        </Col>
        <Col numRows={1}>
          <Text>💻 Email</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>Contact Name1</Text>
        </Col>
        <Col numRows={1}>
          <Text>123-456-7891</Text>
        </Col>
        <Col numRows={1}>
          <Text>cname1@email.com</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>Contact Name1</Text>
        </Col>
        <Col numRows={1}>
          <Text>123-456-7891</Text>
        </Col>
        <Col numRows={1}>
          <Text>cname1@email.com</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>Contact Name1</Text>
        </Col>
        <Col numRows={1}>
          <Text>123-456-7891</Text>
        </Col>
        <Col numRows={1}>
          <Text>cname1@email.com</Text>
        </Col>
      </Row>
    </View>

    <TouchableOpacity style={styles.changesBtn} 
      title = "Contacts"
      accessibilityLabel='Contacts'
      onPress={() => navigation.navigate('Contacts')}>
      <Text style={styles.loginText}>MANAGE CONTACTS</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.dogemBtn} 
      title = "DogEm"
      accessibilityLabel='DogEm'
      onPress={() => navigation.navigate('DogEm')}>
      <Text style={styles.loginText}>🔥🔥🔥DogEm!🔥🔥🔥</Text>
      </TouchableOpacity>

      <TouchableOpacity
      title = "Logout"
      accessibilityLabel='Logout'
      onPress={() => navigation.navigate('Onboarding')}>
        <Text style={styles.forgot_button}>Logout</Text>
      </TouchableOpacity>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

/*CODE FOR THE MANAGE CONTACTS SCREEN
Components:
- DogEm logo
- N x 3 grid for contact name, number, and email
- DogEm button at the botton that redirects to the dogem page
- Edit contacts fields
- Delete contact
- Submit changes button
- Initially I made a logout button, but instead I chose to redirect back to the homepage so they
can do that there.
*/
function ManageContactsScreen({ navigation }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [deleteThem, deleteContact] = useState("");
  const Col = ({ numRows, children }) => {
    return  (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
  }
  const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )
 
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <Image style={styles.image} source={require("./assets/dogemprotologo.png")} />
      <Text style={styles.regularText}>
      Manage your contacts here!</Text>
    <View style={styles.grid}>
      <Row>
       <Col numRows={3}>
          <Text>Your Contacts List</Text>
        </Col>
      </Row>
      <Row> 
        <Col numRows={1}>
          <Text>✏️ Name</Text>
        </Col>
        <Col numRows={1}>
          <Text>☎️ Number</Text>
        </Col>
        <Col numRows={1}>
          <Text>💻 Email</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>Contact Name1</Text>
        </Col>
        <Col numRows={1}>
          <Text>123-456-7891</Text>
        </Col>
        <Col numRows={1}>
          <Text>cname1@email.com</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>Contact Name1</Text>
        </Col>
        <Col numRows={1}>
          <Text>123-456-7891</Text>
        </Col>
        <Col numRows={1}>
          <Text>cname1@email.com</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>Contact Name1</Text>
        </Col>
        <Col numRows={1}>
          <Text>123-456-7891</Text>
        </Col>
        <Col numRows={1}>
          <Text>cname1@email.com</Text>
        </Col>
      </Row>
    </View>

    <Text style={styles.regularText}>
    Add or Edit contacts here!</Text>
    <View style={styles.container}>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your first name"
          placeholderTextColor="#003f5c"
          onChangeText={(fname) => setFname(fname)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your last name"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(lname) => setLname(lname)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your Email"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter phone number"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter a username"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(uname) => setUname(uname)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter a password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <Text style={styles.regularText}>
      ❌ Delete this contact: ❌</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Type in contact to delete"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(deleteThem) => deleteContact(deleteThem)}
        />
       </View>

      <TouchableOpacity style={styles.changesBtn} 
      title = "Changes"
      accessibilityLabel='Changes'
      onPress={() => navigation.navigate('Home')}>
      <Text style={styles.loginText}>Submit Changes</Text>
      </TouchableOpacity>
  </View>
  </ScrollView>
  </SafeAreaView>
  </View>
  );
}

/*CODE FOR THE DOGEM SCREEN
Components:
- DogEm logo
- Field for entering the name of the contact you want to delete
- Big text box
- DogEm button
- Return to homepage button
*/
function DogEmScreen({ navigation }) {
  const [isAvailable, setIsAvailable] = useState(false);
  const [phoneNum, setPhoneNum] = useState(undefined);
  const [message, setMessage] = useState(undefined);

  useEffect(() => {
    async function checkAvailability() {
      const isSmsAvailable = await SMS.isAvailableAsync();
      setIsAvailable(isSmsAvailable);
    }
    checkAvailability();
  }, []);

/* MESSENGER */  

  const sendSMS = async () => {
    const {result} = await SMS.sendSMSAsync(
      ['[entercontact1]@gmail.com', '[enter phone]',
      '[entercontact2]@gmail.com'],
      'ENTER YOUR MESSAGE'
    );
    console.log(result);
  };

  return (

    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/dogemprotologo.png")} />
      <Text style={styles.regularText}> Dog Your Contacts Here! </Text>
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={phoneNum}
          placeholder="Contact's phone number"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setPhoneNum(value)}
        />
      </View>

      <View style={styles.messagerView}>
        <TextInput
          style={styles.TextInput}
          value={message}
          placeholder="Type in your DogEm Message"
          placeholderTextColor="black"
          onChangeText={(value) => setMessage(value)}
        />
       </View>

       <TouchableOpacity style={styles.dogemBtn}>
      {isAvailable ? <Button title="🔥🔥🔥DogEm🔥🔥🔥" 
      onPress={sendSMS} />: <Text>No SMS</Text>
      }
      <StatusBar style="auto"/>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.changesBtn} 
      title = "Home"
      accessibilityLabel='Home'
      onPress={() => navigation.navigate('Home')}>
      <Text style={styles.loginText}>Back to the Homepage</Text>
      </TouchableOpacity>
    </View>
  );
}

/* This is where all the styling is: */  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 10,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  messagerView: {
    backgroundColor: "white",
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderTopColor: '#000000',
    borderTopWidth: 1,
    borderLeftColor: '#000000',
    borderLeftWidth: 1,
    borderRightColor: '#000000',
    borderRightWidth: 1,
    borderRadius: 30,
    width: "90%",
    height: 75,
    marginBottom: 5,
    alignItems: "center",
  },
 
  TextInput: {
    fontWeight: 'bold',
    height: 55,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
 
  forgot_button: {
    height: 30,
    marginTop: 10,
    marginBottom: 20,
  },

  edit_contact_button: {
    height: 30,
    marginTop: 10,
    marginBottom: 20,
  },
 
  loginBtn: {
    fontWeight: 'bold',
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#FF1493",
  },

  regBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },

  changesBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
  },

  dogemBtn: {
    fontWeight: 'bold',
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#ff0000",
  },

  scrollView: {
    width: '100%',
    alignSelf: 'center',
    borderRightWidth: 1,
    padding: 0,
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  regularText: {
    color: 'red',
    marginBottom: 10,
    alignItems: "center",
    fontWeight: "bold",
    maxWidth: "100%",
  },

 /*FLEXBOX STYLING*/ 
 grid: {
  flex: 3, // the number of columns you want to divide the screen into
  marginHorizontal: "auto",
  width: "100%",
  backgroundColor: "white",
},
 row: {
  flexDirection: "row",
},
"1col":  {
  backgroundColor:  "pink",
  borderColor:  "#fff",
  borderWidth:  1,
  flex: 0.333
},
"2col":  {
  backgroundColor:  "green",
  borderColor:  "#fff",
  borderWidth:  1,
  flex:  1
},
"3col":  {
  justifyContent: "center",
  alignContent: "center",
  backgroundColor:  "tomato",
  borderColor:  "#fff",
  borderWidth:  1,
  flex:  3
},
"4col":  {
  flex:  4
}
});


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingScreen">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contacts" component={ManageContactsScreen} />
        <Stack.Screen name="DogEm" component={DogEmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
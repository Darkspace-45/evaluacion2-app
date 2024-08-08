import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Global:{
        backgroundColor: '#F8EACA',
        flex: 1,
    },
    textGlobal:{
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        marginTop: 90,
        fontWeight: 'bold',
    },
    imgGlobal:{
        height: 400,
        width: 400,
        alignSelf: 'center',
        marginTop: 20
    },
    formulariotext:{
        marginTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      result: {
        marginTop: 20,
        fontSize: 18,
      },
      resultText: {
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
      },
      textprimary: {
        fontSize: 20,
        paddingBottom: 10,
        fontWeight: 'bold',
        marginTop: 20
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        width: '80%',
      }
});
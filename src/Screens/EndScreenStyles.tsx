import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#312D2D',
  },
  textBox: {
    width: '80%',
    height: '30%',
    backgroundColor: '#1B1B1F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  largeText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    width: '80%',
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1B1B1F',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
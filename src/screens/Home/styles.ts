import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fdfcfe',
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }
})
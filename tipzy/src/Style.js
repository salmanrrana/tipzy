import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titletext: {
    color: '#DBE9EE',
    fontFamily: 'Avenir',
    marginTop: 30,
    fontSize: 55,
    width: 300,
    textAlign: 'center',
    fontWeight: '700',
    fontStyle: 'italic',
    textShadowColor: 'rgba(255,255,255,.2)',
    textShadowOffset: { height: 2, width: 2 },
    textShadowRadius: 1
  },
  total: {
    flex: 0.75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: 'rgba(255,255,255,.9)',
    borderBottomWidth: 0.5,
    width: 280
  },
  bill: {
    flexDirection: 'column'
  },
  billAmount: {
    color: 'rgba(255,255,255,.9)',
    fontFamily: 'Avenir',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 3
  },
  textInput: {
    marginTop: 10,
    // backgroundColor: 'rgba(255,255,255,.7)',
    height: 50,
    width: 100,
    color: 'rgba(255,255,255,.9)',
    fontSize: 20
  },
  textInput2: {
    marginTop: 10,
    marginLeft: 44,
    // backgroundColor: 'rgba(255,255,255,.7)',
    height: 50,
    width: 100,
    color: 'rgba(255,255,255,.9)',
    fontSize: 20
  },
  people: {
    flex: 0.75,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: 'rgba(255,255,255,.9)',
    borderBottomWidth: 0.5,
    width: 280
  },
  thepeople: {
    flexDirection: 'column'
  },
  peoplenum: {
    color: 'rgba(255,255,255,.9)',
    fontFamily: 'Avenir',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 3
  },
  tipzy: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
  },
  buttonContainer: {
    flex: 1
  },
  buttonText: {
    color: 'rgba(255,255,255,.9)',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: '300',
    fontStyle: 'italic',
    letterSpacing: 3
  },
  button1: {
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    marginLeft: 12.5,
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'rgba(255,255,255,.1)',
    backgroundColor: '#587B7F',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 1,
    shadowRadius: 1
  },
  button2: {
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    marginLeft: 12.5,
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'rgba(255,255,255,.1)',
    backgroundColor: '#1B998B',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 1,
    shadowRadius: 1
  },
  button3: {
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginTop: 15,
    marginLeft: 12.5,
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'rgba(255,255,255,.1)',
    backgroundColor: '#06A77D',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 1,
    shadowRadius: 1
  },
  tipNumber: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 8,
    width: 285
  },
  tipPercent: {
    color: 'rgba(255,255,255,.9)',
    letterSpacing: 3
  },
  personTip: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomColor: 'rgba(255,255,255,.9)',
    borderBottomWidth: 0.5,
    width: 280,
    marginBottom: 20
  },
  tipPerson: {
    textAlign: 'left',
    color: 'rgba(255,255,255,.9)',
    fontFamily: 'Avenir',
    fontWeight: '400',
    fontSize: 10,
    letterSpacing: 3
  },
  tipRender: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 15
  },
  tipRendered: {
    alignItems: 'flex-start',
    marginRight: 20,
    marginBottom: 15
  },
  finalRendered: {
    alignItems: 'flex-start',
    marginRight: 0,
    marginBottom: 40
  },
  tipText: {
    color: 'rgba(255,255,255,.9)'
  },
  // layout: {
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  totalRender: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 100
  },
  personFinal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 280,
    marginBottom: 20
  },
  finalcharge: {
    color: 'rgba(255,255,255,.9)',
    fontFamily: 'Avenir',
    fontWeight: '400',
    fontSize: 10,
    letterSpacing: 3,
    textAlign: 'left'
  }
});

export default Style;

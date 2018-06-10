import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Textinput
} from 'react-native';
import Style from './Style';
import Header from './components/Header';
import DismissKeyboard from 'dismissKeyboard';

class Main extends Component {
  state = {
    amount: '',
    people: '',
    roundup: '',
    tip: '',
    total: ''
  };

  renderTotalAndTip(tip, total) {
    return (
      <View style={Style.layout}>
        <View style={Style.tipRender}>
          <Text style={Style.tipText}>{tip}</Text>
        </View>
        <View style={Style.totalRender}>
          <Text style={Style.tipText}>{total}</Text>
        </View>
      </View>
    );
  }

  addAmount() {
    let amount = this.state.amount;
    this.setState({ amount: amount });
  }

  setTipAndTotal20() {
    let people = this.state.people;
    console.log('people is this in set tip 20: ', people);
    let amount = this.state.amount;
    console.log('amount is this in set tip 20: ', amount);

    let subtotal = amount / people;
    console.log('subtotal is this in set tip 20: ', subtotal);

    // let roundup = this.state.roundup
    let roundup = (Math.ceil(subtotal * 100) / 100).toFixed(2);
    console.log('roundup is this in set tip 20: ', roundup);

    let tip = this.state.tip;
    tip = roundup * 0.2 * 100 / 100;
    console.log('tip is this in set tip 20: ', tip);

    // let total = (roundup+tip)
    let total = (roundup && tip ? tip + subtotal : tip).toFixed(2);

    this.setState({ roundup: roundup, total: total, tip: tip });
    console.log('tip', tip);
    console.log('roundup: ', roundup);
    console.log('total: ', total);
    DismissKeyboard();
  }

  setTipAndTotal25() {
    let people = this.state.people;
    console.log('people is this in set tip 25: ', people);
    let amount = this.state.amount;
    console.log('amount is this in set tip 25: ', amount);

    let subtotal = amount / people;
    console.log('subtotal is this in set tip 25: ', subtotal);

    // let roundup = this.state.roundup
    let roundup = (Math.ceil(subtotal * 100) / 100).toFixed(2);
    console.log('roundup is this in set tip 25: ', roundup);

    let tip = this.state.tip;
    tip = roundup * 0.25 * 100 / 100;
    console.log('tip is this in set tip 25: ', tip);

    // let total = (roundup+tip)
    let total = (roundup && tip ? tip + subtotal : tip).toFixed(2);

    this.setState({ roundup: roundup, total: total, tip: tip });
    console.log('tip', tip);
    console.log('roundup: ', roundup);
    console.log('total: ', total);
    DismissKeyboard();
  }

  setTipAndTotal30() {
    let people = this.state.people;
    console.log('people is this in set tip 30: ', people);
    let amount = this.state.amount;
    console.log('amount is this in set tip 30: ', amount);

    let subtotal = amount / people;
    console.log('subtotal is this in set tip 30: ', subtotal);

    // let roundup = this.state.roundup
    let roundup = (Math.ceil(subtotal * 100) / 100).toFixed(2);
    console.log('roundup is this in set tip 30: ', roundup);

    let tip = this.state.tip;
    tip = roundup * 0.3 * 100 / 100;
    console.log('tip is this in set tip 30: ', tip);

    // let total = (roundup+tip)
    let total = (roundup && tip ? tip + subtotal : tip).toFixed(2);

    this.setState({ roundup: roundup, total: total, tip: tip });
    console.log('tip', tip);
    console.log('roundup: ', roundup);
    console.log('total: ', total);
    DismissKeyboard();
  }

  render() {
    return (
      <View style={Style.title}>
        <Header />

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={Style.total}>
            <Text style={Style.billAmount}>$</Text>
            <TextInput
              style={Style.textInput}
              keyboardType="numeric"
              returnKeyType="done"
              placeholder="0.00"
              onChangeText={number => {
                this.setState({ amount: number });
              }}
              onEndEditing={() => this.addAmount()}
            />
            <View style={Style.bill}>
              <Text style={Style.billAmount}>Bill</Text>
              <Text style={Style.billAmount}>Amount</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={Style.people}>
            <TextInput
              style={Style.textInput2}
              keyboardType="numeric"
              placeholder="0"
              onChangeText={number => {
                this.setState({ people: number });
              }}
            />
            <View style={Style.thepeople}>
              <Text style={Style.peoplenum}>No. of</Text>
              <Text style={Style.peoplenum}>People</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={Style.tipzy}>
          <TouchableOpacity
            style={Style.buttonContainer}
            onPress={() => this.setTipAndTotal20()}
          >
            <View style={Style.button1}>
              <Text style={Style.buttonText}>HECK YEAH</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={Style.buttonContainer}
            // onPress={() => this.searchEvents(this.state.eventType)}
            onPress={() => this.setTipAndTotal25()}
          >
            <View style={Style.button2}>
              <Text style={Style.buttonText}>OH DANG</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={Style.buttonContainer}
            // onPress={() => this.searchEvents(this.state.eventType)}
            onPress={() => this.setTipAndTotal30()}
          >
            <View style={Style.button3}>
              <Text style={Style.buttonText}>F**K YEAH</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={Style.tipNumber}>
          <Text style={Style.tipPercent}>20%</Text>
          <Text style={Style.tipPercent}>25%</Text>
          <Text style={Style.tipPercent}>30%</Text>
        </View>

        <View style={Style.personTip}>
          {this.renderTotalAndTip(this.state.tip)}
          <View style={Style.tipRendered}>
            <Text style={Style.tipPerson}>TIP PER</Text>
            <Text style={Style.tipPerson}>PERSON</Text>
          </View>
        </View>

        <View style={Style.personFinal}>
          {this.renderTotalAndTip(this.state.total)}
          <View style={Style.finalRendered}>
            <Text style={Style.finalcharge}>FINAL AMT.</Text>
            <Text style={Style.finalcharge}>PER PERSON</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Main;

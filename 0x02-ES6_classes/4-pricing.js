import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (amount) {
      this._amount = amount;
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} ${this.currency._code}`;
  }

  static convertPrice(amount, conversionRate) {
    const price = amount * conversionRate;
    return price;
  }
}

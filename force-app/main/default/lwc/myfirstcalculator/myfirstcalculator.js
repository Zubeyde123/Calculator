import { LightningElement, track } from 'lwc';
export default class CalculatorInLwc extends LightningElement {
    @track Num1;
    @track Num2;
    resultValue;
    handleNumberOeChange(event) {
        this.Num1 = parseInt(event.target.value);
    }
    handleNumberTwoChange(event) {
        this.Num2 = parseInt(event.target.value);
    }
    addition() {
        this.resultValue = parseInt(this.Num1) + parseInt(this.Num2);
    }
    multification() {
        this.resultValue = this.Num1 * this.Num2;
    }
    subtraction() {
        this.resultValue = this.Num1 - this.Num2;
    }
    division() {
        this.resultValue = this.Num1 / this.Num2;
    }
}
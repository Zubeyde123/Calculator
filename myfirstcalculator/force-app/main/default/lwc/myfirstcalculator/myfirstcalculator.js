import { LightningElement } from 'lwc';

export default class Myfirstcalculator extends LightningElement {
no1= 0;
no2= 0;
result;
handleChange1(e){
    this.no1 = e.detail.value;}
    handleChange2(e) {
        this.no2 = e.detail.value;}
        sum(){
            this.result= parseInt(this.no1)+parseInt(this.no1);
            console.log(this.result);
        }
        sub(){
            this.result=this.no1 - this.no2;

        }
        mult(){
            this.result=this.no1 * this.no2; 
        }
        div(){
            this.result=this.no1 / this.no2;
        }

       

}







}
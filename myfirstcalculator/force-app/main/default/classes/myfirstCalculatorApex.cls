/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-15-2023
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class myfirstCalculatorApex {
    public myfirstCalculatorApex() {

    }
    @AuraEnabled(cacheable=true)
    public static Decimal getResult(String operator, Decimal num1, Decimal num2){
        Decimal result;
        if(operator == '+'){
            result = num1 + num2; 
        
    } else if (operator == '-') {
        result = num1 + num2;
    } else if (operator == '*') {
        result = num1 + num2;
    } else if (operator == '/') {
        result = num1 + num2;
    } else   {
        result = 0;
    }
    return result;   
}
}
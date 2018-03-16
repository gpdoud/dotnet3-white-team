import {Order} from "./order.class"

export class Customer {
 Id:number;
Name:string;
CreditLimit:number;
    constructor(
        Id:number,
        Name:string,
        CreditLimit:number) {
        
    }
    function validateForm() {
        var x = document.forms["Name"]["CreditLimit"].value;
        if (x == "") {
            alert("Name must be filled out");
            return false;
        }
    }



/*### Customers

Customers are the buyers of our project. They are used in orders to identify who bought our project and who should be billed for it.

Customer data includes:

    - Id (int) Primary Key
    - Name (string) required
    - CreditLimit (currency) required */
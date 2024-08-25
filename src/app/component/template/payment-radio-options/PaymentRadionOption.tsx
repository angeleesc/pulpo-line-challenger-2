

import React from "react";

export default function PaymentRadionOption() {


    


  return <div className="flex flex-col gap-8">
    <label>
        <input type="radio" name="payment-option" value={"credit-card"} /> 
        <span>Tarjeta Bancaria</span>
    </label>
    
    <label>
        <input type="radio" name="payment-option" value={"bizun"} /> 
        <span>Bizun</span>
    </label>
    <label>
        <input type="radio" name="payment-option" value={"transfer"} /> 
        <span>Tranferencia</span>
    </label>
    

    
    </div>;
}

import React from "react";

function Form(){
    return(
        <form>
         <input className="input-group mb-3" type="text" placeholder="Search Your Transactions"/>
         <div>
         <input type = "date" placeholder="date"/>
         <input type = "text" placeholder="description"/>
         <input type = "text" placeholder="category"/>
         <input type = "number" placeholder="amount"/>
         </div>
         <button type="submit" placeholder=""  className="btn btn-secondary">Add Transaction</button>

        </form>
    )
}

export default Form
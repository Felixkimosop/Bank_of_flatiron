import React ,{useEffect, useState}  from "react";

function Table(){

    const [data, setData] = useState({
        date: '',
        description: '',
        category: '',
        amount: ''
      });
    
      useEffect(() => {
        fetch('my-app/db.json/transactions')
        .then(response => response.json())
        .then(data => console.log(data))
      },[])

    return(
            <div>
                <table  className="table">
                    <thead>
                        <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                        <tr>

                        </tr>
                    </tbody>
                </table>
                
                        </div>
    )
}
export default Table
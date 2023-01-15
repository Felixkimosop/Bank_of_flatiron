import React  from "react";


function Table({list,handleDelete}){

    
    
        
    

   




    return(
            <div>
                <table  className="table">
                    <thead>
                        <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Delete</th>
                    </tr>
                    </thead>

                  <tbody>
                  {
                    list.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                                <td>{item.amount}</td>
                                <td><button onClick = {handleDelete}>x</button></td>                      
                                
                                 </tr>
                        )
                    })
                }
                  </tbody>
                </table>
                
                        </div>
    )
}
export default Table
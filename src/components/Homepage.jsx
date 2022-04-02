import React from "react";




export const Homepage = ({value, setValue}) => {
     const onDelete = (id) => {
      const filters = setValue(value?.filter(item => item.id !== id)
      ) 
      return filters
     }



    return(
        <div >
            {
            value?.map(item => (
              <div key={item.id}>
                {item.name}
                {item.gin}
                
            <img src = {item.image} style = {{
                width:'220px',
                height:'220px',
                display:"flex",
            }}/>
                <button 
                   onClick={() => onDelete(item.id)}
                >
                    Delete
                </button>
              </div>
            ))
            }
        </div>
    )
}


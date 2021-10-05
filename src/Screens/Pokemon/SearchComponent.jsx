import React, { useState } from 'react'

const SearchComponent = (props) =>{
    const [name, setName]=useState()
    return <React.Fragment>
        <input type={"search"} onChange={(e)=> setName(e.target.value)} />
        <button onClick={()=>{
            props.searchFunction(name)
        }}>Search</button>
    </React.Fragment>
}

export default SearchComponent
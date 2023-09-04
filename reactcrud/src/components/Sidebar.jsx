import React, { useState } from 'react'
import styled from 'styled-components'
const Sidebar = () => {

    const [category,setCategory] = useState([])
    const [gender,setGender] = useState([])

    const handleCategory = (e) => {
        const {value} = e.target
        // console.log(value)
        let newCategory = [...category]
        if(newCategory.includes(value)){
            newCategory = newCategory.filter(el => el !== value)
        }else{
            newCategory.push(value)
        }
        // setCategory(prev => [...prev,value])
        // console.log(category)
        setCategory(newCategory)
    }

    const handleGender = (e) => {
        const {value} = e.target;
        let newGender = [...gender]
        if(newGender.includes(value)){
            newGender = newGender.filter((el)=>el !== value);
        }else{
            newGender.push(value)
        }
        setGender(newGender)
    }

    // console.log(category)
     console.log(gender)
  return (
    <DIV>
       <h3>Filter By Category</h3>
       <div> 
        <input type='checkbox' value={"top-wear"}    onChange={(e)=>handleCategory(e)} />
        <label>Top Wear</label> 
       </div> 
       <div> 
        <input type='checkbox' value={"bottom-wear"} onChange={(e)=>handleCategory(e)}/>
        <label>Bottom Wear</label> 
       </div> 
       <div> 
        <input type='checkbox' value={"foot-wear"} onChange={(e)=>handleCategory(e)}  />
        <label>Footwear</label> 
       </div> 
       <br/>
       <h3>Filter By Gender</h3>
       <div>
        <input type='checkbox' value={"male"} onChange={(e)=>handleGender(e)} />
        <label>Male</label> 
       </div> 
       <div>
        <input type='checkbox' value={"female"} onChange={(e)=>handleGender(e)} />
        <label>Female</label> 
       </div> 
       <div>
        <input type='checkbox' value={"kids"} onChange={(e)=>handleGender(e)} />
        <label>Kids</label> 
       </div> 
    </DIV>
  )
}

export default Sidebar;

const DIV = styled.div`
   display: flex;
   flex-direction: column;
   align-items: baseline;
   padding-left: 15px;
   border-right: 2px solid grey;
   min-height : 80vh;
`;
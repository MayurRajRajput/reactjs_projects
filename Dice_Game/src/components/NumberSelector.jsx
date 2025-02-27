import { useState } from "react"
import styled from "styled-components"
const NumberSelector = ({
    selectedNumber,setSelectedNumber,error,setError
}) => {
  const arrNumber = [1,2,3,4,5,6]
  const numberSelectorHandler =(value)=>{
    setSelectedNumber(value)
    setError("")
  }
  
    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">      
    {
        arrNumber.map((value,i)=>(
            <Box isSelected={value===selectedNumber} key={i} onClick={()=>numberSelectorHandler(value)}>{value}</Box>
        ))
    }
    </div>
    <h1>Select Number</h1>
    </NumberSelectorContainer>
  )
}

export default NumberSelector
const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex;
        gap:24px;

    }
    h1{
        font-size:24px;
        
    }
    .error{
        font-size:24px;
        font-weight: 700px;
        color:red;
    }
`
const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px ;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "black":"white"};
    color: ${(props) => props.isSelected ? "white":"black"};
    transition: 0.4s background ease-in;
`
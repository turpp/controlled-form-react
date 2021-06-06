import React, {useState} from 'react'


function ControlledForm() {
    //creating state with State Hook for form inputs
    const[name, setName]=useState('')
    const [favNumber, setFavNumber]=useState('')

    const handleSubmit =(event)=>{
        //make sure to prevent default submit function of a html form
        event.preventDefault()

        if(favNumber.length === 3){
        //now we can do whatever we please with the new information. For an example I will produce an alert with information from state.
        alert(`Hello ${name}. Nice to know that your favorite number is ${favNumber}`)
        } else {
            alert(`${name}, make sure to add a 3 digit number before submiting.`)
        }
    }

    //conditional to make sure we never have more than 3 digits in our favNumber input
    const handleChange = (event)=>{
        if(event.target.value.length <=3){
         setFavNumber(event.target.value)   
        }
    }


    return <form onSubmit={handleSubmit}>
            <label>Name:</label>
            {/* added onChange EventListener */}
            <input type='text' value={name} onChange={(event)=>setName(event.target.value)}/>
            <label>Favorite Number:</label>
            {/* added onChange EventListener*/}
            <input type='number' value={favNumber} onChange={handleChange}/>
            <br></br>
            <input type='submit'/>
          </form>
}

export default ControlledForm
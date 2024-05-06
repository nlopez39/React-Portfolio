import {useState}  from 'react';

function Contact(){
    //name
    //email
    //comments 
    //submit button
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [comment, setComment] = useState(" ");
    const [errorMessage, setErrorMessage] = useState('');


    //handle input change
    //will handle user input from the box, this will change the state of input box 
    const handleInputChange = (e) =>{
        const {target} = e; 
        const inputType = target.name; //what kind of input they are on
        const inputValue = target.value; //user input
        
        if(inputType === "name"){
            setName(inputValue);
        }else if(inputType == "email"){
            setEmail(inputValue);
        }else{
            setComment(inputValue);
        }
    }
    //handle the submit button
    const handleFormSubmit = (e) =>{
        e.preventDefault(); 
        //we want to check that the user does not leave any blanks
        if(!email || !name || !comment){
            setErrorMessage("Email, username or comment box is Empty!");
            return;
           
        }
        alert(`Hello ${name}`);
    }

    //return a form 
    return (
        <div>
            <h1>Contact Me</h1>
            <form className='form' onSubmit={handleFormSubmit}>
             <div className='mb-3'> 
                <label className="form-label">Name</label>
                <input className='form-control'
                value={name}
                onChange={handleInputChange}
                name="name"
                type="name"
                //these are placeholders for the input box that only appeard when I added onchange 
                placeholder='name'
               
                   
                />
                </div>   
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                <input className='form-control'
                value={email}
                onChange={handleInputChange}
                name="email"
                type="text"
                placeholder='email'
                />
                </div>
                
                <div className='mb-3'>
                    <label className='form-label'>Comments</label>
                <textarea className='form-control'
                value={comment}
                onChange={handleInputChange}
                name="comment"
                type="text"
                placeholder='comment'
                style={{height:100}}
                /> 
                </div>  
                <button type="submit" className='btn btn-primary'>
                    Submit

                </button>
               
        
            </form>
            {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
    );
}

export default Contact;
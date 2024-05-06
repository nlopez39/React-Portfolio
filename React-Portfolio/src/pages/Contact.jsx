import {useState}  from 'react';

function Contact(){
    //name
    //email
    //comments 
    //submit button
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [comment, setComment] = useState(" ");


    //handle input change

    //return a form 
    return (
        <div>
            <h1>Contact Me</h1>
            <form >
             <div className='mb-3'> 
                <label className="form-label">Name</label>
                <input className='form-control'
                value={name}
                name="name"
                type="name"
                //are these placeholders important?
                placeholder='name'
               
                   
                />
                </div>   
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                <input className='form-control'
                value={email}
                name="email"
                type="text"
                placeholder='email'
                />
                </div>
                
                <div className='mb-3'>
                    <label className='form-label'>Comments</label>
                <textarea className='form-control'
                value={comment}
                name="comment"
                type="text"
                placeholder='comment'
                style={{height:100}}
                /> 
                </div>  
               
        
            </form>
        </div>
    )
}

export default Contact;
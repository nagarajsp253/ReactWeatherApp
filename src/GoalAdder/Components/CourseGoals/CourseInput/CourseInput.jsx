import React, {useState} from 'react'
import '../../../../App.css';
//import '../../UI/Button.css';
import Button from '../../UI/Button';
import styles from './CourseInput.module.css';
import styled from 'styled-components';


// const FormControl=styled.div`

//     margin: .5rem 0;

// & label{
//     font-weight: bold;
//     display: block;
//     margin-bottom: .5rem;
//     color:${props=>(props.invalid?'red':'black')};
// }

// & input{
//     display: block;
//     width: 100%;
//     border: 1px solid ${props=>(props.invalid?'red':'#ccc')};
//     font: inherit;
//     padding: 0 0.25rem;
//     line-height: 1.5rem;
// }

// & input:focus{
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
// }

// `;

const CourseInput = (props) => {

    const [enteredValue, setEnteredValue] = useState('');
    const[isValid, setIsValid]=useState(true);

    const goalInputChangeHandler = event => {
      if(event.target.value.trim().length>0){
        setIsValid(true);
      }
      setEnteredValue(event.target.value);
    };
  
    const formSubmitHandler = event => {
      event.preventDefault();
      if(enteredValue.trim()==="")
      {
        setIsValid(false);
        return;
      }
        props.onAddGoal(enteredValue);
        setEnteredValue("");
    };

  return (
    <>
       <form onSubmit={formSubmitHandler}>
          <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
             <label>Course Goal</label>
             <input type="text" value={enteredValue} autoComplete='disable' onChange={goalInputChangeHandler}/>
          </div>
          <Button type='submit'>Add Goal</Button>
       </form>
    </>
  )
}


export default CourseInput

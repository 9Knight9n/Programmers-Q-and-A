import React, { Component } from 'react';
import './CSS/profileThree.css';
import Select from 'react-select';



const options = [
                    { value: 'html', label: 'html' },
                    { value: 'java', label: 'java' },
                    { value: 'css', label: 'css' },
                    { value: 'c#', label: 'c#' },
                    { value: 'java script', label: 'java script' },
                    { value: 'php', label: 'php' }
                ]
                    const customStyles = {
                        option: (provided, state) => ({
                        ...provided,
                        color: 'black',
                    }),}              

class profileThree extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                  <br></br>
                  <h1>Please select your preferred programming languages ​​from the box below</h1>
                  <br></br>
                    <Select styles={customStyles}
                        
                        isMulti
                        name="colors"
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />

                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        
                        

                <div className="mt-5">
                    <div class="fileUploadInput">
                    <label>✨ <h1> please Upload your resume Files here</h1></label>
                    <input type="file" />
                    <button>+</button></div>
                </div> 
            </React.Fragment>
            
         );
    }
}
 
export default profileThree;
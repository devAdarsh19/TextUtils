import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase', 'success')
  }

  const handleLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase', 'success')

  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleCopy = async() => {
    await navigator.clipboard.writeText(text);
    props.showAlert('Text copied!', 'success')

  }

  const [text, setText] = useState('Enter text here');
  
  return (
    <>
      <div className='container' style={{color:props.mode==='dark'? 'white' : 'black'}}>
        <h2>{props.heading}</h2>
          <div className={`mb-3 text-${props.mode==='light'? 'dark' : 'light'}`}>
              <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'? '#343a40' : 'white', color:props.mode==='dark'? 'white' : 'black'}} rows="8" value={text} onChange={handleOnChange}></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpCase}>To Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLowCase}>To Lowercase</button>
          <button className="btn btn-primary mx-0.5" onClick={handleCopy}>
            <ion-icon name="clipboard-outline"></ion-icon>
          </button>
          
      </div>
      <div className={`container my-3 text-${props.mode==='light'? 'dark' : 'light'}`}>
        <h2>Text Summary</h2>
        <p>{text.split(' ').length} words & {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : <i>No text entered</i>}</p>
      </div>
    </>
  )
}

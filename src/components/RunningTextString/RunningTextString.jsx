import { useEffect, useState } from "react";
import './RunningTextString.css';


function* rightRunIterator(str) {
  for (let i = 1; i <= str.length; i++ ) {
    yield str.substring(0, i);
  }
}

function* leftRunIterator(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    yield str.substring(0, i);
  }
}


function stringCharsIterator(stringChars) {
  var textStringRunIterator = rightRunIterator(stringChars); 
  textStringRunIterator._sourceFunctionName = rightRunIterator.name;
  var runIteratorPrev;

  this.next = () => {
    var runIteratorNext = textStringRunIterator.next();    

    if(runIteratorNext.done) {
      if(textStringRunIterator._sourceFunctionName === rightRunIterator.name) {
        textStringRunIterator = leftRunIterator(stringChars);
        textStringRunIterator._sourceFunctionName = leftRunIterator.name;
        runIteratorNext = runIteratorPrev;
      } else {
        textStringRunIterator = rightRunIterator(stringChars);
        textStringRunIterator._sourceFunctionName = rightRunIterator.name;
      }      
    } else {
      runIteratorPrev = runIteratorNext;
    }

    return runIteratorNext;
  }
}

function allStringsCharsIterator(stringChars) {
  const objStringCharsIterator = new stringCharsIterator(stringChars);
  
  this.next = () => {
    const stringForPrint = objStringCharsIterator.next();
    return stringForPrint;
  }
}


export default function RunningTextString({stringArray}) {
  const [text, setText] = useState("");      

  useEffect(() => {   
    var iterateIndex = 0, textContent;
    var iterator = new allStringsCharsIterator(stringArray[iterateIndex]);   

    setInterval(() => {      
      textContent = iterator.next().value;

      if ((textContent === '') || (textContent === undefined)) {
        if (iterateIndex < (stringArray.length - 1)) {
          iterateIndex++;
        } else {
          iterateIndex = 0;
        }
        
        iterator = new allStringsCharsIterator(stringArray[iterateIndex]);
      }                         
      
      setText(textContent);

    }, 500);
  }, []);   


  return (
    <span>
      {text}
      <span className="type-writer-cursor blink">|</span>
    </span>
  )
}
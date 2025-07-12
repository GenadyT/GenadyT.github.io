import { useRef } from "react";


function* rightRun(str) {
  var length = 1; 

  while (length <= str.length) {
    yield str.substr(0, length);
    length++;
  }
}

function* leftRun(str) {
  var index = str.length; 

  while (index >= 0) {
    yield str.substring(0, index);
    index--;
  }
}


function* stringCharsIterator(textString) {
  var iterator = rightRun(textString); 
  iterator._sourceFunctionName = rightRun.name;
  var result, yieldResult;
  var prevValue = '';

  while (true) {
    yieldResult = iterator.next();
    if(!yieldResult.done) {
      prevValue = yieldResult.value;
      result = yieldResult.value;
    } else {
      result = prevValue;
    }   

    if (yieldResult.done) {
      if(iterator._sourceFunctionName === 'rightRun') {
        iterator = leftRun(textString);
        iterator._sourceFunctionName = leftRun.name;
      } else {
        iterator = rightRun(textString);
        iterator._sourceFunctionName = rightRun.name;
      }
    }

    yield result;
  }
}


function* arrayElementsIterator(stringArray) {
  var index = 0; 

  while (true) {
    yield stringArray[index];

    if (index < (stringArray.length - 1)) {
      index++;
    } else {
      index = 0;
    }
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function* allStringsCharsIterator(stringArray) {
  const stringArrayIterator = arrayElementsIterator(stringArray);

  var stringForPrintChars = '';
  var stringForPrint, stringCharsIter;

  while (true) {
    if(stringForPrintChars.length === 0) {
      stringForPrint = stringArrayIterator.next().value;      
      stringCharsIter = stringCharsIterator(stringForPrint);
    }
    
    stringForPrintChars = stringCharsIter.next().value;    

    if(stringForPrintChars === stringForPrint) {
      for(let i=0; i<1000000000; i++) {
        let j = i*2;
      }
      yield stringForPrintChars;
    } else {
      yield stringForPrintChars;
    }
  }
}


export default function RunningTextString({stringArray}) {
  const spanRef = useRef();
  const iterator = allStringsCharsIterator(stringArray);

  setInterval(() => {
    let textContent = iterator.next().value;
    spanRef.current.textContent = textContent;    
  }, 200);

  return (
    <span ref={spanRef} />
  )
}
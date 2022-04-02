import React,{useState} from "react";
import {Homepage} from './components/Homepage'


function App() {
  const [value, setValue] = useState( [
  
    {id:1, name:'Charox', gin:'  20 000dr',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yFhtXvrhhV1bgv6IeZLM3CsfiZiKeD6pWNzAljYfEFLQgLlYAo7tPooGVRGzS03xaSg&usqp=CAU'},
    {id:2, name:'Botas', gin:'  25 000dr',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWBxUuvffj_JCcijQvT2kLmPwao6mnkQddA&usqp=CAU'},
    {id:3, name:'Ked', gin:'  22 000dr',image:'https://klike.net/uploads/posts/2020-03/1583139112_4.jpg'}
  ])



  return (
    <div className="App">
      
      <Homepage value = {value} setValue={setValue} />
    </div>
  );
}

export default App;

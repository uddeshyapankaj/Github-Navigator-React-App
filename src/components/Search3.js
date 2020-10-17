import React from "react";
class Search3 extends React.Component{

  handlekeydown= e => {

    if(e.keycode==13)
    {
      const value=e.target.value;
      alert(`The value of the input field is $(value)`);
    }

  }


  render()
  {
    return (
    <input onkeydown={this.handlekeydown}type="text" name="username" placeholder="enter username"/>
  );

  }
}

export default Search3;

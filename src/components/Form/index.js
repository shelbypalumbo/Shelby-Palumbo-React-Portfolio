import React from "react";
import "./style.css";

function Form() {
  return (
    <form
      action="mailto:shelbypalumbo94@gmail.com"
      method="post"
      enctype="text/plain"
    >
      Name:<br></br>
      <input type="text" className="name" name="name" />
      <br></br>
      E-mail:<br></br>
      <input type="text" className="mail" name="mail" />
      <br></br>
      Message:<br></br>
      <input className="messagebox" type="text" name="comment" />
      <br></br>
      <input className="btn" type="submit" value="Submit" />
      <input className="btn" type="reset" value="Reset" />
    </form>
  );
}
export default Form;

import React from 'react'

const Form = () => {
  return (
    <form>
    <div class="form-group">
      <label for="exampleInputname1">Name</label>
      <input type="name" class="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter name"/>  
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Email</label>
      <input type="email" class="form-control" id="exampleInputemail" placeholder="Enter email"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Phone Number</label>
      <input type="number" class="form-control" id="exampleInputnumber" placeholder="Enter Phone Number"/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Message</label>
      <input type="message" class="form-control" id="exampleInputmessage" placeholder="Enter Message"/>
    </div>
    <div class="form-group form-check">
     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
     <label class="form-check-label" for="exampleCheck1">send</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  )
}

export default Form
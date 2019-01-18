import React from "react";

export default Footer => {
  return (
    <div className="-footer">
      <form action="/form-action.php" target="_blank">
        <div>
          <label>Name</label> <input className="w3-input" type="text" required name="Name" />
        </div>
        <div>
          <label>Email</label> <input className="w3-input" type="text" required name="Email" />
        </div>
        <div>
          <label>Message</label> <input className="w3-input" required name="Message" />
        </div>
        <button type="submit" className="myBtn" style={{ width: "100%" }}>
          Send
        </button>
      </form>
    </div>
  );
};

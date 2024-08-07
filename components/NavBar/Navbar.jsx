import React from "react";

function Navbar(props) {
  return (
    <div className="flex justify-between py-2 px-10">
      <div>
        <span className="font-semibold text-xl">
          {<span className="text-white">{"${"}</span>}
          {<span className="text-white">snippet-generator</span>}
          {<span className="text-white">{"}"}</span>}
        </span>
      </div>
      <div className="text-white">
        <a href="https://github.com/Anubhav-Ghosh1" target="_blank">Made By <u>Aubhav Ghosh</u></a>
      </div>
    </div>
  );
}

export default Navbar;

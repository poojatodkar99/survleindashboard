import React from "react";
import "../style-2/settingsamit.css";

function Settingsamit() {
  return (
    <div className="settingsamitcont">
      <div className="settingheading">
        <h2>Amit Karthikaryan</h2>
      </div>
      <div className="subtitle">
        <button>Director</button>
        <button>Senior Aml Agent</button>
      </div>
      <div className="tabledata">
        <table cellSpacing={0}>
          <tr>
            <td>
              <div>Email</div>
              <div>khalatedipa@gmail.com</div>
            </td>
            <td>
            <div>Contact</div>
              <div>(+91)9056431122</div> 
            </td>
          </tr>
          <tr>
            <td>
              <div>ID</div>
              <div>SS12324354</div>
            </td>
            <td>
            <div>SS Number</div>
              <div>294-30-9281</div> 
            </td>
          </tr>
          <tr>
            <td>
              <div>Session ID</div>
              <div>01234567</div>
            </td>
            <td>
            <div>Last Login</div>
              <div>09/08/22</div> 
              <div>13:05</div> 
              <div>karnataka,India</div> 

            </td>
          </tr>
          <tr>
            <td>
              <div><button>Contact Administrator</button></div>
              <div><button style={{background:'red',color:'white'}}>Sign out</button></div>
            </td>
            <td>
            <div></div>
              <div></div> 
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Settingsamit;

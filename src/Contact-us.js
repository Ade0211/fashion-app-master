import React, { useState } from "react";
import './Contact-us.css'

export const ContactUs = () => {
  const [checked, setChecked] = useState(false);
  const [address, setAddress] = useState(false);

  return (
    <><div id="items-container">
      <form class="my-form">
        <div class="container">
          <h1>Get in touch!</h1>
          <ul>
            <li>
              {/* <select>
                <option selected disabled>--Please choose an option--</option>
                <option>Request Quote</option>
                <option>Send Resume</option>
                <option>Other</option>
              </select> */}
            </li>
            <li>
              <div className="grid grid-2">
                <label>Full name</label>
                <label>Email Address </label>
              </div>
              <div class="grid grid-2">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="email" required />
              </div>
            </li>
            <li>
              <label> Phone number</label>
              <div class="grid">
                <input type="tel" placeholder="Phone" required />
                {/* <input type="tel" placeholder="Phone" /> */}
              </div>
            </li>
            <label>
              <input type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
              {
                checked ? (
                  <input className="inputRequest formContentElement" name="Phone  number" type="tel" placeholder="Phone number" />
                ) : (<div></div>)
              }
              <h1 class="front">Add phone Number</h1>
            </label>

            { /* Inline conditional if checked state is `true` will show the div, otherwise, it won't */}


            {/* <li>
            <label> Add new number</label>
              <div class="grid grid-4">
                <input type="tel" placeholder="phone" required />
                <input type="tel" placeholder="Phone" />
                <input type="tel" placeholder="Phone" />
                <input type="tel" placeholder="Phone" />
              </div>
            </li> */}

            <li>
              <textarea placeholder="Message"></textarea>
            </li>
            <li>
              <input type="checkbox" id="terms" />
              <label for="terms">I have read and agreed with <a href="">the terms and conditions.</a></label>
            </li>
            <li>
              <div>
                <label> <h4>Add Address</h4>
                  <input type="checkbox" onChange={() => setAddress(!address)} address={address} />
                  {
                    address ? (
                      <><li>
                        <div className="grid grid-2">
                          <label>Address 1</label>
                          <label>Address 2 (Optional)</label>
                        </div>
                        <div class="grid grid-2">
                          <input type="text" placeholder="Name" />
                          <input type="email" placeholder="email" />
                        </div>

                      </li><li>
                      <div className= "grid grid-4">
                        <label>City/Town</label>
                        <label>State/County</label>
                        <label>Postcode</label>
                        <label>Country</label>
                        </div>
                          <div class="grid grid-4">
                            <input type="text" placeholder="City/Town" />
                            <input type="text" placeholder="State/County" />
                            <input type="Postcode" placeholder="Postcode" />
                            <input type="text" placeholder="Country" />
                          </div>
                        </li></>
                    ) : (<div></div>)
                  }
                </label>
              </div>
              <div class="grid">
                <div class="required-msg">REQUIRED FIELDS</div>
                <button class="btn-grid" type="submit">
                  <span class="back">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="" />
                  </span>
                  <span class="front">SUBMIT</span>
                </button>
                {/* <button class="btn-grid" type="reset">
                  <span class="back">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt="" />
                  </span>
                  <span class="front">RESET</span>
                </button> */}
              </div>
            </li>
          </ul>
        </div>
      </form>
      <div>
        <img src="https://www.seekpng.com/png/detail/35-351553_welcome-nucleic-acid-cartoon.png" />
      </div>
    </div><footer>
        <div class="container">
          <small>Made with <span>❤</span> by <a href="http://georgemartsoukos.com/" target="_blank">Reem</a>
          </small>
        </div>
      </footer></>

  );
};


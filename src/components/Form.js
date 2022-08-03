import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <>
      <div {...props} className="form">
        <div className="form_body">
          <div className="form_body_lefthand">
            <div className="left_hand_title">
              <div className="form_whiteborder">
                <img src="./white_border.png" alt="white border fancy" />
              </div>
              <div className="form_title_text">Ihr Ansprechpartner</div>
            </div>
            <div className="formlefthand_card">
              <div className="formcard_pic">
                <img src="./till.png" alt="till sappa" />
              </div>
              <div className="formcard_title">
                <div className="formcard_name_title">
                  <div className="formcard_name"> Till Sappa</div>
                  <div className="formcard_position"> Head of Marketting</div>
                </div>
                <div className="formcard_email"> till.sappa@getcoding.de</div>
                <div className="formacard_phonenumber">0421 245323</div>
              </div>
            </div>
            <div className="form_quotes">
              <div className="formquote1">
                <img src="./closequote.png" alt="close quote" />{" "}
              </div>
              <div className="formquote2">
                <img src="./openquote.png" alt="quote open" />
              </div>
            </div>
          </div>
          <div className="form_body_righthand">
            <div className="form_right_buttons">
              <div className="right_button1">
                <button className="btn1">Anfrage</button>
              </div>
              <div className="right_button2">
                <button className="btn2">Rückruf </button>
              </div>
            </div>

            <div className="main_form">
              <form>
                <div className="input_line">
                  <input type="text" name="email" placeholder="E-mail*" />
                </div>
                <div className="input_line">
                  <input type="text" name="name" placeholder="Name*" />
                </div>
                <div className="input_line">
                  <input type="text" name="Firma" placeholder="Firma*" />
                </div>
                <div className="input_line">
                  <input
                    type="number"
                    name="number"
                    placeholder="Telefonnummer"
                  />
                </div>
                <div className="input_line">
                  <input type="text" name="area" placeholder="Themenbereich*" />
                </div>
                <div className="input_line_textarea">
                  <textarea
                    name="presentation"
                    placeholder="Projektvorstellung*"
                  />
                </div>
              </form>
              <div className="form_button">
                <button className="form_btn">Absenden</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;

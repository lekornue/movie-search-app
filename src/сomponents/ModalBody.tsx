import React from "react";
import { inputBlur } from "../services/inputBlur";
import { inputFocus } from "../services/inputFocus";

const ModalBody: React.FC = () => {

    return (
        <form className="form" onBlur={inputBlur} onFocus={inputFocus}>
            <div>
                <p>name</p>
                <input type="text" id="name" />
            </div>
            <div>
                <p>date of birth</p>
                <input type="text" id="date of birth" />
            </div>
            <div >
                <p>e-mail</p>
                <input type="text" id="e-mail" />
            </div>
            <div>
                <p>password</p>
                <input type="text" id="password" />
            </div>
            <div id="error" className="error" hidden>Пожалуйста, заполните поля правильно</div>
        </form>
    )
};

export default ModalBody;
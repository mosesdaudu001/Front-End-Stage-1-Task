import React from "react";
import icon from "../Photos/Icon.png"
import slack from "../Photos/slack.png"

export default function Links() {
    return (
        <div className="main_part">
            <button>
            <a href="https://training.zuri.team/" id="btn__zuri" >Zuri Team</a>
            </button>
            <button>
            <a href="http://books.zuri.team" id="books" >Zuri Books</a>
            </button>
            <button>
            <a href="https://books.zuri.team" id="book__python" >Python Books</a>
            </button>
            <button>
            <a href="https://background.zuri.team" id="pitch" >Background check for coders</a>
            </button>
            <button>
            <a href="https://books.zuri.team/design-rules" id="book__design" >Design Books</a>
            </button>
            <div className="icon-photo">
            <img id='icon__img' src={icon} alt='icon_photo'/>
            <img id='slack__img' src={slack} alt='slack_photo'/>
            </div>
        </div>
    )
}
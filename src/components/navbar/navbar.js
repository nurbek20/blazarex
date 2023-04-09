import React from "react";
import s from "./navbar.module.css";
import blazerx from "../../images/BLAZAREX-1 1.png";
import russian from "../../images/russian.png";
import avatar from "../../images/Vector.png";
import up from "../../images/Vector1.png";
import telegram from "../../images/telegram.png"

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className="container">
        <div>
          <ul className={s.menu}>
            <li className={s.img}>
              <img src={blazerx} alt="" />
            </li>
            <li>Биржа</li>
            <li>Активы</li>
            <li>Р2Р</li>
            <li>Представительства</li>
            <li>Новости</li>
            <li className={s.telegram}><img src={telegram} alt="" /> Поддержка</li>
            <li className={s.russian}>
              <img src={up} alt="" />
              <img src={russian} alt="" />
              <span>Ru</span>
            </li>
            <li className={s.avatar}>
              <img src={avatar} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

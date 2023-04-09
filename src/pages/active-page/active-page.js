import React from "react";
import s from "./active-page.module.css";
import List from "../../components/list";
import { leftNav } from "../../utils/constants";
import up from "../../images/Vector1.png";
import Valuta from "../../components/valuta/valuta";

const ActivePage = () => {
  return (
    <div className={s.background}>
      <div className="container">
        <h2 className={s.title}>Личный кабинет</h2>
        <div className={s.page_content}>
          <div className={s.left_content}>
            <div className={s.leftNavbar}>
              <List
                items={leftNav && leftNav}
                renderItem={(item) => (
                  <p className={s.text}>
                    {item.text} {item.id === 4 ? <img src={up} alt="" /> : null}{" "}
                  </p>
                )}
              />
            </div>
          </div>
          <div className={s.content}>
            <h2>Основной аккаунт</h2>
            <div className={s.balans}>
              <p>Баланс: 27700.79 TRY</p>
              <p>28700.79 USDT</p>
            </div>
            <div>
              <Valuta />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePage;

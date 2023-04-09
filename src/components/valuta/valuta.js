import React from "react";
import s from "./valuta.module.css";
import { activ, active_addres } from "../../utils/constants";
import List from "../list";
import copy from "../../images/copy.png";
import qrcode from "../../images/qrcode.png";
import ExampleValute from "../exzample-valute";

const Valuta = () => {
  return (
    <div className={s.content}>
      <div className={s.text}>
        <p>Криптовалюта</p>
        <p>Всего</p>
        <p>Доступно</p>
        <p>В ордере</p>
        <p>Действие</p>
      </div>
      <List
        items={activ && activ}
        renderItem={(elem) => <ExampleValute key={elem.id} {...elem} />}
      />
      <div className={s.cash_content}>
        <div>
          <h2 className={s.title}>Пополнение в USDT</h2>
          <div>
            <p className={s.set}>Выберите сеть</p>
            <div className={s.set_btn}>
              <button>ERC20</button>
              <button>BEP20</button>
              <button>TRON</button>
            </div>
            <ol className={s.content_info}>
              <li>Пожалуйста сопируйте адрес в Ваш кошелек</li>
              <li>Введите сумму, которую Вы хотите зачислить</li>
              <li>Подтвердите зачисление</li>
            </ol>
            <p className={s.usdt_text}>Минимальная сумма депозита 1 USDT.</p>
            <p className={s.usdt_text}>Это адрес депозита в формате USDT. </p>
            <div>
              <p className={s.adres}>Адрес</p>
              <div class={s.input_wrapper}>
                <input
                  type="text"
                  placeholder="163qwe56rty78uio89asdf123gh56hj78"
                />
                <button type="submit">
                  <img src={copy} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={s.qrcode}>
          <img src={qrcode} alt="" />
        </div>
      </div>
      <div className={s.last_content}>
        <div className={s.last_content_btn}>
          <button>Получить новый адрес</button>
        </div>
        <List
          items={active_addres && active_addres}
          renderItem={(elem) =>
            <ExampleValute
              key={elem.id}
              {...elem}

            />
          }
        />
      </div>
    </div>
  );
};

export default Valuta;

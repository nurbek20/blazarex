import React from 'react'
import s from "./example-valute.module.css"

const ExampleValute = (props) => {
  const { up, down, img, title, text1, number1, number2, number3, text2, text3 } = props
  return (
    <div  className={s.item}>
      <div className={s.itemImg}>
        <div className={s.upDown}>
          <img src={up} alt="up" />
          <img src={down} alt="down" />
        </div>
        <img src={img} alt="tether" />
        <div className={s.valuta_text}>
          <p>{title}</p>
          <span>{text1}</span>
        </div>
      </div>
      <p>{number1}</p>
      <p>{number2}</p>
      <p>{number3}</p>
      <div className={s.item_text}>
        <p>{text2}</p>
        <p>{text3}</p>
      </div>
    </div>
  )
}

export default ExampleValute
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import styles from '../styles/Guri.module.scss';
export default function ToPlan({ updateStep, balance, image }) {
  const stringOptions = {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    currency: 'MXN',
    style: 'currency',
    currencyDisplay: 'symbol',
  };
  const [data] = useState({
    var1: 0,
    var2: 0,
    var3: 0,
  });
  return (
    <div className={styles.guri}>
      <div className={styles.toPlan}>
        <p className={styles.toPlan__title}>
          ¡ El primer paso para lograr la vida de tus sueños es planear !
        </p>
        <div className={styles.toPlan__form}>
          <label htmlFor="">Tu capacidad de AHORRO:</label>
          <p>{`${balance.toLocaleString('es-MX', stringOptions)}`}</p>
        </div>
        <div className={styles.toPlan__data}>
          <div className={styles.toPlan__input}>
            <label htmlFor="">Guardadito de la paz</label>
            <p>{`${data.var1.toLocaleString('es-MX', stringOptions)}`}</p>
          </div>
          <div className={styles.toPlan__input}>
            <label htmlFor="">Ahorro para corto plazo</label>
            <p>{`${data.var2.toLocaleString('es-MX', stringOptions)}`}</p>
          </div>
          <div className={styles.toPlan__input}>
            <label htmlFor="">Ahorro para tu futuro</label>
            <p>{`${data.var3.toLocaleString('es-MX', stringOptions)}`}</p>
          </div>
        </div>
        <div className={styles.toPlan__control}>
          <button
            type="button"
            className={styles.toPlan__control_step}
            onClick={() => updateStep(4)}
          >
            ¡ CONOCE TU PLAN IDEAL !
          </button>
        </div>
        <div className={styles.toPlan__data_img}>
          <img src={image === 'image1' ? image1 : image === 'image2' ? image2 : image3} alt="Estilo de vida" />
          <p>Tu sueño esta a pocos pasos de cumplirse</p>
        </div>
      </div>
    </div >
  );
}
ToPlan.propTypes = {
  updateStep: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

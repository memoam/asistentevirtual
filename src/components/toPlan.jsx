import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Guri.module.scss';
export default function ToPlan({ updateStep }) {
  return (
    <div className={styles.guri}>
      <div className={styles.toPlan}>
        <p className={styles.toPlan__title}>
          ¡ El primer paso para lograr la vida de tus sueños es planear !
        </p>
        <div className={styles.toPlan__form}>
          <label htmlFor="">Tu capacidad de AHORRO:</label>
          <input type="number" placeholder="$" />
        </div>
        <div className={styles.toPlan__data}>
          <div className={styles.toPlan__input}>
            <label htmlFor="">Tu capacidad de AHORRO:</label>
            <input type="number" placeholder="$" />
          </div>
          <div className={styles.toPlan__input}>
            <label htmlFor="">Tu capacidad de AHORRO:</label>
            <input type="number" placeholder="$" />
          </div>
          <div className={styles.toPlan__input}>
            <label htmlFor="">Tu capacidad de AHORRO:</label>
            <input type="number" placeholder="$" />
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
          <div />
          <p>Tu sueño esta a pocos pasos de cumplirse</p>
        </div>
      </div>
    </div >
  );
}
ToPlan.propTypes = {
  updateStep: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Guri.module.scss';
export default function LivingYourFuture({ updateStep }) {

  return (
    <div className={styles.guri}>
      <div className={styles.livingYourFuture}>
        <p className={styles.livingYourFuture__title}>
          ¿Como te imaginas vivendo tu futuro?
        </p>
        <div className={styles.livingYourFuture__data}>
          <div className={styles.livingYourFuture__data_img}>
            <div />
          </div>
          <div className={styles.livingYourFuture__data_img}>
            <div />
          </div>
          <div className={styles.livingYourFuture__data_img}>
            <div />
          </div>
        </div>
        <p className={styles.livingYourFuture__title}>
          LA VIDA DE TUS SUEÑOS TE ESPERA
        </p>
        <div className={styles.livingYourFuture__control}>
          <button
            type="button"
            className={styles.livingYourFuture__control_step}
            onClick={() => updateStep(2)}
          >
            CONTINUAR
          </button>
        </div>

      </div>
    </div>
  );
}
LivingYourFuture.propTypes = {
  updateStep: PropTypes.func.isRequired,
};

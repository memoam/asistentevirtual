import React from 'react';
import styles from '../styles/Guri.module.scss';
export default function LivingYourFuture() {

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
          <button type="button" className={styles.livingYourFuture__control_step}>
            CONTINUAR
          </button>
        </div>

      </div>
    </div>
  );
}
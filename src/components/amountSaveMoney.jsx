import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Guri.module.scss';

export default function AmountSaveMoney({ updateStep }) {
  const [indicator] = useState(8400);
  return (
    <div className={styles.guri}>
      <div className={styles.amountSaveMoney}>
        <div className={styles.amountSaveMoney__title}>
          <p className={styles.amountSaveMoney__title_title}>¿Cuánto quieres ahorrar para tu futuro?</p>
          <p className={styles.amountSaveMoney__title_subtitle}>Ahorro sugerido mensual para tu futuro:</p>
          <div className={styles.amountSaveMoney__title_grt}>
            <div className={styles.amountSaveMoney__title_indicator} style={{ left: `${((indicator / 30000) * 100) - 2.5}%` }} >
              <p>{`${indicator}`}</p>
              <div />
            </div>
            <div className={styles.amountSaveMoney__title_graph}>
              <div className={styles.amountSaveMoney__title_percentage} style={{ width: `${(indicator / 30000) * 100}%` }} />
            </div>
          </div>
        </div>
        <div className={styles.amountSaveMoney__data}>
          <div className={styles.amountSaveMoney__data_header}>
            <p>¡ AHORRA DURANTE 5 AÑOS Y DEJA QUE TU DINERO TRABAJE POR TI !</p>
            <p>Plan: Ahorra durante 5 años</p>
            <label htmlFor="">Tu aportación sera de:</label>
            <input type="number" placeholder="$" />
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p>28 años</p>
            <div>
              <label htmlFor="">Esto recibiras a los 10 AÑOS:</label>
              <input type="number" placeholder="$" />
            </div>
            <div>
              <label htmlFor="">Tu seguro de vida es de:</label>
              <input type="number" placeholder="$" />
            </div>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p>43 años</p>
            <div>
              <label htmlFor="">Esto recibiras a los 15 AÑOS:</label>
              <input type="number" placeholder="$" />
            </div>
            <div>
              <label htmlFor="">A los 15 AÑOS:</label>
              <input type="number" placeholder="$" />
            </div>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p>53 años</p>
            <div>
              <label htmlFor="">Esto recibiras a los 20 AÑOS:</label>
              <input type="number" placeholder="$" />
            </div>
            <div>
              <label htmlFor="">A los 20 AÑOS:</label>
              <input type="number" placeholder="$" />
            </div>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p>63 años</p>
            <div>
              <label htmlFor="">Esto recibiras a los 30 AÑOS:</label>
              <input type="number" placeholder="$" />
            </div>
            <div>
              <label htmlFor="">A los 30 AÑOS:</label>
              <input type="number" placeholder="$" />
            </div>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p>68 años</p>
            <div>
              <label htmlFor="">Esto recibiras a los 35 AÑOS:</label>
              <input type="number" placeholder="$" />
            </div>
            <div>
              <label htmlFor="">A los 30 AÑOS:</label>
              <input type="number" placeholder="$" />
            </div>
          </div>
        </div>
        <div className={styles.amountSaveMoney__data_note}>
          <p>El seguro de vida es un beneficio adicional y mientras tu dinero este en el plan contaras con el.</p>
          <p>Tu dinero estará disponible para ser retirado a partir del año 10.</p>
        </div>
        <div className={styles.amountSaveMoney__control}>
          <button
            type="button"
            className={styles.amountSaveMoney__control_step}
            onClick={() => updateStep(0)}
          >
            ¡ CONTRATAR MI PLAN !
          </button>
        </div>
      </div>
    </div >
  );
}
AmountSaveMoney.propTypes = {
  updateStep: PropTypes.func.isRequired,
};

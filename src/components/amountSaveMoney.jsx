import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Guri.module.scss';

export default function AmountSaveMoney({ updateStep }) {
  const [indicator] = useState(8400);
  const [data] = useState({
    contribution: 0,
    lifeInsurance: 0,
    at15: 0,
    at20: 0,
    at30: 0,
    at35: 0,
    receiveAt10: 0,
    receiveAt15: 0,
    receiveAt20: 0,
    receiveAt30: 0,
    receiveAt35: 0,
  });
  const stringOptions = {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    currency: 'MXN',
    style: 'currency',
    currencyDisplay: 'symbol',
  };
  return (
    <div className={styles.guri}>
      <div className={styles.amountSaveMoney}>
        <div className={styles.amountSaveMoney__title}>
          <p className={styles.amountSaveMoney__title_title}>¿Cuánto quieres ahorrar para tu futuro?</p>
          <p className={styles.amountSaveMoney__title_subtitle}>Ahorro sugerido mensual para tu futuro:</p>
          <div className={styles.amountSaveMoney__title_grt}>
            <div className={styles.amountSaveMoney__title_indicator} style={{ left: `${((indicator / 30000) * 100)}%` }} >
              <p>{`${indicator.toLocaleString('es-MX', stringOptions)}`}</p>
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
            <p className={styles.amountSaveMoney__data_info}>
              {`${data.contribution.toLocaleString('es-MX', stringOptions)}`}
            </p>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p className={styles.amountSaveMoney__form_title}>28 años</p>
            <div className={styles.amountSaveMoney__form_info}>
              <label htmlFor="">Esto recibiras a los 10 AÑOS:</label>
              <p>{`${data.receiveAt10.toLocaleString('es-MX', stringOptions)}`}</p>
            </div>
            <div className={styles.amountSaveMoney__form_info}>
              <label htmlFor="">Tu seguro de vida es de:</label>
              <p>{`${data.lifeInsurance.toLocaleString('es-MX', stringOptions)}`}</p>
            </div>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p className={styles.amountSaveMoney__form_title}>43 años</p>
            <div className={styles.amountSaveMoney__form_info}>
              <label htmlFor="">Esto recibiras a los 15 AÑOS:</label>
              <p>{`${data.receiveAt15.toLocaleString('es-MX', stringOptions)}`}</p>
            </div>
            <div className={styles.amountSaveMoney__form_info}>
              <label htmlFor="">A los 15 AÑOS:</label>
              <p>{`${data.at15.toLocaleString('es-MX', stringOptions)}`}</p>
            </div>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p className={styles.amountSaveMoney__form_title}>53 años</p>
            <div className={styles.amountSaveMoney__form_info}>
              <label htmlFor="">Esto recibiras a los 20 AÑOS:</label>
              <p>{`${data.receiveAt20.toLocaleString('es-MX', stringOptions)}`}</p>
            </div>
            <div className={styles.amountSaveMoney__form_info}>
              <label htmlFor="">A los 20 AÑOS:</label>
              <p>{`${data.at20.toLocaleString('es-MX', stringOptions)}`}</p>
            </div>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p className={styles.amountSaveMoney__form_title}>63 años</p>
            <div className={styles.amountSaveMoney__form_info}>
              <label htmlFor="">Esto recibiras a los 30 AÑOS:</label>
              <p>{`${data.receiveAt30.toLocaleString('es-MX', stringOptions)}`}</p>
            </div>
            <div className={styles.amountSaveMoney__form_info}>
              <label htmlFor="">A los 30 AÑOS:</label>
              <p>{`${data.at30.toLocaleString('es-MX', stringOptions)}`}</p>
            </div>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p className={styles.amountSaveMoney__form_title}>68 años</p>
            <div className={styles.amountSaveMoney__form_info}>
              <label htmlFor="">Esto recibiras a los 35 AÑOS:</label>
              <p>{`${data.receiveAt35.toLocaleString('es-MX', stringOptions)}`}</p>
            </div>
            <div className={styles.amountSaveMoney__form_info}>
              <label htmlFor="">A los 35 AÑOS:</label>
              <p>{`${data.at30.toLocaleString('es-MX', stringOptions)}`}</p>
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

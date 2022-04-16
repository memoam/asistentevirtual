import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Guri.module.scss';

export default function Budget({ updateStep }) {
  const [indicator] = useState(30);
  return (
    <div className={styles.guri}>
      <div className={styles.budget}>
        <div className={styles.budget__title}>
          <p>Hagamos tu presupuesto juntes para determinar la salud financiera que tienes y con esto</p>
          <p>elaborar una estrategía que te permita disfrutar del futuro.</p>
          <div className={styles.budget__title_grt}>
            <div className={styles.budget__title_indicator} style={{ right: `${indicator - 2}%` }} >
              <p>{`${indicator}%`}</p>
              <div />
            </div>
            <div className={styles.budget__title_graph} />
          </div>
        </div>
        <div className={styles.budget__data}>
          <div className={styles.budget__form}>
            <p className={styles.budget__form_title}>Ingresos:</p>
            <div className={styles.budget__form_inputTitle}>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Ingreso fijo:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Ingreso variable:</p>
              <input type="number" placeholder="$" />
            </div>

          </div>
          <div className={styles.budget__form}>
            <p className={styles.budget__form_title}>Gastos fijos:</p>
            <div className={styles.budget__form_inputTitleM}>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Renta:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Gastos Casa:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Supermercado:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Celular</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Doctor/Terapia</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Educación:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Comidas en trabajo:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Gimnasio:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Hijos:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Mascota:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Créditos o prestamos:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Seguros:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Otros:</p>
              <input type="number" placeholder="$" />
            </div>
          </div>
          <div className={styles.budget__form}>
            <p className={styles.budget__form_title}>Gastos variables o Estilo de vida:</p>
            <div className={styles.budget__form_inputTitleM}>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Compras:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Fines de semana:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Viajes:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Regalos:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Servicios a domicilio:</p>
              <input type="number" placeholder="$" />
            </div>
            <div className={styles.budget__form_input}>
              <p>Otros:</p>
              <input type="number" placeholder="$" />
            </div>

          </div>
          <div className={styles.budget__form}>
            <p className={styles.budget__form_title}>Tu capacidad de AHORRO:</p>
            <div className={styles.budget__form_inputTitleL}>
              <input type="number" placeholder="$" />
            </div>
          </div>
        </div>
        <div className={styles.budget__control}>
          <button
            type="button"
            className={styles.budget__control_step}
            onClick={() => updateStep(3)}
          >
            CONTINUAR
          </button>
        </div>
      </div>
    </div >
  );
}
Budget.propTypes = {
  updateStep: PropTypes.func.isRequired,
};

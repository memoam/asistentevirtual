import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Guri.module.scss';
export default function TakeControl({ updateStep }) {

  return (
    <div className={styles.guri}>
      <div className={styles.takeControl}>
        <div className={styles.takeControl__title}>
          <p>¡bienvenides!</p>
          <p>toma el control de tu salud financiera</p>
        </div>
        <div className={styles.takeControl__data}>
          <div className={styles.takeControl__form}>
            <label htmlFor="name">Me llamo...</label>
            <input type="text" placeholder="Nombre" />
            <label htmlFor="phone">Telefono</label>
            <input type="tel" placeholder="10 Digitos" />
            <label htmlFor="gender" className={styles.takeControl__form_noteGender}>
              Sexo al nacer
            </label>
            <p className={styles.takeControl__form_note}>
              Sabemos que es 2021 pero tenemos que preguntar
            </p>
            <div className={styles.takeControl__form_gender}>
              <button className={styles.takeControl__form_active}>Mujer</button>
              <button className={styles.takeControl__form_desactive}>Hombre</button>
            </div>
          </div>
          <div className={styles.takeControl__form}>
            <label htmlFor="email">Correo</label>
            <input type="tel" placeholder="Mail" />
            <label htmlFor="borndDate">Naci el...</label>
            <input type="date" />
            <label htmlFor="fumas">¿Fumas?</label>
            <select name="fumas" id="fumas" placeholder="Selecciona una opción…">
              <option value="yes">Si</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className={styles.takeControl__control}>
          <button
            type="button"
            className={styles.takeControl__control_step}
            onClick={() => updateStep(1)}
          >
            CONTINUAR
          </button>
        </div>
      </div>
    </div>
  );
}
TakeControl.propTypes = {
  updateStep: PropTypes.func.isRequired,
};

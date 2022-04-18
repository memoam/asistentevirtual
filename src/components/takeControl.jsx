import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Guri.module.scss';
export default function TakeControl({ updateStep }) {
  const [gender, setGender] = useState('woman');
  const [user, setUser] = useState({
    name: '',
    phone: '',
    gender: '',
    email: '',
    dateBornd: '',
    toSmoke: '',
  });
  const changeInput = (event, field) => {
    const prevState = user;
    prevState[field] = event.target.value;
    setUser(prevState);
  };
  const validateData = (e) => {
    e.preventDefault();
    const prevState = user;
    prevState.gender = gender;
    setUser(prevState);
    updateStep(1);
  }
  return (
    <div className={styles.guri}>
      <form className={styles.takeControl} onSubmit={validateData}>
        <div className={styles.takeControl__title}>
          <p>¡bienvenides!</p>
          <p>toma el control de tu salud financiera</p>
        </div>
        <div className={styles.takeControl__form}>
          <div className={styles.takeControl__form_data}>
            <label htmlFor="name">Me llamo...</label>
            <input type="text" placeholder="Nombre" name="name" id="name" onChange={(ev) => changeInput(ev, 'name')} defaultValue={user.name} />
          </div>
          <div className={styles.takeControl__form_data}>
            <label htmlFor="email">Correo</label>
            <input type="email" placeholder="Mail" name="email" id="email" onChange={(ev) => changeInput(ev, 'email')} defaultValue={user.email} />
          </div>
        </div>
        <div className={styles.takeControl__form}>
          <div className={styles.takeControl__form_data}>
            <label htmlFor="phone">Telefono</label>
            <input type="tel" placeholder="10 Digitos" name="phone" id="phone" onChange={(ev) => changeInput(ev, 'phone')} defaultValue={user.phone} />
          </div>
          <div className={styles.takeControl__form_data}>
            <label htmlFor="borndDate">Naci el...</label>
            <input type="date" name="dateBornd" id="dateBornd" onChange={(ev) => changeInput(ev, 'dateBornd')} defaultValue={user.dateBornd} />
          </div>
        </div>
        <div className={styles.takeControl__form}>
          <div className={styles.takeControl__form_data}>
            <label htmlFor="gender" className={styles.takeControl__form_noteGender}>
              Sexo al nacer
            </label>
            <p className={styles.takeControl__form_note}>
              Sabemos que es 2021 pero tenemos que preguntar
            </p>
            <div className={styles.takeControl__form_gender}>
              <button type="button" className={gender === 'woman' ? styles.takeControl__form_active : styles.takeControl__form_desactive} onClick={() => setGender('woman')}>Mujer</button>
              <button type="button" className={gender === 'man' ? styles.takeControl__form_active : styles.takeControl__form_desactive} onClick={() => setGender('man')}> Hombre</button>
            </div>
          </div>
          <div className={styles.takeControl__form_data}>
            <label htmlFor="toSmoke">¿Fumas?</label>
            <select name="toSmoke" id="toSmoke" placeholder="Selecciona una opción…" onChange={(ev) => changeInput(ev, 'toSmoke')} defaultValue={user.toSmoke}>
              <option value="yes">Si</option>
              <option value="no">No</option>
            </select>
          </div>

        </div>
        <div className={styles.takeControl__control}>
          <button type="submit" className={styles.takeControl__control_step}>
            CONTINUAR
          </button>
        </div>
      </form>
    </div >
  );
}
TakeControl.propTypes = {
  updateStep: PropTypes.func.isRequired,
};

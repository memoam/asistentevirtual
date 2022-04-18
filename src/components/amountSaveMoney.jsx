import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Guri.module.scss';

export default function AmountSaveMoney({ updateStep }) {
  const [indicator] = useState(8400);
  const contributionRef = useRef();
  const lifeInsuranceRef = useRef();
  const at15Ref = useRef();
  const at20Ref = useRef();
  const at30Ref = useRef();
  const at35Ref = useRef();
  const receiveAt10Ref = useRef();
  const receiveAt15Ref = useRef();
  const receiveAt20Ref = useRef();
  const receiveAt30Ref = useRef();
  const receiveAt35Ref = useRef();
  const [amount, setAmount] = useState({ value: '', name: '' });
  const [data, setData] = useState({
    contribution: '',
    lifeInsurance: '',
    at15: '',
    at20: '',
    at30: '',
    at35: '',
    receiveAt10: '',
    receiveAt15: '',
    receiveAt20: '',
    receiveAt30: '',
    receiveAt35: '',
  });
  const stringOptions = {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    currency: 'MXN',
    style: 'currency',
    currencyDisplay: 'symbol',
  };
  function setCurrency({ value, name }) {
    const val = value === '' ? ''
      : typeof value === 'string' ? Number(value.replace(/[$,]/g, ''))
        : value;
    const auxVal = val.toLocaleString('es-MX', stringOptions);
    if (name === 'contribution') {
      contributionRef.current.value = auxVal;
    } else if (name === 'lifeInsurance') {
      lifeInsuranceRef.current.value = auxVal;
    } else if (name === 'at15') {
      at15Ref.current.value = auxVal;
    } else if (name === 'at20') {
      at20Ref.current.value = auxVal;
    } else if (name === 'at30') {
      at30Ref.current.value = auxVal;
    } else if (name === 'at35') {
      at35Ref.current.value = auxVal;
    } else if (name === 'receiveAt10') {
      receiveAt10Ref.current.value = auxVal;
    } else if (name === 'receiveAt15') {
      receiveAt15Ref.current.value = auxVal;
    } else if (name === 'receiveAt20') {
      receiveAt20Ref.current.value = auxVal;
    } else if (name === 'receiveAt30') {
      receiveAt30Ref.current.value = auxVal;
    } else if (name === 'receiveAt35') {
      receiveAt35Ref.current.value = auxVal;
    }
    setAmount({ value: '', name: '' });

  }
  function onBlurEvent() {
    setCurrency(amount);
  }
  const changeInput = (event, field) => {
    const prevState = data;
    let { value: inputValue } = event.target;
    inputValue = !(/^[0-9]*$/i).test(inputValue) ? inputValue.replace(/[^0-9]+\\.?[0-9]*/g, '') : inputValue;
    const val = inputValue === '' ? ''
      : typeof inputValue === 'string' ? Number(inputValue.replace(/[$,]/g, ''))
        : inputValue;
    prevState[field] = (val > 0 ? val : '');
    setAmount({ value: event.target.value, name: field });
    setData(prevState);
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
            <input type="text" placeholder="$" name="contribution" id="contribution" onChange={(ev) => changeInput(ev, 'contribution')} defaultValue={data.contribution} ref={contributionRef} onBlur={onBlurEvent} />
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p>28 años</p>
            <div>
              <label htmlFor="">Esto recibiras a los 10 AÑOS:</label>
              <input type="text" placeholder="$" name="receiveAt10" id="receiveAt10" onChange={(ev) => changeInput(ev, 'receiveAt10')} defaultValue={data.receiveAt10} ref={receiveAt10Ref} onBlur={onBlurEvent} />
            </div>
            <div>
              <label htmlFor="">Tu seguro de vida es de:</label>
              <input type="text" placeholder="$" name="lifeInsurance" id="lifeInsurance" onChange={(ev) => changeInput(ev, 'lifeInsurance')} defaultValue={data.lifeInsurance} ref={lifeInsuranceRef} onBlur={onBlurEvent} />
            </div>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p>43 años</p>
            <div>
              <label htmlFor="">Esto recibiras a los 15 AÑOS:</label>
              <input type="text" placeholder="$" name="receiveAt15" id="receiveAt15" onChange={(ev) => changeInput(ev, 'receiveAt15')} defaultValue={data.receiveAt15} ref={receiveAt15Ref} onBlur={onBlurEvent} />
            </div>
            <div>
              <label htmlFor="">A los 15 AÑOS:</label>
              <input type="text" placeholder="$" name="at15" id="at15" onChange={(ev) => changeInput(ev, 'at15')} defaultValue={data.at15} ref={at15Ref} onBlur={onBlurEvent} />
            </div>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p>53 años</p>
            <div>
              <label htmlFor="">Esto recibiras a los 20 AÑOS:</label>
              <input type="text" placeholder="$" name="receiveAt20" id="receiveAt20" onChange={(ev) => changeInput(ev, 'receiveAt20')} defaultValue={data.receiveAt20} ref={receiveAt20Ref} onBlur={onBlurEvent} />
            </div>
            <div>
              <label htmlFor="">A los 20 AÑOS:</label>
              <input type="text" placeholder="$" name="at20" id="at20" onChange={(ev) => changeInput(ev, 'at20')} defaultValue={data.at20} ref={at20Ref} onBlur={onBlurEvent} />
            </div>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p>63 años</p>
            <div>
              <label htmlFor="">Esto recibiras a los 30 AÑOS:</label>
              <input type="text" placeholder="$" name="receiveAt30" id="receiveAt30" onChange={(ev) => changeInput(ev, 'receiveAt30')} defaultValue={data.receiveAt30} ref={receiveAt30Ref} onBlur={onBlurEvent} />
            </div>
            <div>
              <label htmlFor="">A los 30 AÑOS:</label>
              <input type="text" placeholder="$" name="at30" id="at30" onChange={(ev) => changeInput(ev, 'at30')} defaultValue={data.at30} ref={at30Ref} onBlur={onBlurEvent} />
            </div>
          </div>
          <div className={styles.amountSaveMoney__form}>
            <p>68 años</p>
            <div>
              <label htmlFor="">Esto recibiras a los 35 AÑOS:</label>
              <input type="text" placeholder="$" name="receiveAt35" id="receiveAt35" onChange={(ev) => changeInput(ev, 'receiveAt35')} defaultValue={data.receiveAt35} ref={receiveAt35Ref} onBlur={onBlurEvent} />
            </div>
            <div>
              <label htmlFor="">A los 35 AÑOS:</label>
              <input type="text" placeholder="$" name="at35" id="at35" onChange={(ev) => changeInput(ev, 'at35')} defaultValue={data.at35} ref={at35Ref} onBlur={onBlurEvent} />
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

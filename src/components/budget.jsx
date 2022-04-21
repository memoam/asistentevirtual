import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Guri.module.scss';

export default function Budget({ updateStep, updateBalance }) {
  const [indicator] = useState(100);
  const [balanceIncome, setBalanceIncome] = useState(0)
  const [balanceConstBills, setBalanceConstBills] = useState(0)
  const [balanceVariableBills, setBalanceVariableBills] = useState(0)
  const [balance, setBalance] = useState(0);
  const constIncomeRef = useRef();
  const variableIncomeRef = useRef();
  const rentRef = useRef();
  const homeRef = useRef();
  const supermarketRef = useRef();
  const phoneRef = useRef();
  const doctorRef = useRef();
  const educationRef = useRef();
  const mealRef = useRef();
  const gymRef = useRef();
  const sonsRef = useRef();
  const petRef = useRef();
  const creditRef = useRef();
  const sureRef = useRef();
  const othersConstBillsRef = useRef();
  const shoppingRef = useRef();
  const weekendsRef = useRef();
  const travelsRef = useRef();
  const giftsRef = useRef();
  const domiciliaryServicesRef = useRef();
  const othersVariableBillsRef = useRef();
  const [amount, setAmount] = useState({ value: '', name: '' });
  const [income, setIncome] = useState({
    constIncome: 0,
    variableIncome: 0,
  })
  const [constBills, setConstBills] = useState({
    rent: 0,
    home: 0,
    supermarket: 0,
    phone: 0,
    doctor: 0,
    education: 0,
    meal: 0,
    gym: 0,
    sons: 0,
    pet: 0,
    credit: 0,
    sure: 0,
    othersConstBills: 0,
  });
  const [variableBills, setVariableBills] = useState({
    shopping: 0,
    weekends: 0,
    travels: 0,
    gifts: 0,
    domiciliaryServices: 0,
    othersVariableBills: 0,
  })
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
    if (name === 'constIncome') {
      constIncomeRef.current.value = auxVal;
    } else if (name === 'variableIncome') {
      variableIncomeRef.current.value = auxVal;
    } else if (name === 'rent') {
      rentRef.current.value = auxVal;
    } else if (name === 'home') {
      homeRef.current.value = auxVal;
    } else if (name === 'supermarket') {
      supermarketRef.current.value = auxVal;
    } else if (name === 'phone') {
      phoneRef.current.value = auxVal;
    } else if (name === 'doctor') {
      doctorRef.current.value = auxVal;
    } else if (name === 'education') {
      educationRef.current.value = auxVal;
    } else if (name === 'meal') {
      mealRef.current.value = auxVal;
    } else if (name === 'gym') {
      gymRef.current.value = auxVal;
    } else if (name === 'sons') {
      sonsRef.current.value = auxVal;
    } else if (name === 'pet') {
      petRef.current.value = auxVal;
    } else if (name === 'credit') {
      creditRef.current.value = auxVal;
    } else if (name === 'sure') {
      sureRef.current.value = auxVal;
    } else if (name === 'othersConstBills') {
      othersConstBillsRef.current.value = auxVal;
    } else if (name === 'shopping') {
      shoppingRef.current.value = auxVal;
    } else if (name === 'weekends') {
      weekendsRef.current.value = auxVal;
    } else if (name === 'travels') {
      travelsRef.current.value = auxVal;
    } else if (name === 'gifts') {
      giftsRef.current.value = auxVal;
    } else if (name === 'domiciliaryServices') {
      domiciliaryServicesRef.current.value = auxVal;
    } else if (name === 'othersVariableBills') {
      othersVariableBillsRef.current.value = auxVal;
    }
    setAmount({ value: '', name: '' });

  }
  function onBlurEvent() {
    setCurrency(amount);
  }
  const changeInputIncome = (event, field) => {
    const prevState = income;
    let { value: inputValue } = event.target;
    inputValue = !(/^[0-9]*$/i).test(inputValue) ? inputValue.replace(/[^0-9]+\\.?[0-9]*/g, '') : inputValue;
    const val = inputValue === '' ? ''
      : typeof inputValue === 'string' ? Number(inputValue.replace(/[$,]/g, ''))
        : inputValue;
    prevState[field] = (val !== '' ? val : 0);
    setAmount({ value: event.target.value, name: field });
    setIncome(prevState);
    const value = prevState.constIncome + prevState.variableIncome;
    setBalanceIncome(value);
    setBalance(value - balanceConstBills - balanceVariableBills);
  };
  const changeInputConstBills = (event, field) => {
    const prevState = constBills;
    let { value: inputValue } = event.target;
    inputValue = !(/^[0-9]*$/i).test(inputValue) ? inputValue.replace(/[^0-9]+\\.?[0-9]*/g, '') : inputValue;
    const val = inputValue === '' ? ''
      : typeof inputValue === 'string' ? Number(inputValue.replace(/[$,]/g, ''))
        : inputValue;
    prevState[field] = (val !== '' ? val : 0);
    setAmount({ value: event.target.value, name: field });
    setConstBills(prevState);
    const value =
      prevState.rent
      + prevState.home
      + prevState.supermarket
      + prevState.phone
      + prevState.doctor
      + prevState.education
      + prevState.meal
      + prevState.gym
      + prevState.sons
      + prevState.pet
      + prevState.credit
      + prevState.sure
      + prevState.othersConstBills;
    setBalanceConstBills(value);
    setBalance(balanceIncome - value - balanceVariableBills);
  };
  const changeInputVariableBills = (event, field) => {
    const prevState = variableBills;
    let { value: inputValue } = event.target;
    inputValue = !(/^[0-9]*$/i).test(inputValue) ? inputValue.replace(/[^0-9]+\\.?[0-9]*/g, '') : inputValue;
    const val = inputValue === '' ? ''
      : typeof inputValue === 'string' ? Number(inputValue.replace(/[$,]/g, ''))
        : inputValue;
    prevState[field] = (val !== '' ? val : 0);
    console.log(prevState);
    setAmount({ value: event.target.value, name: field });
    setVariableBills(prevState);
    const value =
      prevState.shopping
      + prevState.weekends
      + prevState.travels
      + prevState.gifts
      + prevState.domiciliaryServices
      + prevState.othersVariableBills;
    setBalanceVariableBills(value);
    setBalance(balanceIncome - balanceConstBills - value);
  };
  const validateData = (e) => {
    e.preventDefault();
    updateBalance(balance);
    updateStep(3);
  }
  return (
    <div className={styles.guri}>
      <form className={styles.budget} onSubmit={validateData}>
        <div className={styles.budget__title}>
          <p>Hagamos tu presupuesto juntes para determinar la salud financiera que tienes y con esto</p>
          <p>elaborar una estrategía que te permita disfrutar del futuro.</p>
          <div className={styles.budget__title_grt}>
            <div className={styles.budget__title_indicator} style={{ right: `${indicator}%` }} >
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
              <p>{balanceIncome !== 0 ? `${balanceIncome.toLocaleString('es-MX', stringOptions)}` : '$'}</p>
            </div>
            <div className={styles.budget__form_input}>
              <p>Ingreso fijo:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="constIncome" id="constIncome" onChange={(ev) => changeInputIncome(ev, 'constIncome')} ref={constIncomeRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Ingreso variable:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="variableIncome" id="variableIncome" onChange={(ev) => changeInputIncome(ev, 'variableIncome')} ref={variableIncomeRef} onBlur={onBlurEvent} />
            </div>
          </div>
          <div className={styles.budget__form}>
            <p className={styles.budget__form_title}>Gastos fijos:</p>
            <div className={styles.budget__form_inputTitleM}>
              <p>{balanceConstBills !== 0 ? `${balanceConstBills.toLocaleString('es-MX', stringOptions)}` : '$'}</p>
            </div>
            <div className={styles.budget__form_input}>
              <p>Renta:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="rent" id="rent" onChange={(ev) => changeInputConstBills(ev, 'rent')} ref={rentRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Gastos Casa:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="home" id="home" onChange={(ev) => changeInputConstBills(ev, 'home')} ref={homeRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Supermercado:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="supermarket" id="supermarket" onChange={(ev) => changeInputConstBills(ev, 'supermarket')} ref={supermarketRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Celular</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="phone" id="phone" onChange={(ev) => changeInputConstBills(ev, 'phone')} ref={phoneRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Doctor/Terapia</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="doctor" id="doctor" onChange={(ev) => changeInputConstBills(ev, 'doctor')} ref={doctorRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Educación:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="education" id="education" onChange={(ev) => changeInputConstBills(ev, 'education')} ref={educationRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Comidas en trabajo:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="meal" id="meal" onChange={(ev) => changeInputConstBills(ev, 'meal')} ref={mealRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Gimnasio:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="gym" id="gym" onChange={(ev) => changeInputConstBills(ev, 'gym')} ref={gymRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Hijos:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="sons" id="sons" onChange={(ev) => changeInputConstBills(ev, 'sons')} ref={sonsRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Mascota:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="pet" id="pet" onChange={(ev) => changeInputConstBills(ev, 'pet')} ref={petRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Créditos o prestamos:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="credit" id="credit" onChange={(ev) => changeInputConstBills(ev, 'credit')} ref={creditRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Seguros:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="sure" id="sure" onChange={(ev) => changeInputConstBills(ev, 'sure')} ref={sureRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Otros:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="othersConstBills" id="othersConstBills" onChange={(ev) => changeInputConstBills(ev, 'othersConstBills')} ref={othersConstBillsRef} onBlur={onBlurEvent} />
            </div>
          </div>
          <div className={styles.budget__form}>
            <p className={styles.budget__form_title}>Gastos variables o Estilo de vida:</p>
            <div className={styles.budget__form_inputTitleM}>
              <p>{balanceVariableBills !== 0 ? `${balanceVariableBills.toLocaleString('es-MX', stringOptions)}` : '$'}</p>
            </div>
            <div className={styles.budget__form_input}>
              <p>Compras:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="shopping" id="shopping" onChange={(ev) => changeInputVariableBills(ev, 'shopping')} ref={shoppingRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Fines de semana:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="weekends" id="weekends" onChange={(ev) => changeInputVariableBills(ev, 'weekends')} ref={weekendsRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Viajes:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="travels" id="travels" onChange={(ev) => changeInputVariableBills(ev, 'travels')} ref={travelsRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Regalos:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="gifts" id="gifts" onChange={(ev) => changeInputVariableBills(ev, 'gifts')} ref={giftsRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Servicios a domicilio:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="domiciliaryServices" id="domiciliaryServices" onChange={(ev) => changeInputVariableBills(ev, 'domiciliaryServices')} ref={domiciliaryServicesRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Otros:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="othersVariableBills" id="othersVariableBills" onChange={(ev) => changeInputVariableBills(ev, 'othersVariableBills')} ref={othersVariableBillsRef} onBlur={onBlurEvent} />
            </div>

          </div>
          <div className={styles.budget__form}>
            <p className={styles.budget__form_title}>Tu capacidad de AHORRO:</p>
            <div className={styles.budget__form_inputTitleL}>
              <p>{balance !== 0 ? `${balance.toLocaleString('es-MX', stringOptions)}` : '$'}</p>
            </div>
          </div>
        </div>
        <div className={styles.budget__control}>
          <button type="submit" className={styles.budget__control_step}>
            CONTINUAR
          </button>
        </div>
      </form>
    </div >
  );
}
Budget.propTypes = {
  updateStep: PropTypes.func.isRequired,
  updateBalance: PropTypes.func.isRequired,
};

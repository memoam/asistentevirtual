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
    constIncome: '',
    variableIncome: '',
  })
  const [constBills, setConstBills] = useState({
    rent: '',
    home: '',
    supermarket: '',
    phone: '',
    doctor: '',
    education: '',
    meal: '',
    gym: '',
    sons: '',
    pet: '',
    credit: '',
    sure: '',
    othersConstBills: '',
  });
  const [variableBills, setVariableBills] = useState({
    shopping: '',
    weekends: '',
    travels: '',
    gifts: '',
    domiciliaryServices: '',
    othersVariableBills: '',
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
    prevState[field] = (val > 0 ? val : '');
    setAmount({ value: event.target.value, name: field });
    setIncome(prevState);
    if (income.constIncome !== '' && income.variableIncome !== '')
      setBalanceIncome(parseFloat(income.constIncome) + parseFloat(income.variableIncome));
    else
      setBalanceIncome(0);
    if (balanceIncome !== 0 && balanceConstBills !== 0 && balanceVariableBills !== 0)
      setBalance(balanceIncome - balanceConstBills - balanceVariableBills);
    else setBalance(0);
  };
  const changeInputConstBills = (event, field) => {
    const prevState = constBills;
    let { value: inputValue } = event.target;
    inputValue = !(/^[0-9]*$/i).test(inputValue) ? inputValue.replace(/[^0-9]+\\.?[0-9]*/g, '') : inputValue;
    const val = inputValue === '' ? ''
      : typeof inputValue === 'string' ? Number(inputValue.replace(/[$,]/g, ''))
        : inputValue;
    prevState[field] = (val > 0 ? val : '');
    setAmount({ value: event.target.value, name: field });
    setConstBills(prevState);
    if (
      constBills.rent !== ''
      && constBills.home !== ''
      && constBills.supermarket !== ''
      && constBills.phone !== ''
      && constBills.doctor !== ''
      && constBills.education !== ''
      && constBills.meal !== ''
      && constBills.gym !== ''
      && constBills.sons !== ''
      && constBills.pet !== ''
      && constBills.credit !== ''
      && constBills.sure !== ''
      && constBills.othersConstBills !== ''
    )
      setBalanceConstBills(
        parseFloat(constBills.rent)
        + parseFloat(constBills.home)
        + parseFloat(constBills.supermarket)
        + parseFloat(constBills.phone)
        + parseFloat(constBills.doctor)
        + parseFloat(constBills.education)
        + parseFloat(constBills.meal)
        + parseFloat(constBills.gym)
        + parseFloat(constBills.sons)
        + parseFloat(constBills.pet)
        + parseFloat(constBills.credit)
        + parseFloat(constBills.sure)
        + parseFloat(constBills.othersConstBills)
      );
    else setBalanceConstBills(0);
    if (balanceIncome !== 0 && balanceConstBills !== 0 && balanceVariableBills !== 0)
      setBalance(balanceIncome - balanceConstBills - balanceVariableBills);
    else setBalance(0);
    console.log(constBills);
  };
  const changeInputVariableBills = (event, field) => {
    const prevState = variableBills;
    let { value: inputValue } = event.target;
    inputValue = !(/^[0-9]*$/i).test(inputValue) ? inputValue.replace(/[^0-9]+\\.?[0-9]*/g, '') : inputValue;
    const val = inputValue === '' ? ''
      : typeof inputValue === 'string' ? Number(inputValue.replace(/[$,]/g, ''))
        : inputValue;
    prevState[field] = (val > 0 ? val : '');
    setAmount({ value: event.target.value, name: field });
    setVariableBills(prevState);
    if (
      variableBills.shopping !== ''
      && variableBills.weekends !== ''
      && variableBills.travels !== ''
      && variableBills.gifts !== ''
      && variableBills.domiciliaryServices !== ''
      && variableBills.othersVariableBills !== ''
    )
      setBalanceVariableBills(
        parseFloat(variableBills.shopping)
        + parseFloat(variableBills.weekends)
        + parseFloat(variableBills.travels)
        + parseFloat(variableBills.gifts)
        + parseFloat(variableBills.domiciliaryServices)
        + parseFloat(variableBills.othersVariableBills)
      );
    else setBalanceVariableBills(0);
    if (balanceIncome !== 0 && balanceConstBills !== 0 && balanceVariableBills !== 0)
      setBalance(balanceIncome - balanceConstBills - balanceVariableBills);
    else setBalance(0);
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
              <input type="text" className={styles.budget__inputData} placeholder="$" name="constIncome" id="constIncome" onChange={(ev) => changeInputIncome(ev, 'constIncome')} defaultValue={income.constIncome} ref={constIncomeRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Ingreso variable:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="variableIncome" id="variableIncome" onChange={(ev) => changeInputIncome(ev, 'variableIncome')} defaultValue={income.variableIncome} ref={variableIncomeRef} onBlur={onBlurEvent} />
            </div>
          </div>
          <div className={styles.budget__form}>
            <p className={styles.budget__form_title}>Gastos fijos:</p>
            <div className={styles.budget__form_inputTitleM}>
              <p>{balanceConstBills !== 0 ? `${balanceConstBills.toLocaleString('es-MX', stringOptions)}` : '$'}</p>
            </div>
            <div className={styles.budget__form_input}>
              <p>Renta:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="rent" id="rent" onChange={(ev) => changeInputConstBills(ev, 'rent')} defaultValue={constBills.rent} ref={rentRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Gastos Casa:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="home" id="home" onChange={(ev) => changeInputConstBills(ev, 'home')} defaultValue={constBills.home} ref={homeRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Supermercado:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="supermarket" id="supermarket" onChange={(ev) => changeInputConstBills(ev, 'supermarket')} defaultValue={constBills.supermarket} ref={supermarketRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Celular</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="phone" id="phone" onChange={(ev) => changeInputConstBills(ev, 'phone')} defaultValue={constBills.phone} ref={phoneRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Doctor/Terapia</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="doctor" id="doctor" onChange={(ev) => changeInputConstBills(ev, 'doctor')} defaultValue={constBills.doctor} ref={doctorRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Educación:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="education" id="education" onChange={(ev) => changeInputConstBills(ev, 'education')} defaultValue={constBills.education} ref={educationRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Comidas en trabajo:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="meal" id="meal" onChange={(ev) => changeInputConstBills(ev, 'meal')} defaultValue={constBills.meal} ref={mealRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Gimnasio:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="gym" id="gym" onChange={(ev) => changeInputConstBills(ev, 'gym')} defaultValue={constBills.gym} ref={gymRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Hijos:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="sons" id="sons" onChange={(ev) => changeInputConstBills(ev, 'sons')} defaultValue={constBills.sons} ref={sonsRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Mascota:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="pet" id="pet" onChange={(ev) => changeInputConstBills(ev, 'pet')} defaultValue={constBills.pet} ref={petRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Créditos o prestamos:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="credit" id="credit" onChange={(ev) => changeInputConstBills(ev, 'credit')} defaultValue={constBills.credit} ref={creditRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Seguros:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="sure" id="sure" onChange={(ev) => changeInputConstBills(ev, 'sure')} defaultValue={constBills.sure} ref={sureRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Otros:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="othersConstBills" id="othersConstBills" onChange={(ev) => changeInputConstBills(ev, 'othersConstBills')} defaultValue={constBills.othersConstBills} ref={othersConstBillsRef} onBlur={onBlurEvent} />
            </div>
          </div>
          <div className={styles.budget__form}>
            <p className={styles.budget__form_title}>Gastos variables o Estilo de vida:</p>
            <div className={styles.budget__form_inputTitleM}>
              <p>{balanceVariableBills !== 0 ? `${balanceVariableBills.toLocaleString('es-MX', stringOptions)}` : '$'}</p>
            </div>
            <div className={styles.budget__form_input}>
              <p>Compras:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="shopping" id="shopping" onChange={(ev) => changeInputVariableBills(ev, 'shopping')} defaultValue={variableBills.shopping} ref={shoppingRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Fines de semana:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="weekends" id="weekends" onChange={(ev) => changeInputVariableBills(ev, 'weekends')} defaultValue={variableBills.weekends} ref={weekendsRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Viajes:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="travels" id="travels" onChange={(ev) => changeInputVariableBills(ev, 'travels')} defaultValue={variableBills.travels} ref={travelsRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Regalos:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="gifts" id="gifts" onChange={(ev) => changeInputVariableBills(ev, 'gifts')} defaultValue={variableBills.gifts} ref={giftsRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Servicios a domicilio:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="domiciliaryServices" id="domiciliaryServices" onChange={(ev) => changeInputVariableBills(ev, 'domiciliaryServices')} defaultValue={variableBills.domiciliaryServices} ref={domiciliaryServicesRef} onBlur={onBlurEvent} />
            </div>
            <div className={styles.budget__form_input}>
              <p>Otros:</p>
              <input type="text" className={styles.budget__inputData} placeholder="$" name="othersVariableBills" id="othersVariableBills" onChange={(ev) => changeInputVariableBills(ev, 'othersVariableBills')} defaultValue={variableBills.othersVariableBills} ref={othersVariableBillsRef} onBlur={onBlurEvent} />
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

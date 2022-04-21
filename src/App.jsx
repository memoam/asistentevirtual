import React, { useState } from 'react';
import Header from './components/header';
import TakeControl from './components/takeControl';
import LivingYourFuture from './components/livingYourFuture';
import Budget from './components/budget';
import ToPlan from './components/toPlan';
import AmountSaveMoney from './components/amountSaveMoney';
import assistant from './images/assistant.svg'
import gnp from './images/gnp.svg'
import styles from './styles/Home.module.scss'

function App() {
  const [step, setStep] = useState(0);
  const [balance, setBalance] = useState(0)
  const [image, setImage] = useState('');
  const updateImage = (data) => {
    setImage(data)
  };
  const updateBalance = (data) => {
    setBalance(data)
  };
  const updateStep = (data) => {
    setStep(data);
  };
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        {
          step === 0 ? (<TakeControl updateStep={updateStep} />)
            : step === 1 ? (<LivingYourFuture updateStep={updateStep} updateImage={updateImage} />)
              : step === 2 ? (<Budget updateStep={updateStep} updateBalance={updateBalance} />)
                : step === 3 ? (<ToPlan updateStep={updateStep} balance={balance} image={image} />)
                  : step === 4 ? (<AmountSaveMoney updateStep={updateStep} />)
                    : null
        }
      </div>
      <div className={styles.lastPart}>
        <div className={styles.assistant}>
          {
            step !== 4 ? (
              <p className={styles.assistant__greet}>
                {
                  step === 0 ?
                    '¡Hola! Me llamo … y juntes viajaremos para descubir tu salud financiera y la estrategia para cumplir todas tus metas. '
                    : step === 1 ?
                      'Este es el momento para echar a volar tu imaginacion, disfruta de tu futuro planeando desde hoy.'
                      : step === 2 ?
                        'Ponerle un precio a tu estilo de vida te permite ahorrar y convertirlo a un plan que te de libertad financiera. '
                        : step === 3 ?
                          'Te sugerimos dividir tu capacidad de ahorro de la siguiente manera…'
                          : null
                }
              </p>
            ) : (
              <p className={styles.assistant__greet}>Si quieres un plan de ahorro portando durante más años, da <a href="/">click aqui</a>.</p>
            )
          }
          <img src={assistant} alt="assistant" />
        </div>
        {step === 4 && (
          <div className={styles.gnp}>
            <div className={styles.gnp__container}>
              <img src={gnp} alt="gnp" />
              <p>
                Todos nuestros planes estan respaldados por GNP,
                tu poliza sera emitida por esta aseguradora
              </p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;

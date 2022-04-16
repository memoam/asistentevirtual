import React, { useState } from 'react';
import Header from './components/header';
import TakeControl from './components/takeControl';
import LivingYourFuture from './components/livingYourFuture';
import Budget from './components/budget';
import assistant from './images/assistant.svg'
import gnp from './images/gnp.svg'
import styles from './styles/Home.module.scss'

function App() {
  const [step, setStep] = useState(2);
  const updateStep = (data) => {
    setStep(data);
  };
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        {
          step === 0 ? (<TakeControl updateStep={updateStep} />)
            : step === 1 ? (<LivingYourFuture updateStep={updateStep} />)
              : step === 2 ? (<Budget updateStep={updateStep} />)
                : null
        }

      </div>
      <div className={styles.assistant}>
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
                    : step === 4 ?
                      'Si quieres un plan de ahorro portando durante más años, da click aqui.'
                      : null
          }
        </p>
        <img src={assistant} alt="assistant" />
      </div>
      {step === 4 && (
        <div className={styles.gnp}>
          <img src={gnp} alt="gnp" />
          <p>
            Todos nuestros planes estan respaldados por GNP,
            tu poliza sera emitida por esta aseguradora
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

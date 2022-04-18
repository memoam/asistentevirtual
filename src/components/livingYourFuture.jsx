import React, { useState } from 'react';
import PropTypes from 'prop-types';
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import styles from '../styles/Guri.module.scss';
export default function LivingYourFuture({ updateStep, updateImage }) {
  const [image, setImage] = useState('');
  const validateData = (e) => {
    e.preventDefault();
    updateImage(image);
    updateStep(2);
  }
  return (
    <div className={styles.guri}>
      <form className={styles.livingYourFuture} onSubmit={validateData}>
        <p className={styles.livingYourFuture__title}>
          ¿Como te imaginas vivendo tu futuro?
        </p>
        <div className={styles.livingYourFuture__data}>
          <div className={styles.livingYourFuture__data_img}>
            <button type="button" onClick={() => setImage('image1')}>
              <img className={image === 'image1' ? styles.livingYourFuture__data_active : null} src={image1} alt="" />
            </button>
          </div>
          <div className={styles.livingYourFuture__data_img}>
            <button type="button" onClick={() => setImage('image2')}>
              <img className={image === 'image2' ? styles.livingYourFuture__data_active : null} src={image2} alt="" />
            </button>
          </div>
          <div className={styles.livingYourFuture__data_img}>
            <button type="button" onClick={() => setImage('image3')}>
              <img className={image === 'image3' ? styles.livingYourFuture__data_active : null} src={image3} alt="" />
            </button>
          </div>
        </div>
        <p className={styles.livingYourFuture__title}>
          LA VIDA DE TUS SUEÑOS TE ESPERA
        </p>
        <div className={styles.livingYourFuture__control}>
          <button type="submit" className={styles.livingYourFuture__control_step}>
            CONTINUAR
          </button>
        </div>

      </form>
    </div>
  );
}
LivingYourFuture.propTypes = {
  updateStep: PropTypes.func.isRequired,
  updateImage: PropTypes.func.isRequired,
};

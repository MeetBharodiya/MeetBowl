import React, { useState } from 'react'
import Phone from './Phone/Phone';
import Email from './Email/Email';
import styles from './StepPhoneEmails.module.css';


const phoneEmailMap = {
  phone: Phone,
  email: Email
}


const StepPhoneEmails = ({ onNext }) => {
  const [type, setType] = useState('phone');
  const Component = phoneEmailMap[type];

  return (
    <>

      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrap}>
            <button className={`${styles.tabButton} ${type==="phone" ? styles.active : ''}`} onClick={() => setType('phone')}>
              <img src="/images/Phone.png" alt="Phone" />
            </button>
            <button className={`${styles.tabButton} ${type==="email" ? styles.active : ''}`} onClick={() => setType('email')}>
            <img src="/images/Email.png" alt="Email" />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>


    </>
  )
}

export default StepPhoneEmails

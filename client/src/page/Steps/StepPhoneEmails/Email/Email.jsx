import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmails.module.css'

const Email = ({onNext}) => {

  const [email , setEmail] = useState('');

  return (
    <Card title="Enter your Email Id" icon="email_logo.png">
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <div>
        <div className={styles.actionButtonWrap}>
        <Button text="next" onClick={onNext} />
        </div>
        <p className={styles.bottomParagraph}>
           By entering your Email, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  )
}

export default Email

import React from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'

const Home = () => {

  const navigate = useNavigate();

  const startRegister = () => {
    navigate('/authenticate');
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to MeetBowl" icon="logo.png">

        <p className={styles.text}>
          Welcome to MeetBowl!
          We’re working hard to get Meet Bowl ready for everyone! While we wrap up the finishing youches, we’r e adding people gradually to make sure nothing breaks.
        </p>


        <div>
          <Button onClick={startRegister} text="Let's Go" />
        </div>


        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text? </span>
        </div>

      </Card>
    </div>
  )
}

export default Home

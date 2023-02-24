import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import TextInput from '../../../components/shared/TextInput/TextInput';
import styles from './StepOtp.module.css';
import { verifyOtp } from '../../../http';
import { useSelector } from 'react-redux';
import {setAuth} from '../../../store/authSlice'
import { useDispatch } from 'react-redux';

const StepOtp = () => {
  const [otp,setOtp] = useState('');
  const dispatch = useDispatch();
  const {phone , hash} = useSelector((state) => state.auth.otp);
  const submit = async ()=>{
      if(!otp || !phone || !hash) return;
    try {
      const {data} = await verifyOtp({otp , phone, hash});
      console.log("After verify data:: "+ data);
      dispatch(setAuth(data));
    } catch (error) {
      console.error(error);
    }

  }
  return (
    <>
    <div className={styles.cardWrapper}>
      <Card title="Enter OTP" icon="Lock.png">
        <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />  
        <div>
          <div className={styles.actionButtonWrap}>
            <Button onClick={submit} text="next" />
          </div>
          <p className={styles.bottomParagraph}>
            By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
          </p>
        </div>
      </Card>
      </div>
    </>
  )
}

export default StepOtp

import React, { useState } from 'react'
import styles from './StepAvatar.module.css'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setAvatar } from '../../../store/activateSlice'
import api from '../../../http/index'
import { setAuth } from '../../../store/authSlice';
import Loader from '../../../components/shared/Loader/Loader';

const StepAvatar = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name, avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState('/images/default.jpg');
  const [loading, setLoading] = useState(false);
  // const [unMounted, setUnMounted] = useState(false);
  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    }
  }
  async function submit() {
    if (!name || !avatar) return;
    setLoading(true);
    try {
      const { data } = await api.post('/api/activate', { name, avatar });
      if (data.auth) {
          dispatch(setAuth(data));
      }
    }
    catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loader message="Activation in progress...." />

  return (
    <>
      <Card title={`Heyy, ${name}`} icon="hate.png">
        <p className={styles.subHeading}>what's up bro</p>
        <div className={styles.avatarWrapper}>
          <img className={styles.avatarImage} src={image} alt="avatar" />
        </div>
        <div>
          <input onChange={captureImage} id='avatarInput' type="file" className={styles.avatarInput} />
          <label className={styles.avatarLable} htmlFor="avatarInput">Choose diffrent photo</label>
        </div>
        <div className={styles.actionButtonWrap}>
          <Button onClick={submit} text="next" />
        </div>
      </Card>
    </>
  )
}

export default StepAvatar
import React from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import TextInput from '../../../components/shared/TextInput/TextInput'
import { useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { setName } from '../../../store/activateSlice'
import styles from './StepName.module.css'

const StepName = ({ onNext }) => {
  const {name} = useSelector((state) => state.activate);
  const [fullName, setFullName] = useState(name);
  const dispatch = useDispatch();
  function nextStep()
  {
    if(!fullName)
    {
      return;
    }
    dispatch(setName(fullName));
    onNext();
  }
  return (
    <>
      <Card title="What's Your Full Name?" icon="Google.png">
        <TextInput value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <div>
          <p className={styles.paragraph}>
            Don't be Anonymous😎
          </p>
          <div className={styles.actionButtonWrap}>
            <Button onClick={nextStep} text="next" />
          </div>

        </div>
      </Card>
    </>
  )
}

export default StepName

import React,{useState} from 'react'
import stepName from '../Steps/StepName/StepName'
import stepAvatar from '../Steps/StepAvatar/StepAvatar'

const steps = {
  1: stepName,
  2: stepAvatar
}

const Activate = () => {

  const [state , setState] = useState(1);
  const Step = steps[state];

  const onNext = () =>{
    setState(state+1);
  }

  return (
    <div className='cardWrapper'>
      <Step onNext={onNext}/>
    </div>
  )
}

export default Activate

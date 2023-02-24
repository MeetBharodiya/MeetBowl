import React , {useState} from 'react'
import stepPhoneEmails from '../Steps/StepPhoneEmails/StepPhoneEmails';
import stepOtp from '../Steps/StepOtp/StepOtp';


const steps = {
    1: stepPhoneEmails,
    2: stepOtp
}

const Authenticate = () => {
    const [state , setState] = useState(1);
    const Step = steps[state];

    const onNext = () =>{
      setState(state+1);
    }

  return (
    <div>
      <Step onNext={onNext}/>
    </div>
  )
}

export default Authenticate

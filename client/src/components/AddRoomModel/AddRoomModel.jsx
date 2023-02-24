import React, { useState } from 'react'
import styles from './AddRoomModel.module.css'
import TextInput from '../shared/TextInput/TextInput'
import { createRoom as create } from '../../http'
import {useNavigate} from 'react-router-dom'



const AddRoomModel = ({ onClose }) => {
    let navigate = useNavigate();
    const [roomType, setRoomType] = useState('open');
    const [topic, setTopic] = useState('');


    async function createRoom(){
        try {
            if(!topic) return;
            const {data} = await create({topic,roomType});
            navigate(`/room/${data.id}`);
        }catch(e){
            console.log(e.message);
        }
    }




    return (
        <div className={styles.modalMask}>
            <div className={styles.modalBody}>
                <button onClick={onClose} className={styles.closeButton}>
                    <img src="/images/close.png" alt="close" />
                </button>
                <div className={styles.modalHeader}>
                    <h3 className={styles.heading}>Enter the topic to be disscussed</h3>
                    <TextInput fullwidth="true" value={topic} onChange={(e) => setTopic(e.target.value)} />
                    <h2 className={styles.subHeading}>Room Types</h2>
                    <div className={styles.roomTypes}>
                        <div onClick={() => setRoomType('open')} className={`${styles.typeBox} ${roomType === 'open' ? styles.active : ''}`}>
                            <img src="/images/open.png" alt="Open-Room" />
                            <span>Open</span>
                        </div>
                        <div onClick={() => setRoomType('social')} className={`${styles.typeBox} ${roomType === 'social' ? styles.active : ''}`}>
                            <img src="/images/social.png" alt="Social-Room" />
                            <span>Social</span>
                        </div>
                        <div onClick={() => setRoomType('private')} className={`${styles.typeBox} ${roomType === 'private' ? styles.active : ''}`}>
                            <img src="/images/closed.png" alt="Closed-Room" />
                            <span>Closed</span>
                        </div>
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <h2>Start a room, open to everyone</h2>
                    <button onClick={createRoom} className={styles.footerButton}><img src="/images/go.png" alt="Go" />
                        <span>Let's Go</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddRoomModel

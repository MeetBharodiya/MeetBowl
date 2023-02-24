import React from 'react'
import styles from './RoomCard.module.css'
import { useNavigate } from 'react-router-dom'

const RoomCard = ({ room }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => { navigate(`/room/${room.id}`) }} className={styles.card}>
            <h3 className={styles.topic}>{room.topic}</h3>
            <div className={`${styles.speakers} ${room.speakers.length === 1 ? styles.singleSpeakers : ''}`}>
                <div className={styles.avatars}>
                    {
                        room.speakers.map(speker => (
                            <img key={speker.id} src={speker.avatar} alt="speker-avatar" />
                        ))
                    }
                </div>
                <div className={styles.names}>
                    {
                        room.speakers.map(speker => (
                            <div className={styles.nameWrapper}>
                                <span>{speker.name}</span>
                                <img key={speker.id} src="/images/chatt-bubble.png" alt="chat-bubble" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.peopleCount}>
                <span>{room.totalPeople}</span>
                <img src="/images/user.png" alt="user-icon" />
            </div>
        </div>
    )
}

export default RoomCard

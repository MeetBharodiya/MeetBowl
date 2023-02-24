import React, { useState, useEffect } from 'react'
import { useWebRTC } from '../../hooks/useWebRTC'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './Room.module.css'
import { getRoom } from '../../http'



const Room = () => {

  const { id: roomId } = useParams();
  // console.log(roomId);
  const user = useSelector(state => state.auth.user);
  // console.log(user);

  const { clients, provideRef , handleMute } = useWebRTC(roomId, user);
  const navigate = useNavigate();
  const handleManualLeave = () => {
    navigate('/rooms');
  }

  const [room, setRoom] = useState(null);
  const [isMuted , setMuted] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      const { data } = await getRoom(roomId);
      setRoom((prev) => data);
    };

    fetchRoom();
  }, [roomId]);

// useEffect(() => {
//     handleMute(isMuted, user.id);
// }, [isMuted]);

// const handleMuteClick = (clientId) => {
//   if (clientId !== user.id) {
//       return;
//   }
//   setMuted((prev) => !prev);
// }; 

  return (
    <div>
      <div className="container">
        <button onClick={handleManualLeave} className={styles.goBack}>
          <img src="/images/arrow.png" alt="arrow-left" />
          <span>All Voice Rooms</span>
        </button>
      </div>
      <div className={styles.clientsWrap}>
        <div className={styles.header}>
          <h2 className={styles.topic}>{room?.topic}</h2>
          <div className={styles.actions}>
            <button className={styles.actionBtn}>
              <img src="/images/Palm.png" alt="palm-icon" />
            </button>
            <button onClick={handleManualLeave} className={styles.actionBtn}>
              <img src="/images/quite.png" alt="leave-logo" />
              <span>Leave Quietly</span>
            </button>
          </div>
        </div>
        <div className={styles.clientsList}>
          {
            clients.map((client) => {
              return (
                <div className={styles.client} key={client.id}>
                  <div className={styles.userHead}>
                    <audio
                      ref={(instance) => provideRef(instance, client.id)}
                      autoPlay></audio>
                    <img className={styles.userAvatar} src={client.avatar} alt="avatar" />
                    <button className={styles.micBtn}>
                      {client.muted ? (
                        <img
                          className={styles.mic}
                          src="/images/mic-mute.png"
                          alt="mic"
                        />
                      ) : (
                        <img
                          className={styles.micImg}
                          src="/images/mic.png"
                          alt="mic"
                        />
                      )}
                    </button>
                  </div>
                  <h4>{client.name}</h4>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Room

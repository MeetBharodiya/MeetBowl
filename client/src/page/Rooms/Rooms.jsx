import React , {useState,useEffect} from 'react'
import AddRoomModel from '../../components/AddRoomModel/AddRoomModel';
import RoomCard from '../../components/RoomCard/RoomCard';
import styles from './Rooms.module.css';
import { getAllRooms } from '../../http';

// const rooms = [
//   {
//     id: 1,
//     topic: "Which framework best for frontend?",
//     speakers: [
//       {
//         id: 1,
//         name: 'Meet Bharodiya',
//         avatar: '/images/pexels-chloe-1043473.jpg'
//       },
//       {
//         id: 2,
//         name: 'Lisa Bharos',
//         avatar: '/images/default.jpg'
//       }
//     ],
//     totalPeople: 40
//   },
//   {
//     id: 2,
//     topic: "What is new in Machine Learning?",
//     speakers: [
//       {
//         id: 2,
//         name: 'Tony Stark',
//         avatar: '/images/pexels-chloe-1043473.jpg'
//       },
//       {
//         id: 3,
//         name: 'John Doe',
//         avatar: '/images/pexels-yuliya-kosolapova-3270230.jpg'
//       }
//     ],
//     totalPeople: 100
//   },
//   {
//     id: 3,
//     topic: "Why people use stackoverflow?",
//     speakers: [
//       {
//         id: 3,
//         name: 'Sharad Kevadiya',
//         avatar: '/images/seventh.jpg'
//       },
//       {
//         id: 4,
//         name: 'Lisa Bharos',
//         avatar: '/images/pexels-motional-studio-1081685.jpg'
//       }
//     ],
//     totalPeople: 30
//   },
//   {
//     id: 4,
//     topic: "Can you see AI as future?",
//     speakers: [
//       {
//         id: 4,
//         name: 'Meet Bharodiya',
//         avatar: '/images/second.jpg'
//       },
//       {
//         id: 5,
//         name: 'Harmi Bhalani',
//         avatar: '/images/fifteenth.jpg'
//       }
//     ],
//     totalPeople: 20
//   },
//   {
//     id: 5,
//     topic: "Cyber security",
//     speakers: [
//       {
//         id: 5,
//         name: 'Meet Bharodiya',
//         avatar: '/images/fourth.jpg'
//       },
//       {
//         id: 6,
//         name: 'Aniket Movaliya',
//         avatar: '/images/eleventh.jpg'
//       },
//     ],
//     totalPeople: 10
//   },
//   {
//     id: 5,
//     topic: "Cyber security",
//     speakers: [
//       {
//         id: 5,
//         name: 'Meet Bharodiya',
//         avatar: '/images/fourth.jpg'
//       },
//       {
//         id: 6,
//         name: 'Aniket Movaliya',
//         avatar: '/images/eleventh.jpg'
//       },
//     ],
//     totalPeople: 10
//   },
//   {
//     id: 5,
//     topic: "Cyber security",
//     speakers: [
//       {
//         id: 5,
//         name: 'Meet Bharodiya',
//         avatar: '/images/fourth.jpg'
//       },
//       {
//         id: 6,
//         name: 'Aniket Movaliya',
//         avatar: '/images/eleventh.jpg'
//       },
//     ],
//     totalPeople: 10
//   },
//   {
//     id: 5,
//     topic: "Cyber security",
//     speakers: [
//       {
//         id: 5,
//         name: 'Meet Bharodiya',
//         avatar: '/images/fourth.jpg'
//       },
//       {
//         id: 6,
//         name: 'Aniket Movaliya',
//         avatar: '/images/eleventh.jpg'
//       },
      
//     ],
//     totalPeople: 10
//   }
// ]

const Rooms = () => {
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    const fetchRooms = async ()=>{
      const {data} = await getAllRooms();
      setRooms(data);
    };
    fetchRooms();
  },[]);

  const [rooms, setRooms] = useState([]);
  function openModel(){
    setShowModel(true);
  }
  return (
    <>
      <div className='container'>
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All Voice Rooms</span>
            <div className={styles.searchBox}>
              <img src="/images/search.png" alt="search" />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right} onClick={openModel}>
            <button className={styles.startRoomButton}>
              <img src="/images/meeting.png" alt="add-room" />
              <span>Start a room</span>
            </button>
          </div>
        </div>

        <div className={styles.roomList}>
          {
            rooms.map((room) => (
              
              <RoomCard  key={room.id} room={room} />
            ))
          }
        </div>
      </div>

      {
        showModel && <AddRoomModel onClose={()=>setShowModel(false)}/>
      }
    </>
  )
}

export default Rooms

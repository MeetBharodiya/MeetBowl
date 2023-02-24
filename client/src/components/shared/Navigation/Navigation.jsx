import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../../http/index'
import styles from './Navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../../store/authSlice'
import { setName, setAvatar } from '../../../store/activateSlice'


const Navigation = () => {

  // To give inline CSS
  const brandStyles = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center'
  }

  const logoText = {
    marginLeft: '10px'
  }

  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);

  async function logoutUser() {
    try {
      const { data } = await logout();
      dispatch(setAuth(data), setName(data), setAvatar(data));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyles} to='/'>
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>MeetBowl</span>
      </Link>
      {
        isAuth && <div className={styles.navRight}>
          <h3>{user?.name}</h3>
          <Link to="/">
            <img className={styles.avatar} src={user.avatar ? user.avatar : '/images/default.jpg'} width="40" height="40" alt="avatar" />
          </Link>
          <button onClick={logoutUser} className={styles.logoutButton}>
            <img src="/images/logout.png" alt="logout" />
          </button>
        </div>
      }
    </nav>
  )
}

export default Navigation

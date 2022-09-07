import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className='app'>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Routes>
              <Route exact path='/mail' element={<Mail />} />
              <Route path='/' element={<EmailList />} />
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;

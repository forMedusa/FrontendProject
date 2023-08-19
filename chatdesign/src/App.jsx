import { useEffect, useState } from 'react'
import shahrukhIcon from './assets/images/images/shahrukh_khan_profile.png'
import userIcon from "./assets/images/images/chat avatar user.png"
import chatIcon from "./assets/icons/icons/ic_chat@2x.png"
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import srkImage from './assets/images/images/shahrukhkhanavatar.png'
import srkchat from './assets/images/images/chat avatar shahrukh khan.png'
import share from './assets/icons/icons/ic_share.png'
import like from './assets/icons/icons/ic_like.png'
import dislike from './assets/icons/icons/ic_dislike.png'
import smiley from './assets/icons/icons/smiley-icon.png'
import send from './assets/icons/icons/ic_send.png'
import sound from './assets/icons/icons/ic_audio.png'
import mic from './assets/icons/icons/ic_mic@2x.png'
import load from './assets/icons/icons/ic_reload.png'
import copy from './assets/icons/icons/ic_copy.png'
import { InputAdornment, Input, IconButton } from '@mui/material';
import inter from '@fontsource/inter'
import './App.css'

function App() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    marginTop: 10,
    width: 36,
    height: 20,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#C2D24B',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 16,
      height: 16,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#2E2F45' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: '500ms',
      }),
    },
  }));
  const handleSwitchChange = (event) => {
    setIsSwitchOn(event.target.checked);
  };
  return (
    <>
      <div className="main">
        <div className="topbar">
          <div className='topbaricons' style={{ marginTop: 3 }}>
            <img className="topbarIcon" width={30} src={shahrukhIcon} alt="Shahrukh Khan" />
            <img width={10} src={chatIcon} alt="Chat Icon" style={{
              position: "relative",
              background: "black",
              width: 15,
              borderRadius: 50,
              left: -10
            }} />
            <img className="topbarIcon" width={30} src={userIcon} alt="User" style={{ marginLeft: -20 }} />
          </div>
          <p style={{ marginLeft: 10, marginRight: 10, fontFamily: "inter", fontWeight: "bold", color: "white" }}>Interacting with Shahrukh's Licensed AI Persona</p>
          <IOSSwitch checked={isSwitchOn} onChange={handleSwitchChange} name="switch" />
          <label style={{
            fontFamily: "inter",
            color: "white",
            fontWeight: "bold",
            marginTop: 13,
            marginRight: 15,
            marginLeft: 10,
            opacity: 0.90,
            fontSize: 12
          }}>Avatar</label>
          <div>
            <Button className="topbarButton" variant="outlined" style={{ fontFamily: "inter", textTransform: 'initial', }}><img className="topbarButImg" width={20} src={chatIcon} alt="Chat Icon" />End Chat Session</Button>
          </div>
        </div>
        <div className='container' style={{
          width: 721,
          height: 500,
          backgroundColor: "#11121C",
          borderRadius: 10,
          display: "flex",
    flexDirection: "column"
        }}>
          <div className='chatBox' style={{ background: isSwitchOn == true ? `url(${srkImage}) center/cover no-repeat` : "none",
          backgroundSize: isSwitchOn == true ? '611px 435px': 0,
        flexGrow: 1,
        position: "relative",
        borderRadius: 5,
        overflow: "auto" }}>
            <div className='chat1' style={{marginTop:'19%', display: isSwitchOn == true ? "none" : "flex"}}>
              <img className='chat1img' src={userIcon} alt='user icon' />
              <p className='chat1para'>Who are some of your favorite directors to work with?</p>
            </div>
            <div className='chat2' style={{display: isSwitchOn == true ? "none" : "flex"}}>
              <div className='chat2inner'>
                <img className='chat2img' src={srkchat} alt='srk icon' />
                <p className='chat2para'>I share a very special bond with Karan. We have worked together in several blockbusters like
                  'Kuch Kuch Hota Hai', 'Kabhi Khushi Kabhie Gham', and 'My Name is Khan'. His ability to handle
                  complex human relationships in films is outstanding.</p>
                <img className='emoji' src={smiley} alt='smiley icon' />
              </div>
              <img className='threeicon' src={share} alt='share icon' />
              <img className='threeicon' src={like} alt='like icon' />
              <img className='threeicon' src={dislike} alt='dislike icon' />
            </div>
            <div className='chat1' style={{marginTop: isSwitchOn == true ? "40%" : 0,
            background: isSwitchOn ? 'linear-gradient(transparent 50%, #171825 50%)' : '#171825',
          }}>
              <img className='chat1img' src={userIcon} alt='user icon' style={{ opacity: isSwitchOn ? 0.5 : 1 }} />
              <p className='chat1para' style={{ opacity: isSwitchOn ? 0.5 : 1 }}>Who are some of your favorite directors to work with?</p>
            </div>
            <div className='chat2'>
              <div className='chat2inner'>
                <img className='chat2img' src={srkchat} alt='srk icon' />
                <p className='chat2para'>I share a very special bond with Karan. We have worked together in several blockbusters like
                  'Kuch Kuch Hota Hai', 'Kabhi Khushi Kabhie Gham', and 'My Name is Khan'. His ability to handle
                  complex human relationships in films is outstanding.</p>
                <img className='emoji' src={smiley} alt='smiley icon' />
              </div>
              <img className='threeicon' src={share} alt='share icon' />
              <img className='threeicon' src={like} alt='like icon' />
              <img className='threeicon' src={dislike} alt='dislike icon' />
            </div>
            <div className='lowerSection'>
          <div class="input-container">
            <input type="text" placeholder="Start typing your message here...." class="custom-input" />
            <button class="send-button">
              <img src={send} alt="Send" />
            </button>
          </div>
            <img className='lowerIcons' src={sound} alt='sound icon' />
            <img className='lowerIcons' src={mic} alt='mic icon' />
            <img className='lowerIcons' src={load} alt='load icon' />
            <img className='lowerIcons' src={copy} alt='copy icon' />
          </div>
          </div>
          
          
        </div>
      </div>
    </>
  )
}
export default App
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <InstagramIcon sx={{ fontSize: 35 }} />
        <TelegramIcon sx={{ fontSize: 35 }} />
        <YouTubeIcon sx={{ fontSize: 35 }} />
      </div>
      <div className='left-footer'>
        <p><PhoneIcon sx={{ fontSize: 35 }} /> ******</p>
        <p><EmailIcon sx={{ fontSize: 35 }} /> example@gmail.com</p>
      </div>
    </footer>
  )
}

export default Footer
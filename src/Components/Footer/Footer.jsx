import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <InstagramIcon sx={{ fontSize: 35 }} />
        <TelegramIcon sx={{ fontSize: 35 }} />
        <YouTubeIcon sx={{ fontSize: 35 }} />
      </div>
    </footer>
  )
}

export default Footer
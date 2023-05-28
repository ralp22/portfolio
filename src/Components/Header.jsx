import { Link } from 'react-router-dom'
import Contact from './Contact'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { GiWoodCabin, GiWindow } from 'react-icons/gi'

export default function Header(){

    const [translation, setTranslation] = useState(-190)
    useEffect(()=>{
        console.log(translation)
    },[])
    const NavBarIcon = ({ icon, text }) => (
        <div className="navbar-icon group">
          {icon}
          <span className="navbar-tip group-hover:scale-100">{text}</span>
        </div>
      );

    const HomeIcon = () => {
        return <GiWoodCabin size="60"/>
    }
    const ProjectIcon = () => {
        return <GiWindow size="60"/>
    }

    const PopoutIcon = () => {
        return <FaChevronLeft size="60"/>
    }

    return translation ? (
        <motion.div whileHover={{x: -200}} className='header font-[Roboto]' style={{right: `${translation}px`}}>
            <div className="-translate-x-8 py-[50%]"><NavBarIcon icon={<PopoutIcon/>} text={'Nav'}/></div>
            <span className="flex flex-col"><Link to="/"><NavBarIcon icon={<HomeIcon/>} text={'Home'}/></Link>
            <Link to="/projects"><NavBarIcon icon={<ProjectIcon/>} text={'Projects'}/></Link></span>
            
        </motion.div>
    ) : null
}

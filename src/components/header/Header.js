import './Header.css'
import { LoremIpsum } from 'react-lorem-ipsum';
import { FaInfoCircle,FaPlayCircle } from "react-icons/fa";
const style={paddingRight:"0.4rem"}
function Header(){
    return(
        <header>
            <div className='header_inner_shadow'></div>
            <div className="header_content">
                <div className="header_billboard">
                   <img src='https://i.pinimg.com/originals/ff/a8/c7/ffa8c7523e00f33e141b4ceb3a7cd0dd.png' alt='billboard'/>
                </div>
                <h1 className='header_desc'><LoremIpsum/></h1>
                <div className='header_buttons'>
                    <button className='header_button play_button'>
                        <FaPlayCircle style={style}/>
                        Play</button>
                    <button className='header_button moreinfo_button'>
                        <FaInfoCircle style={style}/>
                        More Info</button>
                </div>
            </div>
        </header>
         
    )
}
export default Header;
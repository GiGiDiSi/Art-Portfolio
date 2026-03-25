import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTumblr, faBluesky, faPixiv, faDeviantart} from '@fortawesome/free-brands-svg-icons';

function Socials(){
    return(
        <>
            <div className="icons">
                <a href="https://www.tumblr.com/blog/gigidisi" target="_blank">
                    <h2 className='icon'><FontAwesomeIcon icon={faTumblr}/></h2>
                </a>

                <a href="https://bsky.app/profile/gigidisi.bsky.social" target="_blank">
                    <h2 className='icon'><FontAwesomeIcon icon={faBluesky}/></h2>
                </a>
                <a href="https://www.pixiv.net/en/users/74551643" target="_blank">
                    <h2 className='icon'><FontAwesomeIcon icon={faPixiv}/></h2>
                </a>

                <a href="https://www.deviantart.com/gigidisi" target="_blank">
                    <h2 className='icon'><FontAwesomeIcon icon={faDeviantart}/></h2>
                </a>
            </div>
        </>
    )
}

export default Socials;
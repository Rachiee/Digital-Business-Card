import twitterimg from "/images/Twitter.png"
import igimg from "/images/Instagram.png"
import gitimg from "/images/GitHub.png"

export default function Footer() {
    return (
        <footer>
            <img src={twitterimg}/>
            <img src={igimg}/>
            <img src={gitimg}/>
        </footer>     
    )
}
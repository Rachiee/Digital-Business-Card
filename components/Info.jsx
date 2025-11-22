import aviimg from "/images/rachiavi.jpg"
import mailimg from "/images/Mail.png"
import linkedinimg from "/images/linkedin.png"


export default function Info() {
    return(
         <header>
            <img src={aviimg} className="main-img"/>
            <h1>Nara Nwaigbo</h1>
            <p>Frontend Developer</p>
            <a href="https://raxelle.framer.website/">raxelle.framer.website</a>
            <div className="links">
                <div className="mail-link">
                    <img src={mailimg}/>
                    <span><a href="mailto:narachim.n@gmail.com" className="btn">Email</a></span>
                </div>
                <div className="lin-link">
                    <img src={linkedinimg}/>
                    <span><a href="www.linkedin.com/in/narachim-nwaigbo-md-90608623a" className="btn">LinkedIn</a></span>
                </div>
            </div>
        </header>
    )
}
// Import Assets
import profile from '../assets/temp_profile.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Ron Ciszewski" />

            <div className='header__content'>
                <h1>Ron Ciszewski</h1>
                <p>Blockchain Developer</p>
                <div>
                    <a href="mailto:rc72095@icloud.com" className='button'>Email</a>
                    <a href="https://www.linkedin.com/" 
                    target="_blank" rel="noreferrer" className="button">LinkedIn</a>
                    <a href="https://github.com/" 
                    target="_blank" rel="noreferrer" className="button">GitHub</a>
                </div>
            </div>
        </section>
    );
}

export default Header;
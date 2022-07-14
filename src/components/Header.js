// Import Assets
import profile from '../assets/temp_profile.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Ron Ciszewski" />

            <div className='header__content'>
                <h1>Ron Ciszewski</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:rc72095@icloud.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;
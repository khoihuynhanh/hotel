// import logo
import logoWhite from '../assets/images/logo-white.png'

function Footer() {
    return (
        <footer className='bg-primary py-8'>
            <div className='container mx-auto text-white flex justify-between '>
                <a href='/'>
                    <img src={logoWhite} />
                </a>
                Copyright &copy; 2022. All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
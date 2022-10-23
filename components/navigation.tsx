import type { NextPage } from 'next'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/cc-logo-white.svg';
import hamburger from '../public/menu.svg';
import close from '../public/close.svg';
import translations from '../local/translations.json';

const Navigation: NextPage = () => {
    const onButtonClick = (e: any) => {
        const site = document.querySelector('.site');
        const target = e.target.closest('div');

        if (target.parentNode.classList.contains('show')) {
            target.parentNode.classList.remove('show');
            console.log('happens');
            site?.classList.remove('navigation-open');

            return;
        }

        const navigationContainer = target?.querySelector('.navigation__container');

        if (!navigationContainer) return;

        navigationContainer.classList.add('show');
        site?.classList.add('navigation-open');
    }

	return (
		<div className='navigation'>
            <button className="navigation__button" onClick={onButtonClick}>
                <Image 
                    src={hamburger}
                    width={32}
                    height={32}
                    loading="lazy"
                />
            </button>
            <div className="navigation__container">
                <div className="navigation-container__header">
                    <button className="navigation-container__close" onClick={onButtonClick}>
                        <Image 
                            src={close}
                            width={32}
                            height={32}
                            loading='lazy'
                        />
                    </button>
                    <Link href="/">
                        <a className="navigation-container__logo">
                            <Image 
                                src={logo}
                                width={210}
                                height={28}
                                alt="Crowd Collective"
                            />
                        </a>
                    </Link>
                </div>
                <nav className="navigation-container__nav">
                    <Link href="/">
                        <a className="nav-item">{translations.navigationHome}</a>
                    </Link>
                    <Link href="/form">
                        <a className="nav-item">{translations.navigationAddRecruitee}</a>
                    </Link>
                </nav>
            </div>
		</div>
	)
}

export default Navigation

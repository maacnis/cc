import type { NextPage } from 'next'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/cc-logo-black.svg';

const Header: NextPage = () => {
	return (
		<div className='header'>
			<Link href="/">
				<a>
					<Image 
						src={logo}
						width={210}
						height={28}
						alt="Crowd Collective"
					/>
				</a>
			</Link>
		</div>
	)
}

export default Header

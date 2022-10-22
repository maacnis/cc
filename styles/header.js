import Image from 'next/image';
import logo from '../public/cc-logo-black.svg';

export const Header = () => {
  return (
	<div className='header'>
		<Image 
			src={logo}
			width={210}
			height={28}
			alt="Crowd Collective"
		/>
	</div>
  )
};

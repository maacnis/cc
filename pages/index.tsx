import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import data from '../local/data.json';
import translations from '../local/translations.json';
import Header from '../components/header'
import { RecruiteeList } from '../components/RecruiteeList';

const Home: NextPage = () => {
	const { recruitees } = data;

	return (
		<div className="site">
			<Head>
				<title>Crowd Collective</title>
				<meta name="description" content="We at Crowd Collective are developers, designers, analysts, leaders and more. Looking for an IT consulting partner to build great tech with? We got you!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="Layout_main">
				<div className="sections">
					<section className="section-1">
						<h1 className="section-heading">{translations.sectionFirstPageHeading}</h1>
						<p className="section-description">{translations.sectionFirstPageDescription}</p>
						<p className="section-description">
							{translations.formFirstPageDescription} 
							<Link href="/form">
								<a  className="section-link">
									{translations.formFirstPageLink}
								</a>
							</Link>	
						</p>
					</section>
					<section className="section-2">
						<RecruiteeList recruitees={recruitees} />
					</section>
				</div>
			</div>
		</div>
	)
}

export default Home

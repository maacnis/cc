import type { NextPage } from 'next'
import Head from 'next/head'
import data from '../local/data.json';
import translations from '../local/translations.json';
import Header from '../components/header'

const Form: NextPage = () => {
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const data = {
			first: e.target.first.value,
			last: e.target.last.value,
			bday: e.target.bornday.value,
			email: e.target.email.value,
			status: e.target.status.value,
			address: [
				{
					street: e.target.street.value,
					city: e.target.city.value,
					state: e.target.state.value,
					zip: e.target.zip.value,
					country: e.target.country.value,
				}
			]
		}

		const JSONdata = JSON.stringify(data)

		const endpoint = '/api/form'

		const fetcher = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		})
		.then((res) => res.json())
		.then(() => e.target.classList.add('success'));
	}

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
						<h1 className="section-heading">{translations.sectionFormPageHeading}</h1>
						<p className="section-description">{translations.sectionFormPageDescription}</p>
					</section>
					<section className="section-1">
						<form className="section-form form" onSubmit={handleSubmit}>
							<div className="field">
								<label htmlFor="first">{translations.formFirstname}</label>
								<input type="text" id="first" name="first" required />
							</div>

							<div className="field">
								<label htmlFor="last">{translations.formLastname}</label>
								<input type="text" id="last" name="last" required />
							</div>

							<div className="field">
								<label htmlFor="bornday">{translations.formBornday}</label>
								<input type="date" id="bornday" name="bornday" required />
							</div>


							<div className="field">
								<label htmlFor="email">{translations.formEmail}</label>
								<input type="text" id="email" name="email" required />
							</div>

							<div className="field">
								<label htmlFor="status">{translations.formStatus}</label>
								<select id="status" name="status" required >
									<option value="Contact">{translations.formStatusContact}</option>
									<option value="Dialog">{translations.formStatusDialog}</option>
									<option value="Interview">{translations.formStatusInterview}</option>
									<option value="Offer">{translations.formStatusOffer}</option>
									<option value="Finished">{translations.formStatusFinished}</option>
								</select>
							</div>

							<div className="field">
								<fieldset name="address">
									<legend>{translations.formAddress}</legend>
									<div className="field">
										<label htmlFor="street">{translations.formAddressStreet}</label>
										<input type="text" id="street" name="street" required />
									</div>

									<div className="field">
										<label htmlFor="city">{translations.formAddressCity}</label>
										<input type="text" id="city" name="city" required />
									</div>

									<div className="field">
										<label htmlFor="state">{translations.formAddressState}</label>
										<input type="text" id="state" name="state" />
									</div>

									<div className="field">
										<label htmlFor="zip">{translations.formAddressZip}</label>
										<input type="text" id="zip" name="zip" required />
									</div>

									<div className="field">
										<label htmlFor="country">{translations.formAddressCountry}</label>
										<input type="text" id="country" name="country" required />
									</div>
								</fieldset>
							</div>
							

							<button className="form-button" type="submit">{translations.formSubmit}</button>
							<div className="form__success-message">{translations.formSuccessMessage}</div>
						</form>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Form

import { FC, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RecruiteeCardProps {
    recruitee: any;
}

const ImageUrl = (recruitee: { image: any; }) => {
    return `/../public${recruitee.image}`
}

const Age = (recruitee: { bornday: any; }) => {
    const today = new Date();
    const birthdate = new Date(recruitee.bornday);
    let age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}

export const RecruiteeCard: FC<RecruiteeCardProps> = ({recruitee}) => {
    const {...addressLines} = recruitee.address[0];

    return (
        <div className="recruitee-card">
            <Image
                src={ImageUrl(recruitee)}
                width={200}
                height={286}
                layout="fixed"
                className="recruitee-card__image"
                priority={true}
            />
            <div className="recruitee-card__information">
                <p className="information__heading">{recruitee.status}</p>
                <p>Firstname: {recruitee.fname}</p>
                <p>Lastname: {recruitee.lname}</p>
                <p>Age: {Age(recruitee)}</p>
                <p>
                    Email: <Link href={{pathname: `mailto:${recruitee.email}`}}><a>{recruitee.email}</a></Link>
                </p>
                <p>
                    Address:
                    <span className="information__address-line">{addressLines.street}</span>
                    <span className="information__address-line">{addressLines.city}, {addressLines.zip}</span>
                    {addressLines.state ? <span className="information__address-line">{addressLines.state}</span> : null}
                    <span className="information__address-line">{addressLines.country}</span>
                </p>
            </div>
        </div>
    )
};
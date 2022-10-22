import { FC } from 'react';
import { RecruiteeCard } from './RecruiteeCard';

interface RecruiteeListProps {
    recruitees: any[];
}

export const RecruiteeList: FC<RecruiteeListProps> = ({recruitees}) => {
    return (
        <section className="recruitee-list">
            {recruitees.map(
                (recruitee) => <RecruiteeCard key={recruitee.id} recruitee={recruitee} />
            )}
        </section>
    )
}
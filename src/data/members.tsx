import { Member } from '../components/Members';

import teamMember01 from '../assets/images/team-01.jpg';
import teamMember02 from '../assets/images/team-02.jpg';

import teamMemberCover01 from '../assets/images/team-01-cover.jpg';
import teamMemberCover02 from '../assets/images/team-02-cover.jpg';

export const members: Member[] = [
    {
        id: 0,
        title: 'Dr. Evaldo Reis Silva',
        description: 'string',
        image: teamMember01,
        cover: teamMemberCover01,
        url: 'dr-evaldo'
    },
    {
        id: 1,
        title: 'Dra. Cristina Célia Andrade',
        description: 'string',
        image: teamMember02,
        cover: teamMemberCover02,
        url: 'dra-cristina'
    }
];

export default members;


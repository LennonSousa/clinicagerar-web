import { Member } from '../components/Members';

import teamMember01 from '../assets/images/team-01.jpg';
import teamMember02 from '../assets/images/team-02.jpg';

import teamMemberCover01 from '../assets/images/team-01-cover.jpg';
import teamMemberCover02 from '../assets/images/team-02-cover.jpg';

import teamMemberArticle01 from '../assets/images/team-01-article.jpg';
import teamMemberArticle02 from '../assets/images/team-02-article.jpg';

export const members: Member[] = [
    {
        id: 0,
        title: 'Dr. Evaldo Reis Silva',
        specialist: 'Infertilidade, Reprodução Assistida, Obstetrícia, Medicina Fetal e Ultrassonografia.',
        description: 'Descrição.',
        treatments: 'Menopausa, Endometriose, Distúrbios Menstruais, Mioma, Síndrome Do Ovário Policístico, Cistos Ovarianos, HPV, Complicações Na Gravidez, ' +
        'Gravidez de risco, Infertilidade, Cirurgia Ginecológica Minimamente Invasiva.',
        university: 'Universidade Federal do Maranhão',
        image: teamMember01,
        cover: teamMemberCover01,
        articleImage: teamMemberArticle01,
        url: 'dr-evaldo'
    },
    {
        id: 1,
        title: 'Dra. Cristina Célia Andrade',
        specialist: 'Infertilidade, Reprodução Assistida, Obstetrícia, Patologia Cervical e Menopausa.',
        description: 'Eu Cristina, ginecologista e obstetra, formada há 31 anos, sempre me atualizando a cada dia, em busca de aperfeiçoamento para melhor atender minhas clientes. Tenho um diferencial que é saber ouvir a minha paciente e deixá-la o mais à vontade possível durante a consulta . Sempre quis ser médica e prometi pra mim mesma que honraria minha profissão, sendo verdadeira, dedicada e acima de tudo Humana.',
        treatments: 'Menopausa, Endometriose, Distúrbios Menstruais, ' +
        'Leiomiomatose, Síndrome Do Ovário Policístico, Cistos Ovarianos, HPV, Complicações Na Gravidez, Gravidez de risco, Infertilidade, Mioma, Adenomiose, Menopausa Precoce, Mola Hidatiforme, ' +
        'Amenorréia, Pólipo endometrial, Inseminação Intrauterina, Plástica Ginecológica, Rejuvenescimento Intimo (Aplicação de fraxx), Laparoscopia Ginecológica, ' + 
        'Obstetrícia, Calendário vacinal da mulher, Implantes Hormonais, Síndrome dos ovários policísticos, Disturbios hormonais, Implantes hormonais, Gestação de Alto Risco, ' +
        'Osteoporose, Abortamento habitual, Puberdade precoce e Tardia, Lesões precursoras do câncer de colo uterino.',
        university: 'Universidade Federal do Maranhão',
        image: teamMember02,
        cover: teamMemberCover02,
        articleImage: teamMemberArticle02,
        url: 'dra-cristina'
    }
];

export default members;


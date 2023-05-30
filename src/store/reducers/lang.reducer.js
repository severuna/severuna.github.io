import oxygen_1 from '../../assets/img/oxygen_1.png';
import oxygen_2 from '../../assets/img/oxygen_2.png';
import oxygen_3 from '../../assets/img/oxygen_3.png';
import oxygen_4 from '../../assets/img/oxygen_4.png';
import oxygen_5 from '../../assets/img/oxygen_5.png';
import login_1 from '../../assets/img/login_1.png';
import login_2 from '../../assets/img/login_2.png';
import login_3 from '../../assets/img/login_3.png';
import styled_1 from '../../assets/img/styled_1.png';
import styled_2 from '../../assets/img/styled_2.png';

const UA_LANG = {
    nav: ['домашня', 'роботи', 'навички', 'досвід', 'контакти'],
    home: {
        title: 'домашня',
        content: ['Я', 'Оксана Фоменкова', 'Front-End React Developer']
    },
    contacts: {
        title: 'контакти',
    },
    experience: {
        title: 'досвід',
    },
    skills:  {
        title: 'навички',
    },
    works: {
        title: 'роботи',
        list: [
            {
                id: 0,
                title: 'Oxygen',
                imgs: [oxygen_1, oxygen_2, oxygen_3, oxygen_4, oxygen_5],
                src: {
                    github: 'https://github.com/severuna/oxygen',
                    live: 'https://severuna.github.io/oxygen/'
                },
                tools: ['react', 'react router', 'redux'],
                description: 'Невеликий інетрнет-магазин, що має можливість вибору товарів, перегляду їх конкретної інформації, додавання їх в корзину, регулювання кількості та виводу вартості загальної та кожного товару окремо.'
            },
            {
                id: 1,
                title: 'Login',
                imgs: [login_1, login_2, login_3],
                src: {
                    github: 'https://github.com/severuna/login',
                    live: 'https://severuna.github.io/login/'
                },
                tools: ['react', 'react router', 'scss'],
                description: 'Форма логіну та реєстрації, виконана з використанням React Router & препроцесора SCSS.'
            },
            {
                id: 2,
                title: 'Styled Login/Register',
                imgs: [styled_1, styled_2],
                src: {
                    github: 'https://github.com/severuna/react_styled',
                    live: 'https://severuna.github.io/react_styled/'
                },
                tools: ['react', 'react router', 'styled components'],
                description: 'Форма логіну та реєстрації, виконана з використанням React Router & Styled components.'
            },
        ]
    },
}

const ENG_LANG = {
    nav: ['home', 'works', 'skills', 'experience', 'contacts'],
    home: {
        title: 'home',
        content: ['I`m', 'Oksana Fomenkova', 'Front-End React Developer']
    },
    contacts: {
        title: 'contacts',
    },
    experience: {
        title: 'experience',
    },
    skills:  {
        title: 'skills',
    },
    works: {
        title: 'works',
        list: [
            {
                id: 0,
                title: 'Oxygen',
                imgs: [oxygen_1, oxygen_2, oxygen_3, oxygen_4, oxygen_5],
                src: {
                    github: 'https://github.com/severuna/oxygen',
                    live: 'https://severuna.github.io/oxygen/'
                },
                tools: ['react', 'react router', 'redux'],
                description: 'A small online store with the ability to select products, view their specific information, add them to the basket, adjust the quantity and output the cost of the total and each product separately.'
            },
            {
                id: 1,
                title: 'Login',
                imgs: [login_1, login_2, login_3],
                src: {
                    github: 'https://github.com/severuna/login',
                    live: 'https://severuna.github.io/login/'
                },
                tools: ['react', 'react router', 'scss'],
                description: 'Login and registration form made using React Router & SCSS preprocessor.'
            },
            {
                id: 2,
                title: 'Styled Login/Register',
                imgs: [styled_1, styled_2],
                src: {
                    github: 'https://github.com/severuna/react_styled',
                    live: 'https://severuna.github.io/react_styled/'
                },
                tools: ['react', 'react router', 'styled components'],
                description: 'Login and registration form made using React Router & Styled components.'
            },
        ]
    },
}

const langReducer = ( state = ENG_LANG, action) => {

    switch (action.type) {

        case 'ua': {
            return UA_LANG
        }

        case 'eng': {
            return ENG_LANG
        }

        default: {
            return state
        }

    }

}

export default langReducer;
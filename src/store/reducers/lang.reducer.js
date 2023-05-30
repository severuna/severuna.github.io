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
import react from '../../assets/img/react.svg';
import css from '../../assets/img/css.svg';
import en from '../../assets/img/en.svg';
import ua from '../../assets/img/ua.svg';
import html from '../../assets/img/html.svg';
import js from '../../assets/img/javascript.svg';
import redux from '../../assets/img/redux.svg';
import router from '../../assets/img/router.svg';
import sass from '../../assets/img/sass.svg';
import sc from '../../assets/img/styled-components.svg';
import linkedin from '../../assets/img/linkedin.svg';
import telegram from '../../assets/img/telegram.svg';
import mail from '../../assets/img/mail.svg';
import tel from '../../assets/img/tel.svg';

const UA_LANG = {
    nav: ['домашня', 'роботи', 'навички', 'досвід', 'контакти'],
    home: {
        title: 'домашня',
        content: ['Я', 'Оксана Фоменкова', 'Front-End React Developer']
    },
    contacts: {
        title: 'контакти',
        list: [
            {
                id: 0,
                title: 'Зателефонувати мені: +380952008413',
                link: 'tel:+380952008413',
                src: tel
            },
            {
                id: 1,
                title: 'Написати мені: oxxxyfomenkova@gmail.com',
                link: 'mailto:oxxxyfomenkova@gmail.com',
                src: mail
            },
            {
                id: 2,
                title: 'Telegram',
                link: 'https://t.me/in_the_underworld',
                src: telegram
            },
            {
                id: 3,
                title: 'LinkedIn',
                link: 'https://www.linkedin.com/in/severuna/',
                src: linkedin
            },
        ]
    },
    experience: {
        title: 'досвід',
        work: [
            {
                id: 0,
                title: 'Кур`єр',
                place: 'Фріланс',
                description: 'Доставка замовлень з різних закладів в обумовлені терміни.',
                time: '2019 - 2022'
            },
            {
                id: 1,
                title: 'Продавець-консультант',
                place: 'Фріланс',
                description: 'Консультування клієнтів, визначення потреб клієнтів, збільшення продажів і дотримання стандартів',
                time: '2018 - 2019'
            },
            {
                id: 2,
                title: 'Чергова по залізничній станції',
                place: 'Укрзалізниця',
                description: `Обов’язки передбачають управління та координацію всіх дій із об’єднання рухомого складу в поїзди, розкладання поїздів на окремі залізничні вагони та переведення поїздів з колії на колію на залізничній станції`,
                time: '2015 - 2018'
            },
        ],
        edu: [
            {
                id: 0,
                title: 'CURSOR EDUCATION',
                spec: 'FRONT-END ADVANCED',
                description: 'Поглиблене вивчення Javascript, React, Redux, Typescript та інших технологій.',
                time: '2023'
            },
            {
                id: 1,
                title: 'ITEA',
                spec: 'FRONT-END',
                description: 'Вивчення HTML, CSS, препроцесорів, різних типів верстки, JavaScript',
                time: '2022 - 2023'
            },
            {
                id: 2,
                title: 'Український державний університет залізничного транспорту',
                spec: '«Управління процесами перевезень',
                description: 'Поглиблене вивчення управління перевізними процесами на залізничному транспорті.',
                time: '2016 - 2018'
            },
            {
                id: 3,
                title: 'Харківський коледж транспортних технологій',
                spec: 'Організація перевезень',
                description: 'Вивчення технологій і засобів залізничного транспорту, управління та організації перевезень.',
                time: '2012 - 2016'
            },
        ]
    },
    skills:  {
        title: 'навички',
        list: [
            {
                id: 0,
                title: 'react',
                src: react
            },
            {
                id: 1,
                title: 'redux',
                src: redux
            },
            {
                id: 2,
                title: 'router',
                src: router
            },
            {
                id: 3,
                title: 'styled components',
                src: sc
            },
            {
                id: 4,
                title: 'css',
                src: css
            },
            {
                id: 5,
                title: 'sass',
                src: sass
            },
            {
                id: 6,
                title: 'html',
                src: html
            },
            {
                id: 7,
                title: 'JavaScript',
                src: js
            },
            {
                id: 8,
                title: 'Ukrainian - Native',
                src: ua
            },
            {
                id: 8,
                title: 'English - Pre-intermediate',
                src: en
            },
        ]
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
        list: [
            {
                id: 0,
                title: 'Call me: +380952008413',
                link: 'tel:+380952008413',
                src: tel
            },
            {
                id: 1,
                title: 'Write to me: oxxxyfomenkova@gmail.com',
                link: 'mailto:oxxxyfomenkova@gmail.com',
                src: mail
            },
            {
                id: 2,
                title: 'Telegram',
                link: 'https://t.me/in_the_underworld',
                src: telegram
            },
            {
                id: 3,
                title: 'LinkedIn',
                link: 'https://www.linkedin.com/in/severuna/',
                src: linkedin
            },
        ]
    },
    experience: {
        title: 'experience',
        work: [
            {
                id: 0,
                title: 'Courier',
                place: 'Freelance',
                description: 'Delivery of orders from various establishments within the specified time.',
                time: '2019 to 2022'
            },
            {
                id: 1,
                title: 'Seller-consultant',
                place: 'Freelance',
                description: 'Consulting customers, identifying customer needs, increasing sales and meeting standards',
                time: '2018 to 2019'
            },
            {
                id: 2,
                title: 'Assistant station master',
                place: 'Ukrainian Railways',
                description: 'Duties involve managing and coordinating all activities in combining rolling stock into trains, breaking down trains into individual railroad cars, and switching trains from track to track in the rail yard',
                time: '2015 to 2018'
            },
        ],
        edu: [
            {
                id: 0,
                title: 'CURSOR EDUCATION',
                spec: 'FRONT-END ADVANCED',
                description: 'In-depth study of Javascript, React, Redux, Typescript and other technologies.',
                time: '2023'
            },
            {
                id: 1,
                title: 'ITEA',
                spec: 'FRONT-END',
                description: 'Study of HTML, CSS, preprocessors, various types of layout, JavaScript',
                time: '2022 to 2023'
            },
            {
                id: 2,
                title: 'Ukrainian state university of railway transport',
                spec: 'Management',
                description: 'In-depth study of the management of transportation processes on railway transport.',
                time: '2016 to 2018'
            },
            {
                id: 3,
                title: 'Kharkiv College of Transport Technologies',
                spec: 'Management',
                description: 'Study of technologies and means of railway transport, management and organization of transportation.',
                time: '2012 to 2018'
            },
        ]
    },
    skills:  {
        title: 'skills',
        list: [
            {
                id: 0,
                title: 'react',
                src: react
            },
            {
                id: 1,
                title: 'redux',
                src: redux
            },
            {
                id: 2,
                title: 'router',
                src: router
            },
            {
                id: 3,
                title: 'styled components',
                src: sc
            },
            {
                id: 4,
                title: 'css',
                src: css
            },
            {
                id: 5,
                title: 'sass',
                src: sass
            },
            {
                id: 6,
                title: 'html',
                src: html
            },
            {
                id: 7,
                title: 'JavaScript',
                src: js
            },
            {
                id: 8,
                title: 'Ukrainian - Native',
                src: ua
            },
            {
                id: 8,
                title: 'English - Pre-intermediate',
                src: en
            },
        ]
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
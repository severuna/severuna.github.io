const INITIAL_STATE = {
    ua: {
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
        },
    },
    eng: {
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
        },
    },
};

const langReducer = ( state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'ua': {
            return state.ua
        }

        case 'eng': {
            return state.eng
        }

        default: {
            return state
        }

    }

}

export default langReducer;
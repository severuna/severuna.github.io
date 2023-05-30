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

const ispData = [
    {
        course: 2,
        group: '2',
        schedule: [
            {
                weekDay: 'Понедельник',
                classes: [
                    {
                        id: 5,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                    {
                        id: 6,
                        title: 'киб.без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5'
                    },
                ]
            },
            {
                weekDay: 'Вторник',
                classes: [
                    {
                        id: 1,
                        title: 'Операционые системы и среды',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                    {
                        id: 2,
                        title: 'Операционые системы и среды ',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                    {
                        id: 3,
                        title: 'киб.без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5'
                    },
                    {
                        id: 4,
                        title: 'осн.антит',
                        teacher: 'Сайбудин Эменгаджиевич',
                        classRoom: '2.4'
                    },
                ]
            },
            {
                weekDay: 'Среда',
                classes: [
                    {
                        id: 3,
                        title: 'Операционые системы и среды',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                    {
                        id: 4,
                        title: 'история',
                        teacher: 'Джамиля Газбулаевна',
                        classRoom: '3.4'
                    },
                    {
                        id: 5,
                        title: 'киб.без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5'
                    },
                    {
                        id: 6,
                        title: 'киб.без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5'
                    },
                ]
            },

            {
                weekDay: 'Четверг',
                classes: [
                    {
                        id: 1,
                        title: 'Операционые системы и среды',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                    {
                        id: 2,
                        title: 'математика',
                        teacher: 'Халисат Саидовна',
                        classRoom: '2.3'
                    }, {
                        id: 3,
                        title: 'история',
                        teacher: 'Джамиля Газбулаевна',
                        classRoom: '4.4'
                    },
                ]
            },
            {
                weekDay: 'Пятница',
                classes: [
                    {
                        id: 4,
                        title: 'Операционые системы и среды',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                    {
                        id: 5,
                        title: 'Киб. без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5'
                    },
                    {
                        id: 6,
                        title: 'Киб. без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5'
                    },
                ]
            }
        ]
    },
    {
        course: 1,
        group: '',
        schedule: [
            {
                weekDay: 'Понедельник',
                classes: [
                    {
                        id: 1,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                    {
                        id: 2,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5',
                        isActive: true
                    },
                    {
                        id: 3,
                        title: 'история',
                        teacher: 'Джамиля Газбулаевна',
                        classRoom: '2.4'
                    },
                ]
            },
            {
                weekDay: 'Вторник',
                classes: [
                    {
                        id: 3,
                        title: 'Русский Язык',
                        teacher: 'Зарият Исмакадиевна',
                        classRoom: '2.4'
                    },
                    {
                        id: 4,
                        title: 'киб.без ',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5',
                        isActive: true
                    },
                    {
                        id: 5,
                        title: 'киб.без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5'
                    },
                ]
            },
            {
                weekDay: 'Среда',
                classes: [
                    {
                        id: 1,
                        title: 'киб.без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5',
                        isActive: true
                    },
                    {
                        id: 2,
                        title: 'киб.без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5'
                    },
                    {
                        id: 3,
                        title: 'история',
                        teacher: 'Джамиля Газбулаевна',
                        classRoom: '2.4'
                    },
                    {
                        id: 4,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                ]
            },

            {
                weekDay: 'Четверг',
                classes: [
                    {
                        id: 1,
                        title: 'Математика',
                        teacher: 'Халисат Саидовна',
                        classRoom: '2.3',
                        isActive: true
                    },
                    {
                        id: 2,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                ]
            },
            {
                weekDay: 'Пятница',
                classes: [
                    {
                        id: 1,
                        title: 'Математика',
                        teacher: 'Халисат Саидовна',
                        classRoom: '2.3'
                    },
                    {
                        id: 2,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5',
                        isActive: true
                    },
                    {
                        id: 3,
                        title: 'Киб. без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5'
                    },
                ]
            }
        ]
    },
    {
        course: 3,
        group: '',
        schedule: [
            {
                weekDay: 'Понедельник',
                classes: [
                    {
                        id: 3,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                    {
                        id: 4,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5',
                        isActive: true
                    },
                ]
            },
            {
                weekDay: 'Вторник',
                classes: [
                    {
                        id: 4,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                    {
                        id: 5,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                    {
                        id: 6,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                ]
            },
            {
                weekDay: 'Среда',
                classes: [
                    {
                        id: 1,
                        title: 'киб.без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5',
                        isActive: true
                    },
                    {
                        id: 2,
                        title: 'киб.без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5'
                    },
                    {
                        id: 3,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                    {
                        id: 4,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                ]
            },

            {
                weekDay: 'Четверг',
                classes: [
                    {
                        id: 1,
                        title: 'киб.без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5',
                        isActive: true
                    },
                    {
                        id: 2,
                        title: 'киб.без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5',
                        isActive: true
                    },
                    {
                        id: 3,
                        title: 'киб.без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5',
                        isActive: true
                    },
                    {
                        id: 4,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5'
                    },
                ]
            },
            {
                weekDay: 'Пятница',
                classes: [
                    {
                        id: 1,
                        title: 'Web разработка',
                        teacher: 'Самур Гулиевич',
                        classRoom: '2.5',
                        isActive: true
                    },
                    {
                        id: 2,
                        title: 'Киб. без',
                        teacher: 'Ибрагим Икрамович',
                        classRoom: '3.5'
                    },
                ]
            }
        ]
    }

]


// 2 курс 1 группа
const data = [
    {
        weekDay: 'Понедельник',
        classes: [
            {
                id: 4,
                title: 'Осн.алгоритм. и програм',
                teacher: 'Ибрагим Икрамович',
                classRoom: '3.5'
            },
            {
                id: 5,
                title: 'Компьютерные сети',
                teacher: 'Ибрагим Икрамович',
                classRoom: '3.5'
            },
            {
                id: 3,
                title: 'Операционные системы и среды',
                teacher: 'Самур Гулиевич',
                classRoom: '2.5'
            },
        ]
    },
    {
        weekDay: 'Вторник',
        classes: [
            {
                id: 2,
                title: 'Компьютерные сети',
                teacher: 'Ибрагим Икрамович',
                classRoom: '3.5'
            },
            {
                id: 3,
                title: 'Операционные системы и среды ',
                teacher: 'Самур Гулиевич',
                classRoom: '2.5'
            },
            {
                id: 4,
                title: 'Осн.антит.идеалог',
                teacher: 'Сайбудин Эмингаджиевич',
                classRoom: '2.4'
            },
            {
                id: 5,
                title: 'WEB-Дизайн',
                teacher: 'Патимат Зияутдиновна',
                classRoom: '3.1'
            },
        ]
    },
    {
        weekDay: 'Среда',
        classes: [
            {
                id: 4,
                title: 'История',
                teacher: 'Джамиля Газбулаевна',
                classRoom: '2.4'
            },
            {
                id: 5,
                title: 'Поддержка и тест-е прогр-х модулей',
                teacher: 'Самур Гулиевич',
                classRoom: '2.5'
            },
            {
                id: 6,
                title: 'Операционные системы и среды ',
                teacher: 'Самур Гулиевич',
                classRoom: '2.5'
            },
           
        ]
    },

    {
        weekDay: 'Четверг',
        classes: [
            {
                id: 2,
                title: 'Математика',
                teacher: 'Халисат Саидовна',
                classRoom: '2.3'
            },
            {
                id: 2,
                title: 'История',
                teacher: 'Джамиля Газбулаевна',
                classRoom: '2.4'
            },
            {
                id: 3,
                title: 'Осн.алгоритм. и програм',
                teacher: 'Ибрагим Икрамович',
                classRoom: '3.5'
            },
            {
                id: 4,
                title: 'Поддержка и тест-е прогр-х модулей',
                teacher: 'Самур Гулиевич',
                classRoom: '2.5'
            },
        ]
    },
    {
        weekDay: 'Пятница',
        classes: [
            {
                id: 4,
                title: 'Информационные технологии',
                teacher: 'Ибрагим Икрамович',
                classRoom: '3.5'
            },
            {
                id: 5,
                title: 'Поддержка и тест-е прогр-х модулей',
                teacher: 'Самур Гулиевич',
                classRoom: '2.5'
            },
            {
                id: 6,
                title: 'Операционные системы и среды',
                teacher: 'Самур Гулиевич',
                classRoom: '2.5'
            },
        ]
    }
]

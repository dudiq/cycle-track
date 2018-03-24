export default {
    name: 'example',
    langs: ['en', 'ru'],
    data: {
        exTheme: { // default
            dark: [
                'Dark',
                'Темная',
            ],
            light: [
                'Light',
                'Светлая',
            ],
            subBlock: {
                secondary: [
                    'one',
                    'один',
                ],
            },
        },
        exTitle: [ // combined plural with variables
            {
                key: 'Word in english {#plu} {#pluSecond} {#myCustomVar}',
                plu: [
                    '{#} word',
                    '{#} words',
                ],
                pluSecond: [
                    'one {#}',
                    'two {#}',
                ],
            },
            'Строка на русском {#myCustomVar}',
        ],
        check: { // with plural
            customVar: [
                'var is {#custom}',
                'переменная {#custom}',
            ],
            secondVar: [
                'subvar is {#here}',
                'вторая {#here}',
            ],
            plural: [
                {
                    key: 'this is {#val}',
                    val: [
                        '{#} answer',
                        '{#} answers',
                    ],
                },
                {
                    key: 'это {#val}',
                    val: [
                        '{#} ответ',
                        '{#} ответа',
                        '{#} ответов',
                    ],
                },
            ],
        },
    },
};

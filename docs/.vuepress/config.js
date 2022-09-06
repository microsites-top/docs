module.exports = {
    title: 'Microsites',
    description: 'Documentação e helpers do portal Microsites.',
    head: [
        ['link', { rel: "shortcut icon", href: "https://static.netforce.com.br/microsites/imgs/favicon.png"}],
    ],
    locales: {
        '/': {
            lang: 'pt-BR',
        },
    },
    themeConfig: {
        repo: 'microsites-top/docs',
        docsDir: 'docs',
        editLinks: true,
        docsBranch: 'main',
        editLinkText: 'Edite essa página no Github',
        lastUpdated: 'Última atualização',
        sidebar: [
            { title: "Guia", children: [
                "/main.md"
            ] },
            { title: "Desenvolvimento", children: [
                '/dev/', 
            ]} ,
        ],
        nav: [
            { text: 'Guia',             link: '/main.md' },
        ]
    }
 }

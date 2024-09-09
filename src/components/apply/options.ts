export const options:{ title: string, describe: string, options: { name: string, selected: boolean }[] }[]=[
    {
        title: "兴趣爱好",
        describe: "请勾选你感兴趣的爱好",
        options: [
            { name: "电子产品", selected: false },
            { name: "FPS", selected: false },
            { name: "羽毛球", selected: false },
            { name: "干饭", selected: false },
            { name: "摇滚", selected: false },
            { name: "开源", selected: false },
        ]
    },
    {
        title: "技能或感兴趣的方向",
        describe: "请勾选你感兴趣的爱好",
        options: [
            { name: "前端", selected: false },
            { name: "后端", selected: false },
            { name: "游戏开发", selected: false },
            { name: "AI", selected: false },
            { name: "可视化", selected: false },
            { name: "数模建模", selected: false },
            { name: "交互设计", selected: false },
            { name: "深度学习", selected: false },
        ]
    },
    {
        title: "未来打算",
        describe: "请勾选你感兴趣的爱好",
        options: [
            { name: "留学", selected: false },
            { name: "保研", selected: false },
            { name: "考研", selected: false },
            { name: "就业", selected: false },
            { name: "迷茫", selected: false },
        ]
    },
];

export const interviewers:{ code: string; avatar?: string; intros: string[], Signal?: boolean, tags:{ name: string, selected: boolean }[], matchCount: number}[]=[
    {
        code: 'Mr.Y',
        avatar: 'apply/interviewer/Y.jpg',
        intros: ['我可以和你聊聊智能体、创业和台球','我的MBTI为 : ENFJ'],//DONE
        tags: [
            {name: '前端', selected: false},
            {name: '开源', selected: false},
            {name: 'FPS', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: '007',
        avatar: 'apply/interviewer/007.jpg',
        intros: ['我可以和你聊聊深度学习、大模型、保研、科研与麻将','我的MBTI为 : ISTJ'],//DONE
        tags:[
            {name: '后端', selected: false},
            {name: '嵌入式', selected: false},
            {name: '羽毛球', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'Jing',
        avatar: 'apply/interviewer/Jing.jpg',
        intros: ['我可以和你聊聊计算机视觉、深度强化学习、历史与时政','我的MBTI为 : ISTJ'],//DONE
        tags:[
            {name: '游戏开发', selected: false},
            {name: '交互设计', selected: false},
            {name: '干饭', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'Leslie',
        avatar: 'apply/interviewer/Les.jpg',//todo
        intros: ['我可以和你聊聊开源、System、西洋棋与魔术','我的MBTI为 : INTP'],
        tags:[
            {name: '可视化', selected: false},
            {name: '数模建模', selected: false},
            {name: '摇滚', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'Zency',
        avatar: 'apply/interviewer/zency.jpg',
        intros: ['我可以和你聊聊前端、逆向、项目、就业、番剧与漫画','我的MBTI为 :INTJ '],//DONE
        tags:[
            {name: 'AI', selected: false},
            {name: '深度学习', selected: false},
            {name: '留学', selected: false},
            {name: '电子产品', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'DKK',
        avatar: 'apply/interviewer/DKK.jpg',
        intros: ['我可以和你聊聊前端、交互设计、项目、就业、MOBA游戏与麻将','我的MBTI为 : INFJ'],//DONE
        tags:[
            {name: 'AI', selected: false},
            {name: '深度学习', selected: false},
            {name: '留学', selected: false},
            {name: '电子产品', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'TT',
        avatar: 'apply/interviewer/TT.jpg',
        intros: ['我可以和你聊聊流量管理、乒乓球','我的MBTI为 : INTJ'],//DONE
        tags:[
            {name: 'AI', selected: false},
            {name: '深度学习', selected: false},
            {name: '留学', selected: false},
            {name: '电子产品', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'HH',
        avatar: 'apply/interviewer/HH.jpg',
        intros: ['我可以和你聊聊数据优化、旅游','我的MBTI为 : ESFJ'],//DONE
        tags:[
            {name: 'AI', selected: false},
            {name: '深度学习', selected: false},
            {name: '留学', selected: false},
            {name: '电子产品', selected: false},
        ],
        matchCount: 0,
    },
		{
			code: 'BarRaiser',
			avatar: 'apply/interviewer/bar_raiser.png',
			intros: ['Catch Me If You Can'],
            tags:[
                {name: 'mistery', selected: false},
            ],
			Signal: true,
            matchCount: 0,
		}
]
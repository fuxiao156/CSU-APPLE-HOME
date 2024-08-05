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
			code: 'EEE',
			avatar: 'apply/interviewer/EEE.png',
			intros: ['我可以和你聊聊前端，开源和FPS'],//DONE
            tags: [
                {name: '前端', selected: false},
                {name: '开源', selected: false},
                {name: 'FPS', selected: false},
            ],
            matchCount: 0,
		},
		{
			code: 'Forrest',
			avatar: 'apply/interviewer/Forrest.png',
			intros: ['我们可以交流一下后端，嵌入式和羽毛球'],//DONE
            tags:[
                {name: '后端', selected: false},
                {name: '嵌入式', selected: false},
                {name: '羽毛球', selected: false},
            ],
            matchCount: 0,
		},
		{
			code: 'Naux',
			avatar: 'apply/interviewer/Naux.png',
			intros: ['我可以和你聊聊游戏开发，交互设计和干饭'],//DONE
            tags:[
                {name: '游戏开发', selected: false},
                {name: '交互设计', selected: false},
                {name: '干饭', selected: false},
            ],
            matchCount: 0,
		},
		{
			code: 'Grant',
			avatar: 'apply/interviewer/Grant.png',//todo
			intros: ['我可以和你聊聊可视化，数模建模和摇滚'],
            tags:[
                {name: '可视化', selected: false},
                {name: '数模建模', selected: false},
                {name: '摇滚', selected: false},
            ],
            matchCount: 0,
		},
		{
			code: 'indexss',
			avatar: 'apply/interviewer/indexss.png',
			intros: ['我可以和你聊聊AI，深度学习，留学和电子产品'],//DONE
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
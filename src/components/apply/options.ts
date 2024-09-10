export const options:{ title: string, describe: string, options: { name: string, selected: boolean }[] }[]=[
    {
        title: "技能",
        describe: "技能",
        options: [
            { name: "智能体", selected: false },
            { name: "创业", selected: false },
            { name: "前端", selected: false },
            { name: "交互设计", selected: false },
            { name: "后端", selected: false },
            { name: "深度学习", selected: false },
            { name: "大模型", selected: false },
            { name: "计算机视觉", selected: false },
            { name: "数据优化", selected: false },
            { name: "System", selected: false },
            { name: "逆向", selected: false },
            { name: "流量管理", selected: false },
        ]
    },
    {
        title: "兴趣爱好",
        describe: "兴趣爱好",
        options: [
            { name: "项目", selected: false },
            { name: "开源", selected: false },
            { name: "台球", selected: false },
            { name: "番剧", selected: false },
            { name: "轻小说", selected: false },
            { name: "麻将", selected: false },
            { name: "历史与时政", selected: false },
            { name: "西洋棋", selected: false },
            { name: "魔术", selected: false },
            { name: "MOBA", selected: false },
            { name: "乒乓球", selected: false },
            { name: "旅游", selected: false },
            { name: "撸猫", selected: false },
            { name: "撸狗", selected: false },
            { name: "剧本杀", selected: false },
            { name: "综艺", selected: false },
            { name: "干饭", selected: false },
            { name: "羽毛球", selected: false },
            { name: "摄影", selected: false },
            { name: "唱歌", selected: false },
            { name: "美术", selected: false },
            { name: "舞蹈", selected: false },
            { name: "桌游", selected: false },
            { name: "睡觉", selected: false },
        ]
    },
    {
        title: "未来打算",
        describe: "未来打算",
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
        intros: ['我可以和你聊聊智能体、创业、台球和撸猫','我的MBTI为 : ENFJ'],//DONE
        tags: [
            {name: '智能体', selected: false},
            {name: '创业', selected: false},
            {name: '台球', selected: false},
            {name: '撸猫', selected: false},
            {name: '剧本杀', selected: false},
            {name: '综艺', selected: false},
            {name: '干饭', selected: false},
            {name: '羽毛球', selected: false},
            {name: '摄影', selected: false},
            {name: '唱歌', selected: false},
            {name: '美术', selected: false},
            {name: '舞蹈', selected: false},
            {name: '撸狗', selected: false},
            {name: '桌游', selected: false},
            {name: '睡觉', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'Zency',
        avatar: 'apply/interviewer/zency.jpg',
        intros: ['我可以和你聊聊前端、逆向、项目、就业、番剧与轻小说','我的MBTI为 :INTJ '],//DONE
        tags:[
            {name: '前端', selected: false},
            {name: '逆向', selected: false},
            {name: '番剧', selected: false},
            {name: '轻小说', selected: false},
            {name: '就业', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'DKK',
        avatar: 'apply/interviewer/DKK.jpg',
        intros: ['我可以和你聊聊前端、交互设计、项目、就业与MOBA游戏','我的MBTI为 : INFJ'],//DONE
        tags:[
            {name: '前端', selected: false},
            {name: '交互设计', selected: false},
            {name: 'MOBA', selected: false},
            {name: '麻将', selected: false},
            {name: '就业', selected: false},
            {name: '睡觉', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'Leslie',
        avatar: 'apply/interviewer/Les.jpg',//todo
        intros: ['我可以和你聊聊后端、System、开源、西洋棋与魔术','我的MBTI为 : INTP'],
        tags:[
            {name: '开源', selected: false},
            {name: 'System', selected: false},
            {name: '西洋棋', selected: false},
            {name: '魔术', selected: false},
            {name: '后端', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: '007',
        avatar: 'apply/interviewer/007.jpg',
        intros: ['我可以和你聊聊深度学习、大模型、保研、科研与麻将','我的MBTI为 : ISTJ'],//DONE
        tags:[
            {name: '深度学习', selected: false},
            {name: '大模型', selected: false},
            {name: '麻将', selected: false},
            {name: '保研', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'Jing',
        avatar: 'apply/interviewer/Jing.jpg',
        intros: ['我可以和你聊聊计算机视觉、深度强化学习、历史与时政','我的MBTI为 : ISTJ'],//DONE
        tags:[
            {name: '计算机视觉', selected: false},
            {name: '深度学习', selected: false},
            {name: '历史与时政', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'HH',
        avatar: 'apply/interviewer/HH.jpg',
        intros: ['我可以和你聊聊数据优化、旅游','我的MBTI为 : ESFJ'],//DONE
        tags:[
            {name: '数据优化', selected: false},
            {name: '旅游', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'TT',
        avatar: 'apply/interviewer/TT.jpg',
        intros: ['我可以和你聊聊流量管理、乒乓球','我的MBTI为 : INTJ'],//DONE
        tags:[
            {name: '流量管理', selected: false},
            {name: '乒乓球', selected: false},
        ],
        matchCount: 0,
    },
    {
        code: 'BarRaiser',
        avatar: 'apply/interviewer/bar_raiser.png',
        intros: ['Catch Me If You Can'],
        tags:[
            {name: '迷茫', selected: false},
        ],
        Signal: true,
        matchCount: 0,
    }
]
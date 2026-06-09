const navLinks = [
    {
        category: "AI 工具",
        sites: [
            { name: "ChatGPT 中文", url: "https://chat.openai.com/", desc: "OpenAI 聊天机器人", icon: "fab fa-openai", color: "#A78BFA" },
            { name: "DeepSeek", url: "https://chat.deepseek.com/", desc: "深度思考 AI 助手", icon: "fas fa-brain", color: "#8B5CF6" },
            { name: "DeepSeek 开放平台", url: "https://platform.deepseek.com/", desc: "DeepSeek API 平台", icon: "fas fa-plug", color: "#7C3AED" },
            { name: "通义千问", url: "https://tongyi.aliyun.com/", desc: "阿里云 AI 助手", icon: "fas fa-robot", color: "#6366F1" },
            { name: "文心一言", url: "https://yiyan.baidu.com/", desc: "百度 AI 大模型", icon: "fas fa-wind", color: "#2563EB" },
            { name: "讯飞星火", url: "https://xinghuo.xfyun.cn/", desc: "科大讯飞 AI 平台", icon: "fas fa-bolt", color: "#0EA5E9" },
            { name: "秘塔AI搜索", url: "https://metaso.cn/", desc: "AI 智能搜索引擎", icon: "fas fa-search", color: "#14B8A6" },
            { name: "豆包", url: "https://www.doubao.com/", desc: "字节跳动 AI 助手", icon: "fas fa-comments", color: "#8B5CF6" },
            { name: "扣子 Coze", url: "https://www.coze.cn/", desc: "AI Agent 开发平台", icon: "fas fa-cog", color: "#6366F1" },
            { name: "新智教AI", url: "https://www.xinzhijiao.com/", desc: "AI 赋能智慧教学", icon: "fas fa-chalkboard-teacher", color: "#06B6D4" },
            { name: "腾讯智影", url: "https://zenvideo.qq.com/", desc: "AI 视频创作平台", icon: "fas fa-video", color: "#00A1D6" },
            { name: "Dreamina", url: "https://dreamina.com/", desc: "AI 图像生成工具", icon: "fas fa-paint-brush", color: "#EC4899" },
            { name: "必应图像创建器", url: "https://www.bing.com/create/image", desc: "免费 AI 图像生成", icon: "fab fa-microsoft", color: "#2563EB" },
            { name: "Nano Banana AI", url: "https://nano-banana.com/", desc: "免费 AI 图像编辑器", icon: "fas fa-image", color: "#F59E0B" },
            { name: "Raphael AI", url: "https://raphael.ai/", desc: "无限制 AI 图像生成", icon: "fas fa-palette", color: "#A855F7" },
            { name: "一饭封神", url: "https://www.yifanfengshen.com/", desc: "AI 智能菜谱生成", icon: "fas fa-utensils", color: "#EF4444" },
            { name: "WaytoAGI", url: "https://www.waytoagi.com/", desc: "AGI 知识库和工具站", icon: "fas fa-road", color: "#7C3AED" },
            { name: "Agnes", url: "https://agnes.ai/", desc: "AI 智能助手", icon: "fas fa-user-astronaut", color: "#6366F1" },
            { name: "AI Tools", url: "https://www.ai-tools.com/", desc: "AI 工具合集", icon: "fas fa-tools", color: "#8B5CF6" },
            { name: "RoboNeo", url: "https://www.robono.ai/", desc: "影像生产力 AI Agent", icon: "fas fa-film", color: "#6366F1" },
            { name: "数字人-ai口型拟合", url: "https://www.digitalhuman.com/", desc: "AI 数字人口型同步", icon: "fas fa-user-circle", color: "#0EA5E9" },
            { name: "讯飞AI", url: "https://www.xfyun.cn/", desc: "科大讯飞 AI 开放平台", icon: "fas fa-microphone", color: "#0284C7" }
        ]
    },
    {
        category: "编程开发",
        sites: [
            { name: "GitHub", url: "https://github.com/", desc: "代码托管与协作平台", icon: "fab fa-github", color: "#333" },
            { name: "GitHub Dashboard", url: "https://github.com/dashboard", desc: "GitHub 个人面板", icon: "fas fa-tachometer-alt", color: "#24292E" },
            { name: "Gitee", url: "https://gitee.com/", desc: "国内 Git 代码托管", icon: "fab fa-git-alt", color: "#C71D23" },
            { name: "CSDN", url: "https://www.csdn.net/", desc: "专业开发者社区", icon: "fas fa-code", color: "#FC5531" },
            { name: "Stack Overflow", url: "https://stackoverflow.com/", desc: "程序员问答社区", icon: "fab fa-stack-overflow", color: "#F48024" },
            { name: "菜鸟教程", url: "https://www.runoob.com/", desc: "Web 技术学习", icon: "fas fa-graduation-cap", color: "#4CAF50" },
            { name: "力扣 LeetCode", url: "https://leetcode-cn.com/", desc: "算法刷题平台", icon: "fas fa-code", color: "#FFA116" },
            { name: "AcWing", url: "https://www.acwing.com/", desc: "快乐学习生活", icon: "fas fa-laptop-code", color: "#5BC0DE" },
            { name: "鱼C工作室", url: "https://fishc.com.cn/", desc: "免费编程视频教学", icon: "fas fa-fish", color: "#4CAF50" },
            { name: "Road 2 Coding", url: "https://www.r2coding.com/", desc: "编程学习路线", icon: "fas fa-road", color: "#2196F3" },
            { name: "C语言技术网", url: "http://www.freecplus.net/", desc: "C 语言学习", icon: "fas fa-c", color: "#A8B9CC" },
            { name: "51CTO博客", url: "https://blog.51cto.com/", desc: "专业 IT 技术博客", icon: "fas fa-blog", color: "#0066CC" },
            { name: "简书", url: "https://www.jianshu.com/", desc: "创作你的创作", icon: "fas fa-pen-fancy", color: "#EA6F5A" },
            { name: "Element 组件", url: "https://element.eleme.cn/", desc: "饿了么 UI 组件库", icon: "fas fa-puzzle-piece", color: "#409EFF" },
            { name: "BootstrapVue", url: "https://code.z01.com/bootstrap-vue/", desc: "Bootstrap Vue 组件", icon: "fab fa-vuejs", color: "#42B883" },
            { name: "Spring Initializr", url: "https://start.spring.io/", desc: "Spring 项目初始化", icon: "fas fa-leaf", color: "#6DB33F" },
            { name: "ProcessOn", url: "https://www.processon.com/", desc: "免费在线作图思维导图", icon: "fas fa-project-diagram", color: "#007DFC" },
            { name: "ossnav 开源精选", url: "https://github.com/maxiaobang7/ossnav", desc: "开源软件集合", icon: "fab fa-github", color: "#24292E" },
            { name: "cc-switch", url: "https://github.com/farion1231/cc-switch", desc: "开源切换工具", icon: "fas fa-exchange-alt", color: "#667eea" },
            { name: "SVNBucket", url: "https://www.svnbucket.com/", desc: "代码仓库管理", icon: "fas fa-database", color: "#8B5CF6" },
            { name: "Greasy Fork", url: "https://greasyfork.org/", desc: "用户脚本大全", icon: "fas fa-users", color: "#7C3AED" },
            { name: "接口大全", url: "https://www.apiopen.cn/", desc: "免费 API 集合", icon: "fas fa-link", color: "#0EA5E9" },
            { name: "iconfont", url: "https://www.iconfont.cn/", desc: "阿里巴巴矢量图标库", icon: "fas fa-icons", color: "#FF6A00" },
            { name: "easyScholar", url: "https://www.easyscholar.cn/", desc: "显示期刊等级SCI分区", icon: "fas fa-award", color: "#6366F1" }
        ]
    },
    {
        category: "影视追剧",
        sites: [
            { name: "影视森林", url: "http://www.549.tv/", desc: "观影第一站", icon: "fas fa-film", color: "#4CAF50" },
            { name: "66影视网", url: "https://www.5266ys.net/", desc: "最新电影电视剧", icon: "fas fa-video", color: "#2196F3" },
            { name: "YouTube电影", url: "https://www.youtube.com/feed/storefront", desc: "YouTube电影频道", icon: "fab fa-youtube", color: "#FF0000" },
            { name: "厂长资源", url: "https://www.czzymovie.com/", desc: "超清视频站", icon: "fas fa-film", color: "#9C27B0" },
            { name: "Gimy TV 剧迷", url: "https://gimy.tv/", desc: "免费高清追剧", icon: "fas fa-tv", color: "#FF5722" },
            { name: "注视影视", url: "https://gaze.show/", desc: "免费在线观影", icon: "fas fa-eye", color: "#3F51B5" },
            { name: "LIBVIO", url: "https://www.libvio.lat/", desc: "影视播放平台", icon: "fas fa-play-circle", color: "#E91E63" },
            { name: "Kmoe漫画", url: "https://kzo.moe/", desc: "Kindle epub漫画", icon: "fas fa-book-open", color: "#FF9800" },
            { name: "电子图书馆LibGen", url: "https://1lib.education/", desc: "免费下载电子书", icon: "fas fa-book-reader", color: "#FF6B35" }
        ]
    },
    {
        category: "游戏专区",
        sites: [
            { name: "英雄联盟攻略", url: "https://101.qq.com/", desc: "LOL官方网站攻略", icon: "fas fa-chess", color: "#C89B3C" },
            { name: "云顶之弈", url: "https://lol.qq.com/tft/", desc: "云顶之弈主题站", icon: "fas fa-chess-queen", color: "#1E90FF" },
            { name: "云顶大数据", url: "https://www.datatft.com/", desc: "阵容梯度", icon: "fas fa-chart-line", color: "#FF6B6B" },
            { name: "MetaTFT", url: "https://www.metatft.com/explorer", desc: "TFT数据探索", icon: "fas fa-chart-bar", color: "#9C27B0" },
            { name: "Tactics Tools", url: "https://tactics.tools/", desc: "TFT工具", icon: "fas fa-tools", color: "#FF9800" },
            { name: "Valorant准星", url: "https://www.vcrdb.net/", desc: "无畏契约准星库", icon: "fas fa-crosshairs", color: "#FF4655" },
            { name: "虎牙直播", url: "https://www.huya.com/l", desc: "在线游戏直播平台", icon: "fas fa-gamepad", color: "#FF6600" },
            { name: "斗鱼直播", url: "https://www.douyu.com/directory/all", desc: "游戏直播平台", icon: "fas fa-broadcast-tower", color: "#FF6700" },
            { name: "3DM游戏网", url: "https://www.3dmgame.com/", desc: "单机游戏下载", icon: "fas fa-gamepad", color: "#FF9800" },
            { name: "游侠网", url: "https://www.ali213.net/", desc: "单机游戏门户", icon: "fas fa-laptop-code", color: "#00BCD4" },
            { name: "Byrut Game", url: "https://byrutgame.org/", desc: "PC游戏免费下载", icon: "fas fa-download", color: "#FF5722" }
        ]
    },
    {
        category: "学习教育",
        sites: [
            { name: "微信读书", url: "https://weread.qq.com/", desc: "微信读书平台", icon: "fas fa-book-reader", color: "#07C160" },
            { name: "极简Polebrief", url: "https://www.polebrief.com/user", desc: "极简个人中心", icon: "fas fa-bullseye", color: "#607D8B" },
            { name: "朱鸾AI助手", url: "https://www.zhuluan.com/", desc: "AI 学习助手", icon: "fas fa-robot", color: "#8B5CF6" },
            { name: "毕业设计管理系统", url: "https://zjjhy.xueshubang.net/teacher", desc: "毕业设计管理平台", icon: "fas fa-graduation-cap", color: "#3F51B5" },
            { name: "DeepL翻译", url: "https://www.deepl.com/", desc: "最准确的翻译工具", icon: "fas fa-language", color: "#0B5CFF" },
            { name: "数字资源平台", url: "http://lib-resource.lib.nchu.edu.cn/", desc: "昌航数字资源", icon: "fas fa-database", color: "#00BCD4" },
            { name: "智慧职教", url: "https://www.icve.com.cn/", desc: "职业教育平台", icon: "fas fa-university", color: "#2563EB" },
            { name: "学银在线", url: "https://www.xueyinonline.com/", desc: "在线课程平台", icon: "fas fa-graduation-cap", color: "#6366F1" },
            { name: "江西省人事考试", url: "https://pta.jxhrss.gov.cn/", desc: "人事考试服务", icon: "fas fa-id-card", color: "#1E88E5" },
            { name: "湖南省智慧资助", url: "https://www.hnszsz.gov.cn/", desc: "湖南省资助平台", icon: "fas fa-hand-holding-heart", color: "#0EA5E9" },
            { name: "粉笔网", url: "https://www.fenbi.com/", desc: "公考在线教育", icon: "fas fa-chalkboard", color: "#00B38A" },
            { name: "研究生招生", url: "https://yz.chsi.com.cn/", desc: "硕士招生平台", icon: "fas fa-user-graduate", color: "#6366F1" },
            { name: "408 考研杂货铺", url: "https://www.kaoyan.com/", desc: "计算机考研资料", icon: "fas fa-book", color: "#EC4899" },
            { name: "研招网", url: "https://yz.chsi.com.cn/", desc: "硕士网上报名平台", icon: "fas fa-file-alt", color: "#2563EB" },
            { name: "2025教师研修", url: "https://teacher.vocational.smartedu.cn/", desc: "教师暑期研修", icon: "fas fa-chalkboard-teacher", color: "#FF9800" },
            { name: "金榜题名", url: "http://qzbltushu.ysepan.com/", desc: "图书资源", icon: "fas fa-trophy", color: "#D4AF37" },
            { name: "网易邮箱", url: "https://mail.163.com/", desc: "电子邮箱", icon: "fas fa-envelope", color: "#C20C0C" },
            { name: "Nikse字幕", url: "https://www.nikse.dk/subtitleedit/online", desc: "在线字幕编辑", icon: "fas fa-closed-captioning", color: "#FF4500" }
        ]
    },
    {
        category: "实用工具",
        sites: [
            { name: "MSDN我告诉你", url: "https://msdn.itellyou.cn/", desc: "Windows系统下载", icon: "fab fa-windows", color: "#0078D7" },
            { name: "PaywallBuster", url: "https://paywallbuster.com/", desc: "移除付费墙", icon: "fas fa-unlock", color: "#10B981" },
            { name: "优软汇", url: "https://www.youruanhui.com/", desc: "国内外优质软件", icon: "fas fa-download", color: "#FA541C" },
            { name: "软仓", url: "https://www.ruancang.net/", desc: "软件资源库", icon: "fas fa-box", color: "#1890FF" },
            { name: "极速搜搜", url: "https://soso.jisuxz.com/", desc: "免费资源下载", icon: "fas fa-search-plus", color: "#52C41A" },
            { name: "超级PDF", url: "https://pdf2doc.com/", desc: "PDF转Word在线工具", icon: "fas fa-file-pdf", color: "#E74C3C" },
            { name: "PDF24 Tools", url: "https://tools.pdf24.org/", desc: "免费PDF工具箱", icon: "fas fa-file-pdf", color: "#27AE60" },
            { name: "iLovePDF", url: "https://www.ilovepdf.com/", desc: "PDF在线工具", icon: "fas fa-file-pdf", color: "#E74C3C" },
            { name: "IDM绿色版", url: "http://www.itmind.net/", desc: "下载工具", icon: "fas fa-download", color: "#FF6F00" },
            { name: "Super Flash", url: "https://x-superflash.com/", desc: "效率工具", icon: "fas fa-bolt", color: "#F59E0B" },
            { name: "百度地图", url: "https://map.baidu.com/", desc: "地图导航服务", icon: "fas fa-map-marked-alt", color: "#007AFF" },
            { name: "有道翻译", url: "https://fanyi.youdao.com/", desc: "有道在线翻译", icon: "fas fa-language", color: "#1E88E5" },
            { name: "百度网盘", url: "https://pan.baidu.com/", desc: "百度网盘服务", icon: "fas fa-cloud-download-alt", color: "#2993FF" },
            { name: "淘链客", url: "https://www.toplinks.cc/s/", desc: "外链资源聚合搜索", icon: "fas fa-link", color: "#13C2C2" },
            { name: "fmhy免费媒体指南", url: "https://fmhy.net/beginners-guide", desc: "免费媒体资源", icon: "fas fa-book", color: "#9C27B0" }
        ]
    },
    {
        category: "社交娱乐",
        sites: [
            { name: "微博", url: "https://weibo.com/", desc: "随时随地发现新鲜事", icon: "fab fa-weibo", color: "#E6162D" },
            { name: "哔哩哔哩", url: "https://www.bilibili.com/", desc: "弹幕视频网", icon: "fab fa-bilibili", color: "#FB7299" },
            { name: "YouTube", url: "https://www.youtube.com/", desc: "全球最大的视频平台", icon: "fab fa-youtube", color: "#FF0000" },
            { name: "网易邮箱6.0", url: "https://mail.163.com/", desc: "网易邮箱", icon: "fas fa-envelope", color: "#C20C0C" }
        ]
    },
    {
        category: "工作相关",
        sites: [
            { name: "飞牛fnOS", url: "https://fnos.net/", desc: "NAS私有云系统", icon: "fas fa-server", color: "#1890FF" },
            { name: "毕设指导管理", url: "https://zjjhy.xueshubang.net/teacher", desc: "毕业设计平台", icon: "fas fa-tasks", color: "#3F51B5" },
            { name: "张家界航院图书馆", url: "https://www.zjjhy.edu.cn/library/", desc: "数字图书馆", icon: "fas fa-university", color: "#795548" },
            { name: "张家界航空职院", url: "https://www.zjjhy.edu.cn/", desc: "学校官网", icon: "fas fa-school", color: "#FF5722" },
            { name: "学习通", url: "https://passport.xuexitang.com/", desc: "超星学习通", icon: "fas fa-book-open", color: "#2196F3" },
            { name: "张航", url: "https://zhanghang.com/", desc: "个人工作链接", icon: "fas fa-user-tie", color: "#667eea" }
        ]
    },
    {
        category: "阅读小说",
        sites: [
            { name: "凡人修仙传", url: "https://weread.qq.com/", desc: "微信读书", icon: "fas fa-book", color: "#07C160" },
            { name: "电子图书馆LibGen", url: "https://libgen.is/", desc: "免费下载电子书", icon: "fas fa-book-reader", color: "#6366F1" }
        ]
    },
    {
        category: "设计素材",
        sites: [
            { name: "搜图导航", url: "https://www.soutudaoHang.com/", desc: "设计师导航", icon: "fas fa-search", color: "#6366F1" },
            { name: "Wallhaven", url: "https://wallhaven.cc/", desc: "高清壁纸", icon: "fas fa-image", color: "#1E90FF" },
            { name: "Wallpaper Abyss", url: "https://www.wallpaperflare.com/", desc: "免费高清壁纸", icon: "fas fa-desktop", color: "#EC4899" }
        ]
    },
    {
        category: "安全/其他",
        sites: [
            { name: "乖张主页", url: "https://zsjyf.cn/", desc: "个人主页", icon: "fas fa-home", color: "#FFC107" },
            { name: "中国红客联盟", url: "https://www.ihonker.org/", desc: "08安全团队", icon: "fas fa-shield-alt", color: "#DC143C" },
            { name: "卡博世订单管理", url: "https://www.kabao.com/", desc: "订单管理系统", icon: "fas fa-clipboard-list", color: "#6366F1" },
            { name: "172号卡分销", url: "https://www.172haoka.com/", desc: "号卡分销系统", icon: "fas fa-phone-alt", color: "#0EA5E9" },
            { name: "EQ控制台", url: "https://eq.console.com/", desc: "EQ管理平台", icon: "fas fa-tachometer-alt", color: "#8B5CF6" }
        ]
    }
];

const categoryColors = {
    "AI 工具": "#A78BFA",
    "编程开发": "#6366F1",
    "影视追剧": "#EC4899",
    "游戏专区": "#F472B6",
    "学习教育": "#0EA5E9",
    "实用工具": "#22D3EE",
    "社交娱乐": "#F59E0B",
    "工作相关": "#8B5CF6",
    "阅读小说": "#10B981",
    "设计素材": "#6366F1",
    "安全/其他": "#6B7280"
};
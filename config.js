const navLinks = [
    {
        category: "娱乐生活",
        sites: [
            { name: "微博", url: "https://weibo.com/", desc: "随时随地发现新鲜事", icon: "fab fa-weibo", color: "#E6162D" },
            { name: "哔哩哔哩", url: "https://www.bilibili.com/", desc: "bilibili弹幕视频网", icon: "fas fa-tv", color: "#FB7299" },
            { name: "YouTube电影", url: "https://www.youtube.com/feed/storefront", desc: "YouTube电影频道", icon: "fab fa-youtube", color: "#FF0000" },
            { name: "虎牙直播", url: "https://www.huya.com/l", desc: "在线直播平台", icon: "fas fa-gamepad", color: "#FF6600" },
            { name: "斗鱼直播", url: "https://www.douyu.com/directory/all", desc: "游戏直播平台", icon: "fas fa-broadcast-tower", color: "#FF6700" },
            { name: "影视森林", url: "http://www.549.tv/", desc: "观影第一站", icon: "fas fa-film", color: "#4CAF50" },
            { name: "66影视网", url: "https://www.5266ys.net/", desc: "最新电影电视剧", icon: "fas fa-video", color: "#2196F3" },
            { name: "厂长资源", url: "https://www.czzymovie.com/", desc: "超清视频站", icon: "fas fa-film", color: "#9C27B0" },
            { name: "Gimy TV 剧迷", url: "https://gimy.tv/", desc: "免费高清追剧", icon: "fas fa-tv", color: "#FF5722" },
            { name: "注视影视", url: "https://gaze.show/", desc: "免费在线观影", icon: "fas fa-eye", color: "#3F51B5" },
            { name: "LIBVIO", url: "https://www.libvio.lat/", desc: "影视播放平台", icon: "fas fa-play-circle", color: "#E91E63" },
            { name: "Kmoe漫画", url: "https://kzo.moe/", desc: "Kindle epub漫画", icon: "fas fa-book-open", color: "#FF9800" },
            { name: "凡人修仙传", url: "https://weread.qq.com/", desc: "微信读书", icon: "fas fa-book-reader", color: "#07C160" },
            { name: "3DM游戏网", url: "https://www.3dmgame.com/", desc: "单机游戏下载", icon: "fas fa-gamepad", color: "#FF9800" },
            { name: "游侠网", url: "https://www.ali213.net/", desc: "单机游戏门户", icon: "fas fa-laptop-code", color: "#00BCD4" },
            { name: "乖张主页", url: "https://zsjyf.cn/", desc: "个人主页", icon: "fas fa-home", color: "#FFC107" }
        ]
    },
    {
        category: "学习资源",
        sites: [
            { name: "菜鸟教程", url: "https://www.runoob.com/", desc: "学习Web技术", icon: "fas fa-graduation-cap", color: "#4CAF50" },
            { name: "CSDN", url: "https://www.csdn.net/", desc: "专业开发者社区", icon: "fas fa-code", color: "#FC5531" },
            { name: "Stack Overflow", url: "https://stackoverflow.com/", desc: "程序员问答社区", icon: "fab fa-stack-overflow", color: "#F48024" },
            { name: "GitHub", url: "https://github.com/", desc: "代码托管平台", icon: "fab fa-github", color: "#333" },
            { name: "GitHub Dashboard", url: "https://github.com/dashboard", desc: "GitHub个人面板", icon: "fas fa-tachometer-alt", color: "#24292E" },
            { name: "Gitee", url: "https://gitee.com/", desc: "国内Git托管", icon: "fab fa-git-alt", color: "#C71D23" },
            { name: "力扣LeetCode", url: "https://leetcode-cn.com/", desc: "全球极客挚爱的技术成长平台", icon: "fas fa-code", color: "#FFA116" },
            { name: "AcWing", url: "https://www.acwing.com/", desc: "快乐学习生活", icon: "fas fa-graduation-cap", color: "#5BC0DE" },
            { name: "鱼C工作室", url: "https://fishc.com.cn/", desc: "免费编程视频教学", icon: "fas fa-fish", color: "#4CAF50" },
            { name: "Road 2 Coding", url: "https://www.r2coding.com/", desc: "编程学习路线", icon: "fas fa-road", color: "#2196F3" },
            { name: "C语言技术网", url: "http://www.freecplus.net/", desc: "C语言学习", icon: "fas fa-c", color: "#A8B9CC" },
            { name: "51CTO博客", url: "https://blog.51cto.com/", desc: "专业IT技术博客", icon: "fas fa-blog", color: "#0066CC" },
            { name: "简书", url: "https://www.jianshu.com/", desc: "创作你的创作", icon: "fas fa-pen", color: "#EA6F5A" },
            { name: "Element组件", url: "https://element.eleme.cn/", desc: "饿了么UI组件库", icon: "fas fa-puzzle-piece", color: "#409EFF" },
            { name: "BootstrapVue", url: "https://code.z01.com/bootstrap-vue/", desc: "Bootstrap Vue组件", icon: "fab fa-vuejs", color: "#42B883" },
            { name: "Spring Initializr", url: "https://start.spring.io/", desc: "Spring项目初始化", icon: "fas fa-leaf", color: "#6DB33F" },
            { name: "中国红客联盟", url: "https://www.ihonker.org/", desc: "08安全团队", icon: "fas fa-shield-alt", color: "#DC143C" },
            { name: "飞牛fnOS", url: "https://fnos.net/xinxijishu", desc: "NAS私有云系统", icon: "fas fa-server", color: "#1890FF" },
            { name: "Hangge博客", url: "https://www.hangge.com/", desc: "开发技术分享", icon: "fas fa-blog", color: "#FF6347" }
        ]
    },
    {
        category: "AI工具",
        sites: [
            { name: "Claude", url: "https://claude.ai/new", desc: "Anthropic AI助手", icon: "fas fa-robot", color: "#7C3AED" },
            { name: "豆包", url: "https://www.doubao.com/chat/", desc: "字节跳动AI助手", icon: "fas fa-comments", color: "#4E6EF2" },
            { name: "DeepSeek", url: "https://chat.deepseek.com/", desc: "探索未至之境", icon: "fas fa-brain", color: "#0052D9" },
            { name: "秘塔AI搜索", url: "https://metaso.cn/", desc: "AI搜索", icon: "fas fa-search", color: "#6366F1" },
            { name: "通义", url: "https://www.tongyi.com/", desc: "阿里超级个人助理", icon: "fas fa-wand-magic-sparkles", color: "#FF6A00" },
            { name: "讯飞星火", url: "https://xinghuo.xfyun.cn/desk", desc: "科大讯飞AI", icon: "fas fa-fire", color: "#00B8D4" },
            { name: "讯飞开放平台", url: "https://www.xfyun.cn/", desc: "语音AI开放平台", icon: "fas fa-microphone", color: "#00B8D4" },
            { name: "扣子", url: "https://space.coze.cn/", desc: "AI办公助手", icon: "fas fa-briefcase", color: "#10B981" },
            { name: "RoboNeo", url: "https://www.roboneo.com/home", desc: "专注影像生产力", icon: "fas fa-camera", color: "#8B5CF6" },
            { name: "朱鸾AI助手", url: "http://wenzhang.zhuluan.com/zh-cn/", desc: "AI写作助手", icon: "fas fa-feather-alt", color: "#E91E63" },
            { name: "AI Tools", url: "https://abc.ufun.net/home", desc: "AI工具集合", icon: "fas fa-tools", color: "#5856D6" },
            { name: "AI数字人", url: "http://ai.clculture.com/", desc: "AI口型拟合", icon: "fas fa-user-circle", color: "#FF5722" },
            { name: "MJ绘画", url: "https://www.apimj.com/", desc: "Midjourney中文站", icon: "fas fa-paint-brush", color: "#9C27B0" },
            { name: "新智教AI", url: "http://zjai.tangdongping.com/", desc: "AI赋能智慧教学", icon: "fas fa-chalkboard-teacher", color: "#673AB7" },
            { name: "Dreamina", url: "https://dreamina.jianying.com/", desc: "剪映AI绘画", icon: "fas fa-magic", color: "#FF4081" },
            { name: "一饭封神", url: "https://eat.lz-t.top/", desc: "AI菜谱生成", icon: "fas fa-utensils", color: "#FF9800" },
            { name: "easyScholar", url: "https://www.easyscholar.cc/", desc: "显示期刊等级分区", icon: "fas fa-award", color: "#FFC107" }
        ]
    },
    {
        category: "常用工具",
        sites: [
            { name: "百度网盘", url: "https://pan.baidu.com/", desc: "云存储服务", icon: "fas fa-cloud", color: "#2378F3" },
            { name: "百度地图", url: "https://map.baidu.com/", desc: "智能出行", icon: "fas fa-map-marked-alt", color: "#2932E1" },
            { name: "有道翻译", url: "https://fanyi.youdao.com/", desc: "在线翻译", icon: "fas fa-language", color: "#C62F2F" },
            { name: "DeepL翻译", url: "https://www.deepl.com/zh/translator", desc: "全世界最准确的翻译", icon: "fas fa-globe", color: "#0F2B46" },
            { name: "PDF24 Tools", url: "https://tools.pdf24.org/zh/", desc: "免费PDF工具", icon: "fas fa-file-pdf", color: "#DC3912" },
            { name: "iLovePDF", url: "https://www.ilovepdf.com/", desc: "PDF爱好者工具", icon: "fas fa-heart", color: "#FF0000" },
            { name: "超级PDF", url: "https://xpdf.cn/", desc: "PDF转Word在线", icon: "fas fa-file-word", color: "#2B579A" },
            { name: "搜图导航", url: "https://www.91sotu.com/", desc: "设计师导航", icon: "fas fa-images", color: "#FF6B6B" },
            { name: "wallhaven", url: "https://wallhaven.cc/", desc: "高清壁纸", icon: "fas fa-image", color: "#5B7083" },
            { name: "Wallpaper Abyss", url: "https://wall.alphacoders.com/", desc: "高清桌面背景", icon: "fas fa-image", color: "#FF4500" },
            { name: "iconfont", url: "https://www.iconfont.cn/", desc: "阿里巴巴矢量图标库", icon: "fas fa-icons", color: "#FF6A00" },
            { name: "ProcessOn", url: "https://www.processon.com/", desc: "免费在线作图", icon: "fas fa-project-diagram", color: "#0084FF" },
            { name: "Greasy Fork", url: "https://greasyfork.org/zh-CN/", desc: "用户脚本大全", icon: "fas fa-script", color: "#670000" },
            { name: "免费API", url: "https://www.free-api.com/", desc: "免费API大全", icon: "fas fa-plug", color: "#00BCD4" },
            { name: "SVNBucket", url: "https://svnbucket.com/", desc: "SVN代码托管", icon: "fas fa-code-branch", color: "#8093BD" }
        ]
    },
    {
        category: "效率办公",
        sites: [
            { name: "学习通", url: "https://i.chaoxing.com/", desc: "超星学习通", icon: "fas fa-book", color: "#1890FF" },
            { name: "智慧职教", url: "https://www.icve.com.cn/", desc: "职业教育平台", icon: "fas fa-graduation-cap", color: "#0088CC" },
            { name: "学银在线", url: "https://xueyinonline.com/", desc: "在线学习平台", icon: "fas fa-laptop", color: "#28A745" },
            { name: "湖南省智慧资助", url: "https://zhzz.hnedu.cn/", desc: "资助服务平台", icon: "fas fa-hand-holding-usd", color: "#E74C3C" },
            { name: "研招网", url: "https://yz.chsi.com.cn/yzwb/", desc: "研究生招生考试", icon: "fas fa-university", color: "#0056B3" },
            { name: "2026考研", url: "https://se.yanzhaowang.com/", desc: "考研择校查询", icon: "fas fa-search-location", color: "#673AB7" },
            { name: "408真题", url: "https://www.csgraduates.com/", desc: "计算机考研真题", icon: "fas fa-file-code", color: "#9C27B0" },
            { name: "硕士招生-长沙理工", url: "https://www.csust.edu.cn/yjsy/", desc: "研究生院", icon: "fas fa-university", color: "#1E88E5" },
            { name: "张家界航空职院", url: "https://www.zjjhy.edu.cn/", desc: "学校官网", icon: "fas fa-school", color: "#FF5722" },
            { name: "张家界航院图书馆", url: "https://www.zjjhy.edu.cn/library/", desc: "数字图书馆", icon: "fas fa-university", color: "#795548" },
            { name: "毕设指导管理", url: "https://zjjhy.xueshubang.net/teacher", desc: "毕业设计平台", icon: "fas fa-tasks", color: "#3F51B5" },
            { name: "数字资源平台", url: "http://lib-resource.lib.nchu.edu.cn/", desc: "昌航数字资源", icon: "fas fa-database", color: "#00BCD4" },
            { name: "极简Polebrief", url: "https://www.polebrief.com/user", desc: "极简个人中心", icon: "fas fa-bullseye", color: "#607D8B" },
            { name: "CNKI毕业设计", url: "https://co2.cnki.net/Main.html", desc: "毕业论文管理系统", icon: "fas fa-file-alt", color: "#FF6B6B" },
            { name: "粉笔网", url: "https://www.fenbi.com/", desc: "在线教育", icon: "fas fa-chalkboard", color: "#00B38A" },
            { name: "江西省人事考试", url: "https://pta.jxhrss.gov.cn/", desc: "人事考试服务", icon: "fas fa-id-card", color: "#1E88E5" },
            { name: "2025教师研修", url: "https://teacher.vocational.smartedu.cn/", desc: "教师暑期研修", icon: "fas fa-chalkboard-teacher", color: "#FF9800" },
            { name: "网易邮箱", url: "https://mail.163.com/", desc: "电子邮箱", icon: "fas fa-envelope", color: "#C20C0C" },
            { name: "腾讯智影", url: "https://zenvideo.qq.com/home", desc: "智能视频创作", icon: "fas fa-video", color: "#00A1D6" },
            { name: "Nikse字幕", url: "https://www.nikse.dk/subtitleedit/online", desc: "在线字幕编辑", icon: "fas fa-closed-captioning", color: "#FF4500" },
            { name: "Super Flash", url: "https://x-superflash.com/", desc: "效率工具", icon: "fas fa-bolt", color: "#FFEB3B" }
        ]
    },
    {
        category: "资源下载",
        sites: [
            { name: "软仓", url: "https://www.ruancang.net/", desc: "软件资源库", icon: "fas fa-box", color: "#1890FF" },
            { name: "极速搜搜", url: "https://soso.jisuxz.com/", desc: "免费资源下载", icon: "fas fa-search-plus", color: "#52C41A" },
            { name: "MSDN我告诉你", url: "https://msdn.itellyou.cn/", desc: "Windows系统下载", icon: "fab fa-windows", color: "#0078D7" },
            { name: "PaywallBuster", url: "https://paywallbuster.com/", desc: "移除付费墙", icon: "fas fa-unlock", color: "#10B981" },
            { name: "优软汇", url: "https://www.youruanhui.com/", desc: "国内外优质软件", icon: "fas fa-download", color: "#FA541C" },
            { name: "Byrut Game", url: "https://byrutgame.org/", desc: "PC游戏免费下载", icon: "fas fa-gamepad", color: "#FF5722" },
            { name: "fmhy", url: "https://fmhy.net/beginners-guide", desc: "免费媒体指南", icon: "fas fa-book", color: "#9C27B0" },
            { name: "1lib", url: "https://1lib.education/", desc: "电子图书馆", icon: "fas fa-book-open", color: "#FF6B35" },
            { name: "淘链客", url: "https://www.toplinks.cc/s/", desc: "外链资源聚合搜索", icon: "fas fa-link", color: "#13C2C2" },
            { name: "IDM绿色版", url: "http://www.itmind.net/", desc: "下载工具", icon: "fas fa-download", color: "#FF6F00" },
            { name: "金榜题名", url: "http://qzbltushu.ysepan.com/", desc: "图书资源", icon: "fas fa-trophy", color: "#D4AF37" },
            { name: "ossnav开源精选", url: "https://github.com/maxiaobang7/ossnav", desc: "开源软件集合", icon: "fab fa-github", color: "#24292E" }
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
            { name: "Valorant准星", url: "https://www.vcrdb.net/", desc: "无畏契约准星库", icon: "fas fa-crosshairs", color: "#FF4655" }
        ]
    }
];

const categoryColors = {
    "娱乐生活": "#FF6B6B",
    "学习资源": "#4ECDC4",
    "AI工具": "#A78BFA",
    "常用工具": "#FBBF24",
    "效率办公": "#60A5FA",
    "资源下载": "#34D399",
    "游戏专区": "#F472B6"
};
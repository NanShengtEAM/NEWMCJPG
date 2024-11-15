import type { NavLink } from '.../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'MCJPG相关网站',
    items: [
      {
        icon: '/logo.png',
        title: 'MCJPG组织',
        desc: 'MCJPG组织官网',
        link: 'https://mcjpg.org',
      },
      {
        icon: '/logo.png',
        title: '图床',
        desc: 'MCJPG自建图床,支持20MB以下媒体分享',
        link: 'https://image.mcjpg.org/',
      },
      {
        icon: '/logo.png',
        title: '状态监测',
        desc: 'MCJPG各服务状态监测',
        link: 'https://status.mcjpg.org/',
      },
    ],
  },
  {
    title: '官方网站',
    items: [
      {
        icon: '/icons/nav/MC官方网站/Minecraft官网.avif',
        title: 'Minecraft官网',
        link: 'https://www.minecraft.net/',
      },
      {
        icon: '/icons/nav/MC官方网站/教育版官网.png',
        title: 'Minecraft教育版官网',
        link: 'https://education.minecraft.net/',
      },
      {
        icon: '/icons/nav/MC官方网站/MC中国版官网.ico',
        title: '《我的世界》中国版官网',
        link: 'https://mc.163.com/',
      },
      {
        icon: '/icons/nav/MC官方网站/反馈社区.png',
        title: '反馈社区',
        desc: 'Minecraft的官方反馈社区',
        link: 'https://feedback.minecraft.net/',
      },
      {
        icon: '/icons/nav/MC官方网站/Mojang Jira.png',
        title: 'Mojang Jira',
        desc: 'Minecraft的官方BUG反馈社区',
        link: 'https://feedback.minecraft.net/',
      },
      {
        icon: '/icons/nav/MC官方网站/网易版论坛.ico',
        title: '《我的世界》中国版论坛',
        desc: '《我的世界》中国版官方论坛',
        link: 'https://mc.netease.com/',
      },
    ],
  },
  {
    title: 'Unofficial BBS',
    items: [
      {
        icon: '/icons/nav/非官方论坛/Minecraft Forum.webp',
        title: 'Minecraft Forum',
        desc: '国外比较有名的非官方Minecraft论坛',
        link: 'https://www.minecraftforum.net/',
      },
      {
        icon: '/icons/nav/非官方论坛/MineBBS.png',
        title: 'MineBBS',
        desc: '一个国内的Minecraft中文论坛，主营基岩版',
        link: 'https://www.minebbs.com/',
      },
      {
        icon: '/icons/nav/非官方论坛/苦力怕论坛.png',
        title: '苦力怕论坛',
        desc: '国内的Minecraft中文论坛，主营基岩版',
        link: 'https://klpbbs.com/',
      },
      {

        icon: '/icons/nav/非官方论坛/HiMCBBS.png',
        title: 'HiMCBBS',
        desc: '国内的Minecraft中文论坛，主营Java版',
        link: 'https://www.himcbbs.com/',
      },
      {
        icon: '/icons/nav/非官方论坛/Bangbang93论坛.ico',
        title: 'Bangbang93论坛',
        desc: '十分著名的下载源国内镜像站——BMCLAPI',
        link: 'https://www.bangbang93.com',
      },
      {
        icon: '/icons/nav/非官方论坛/mcobs.png',
        title: '黑曜石论坛',
        desc: '一个国内新兴的Minecraft论坛，主营java版',
        link: 'https://www.mcobs.fun/',
      },
    ],
  },
  {
    title: 'Wiki',
    items: [
      {
        icon: '/icons/nav/百科/中文 Minecraft Wiki.ico',
        title: '中文 Minecraft Wiki',
        desc: 'Minecraft最著名的、最权威的非官方百科网站',
        link: 'https://zh.minecraft.wiki/',
      },
      {
        icon: '/icons/nav/百科/DigMinecraft.ico',
        title: 'DigMinecraft',
        desc: '一个英文Minecraft百科网站',
        link: 'https://www.digminecraft.com/',
      },
      {
        icon: '/icons/nav/百科/MC模组百科.ico',
        title: 'MC模组百科',
        desc: '国内很著名的Minecraft模组百科网站',
        link: 'https://www.mcmod.cn/',
      },
      {
        //icon: '',
        title: 'Wiki.vg',
        desc: '一个英文的Minecraft开发文档库',
        link: 'https://wiki.vg/',
      },
      {
        title: 'Minecraft 插件百科',
        desc: '一个中文Minecraft插件百科网站',
        link: 'https://mineplugin.org/',
      },
      {
        icon: '/icons/nav/百科/Minecraft Parkour Wiki.webp',
        title: 'Minecraft Parkour Wiki',
        desc: '记录Minecraft跑酷知识以及玩家运动机制的 wiki',
        link: 'https://www.mcpk.wiki/wiki/Main_Page/zh',
      },
      {
        icon: '/icons/nav/百科/笨蛋 MC 开服教程.png',
        title: '笨蛋 Minecraft 开服教程',
        desc: 'Minecraft开服教程',
        link: 'https://yizhan.wiki/NitWikit/',
      },
    ],
  },
  {
    title: 'Bedrock DEV Docs',
    items: [
      {
        icon: '/icons/nav/基岩版开发文档/MC基岩版开发Wiki.svg',
        title: 'Minecraft基岩版开发Wiki',
        link: 'https://wiki.mcbe-dev.net/',
      },
      {
        icon: '/icons/nav/基岩版开发文档/Bedrock Wik.png',
        title: 'Bedrock Wiki',
        link: 'https://wiki.bedrock.dev',
      },
      {
        icon: '/icons/nav/基岩版开发文档/bedrock.dev.png',
        title: 'bedrock.dev',
        link: 'https://bedrock.dev/',
      },
      {
        icon: '/icons/nav/基岩版开发文档/MCBE 官方创作者文档.ico',
        title: 'MinecraftBE 官方创作者文档',
        desc: '微软官方MinecraftBE创作者文档',
        link: 'https://learn.microsoft.com/zh-cn/minecraft/creator/?view=minecraft-bedrock-stable',
      },

    ],
  },
  {
    title: 'Resource Website',
    items: [
      {
        icon: '/icons/nav/资源站/MCVersions.ico',
        title: 'MCVersions',
        desc: 'Minecraft Java版各版本jar下载',
        link: 'https://mcversions.net/',
      },
      {
        icon: '/icons/nav/资源站/Minecraft for Android 版本库.ico',
        title: 'Minecraft for Android 版本库',
        desc: 'Minecraft安卓基岩版下载',
        link: 'https://bbk.endyun.ltd/',
      },
      {
        icon: '/icons/nav/资源站/Minecraft for Windows 版本库.ico',
        title: 'Minecraft for Windows 版本库',
        desc: 'MinecraftPC基岩版下载',
        link: 'https://www.mcappx.com/',
      },
      {
        icon: '/icons/nav/资源站/无极镜像.ico',
        title: 'FastMirror 无极镜像',
        desc: '快速下载多种Minecraft服务端核心',
        link: 'https://www.fastmirror.net/#/home',
      },
      {
        icon: '/icons/nav/资源站/CurseForge.ico',
        title: 'CurseForge',
        desc: '老牌Minecraft资源站',
        link: 'https://www.curseforge.com/minecraft',
      },
      {
        icon: '/icons/nav/资源站/Modrinth.ico',
        title: 'Modrinth',
        desc: '一个新兴的Minecraft第三方资源站',
        link: 'https://modrinth.com',
      },
      {
        icon: '/icons/nav/资源站/PlanetMinecraft.ico',
        title: 'PlanetMinecraft',
        desc: '一个比较著名的Minecraft资源网站',
        link: 'https://www.planetminecraft.com/',
      },
      {
        icon: '/icons/nav/资源站/SpigotMc.ico',
        title: 'SpigotMc',
        desc: 'SpigotMc的资源板块,有许多插件',
        link: 'https://www.spigotmc.org/resources/',
      },
      {
        icon: '/icons/nav/资源站/Hanger.svg',
        title: 'Hanger',
        desc: 'papermc提供的插件站',
        link: 'https://hangar.papermc.io/',
      },
      {
        title: 'Sponge Ore',
        desc: '一个Sponge服务端插件的下载站',
        link: 'https://ore.spongepowered.org/',
      },
      {
        icon: '/icons/nav/资源站/MCPEDL.ico',
        title: 'MCPEDL',
        desc: '一个Minecraft基岩版的专门资源网站',
        link: 'https://mcpedl.com/',
      },
      {
        icon: '/icons/nav/资源站/MinecraftYard.ico',
        title: 'MinecraftYard',
        desc: '收录了MinecraftJava版的一些资源',
        link: 'https://www.minecraftyard.com/',
      },
      {
        icon: '/icons/nav/资源站/Minecraft Mods.ico',
        title: 'Minecraft Mods',
        desc: '收录了一些MinecraftJava版的模组资源',
        link: 'https://www.minecraftmods.com/',
      },
      {
        icon: '/icons/nav/资源站/Minecraft Maps.ico',
        title: 'Minecraft Maps',
        desc: '一个Minecraft游戏地图的专门资源网站',
        link: 'https://www.minecraftmaps.com/',
      },
      {
        icon: '/icons/nav/资源站/Minecraft Shaders.avif',
        title: 'Minecraft Shaders',
        desc: '提供Minecraft的光影包和资源包资源',
        link: 'https://minecraftshader.com/',
      },
      {
        icon: '/icons/nav/资源站/Resourse Packs for Minecraft.png',
        title: 'Resourse Packs for Minecraft',
        desc: '主要提供Minecraft的各种资源包资源',
        link: 'https://resourcepack.net/',
      },
      {
        icon: '/icons/nav/资源站/LittleSkin.png',
        title: 'LittleSkin',
        desc: '国内老牌Minecraft皮肤站',
        link: 'https://littleskin.cn/',
      },
      {
        icon: '/icons/nav/资源站/Minecraft Skins.ico',
        title: 'Minecraft Skins',
        desc: '一个英文的Minecraft皮肤资源网站',
        link: 'https://www.minecraftskins.com/',
      },
      {
        icon: '/icons/nav/资源站/MSkins.ico',
        title: 'MSkins',
        desc: '一个英文的Minecraft皮肤资源网站',
        link: 'https://mskins.net/',
      },
      {
        icon: '/icons/nav/资源站/Minecraft Schematics.ico',
        title: 'Minecraft Schematics',
        desc: '一个英文的Minecraft投影资源网站',
        link: 'https://www.minecraft-schematics.com/',
      },
      {
        icon: '/icons/nav/资源站/Minecraft_Sounds.webp',
        title: 'Minecraft Sounds',
        desc: '一个国内Minecraft音效下载网站',
        link: 'https://o.xbottle.top/mcsounds/',
      },
    ],
  },
  {
    title: 'Server Gateway',
    items: [
      {
        icon: '/logo.png',
        title: 'MCJPG组织',
        desc: 'MCJPG组织官网',
        link: 'https://mcjpg.org',
      },
      {
        icon: '/icons/nav/服务器门户/MSCPO.webp',
        title: 'MSCPO',
        desc: '一个服务器集体宣传组织',
        link: 'https://mscpo.netlify.app/',
      },
      {
        icon: '/icons/nav/服务器门户/Minecraft Servers.png',
        title: 'Minecraft Servers',
        desc: '国外比较著名的服务器资源网站',
        link: 'https://minecraftservers.org/',
      },
      {
        icon: '/icons/nav/服务器门户/Minecraft Multiplayer.ico',
        title: 'Minecraft Multiplayer',
        desc: '国外比较著名的服务器资源网站',
        link: 'https://minecraft-mp.com/',
      },
      {
        icon: '/icons/nav/服务器门户/我的世界找服网.ico',
        title: '我的世界找服网',
        desc: '一个国内的服务器资源网站',
        link: 'https://www.mczfw.cn/',
      },
      {
        icon: '/icons/nav/服务器门户/Minecraft服务器列表.png',
        title: 'Minecraft服务器列表',
        desc: '一个国内的服务器资源网站',
        link: 'https://www.mczfw.cn/',
      },
      {
        icon: '/icons/nav/服务器门户/MCMOD服务器列表.ico',
        title: 'MCMOD服务器列表',
        desc: 'MCMOD服务器板块',
        link: 'https://play.mcmod.cn/',
      },
    ],
  },
  {
    title: 'Functional website',
    items: [
      {
        icon: '/icons/nav/功能性网站/Chunk Base.ico',
        title: 'Chunk Base',
        desc: '种子查询器、区块查询器等工具网站',
        link: 'https://www.chunkbase.com/',
      },
      {
        icon: '/icons/nav/功能性网站/Minecraft Tools.ico',
        title: 'Minecraft Tools',
        desc: '提供各种自定义等工具',
        link: 'https://minecraft.tools/',
      },
      {
        icon: '/icons/nav/功能性网站/Minecraft Server Tools.png',
        title: 'Minecraft Server Tools',
        desc: '提供各种自定义服务器的工具',
        link: 'https://mctools.org/',
      },
      {
        icon: '/icons/nav/功能性网站/Minecraft Server Status.png',
        title: 'Minecraft Server Status',
        desc: '网页MC服务器状态检测',
        link: 'https://mcsrvstat.us/',
      },
      {
        icon: '/icons/nav/功能性网站/MCS.ico',
        title: 'MCS',
        desc: '网页MC服务器状态检测',
        link: 'https://mcstatus.io/',
      },
      {
        icon: '/icons/nav/功能性网站/mclo.gs.ico',
        title: 'mclo.gs',
        desc: 'MC服务器日志分析',
        link: 'https://mclo.gs/',
      },
      {
        icon: '/icons/nav/功能性网站/Reden.png',
        title: 'Reden',
        desc: '世吞等投影文件在线生成',
        link: 'https://redenmc.com/',
      },
      {
        icon: '/icons/nav/功能性网站/MapartCraft.ico',
        title: 'MapartCraft',
        desc: 'MC像素画生成器,支持投影',
        link: 'https://rebane2001.com/mapartcraft/zh-Hans',
      },
      {
        icon: '/icons/nav/功能性网站/Minecraft PFP.png',
        title: 'Minecraft PFP',
        desc: '根据正版账号皮肤生成头像',
        link: 'https://www.minecraftpfp.com/',
      },
      {
        icon: '/icons/nav/功能性网站/GAMEGEEKS.ico',
        title: 'GAMEGEEKS',
        desc: '网页MC指令生成',
        link: 'https://www.gamergeeks.net/',
      },
      {
        icon: '/icons/nav/功能性网站/Nova Skin.png',
        title: 'Nova Skin',
        desc: '网页MC皮肤站,可以制作、上传皮肤和下载皮肤的壁纸',
        link: 'https://minecraft.novaskin.me/',
      },
      {
        icon: '/icons/nav/功能性网站/MC-3D皮肤预览.ico',
        title: 'MC-3D皮肤预览',
        desc: 'MC皮肤查询、3D预览',
        link: 'https://skin.endyun.ltd/',
      },
      {
        icon: '/icons/nav/功能性网站/Textcraft.ico',
        title: 'Textcraft',
        desc: '生成MC风格的各种艺术字',
        link: 'https://textcraft.net/',
      },
      {
        icon: '/icons/nav/功能性网站/Chunker.png',
        title: 'Chunker',
        desc: '在线MC跨版本地图转换器,支持JE和BE互转',
        link: 'https://chunker.app/',
      },
      {
        icon: '/icons/nav/功能性网站/Minecraft Heads.webp',
        title: 'Minecraft Heads',
        desc: '收集了大量MC装饰性头颅 ',
        link: 'https://www.minecraft-heads.com/',
      },
      {
        icon: '/icons/nav/功能性网站/Minecraft Shapes.ico',
        title: 'Minecraft Shapes',
        desc: '指导在MC搭建规范的图形',
        link: 'https://minecraftshapes.com/',
      },
      {
        icon: '/icons/nav/功能性网站/NameMC.ico',
        title: 'NameMC',
        desc: '查询正版玩家皮肤、名称、皮肤、UUID等信息',
        link: 'https://zh-cn.namemc.com/',
      },
      {
        icon: '/icons/nav/功能性网站/Minecraft UUID.ico',
        title: 'Minecraft UUID',
        desc: '查询正版玩家的UUID等信息',
        link: 'https://mcuuid.net/',
      },
    ],
  },
  {
    title: 'Mod and Shadow Loader',
    items: [
      {
        icon: '/icons/nav/模组和光影加载器/Forge.ico',
        title: 'Forge',
        desc: '老牌模组加载器官网',
        link: 'https://forums.minecraftforge.net/',
      },
      {
        icon: '/icons/nav/模组和光影加载器/NeoForge.ico',
        title: 'NeoForge',
        desc: 'Forge在高版本的更佳分支',
        link: 'https://neoforged.net/',
      },
      {
        icon: '/icons/nav/模组和光影加载器/Fabric.png',
        title: 'Fabric',
        desc: '新兴热门模组加载器',
        link: 'https://fabricmc.net/',
      },
      {
        icon: '/icons/nav/模组和光影加载器/Quilt.webp',
        title: 'Quilt',
        desc: 'Fabric下游分支',
        link: 'https://quiltmc.org/en/',
      },
      {
        icon: '/icons/nav/模组和光影加载器/LiteLoader.ico',
        title: 'LiteLoader',
        desc: '轻量级模组加载器,较久没更新',
        link: 'http://www.liteloader.com/',
      },
      {
        icon: '/icons/nav/模组和光影加载器/Optifine.ico',
        title: 'Optifine',
        desc: '老牌渲染优化模组高清修复,也可作为光影加载器',
        link: 'https://www.optifine.net',
      },
      {
        icon: '/icons/nav/模组和光影加载器/Iris Shaders.webp',
        title: 'Iris Shaders',
        desc: '通过Fabric驱动的Java版高版本光影加载器,与钠兼容',
        link: 'https://irisshaders.net/',
      },
    ],
  },
  {
    title: 'Luncher and Client',
    items: [
      {
        icon: '/icons/nav/启动器和客户端/Minecraft 官方启动器.avif',
        title: 'Minecraft 官方启动器',
        desc: 'MC官方启动器',
        link: 'https://www.minecraft.net/zh-hans/download',
      },
      {
        icon: '/icons/nav/启动器和客户端/HMCL.ico',
        title: 'HMCL',
        desc: '经典老牌启动器,跨平台',
        link: 'https://hmcl.huangyuhui.net/',
      },
      {
        icon: '/icons/nav/启动器和客户端/PCL2.png',
        title: 'PCL2',
        desc: '新兴启动器,适于新手',
        link: 'https://afdian.com/p/0164034c016c11ebafcb52540025c377',

      },
      {
        icon: '/icons/nav/启动器和客户端/BakaXL.ico',
        title: 'BakaXL',
        desc: '国产二次元启动器.界面美观',
        link: 'https://www.bakaxl.com/',
      },
      {

        icon: '/icons/nav/启动器和客户端/MultiMC.ico',
        title: 'MultiMC',
        desc: '国外老牌启动器,支持中文',
        link: 'https://multimc.org/',
      },
      {

        icon: '/icons/nav/启动器和客户端/中国版启动器.ico',
        title: '启动器',
        desc: '《我的世界》中国版官网',
        link: 'https://mc.163.com/',
      },
      {
        icon: '/icons/nav/启动器和客户端/Lunar Client.ico',
        title: 'Lunar Client',
        desc: '热门PVP客户端',
        link: 'https://www.lunarclient.com/',
      },
      {
        icon: '/icons/nav/启动器和客户端/Badlion Client.webp',
        title: 'Badlion Client',
        desc: '热门PVP客户端',
        link: 'https://client.badlion.net/zh-CN',
      },
      {
        icon: '/icons/nav/启动器和客户端/Labymod.ico',
        title: 'Labymod',
        desc: '热门PVP客户端',
        link: 'https://labymod.net/',
      },
      {
        icon: '/icons/nav/启动器和客户端/FEATHER CLIENT.png',
        title: 'FEATHER CLIENT',
        desc: '热门PVP客户端',
        link: 'https://feathermc.com/',
      },
    ],
  },
  {
    title: 'Practical Software',
    items: [
      {
        icon: '/icons/nav/实用软件/EaglerCraft.webp',
        title: 'EaglerCraftX',
        desc: '网页版Minecraft 版本JE1.8.8',
        link: 'https://eaglercraft.ru/',
      },
      {
        icon: '/icons/nav/实用软件/MCC.png',
        title: 'MCC',
        desc: 'Minecraft命令行客户端',
        link: 'https://mccteam.github.io/l10n/zh-Hans/',
      },
      {
        icon: '/icons/nav/实用软件/MCA Selector.png',
        title: 'MCA Selector',
        desc: 'Minecraft区块选择器,方便编辑区块,支持中文',
        link: 'https://github.com/Querz/mcaselector',
      },
      {
        icon: '/icons/nav/实用软件/WorldPainter.ico',
        title: 'WorldPainter',
        desc: 'Minecraft地形制作软件',
        link: 'https://www.worldpainter.net/',
      },
      {
        icon: '/icons/nav/实用软件/Radmin LAN.svg',
        title: 'Radmin LAN',
        desc: '虚拟局域网软件,可用于联机',
        link: 'https://www.radmin.com/cn/',
      },
      {
        icon: '/icons/nav/实用软件/Mine-imator.png',
        title: 'Mine-imator',
        desc: 'Minecraft动画制作软件',
        link: 'https://www.mineimator.com/',
      },
      {
        icon: '/icons/nav/实用软件/MCreator.ico',
        title: 'MCreator',
        desc: '可视化Minecraft模组制作软件',
        link: 'https://mcreator.net/',
      },
      {
        icon: '/icons/nav/实用软件/BlockBench.svg',
        title: 'BlockBench',
        desc: 'Minecraft建模软件',
        link: 'https://www.blockbench.net/',
      },
      {
        icon: '/icons/nav/实用软件/ServerPackCreator.png',
        title: 'ServerPackCreator',
        desc: '生成模组端服务器核心',
        link: 'https://serverpackcreator.de/#/',
      },
    ],
  },
]

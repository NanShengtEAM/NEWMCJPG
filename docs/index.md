---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: MCJPG
  text: 服务器交流组织
  tagline: 一个致力于Minecraft技术交流和服务器宣传的组织</br>无论你是玩家还是服主，这里都是优秀的交流社区
  image:
    src: /logo.png
    alt: MCJPG存档库
  actions:
    - text: 加入社区群组
      link: https://qm.qq.com/q/bAZle5ABzy
    - theme: sponsor
      text: 社区MC导航
      link: /nav/
    - theme: sponsor
      text: 组织专栏
      link: /press/
<!-- 此处的服务器将被删除 - 开始 -->
features:
  - icon:
      src: /logo.png
    title: backup-MCJPG!
    details: MCJPG存档库 </br>欢迎帮助我们添加内容，另到原MCJPG变动，本项目可能会帮助原MCJPG重建，防止官方库只读</br>
    link: https://github.com/NanShengtEAM/backup-MCJPG-
    linkText: 点此查看Github
 <!-- 此处的服务器将被删除 - 结束 -->  
 
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
<script>
export default {
  mounted() {
    this.shuffleElements();
    // 如果确实需要在挂载后调用 reload() 方法，确保该方法已经定义
    // this.reload();
  },
  methods: {
    shuffleElements() {
      const elements = Array.from(document.querySelectorAll('div.VPFeatures .container .items .item'));
      const parent = document.querySelector('div.VPFeatures .container .items');

      for (let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
      }

      // 清空父元素并将重新排序后的元素添加到父元素中
      parent.innerHTML = '';
      elements.forEach(element => {
        parent.appendChild(element);
      });
    }
  }
}
</script>
<confetti />

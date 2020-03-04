<h1 align="center">
No Ad Rule 
</h1>
<p align="center">
<sup>
     Design for<i> Clash / Loon / QuantumultX / Shadowrocket / Surge  </i>
     <br> Maintained by <b>eHpo</b>
</sup>
<br>
</p>


## 简介

主维护去广告部分规则，需开启MITM并信任证书

* [适用](#适用)
    * Clash
    * Loon
    * QuantumultX
    * Shadowrocket
    * Surge4
* [策略组及List说明](#策略组及List)
    * 富强 / 民主 / 文明
    * 和谐 / 自由
    * 平等 / 公正
    * 法治 / 爱国 / 敬业 / 诚信 / 友善
* [使用方法](#使用方法)
* [关于](#关于)
* [鸣谢](#鸣谢)
* [License](#License)

-------

## 适用

工具 | 适用平台 | 配置说明文档
| :-: | :-: | :-: |
Clash | [Windows](https://github.com/eHpo1/Rules/blob/master/Clash/Main.yaml) | [官方](https://github.com/Dreamacro/clash/blob/master/README.md)
Loon | [iOS](https://github.com/eHpo1/Rules/blob/master/Loon/Main.conf) | [官方](https://www.notion.so/6-d87bf84ba9a94ea8b4d6720cab2aa285)
QuantumultX | [iOS](https://github.com/eHpo1/Rules/blob/master/QuantumultX/Main.conf) | [官方](https://github.com/crossutility/Quantumult-X)
Shadowrocket | [iOS](https://github.com/eHpo1/Rules/blob/master/Shadowrocket/Main.conf) | 暂无
Surge4 | [iOS](https://github.com/eHpo1/Rules/blob/master/Surge4/Main.conf) | [官方](https://manual.nssurge.com)

-------

## 使用方法

>需打开MITM功能，然后安装并信任证书

* Clash
    * 暂时只能通过iOS [快捷指令](https://www.icloud.com/shortcuts/4d40ed6458e5466e812c1d116e54bbb6) 转换托管链接（支持筛选名称关键字）如果您有更好办法请联系我。
* Loon
    * 将规则文本`[Remote Proxy]`中的`https://www.example.com/example.txt`替换为您的订阅链接（两处）。
* QuantumultX
    * 将规则文本`[server_remote]`中的`https://www.example.com/example`替换为您的订阅链接（五处）。
* Shadowrocket
    * 直接导入使用。
* Surge4
    * 将规则文本`[Proxy Group]`中的`https://www.example.com/example.list`替换为您的订阅链接（五处）。

-------

## 策略组及List

> 策略组说明

* 富强 / 民主 / 文明
    * 默认代理 / 直连 / 拦截
* 和谐 / 自由
    * 亚洲媒体 / 国际媒体
* 平等 / 公正
    * 细化规则（默认Apple / Speedtest）
* 法治 / 爱国 / 敬业 / 诚信 / 友善
    * 科学分类
   
>List说明

* Liby.list
    * 通过域名 / IP去广告
* Tide.list
    * 通过中间人攻击使用正则表达式实现对广告的精准打击
* AsianMedia.list / GlobalMedia.list
    * 亚洲媒体 / 国际媒体
* Domestic.list / Global.list
    * 国内 / 国际常用网页
* /Sub
    * 分站细化规则

-------

## 关于

* 本项目早期基于ConnersHua去广告规则，参考众多大佬的项目拼凑而成。致力于打造无广告、简洁、舒适的环境。
* 如果你发现规则有需要改进的地方请通过`Github`  **提交 Issue** 的方式对项目进行补充完善。

-------

## 鸣谢

* [lhie1](https://github.com/lhie1)
* [ConnersHua](https://github.com/ConnersHua)
* [Hackl0us](https://github.com/Hackl0us)

-------

## License

[GPL-3.0](https://github.com/eHpo1/Rules/blob/master/LICENSE)
* 可使用、复制、修改、合并、散布、再许可本项目及项目的副本。

-------

<h3 align="center">
<p>感谢围观<br>祝您心明眼亮</b></p>
</h3>

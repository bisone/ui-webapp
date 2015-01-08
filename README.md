ui-webapp
=========

UI模版

执行mvn tomcat:run 后访问 http://localhost:8080



注意：

1.拷贝dist里面的所有文件到自己的目录下，放入并创建文件夹命名为soneui

2.引用css文件---先后顺序

<link rel="stylesheet" type="text/css" href="../../../css/third-party.min.css">
<link rel="stylesheet" type="text/css" href="../../../css/sone-ui.min.css">

3.引用JS文件---

<!-- third party--> 
<script type="text/javascript" src="../../../js/third-party/vendors.min.js"></script> 
<!--ui标准化组件core  包括leftMenu、Header-->
<script type="text/javascript" src="../../../js/sone-ui/sone-ui.min.js"></script> 
<!--ui标准化 通用插件 包括daterangepicker、combo等插件-->
<script type="text/javascript" src="../../../js/sone-widget/sone-widget.min.js"></script> 
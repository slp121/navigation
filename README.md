<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>oneframe</title>
<style type="text/css">
<!--
a:link {
 text-decoration: none;
}
a:visited {
 text-decoration: none;
}
a:hover {
 text-decoration: none;
}
a:active {
 text-decoration: none;
}
-->
  .p1{
      color:#990099;
	  font-size:15px;
	  /*font-face:隶书；*/
	  line-height:30px;
	  font-weight:bold;
	  text-indent:2em;
	  }
  .p2{
      color:#66ff33;
	  font-size:15px;
	  /*font-face:隶书；*/
	  line-height:30px;
	  font-weight:bold;
	  text-indent:2em;
     }
	.h1{
	    color:#0066cc;
	    font-size:35px;
	    /*font-face:隶书；*/
	    font-weight:bold;
	   }
	.h2{
	    color:#ffcc00;
	    font-size:35px;
	    /*font-face:隶书；*/
	    font-weight:bold;
	   }
  </style>
</head>

<body>
	<i class="layui-icon layui-icon-face-smile" style="font-size: 30px; color: #1E9FFF;"></i>
	 <form action="XX.php">
    <table width="800" border="0.9" align="center" cellpadding="2" cellspacing="1" bgcolor="#FFFFFF">
    
    <tr align="center" valign="middle" bgcolor="#3399CC">
     <td height="30" colspan="4" bgcolor="#FFFFFF">个人简历</td>
    </tr>
    
    <tr height="30">
     <td>用户名:</td>
     <td colspan="3"><input type="text" mane="username" size="25" maxlength="20" placeholder="请输入昵称/姓名"        / required="required" autofocus></td>
     </tr>
     
     <tr height="30">
      <td>邮箱:</td>
      <td colspan="3"><input type="text" mane="email" size="25" maxlength="20" placeholder="123@163.com"/></td>
     </tr>
     
     <tr height="30">
      <td>手机号:</td>
      <td colspan="3"><input type="text" mane="telephone" size="25" maxlength="20"/></td>
     </tr>
     
     <tr height="30">
      <td>密码:</td>
      <td colspan="3"><input type="password" name="pass" size="25" maxlength="5"/></td>
      </tr>
      
     <tr height="30" bgcolor="#00FF00">
      <td>年龄：</td>
      <td><input type="number" name="sz"></td>
      <td>性别：</td>
      <td><input type="radio" name="sex" value="男"/>男
          <input type="radio" name="sex" value="女"/>女
      </td>   
     </tr>
     
     <tr>
      <td>爱好：</td>
      <td><input type="checkbox" name="bobby" value="听音乐"/> 听音乐 
          <input type="checkbox" name="bobby" value="看电影"/>看电影
	      <input type="checkbox" name="bobby" value="打游戏"/>打游戏
	      <input type="checkbox" name="bobby" value="旅游"/>旅游
	      <input type="checkbox" name="bobby" value="打篮球"/>打篮球
       </td>
      </tr>
      <tr>
       <td>所在城市：</td>
       <td><select>
	        <option>--请选择您所在的城市--</option>
	        <option>上海</option>
		    <option>北京</option>
		    <option>成都</option>
		    <option>洛阳</option>
		    <option>郑州</option>
		    <option>南京</option>
	       </select>
        </td>
       </tr>
       
       <tr>
        <td>喜欢的颜色：</td>
        <td><input type="color" name="ys"></td>
       </tr>
       
       <tr>
        <td>工作经历：</td>
        <td><textarea name="sign" cols="30" rows="10"></textarea></td>
       </tr>
       
       <tr>
        <td>选择上传的文件:</td>
        <td><input type="file" name="filename"/></td>
       </tr>  
      
       <tr>
        <td>网址:</td>
        <td><input type="url" name="dz"></td>
       </tr>
       
       <tr>
        <td>日期:</td>
        <td><input type="date" name="rq"></td>
       </tr>
       
       <tr>
        <td>时间:</td>
        <td><input type="time" name="sj"></td>
       </tr>
       
       <tr>
        <td>周:</td>
        <td><input type="week" name="z"></td>
       </tr>
       
       <tr>
        <td>搜索:</td>
        <td><input type="search" name="ss"></td>
       </tr>
       
       <tr>
        <td>亮度:</td>
        <td><input type="range" name="hk"></td>
       </tr>
       
       <tr>
        <td><input type="submit" value="提交"/></td>
        <td><input type="reset" value="重置"/></td>
        <td><input type="button" value="点赞" onclick="javascript:window.alert('您已点赞！谢谢浏览此网页，欢迎下次再来(-_-)嘻嘻...')"/></td>
        <td><input type="button" value="关闭" onclick="javascript:window.close()"/></td>
       </tr>
       
       
      </table>


<!--
 网址:<input type="url" name="dz"><br/>
 日期:<input type="date" name="rq"><br/>
 月份:<input type="month" name="yf"><br/>
 时间:<input type="time" name="sj"><br/>
 周:<input type="week" name="z"><br/>
 搜索:<input type="search" name="ss"><br/>
 颜色:<input type="color" name="ys"><br/>
 亮度:<input type="range" name="hk"><br/>
 个数:<input type="number" name="sz"><br/>
 <input type="hidden" name="id"/>只给程序看<br/>
 

	<input type="submit" value="提交"/>
    <input type="reset" value="重置"/>
    <input type="button" value="点赞" onclick="javascript:window.alert('您已点赞！谢谢浏览此网页，欢迎下次再来(-_-)嘻嘻...')"/>
    <input type="button" value="关闭" onclick="javascript:window.close()"/><br/>

-->

  < div  align = “center” >
    <video controls>
     <source src="资源/视频.mkv">
     <source src="资源/视频.mp4">
     <source src="资源/视频.webm">
    </video>
    </body>
    </html>

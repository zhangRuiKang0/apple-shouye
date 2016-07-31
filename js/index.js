$(function(){
    $('.header .nav .search').on('click',function(e){
        e.preventDefault();
        $('.header .searchbox,.header .xiaoshi,.zhezhao,body').addClass('searching');
    });
    $('.guanbi').on('click',function(){  
        $('.header .searchbox,.header .xiaoshi,.zhezhao,body').removeClass('searching');
	});
   $('.header .header-inner .nav-iphone .menu').on('click',function (e) {
	   e.preventDefault();
        $('.nav-iphone .menu .hang,.nav-iphone .menu .lie,.xiaozhezhao,.xiaozhezhao ul li,.nav-iphone .bag').toggleClass('dian');
	   $('body').toggleClass('searching');
   })
 //轮播图
var win=$(".banner")[0];//窗口
var as=$("li",$(".content")[0]);//img
var lis=$("li",$(".paganation")[0]);
var width=parseInt(getStyle(as[0],"width"));
var num=0;
var next=0;
var btnl=$(".moveleft")[0];
var btnr=$(".moveright")[0];
//就位
for (var i = 0; i < as.length; i++) {
	if(i==0){
		continue;
	}
	as[i].style.left=width+"px";
};

var t=setInterval(moveL,2000);

win.onmouseover=function(){
	btnl.style.display="block";
	btnr.style.display="block";
	clearInterval(t);
};
win.onmouseout=function(){
	btnl.style.display="none";
	btnr.style.display="none";
	t=setInterval(moveL,2000);
};

//点点点变图

for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onclick=function(){
       if (num==this.index) {
			return;
		};
		as[this.index].style.left=width+"px";
	  lis[num].className="";
	  lis[this.index].className="dian";
		animate(as[num],{left:-width});
		animate(as[this.index],{left:0});
		next=this.index;
		num=this.index;
	}
};

//点左右小框换图
var flag=true;
btnl.onclick=function(e){
	e.preventDefault();
	if (flag) {
		flag=false;
		moveR();};
	
};
btnr.onclick=function(e){
	e.preventDefault();
	if (flag) {
		flag=false;
		moveL();};
	
};



function moveR(){
	next++;
	if (next==as.length) {next=0};
	//就位
	as[next].style.left=width+"px";
	//按钮
	lis[num].className="";
	lis[next].className="dian";
     //动画
	animate(as[num],{left:-width});
	animate(as[next],{left:0},function(){
    	flag=true});
	//更新下标
	num=next;
}
function moveL(){
	next--;
	if(next<0){next=as.length-1};
	as[next].style.left=-width+"px";
	lis[num].className="";
	lis[next].className="dian";
	animate(as[num],{left:width});
	animate(as[next],{left:0},function(){
    	flag=true});
	num=next;
}


 $('.nav-footer ul').on('click',function(e){
 	e.stopPropagation();
        $(this).find('li').slideToggle();
        $(this).find('span').toggleClass('bianda');
        $(this).find('.jiahao').toggleClass('zhuan');
    })

})
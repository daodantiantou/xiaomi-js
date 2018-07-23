/*
* @Author: Administrator
* @Date:   2018-07-20 13:31:52
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-23 18:01:10
*/
window.onload=function (){
	//购物车
	let nav3=document.getElementsByClassName("nav3")[0];
	let a=nav3.getElementsByTagName("a")[0];
	let nav3box=document.getElementsByClassName("nav3box")[0];
	
	a.onmouseenter=function(){
		nav3box.style.height="98px";
		nav3box.style.boxShadow="0 2px 10px rgba(0,0,0,0.15)";
	}
	a.onmouseleave=function(){
		nav3box.style.height="0px";
		nav3box.style.boxShadow="none";
	}



	//侧导航
	let aside=document.getElementsByClassName('aside')[0];
	let li=aside.getElementsByTagName('li')
	let asidebox=document.getElementsByClassName('asidebox');
	console.log(aside,asidebox);

	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			for(j=0;j<asidebox.length;j++){
				asidebox[j].style.display="none";
				li[j].style.background="none";
			}
			asidebox[i].style.display="block";
			li[i].style.background="#ff6700";
		}



		li[i].onmouseleave=function(){
			asidebox[i].style.display="none";
			li[i].style.background="none";
		}
	}
	
	//家电
	let jiadian=document.getElementsByClassName('jiadian')[0];
	let top=jiadian.getElementsByClassName('top')[0]
	let span=top.getElementsByTagName('span');
	let rightbox=jiadian.getElementsByClassName('rightbox');
	console.log(rightbox);	

	for(let i=0;i<span.length;i++){
		span[i].onmouseenter=function(){
			for(let j=0;j<rightbox.length;j++){
			rightbox[j].style.display="none";
			span[j].style.color="#000";
			span[j].style.borderBottom="none";
		}
			rightbox[i].style.display="block";
			span[i].style.color="#ff6700";
			span[i].style.borderBottom="2px solid #ff6700";
		}
	}
			
	
	function hanshu(canshu){
		
		let top=canshu.getElementsByClassName('top')[0]
		let span=top.getElementsByTagName('span');
		let rightbox=canshu.getElementsByClassName('rightbox');


			for(let i=0;i<span.length;i++){
			span[i].onmouseenter=function(){
				for(let j=0;j<rightbox.length;j++){
				rightbox[j].style.display="none";
				span[j].style.color="#000";
				span[j].style.borderBottom="none";
			}
				rightbox[i].style.display="block";
				span[i].style.color="#ff6700";
				span[i].style.borderBottom="2px solid #ff6700";
			}
		}
	}
let zhineng=document.getElementsByClassName('zhineng')[0];
let dapei=document.getElementsByClassName('dapei')[0];
let peijian=document.getElementsByClassName('peijian')[0];
let zhoubian=document.getElementsByClassName('zhoubian')[0];




	hanshu(zhineng);
	hanshu(dapei);
	hanshu(peijian);
	hanshu(zhoubian);
	
	//头部导航
	let biglogo=document.getElementsByClassName('biglogo')[0];
	let navbox=biglogo.getElementsByClassName('navbox');
	let spanbox=biglogo.getElementsByClassName('spanbox');
	let span1=biglogo.getElementsByTagName('span');
	let dingwei=biglogo.getElementsByClassName('dingwei');

	

	for(let i=0;i<span1.length;i++){
		dingwei[i].onmouseenter=function(){
			for(let j=0;j<span1.length;j++){
				navbox[j].style.display="none";
			}
			navbox[i].style.display="block";
			navbox[i].style.height="179px";
			navbox[i].style.borderBottom="1px solid #ECECEC";
			navbox[i].style.borderTop="1px solid #ECECEC";
			navbox[8].style.display="none";
			navbox[9].style.display="none";
		}
	}

	for(let i=0;i<span1.length;i++){
		dingwei[i].onmouseleave=function(){
			navbox[i].style.height="0px";
			navbox[i].style.borderBottom="none";
			navbox[i].style.borderTop="none";
		}
	}



	let wraper=document.getElementsByClassName('wraper')[0];
	let banner=document.getElementsByClassName('banner')[0];
	let zuohua=banner.getElementsByClassName('zuohua')[0];
	let youhua=banner.getElementsByClassName('youhua')[0];
	let a3=wraper.getElementsByTagName('a');
	console.log(a3);

	let t=setInterval(fn,2000)
	let num=0;
	function fn(){
		num++;
		if(num==a3.length){
			num=0;
		}
		for(let i=0;i<a3.length;i++){
				a3[i].style.zIndex='5';
			}
		a3[num].style.zIndex="10";
		
	}

	function fn1(){
		num--;
		if(num<0){
			num=a3.length-1;
		}
		for(let i=0;i<a3.length;i++){
				a3[i].style.zIndex='5';
			}
		a3[num].style.zIndex="10";
		
	}
	banner.onmouseenter=function(){
			clearInterval(t);
		}
	banner.onmouseleave=function(){
		t=setInterval(fn,2000);
	}
    zuohua.onclick=function(){
    	fn1();
    }
    youhua.onclick=function(){
    	fn();
    }

}
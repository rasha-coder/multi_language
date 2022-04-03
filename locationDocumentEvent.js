//location////
// var protocol=location.protocol;//http or https يظهر نوع العنوان اذاكان 
// //alert(location.href);//url
// location.hostname;//site domain 
// location.pathname;//لمعرفه مكان او مسار الملف
// location.reload();//يقوم بعمل إعاده تحميل للصفحه
// location.assign();//إعاده التحويل للصفحه معينه مع حفظ بيانات المستخدم مثل العوده للصغحه السابقه 
// location.replace();//إعاده التحويل للصفحه معينه دون حفظ بيانات المستخدم مثل عدم القدره للعوده للصغحه السابقه

let path=location.pathname;
let index=path.lastIndexOf("/")+1;
let filename=path.substring(index);
let arabic=document.getElementById("arabic")
let english=document.getElementById("english")
let translte_word=document.getElementById("name")
let alerte=document.getElementById("alert")
let about=document.getElementById("about")
let se=document.getElementById("se")
let learn=document.getElementById("learn")
let contact=document.getElementById("contact")
//alert(filename);
if(filename=="home.html"){
	document.body.style.background="yellow"
//translte_word.innerHTML="hi rasha you are in home.html"
document.title="rasha home"
arabic.onclick=()=>{
getitem("arabic");

localStorage.setItem("key","arabic")
}
english.onclick=()=>{
getitem("english")

localStorage.setItem("key","english")
}

function getitem(word){
if(word=="arabic"){
translte_word.innerText="هاي رشا"
alerte.innerText="مرحبا في موقعنا رشا محمود"
about.innerText="معلومات عنا"
se.innerText="انا مهندسة برمجيات"
	learn.innerText="انا تعلمت الكثير عن لغات البرمجه مع شيار"
	contact.innerText="اتصل بنا"
}else if(word=="english"){
	translte_word.innerText="hi rasha"
	alerte.innerText="welcome to our website rasha mahmoud"
	about.innerText="about us"
	se.innerText="I'm Software Enginering"
	learn.innerText="I learn alot about html and css and javascript from shyar"
	contact.innerText="contact us"
}

}
onload=()=>{
getitem(localStorage.getItem("key"))
};



}
else if(filename=="loc.html"){
	document.body.style.background="red"
	//mouse event//
// document.getElementById("titel").addEventListener("contextmenu",()=>{
// alert("نقرت يمين الماوس")

// });
// document.getElementById("titel").addEventListener("dblclick",()=>{
// 	alert("نقرت  مرتين")
	
// 	});
// 	document.getElementById("titel").addEventListener("mousedown",()=>{
// 		alert("ضغط تحت العنصر")
		
// 		});
// 		document.getElementById("titel").addEventListener("mouseenter",()=>{
// 			alert("ذهبت  فوق العنصر")
			
// 			});
// 			document.getElementById("titel").addEventListener("mouseleave",()=>{
// 				alert("ذهبت  بعيد عن العنصر")
				
// 				});
// 				document.getElementById("titel").addEventListener("mousemove",()=>{
// 					alert("ذهبت للعنصر")
					
// 					});
// 					document.getElementById("titel").addEventListener("mouseout",()=>{
// 						alert("ذهبت  بعيد عن العنصر وعناصره الداخليه")
						
// 						});
// 						document.getElementById("titel").addEventListener("mouseover",()=>{
// 							alert("ذهبت  الي  العنصر وعناصره الداخليه")
							
// 							});
// 							document.getElementById("titel").addEventListener("mouseup",()=>{
// 								alert("ضغط علي العنصر باحد ازرار الماوس")
let h=document.getElementById("h")								
// 								});
//keyboard event//
onkeyup=()=>{
	//alert("نقرت علي احد ازرار الكيبورد ورفعت اصبعك")
	keyName(event)
}
 onkeydown=()=>{
// 	alert("نقرت علي احد ازرار الكيبورد دون رفع الاصبع ")
	keyName(event)
}
document.addEventListener("keypress",(event)=>{
	//in event listener ,onkeyup="keyup",onkeydown=keydown,onkeypress=keypress
//alert("this is"+event.key);
if(event.key==="Enter"){
h.innerHTML="welcom enter"
}
});
//on copy - oncut - onpaste//
let h2=document.getElementById("h2")
function oncoppy(){
alert("copy")
}
h2.addEventListener('cut',function cut(){
alert("cut")
})
var inpute=document.getElementById("input")
inpute.onpaste = e => {
    e.preventDefault();
    return false;
  };
}

//document///
// document.URL//website addres 
// document.documentURI//==document.URL
// document.domain//اسم الموقع
// document.title="rasha"//اسم الصفحه
// document.head.innerHTML+="<style>body{background:black;}</style>";
// document.body.onload=()=>{
// alert(document.title)
// }
// document.images.length//تعطينا عدد الصور الموجود في الصفحه
// document.embeds
// document.links.length//a عدد عناصر 
// document.forms.length//

// document.images[0].src="logo.png";//لتحديد الصوره معينه والتعديل عليها
// for (var item in document.images) {//لتعديل علي جميع العناصر
// 	document.images[item].src="logo.png";
// 	document.images[item].width="200";
// }
function AreUSure(){
	return"";
}
function beforPrint(){
	alert("print is opened")
}
function afterPrint(){
	alert("printed done")
}
function keyName(event){
	//alert(event.key)//يعطي المفتاح الذي تم الضغط عليه
	//alert(event.code)//يعطي كود المفتاح
		
		h.innerText="you press   "+event.key+"   "+event.code
	
}
let variable,name;
window.addEventListener('load',function(){
	var toggle = document.getElementById("toggle");
	toggle.addEventListener('click',function(event){
		event.preventDefault();
		document.getElementById("nav-header").classList.toggle("open");
		document.getElementById("body").classList.toggle("overflow-hidden");
	})

	
	var lastScrollTop = 0;
	window.addEventListener("scroll",function(){
		var currentScroll = window.pageYOffset ||window.body.scrollTop;
		if(currentScroll>lastScrollTop){
			console.log("down");
		}
		else{
			console.log("up");
		}
		lastScrollTop = currentScroll;
	});

	var block  = document.getElementById("coders");
	var coders = [{nombre:"Fiorella Quispe", link:"assets/img/students/1.png"},{nombre:"Lourdes Vilchez", link: "assets/img/students/2.png"},
				  {nombre:"Rossmery Maldonado", link: "assets/img/students/3.png"}, {nombre:"Yessenia Huamán", link:"assets/img/students/4.png"},
				  {nombre: "Miriam Perralta", link: "assets/img/students/5.png"}, {nombre:"Elizabeth Condori", link:"assets/img/students/6.png"},
				  {nombre:"Arantza Burga", link: "assets/img/students/7.png"}, {nombre:"Grecia Rayme", link:"assets/img/students/8.png"},
				  {nombre:"Janine Vega", link: "assets/img/students/9.png"}, {nombre:"Rosario Felix", link:"assets/img/students/10.png"},
				  {nombre:"Daguiana Revoredo", link: "assets/img/students/11.png"}, {nombre:"Jenny Velasquez", link:"assets/img/students/12.png"},
				  {nombre:"Nadia Cuadros", link: "assets/img/students/13.png"}, {nombre:"Michell More", link:"assets/img/students/14.png"},
				  {nombre:"Marilu Llamocca", link: "assets/img/students/15.png"}, {nombre:"Mariel Garcia", link:"assets/img/students/16.png"},
				  {nombre:"Fiorella Cisneros", link: "assets/img/students/17.png"}, {nombre:"Geraldine Chauca", link:"assets/img/students/18.png"},
				  {nombre:"Yelitza Rivera", link: "assets/img/students/19.png"}, {nombre:"Stephanie Hiyagon", link:"assets/img/students/20.png"},
				  {nombre:"Emma Tapia", link: "assets/img/students/21.png"}, {nombre:"Danna Franco", link:"assets/img/students/22.png"},
				  {nombre:"Flor Retamozo", link: "assets/img/students/23.png"}, {nombre:"Nathaly Pacheco", link:"assets/img/students/24.png"},
				  {nombre:"Ericka Vidal", link: "assets/img/students/25.png"}, {nombre:"Katherine Ortega", link:"assets/img/students/26.png"},
				  {nombre:"Brilly Majuan",link: "assets/img/students/27.png"}, {nombre:"Flor Tello", link:"assets/img/students/28.png"},
				  {nombre:"Leslie Avendaño", link: "assets/img/students/29.png"}, {nombre:"Cindy Mendoza", link:"assets/img/students/30.png"},
				  {nombre:"Annia Flores", link: "assets/img/students/31.png"}, {nombre:"Betsi Loayza", link:"assets/img/students/32.png"},
				  {nombre:"Aida Sulca", link: "assets/img/students/33.png"}, {nombre:"Milagros Gutierrez", link:"assets/img/students/34.png"},
				  {nombre:"Nakarid Jave", link: "assets/img/students/35.png"}, {nombre:"Angie Cóndor", link:"assets/img/students/36.png"},
				  {nombre:"Maricarmen Rojas", link: "assets/img/students/37.png"}, {nombre:"Ariana Cabana", link:"assets/img/students/38.png"},
				  {nombre:"Flor Condori", link: "assets/img/students/39.png"}, {nombre:"Mitch Rodríguez", link:"assets/img/students/40.png"},
				  {nombre:"Naomi Villanueva", link: "assets/img/students/41.png"}, {nombre:"Mari Castillo", link:"assets/img/students/42.png"},
				  {nombre:"Miriam Peralta", link: "assets/img/students/43.png"}, {nombre:"Karin Alejo", link:"assets/img/students/44.png"},
				  {nombre:"Liliana Peña", link: "assets/img/students/45.png"}, {nombre:"Ruth Salvador", link:"assets/img/students/46.png"},
				  {nombre:"Maribel Sevilla", link: "assets/img/students/47.png"}, {nombre:"Wendy Reyes", link:"assets/img/students/48.png"},
				  {nombre:"Cinthia", link: "assets/img/students/49.png"}, {nombre:"Maria Grecia Cutipa",link:"assets/img/students/50.png"},
				  {nombre:"Ana Durand", link: "assets/img/students/51.png"}, {nombre:"Glisse Jorge", link:"assets/img/students/52.png"},
				  {nombre:"Neiza Nuñez", link: "assets/img/students/53.png"}, {nombre:"Sandra Solorzano", link:"assets/img/students/54.png"},
				  ];

	for(var i in coders){
		crearEstructura(coders[i].nombre,coders[i].link);
	}
	
	function crearEstructura(name, url){
		var figure = document.createElement("figure");
		figure.setAttribute("class","figure");
		var span = document.createElement("span");
		span.setAttribute("class","mark-up");
		var text = document.createTextNode(name);
		span.appendChild(text);
		var img = document.createElement("img");
		img.setAttribute("class","img-box");
		img.setAttribute("src",url);
		img.setAttribute("alt",name);
		var figCaption = document.createElement("figcaption"); 
		figCaption.setAttribute("class","center");
		figure.appendChild(span);
		figure.appendChild(img);
		figure.appendChild(figCaption);
		block.appendChild(figure);
	}
})


// Ejercicios function y objeto
// var locos = [{nombre:"loco1",amigos:["jorge","pepito"],correr: function(){console.log("50km")}},
// 				  {nombre:"loco2",amigos:["jorge","angie"],correr: function(){console.log("80km"); return 1}}
// 				  ]
	// var locos = {nombre:"loco1",amigos:["jorge","pepito"]}
// 	console.log(locos[1].correr());
// 	console.log(locos.nombre);
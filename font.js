var fonts = ["Aclonica","Allan","Annie Use Your Telescope","Anonymous Pro","Allerta Stencil",
    "Allerta",
    "Amaranth",
    "Anton",
    "Architects Daughter",
    "Arimo",
    "Artifika",
    "Arvo",
    "Asset",
    "Astloch",
    "Bangers",
    "Bentham",
    "Bevan",
    "Bigshot One",
    "Bowlby One",
    "Bowlby One SC",
    "Brawler",
    "Buda:300",
    "Cabin",
    "Calligraffitti",
    "Candal",
    "Cantarell",
    "Cardo",
    "Carter One",
    "Caudex",
    "Cedarville Cursive",
    "Cherry Cream Soda",
    "Chewy",
    "Coda",
    "Coming Soon",
    "Copse",
    "Corben",
    "Cousine",
    "Covered By Your Grace",
    "Crafty Girls",
    "Crimson Text",
    "Crushed",
    "Cuprum",
    "Damion",
    "Dancing Script",
    "Dawning of a New Day",
    "Didact Gothic",
    "Droid Sans",
    "Droid Sans Mono",
    "Droid Serif",
    "EB Garamond",
    "Expletus Sans",
    "Fontdiner Swanky",
    "Forum",
    "Francois One",
    "Geo",
    "Give You Glory",
    "Goblin One",
    "Goudy Bookletter 1911",
    "Gravitas One",
    "Gruppo",
    "Hammersmith One",
    "Holtwood One SC",
    "Homemade Apple",
    "Inconsolata",
    "Indie Flower",
    "Irish Grover",
    "Irish Growler",
    "Istok Web",
    "Josefin Sans",
    "Josefin Slab",
    "Judson",
    "Jura",
    "Just Another Hand",
    "Just Me Again Down Here",
    "Kameron",
    "Kenia",
    "Kranky",
    "Kreon",
    "Kristi",
    "La Belle Aurore",
    "Lato",
    "League Script",
    "Lekton",  
    "Limelight",  
    "Lobster",
    "Lobster Two",
    "Lora",
    "Love Ya Like A Sister",
    "Loved by the King",
    "Luckiest Guy",
    "Maiden+Orange",
    "Mako",
    "Maven Pro",
    "Meddon",
    "MedievalSharp",
    "Megrim",
    "Merriweather",
    "Metrophobic",
    "Michroma",
    "Miltonian Tattoo",
    "Miltonian",
    "Modern Antiqua",
    "Monofett",
    "Molengo",
    "Mountains of Christmas",
    "Muli", 
    "Neucha",
    "Neuton",
    "Nobile",
    "Nunito",
    "Open Sans",
    "Orbitron",
    "Oswald",
    "Over the Rainbow",
    "Reenie Beanie",
    "Pacifico",
    "Patrick Hand",
    "Paytone One", 
    "Permanent Marker",
    "Philosopher",
    "Play",
    "Playfair+Display",
    "Podkova",
    "PT Sans",
    "PT Sans Narrow",
    "PT Sans Narrow",
    "PT Serif",
    "PT Serif Caption",
    "Puritan",
    "Quattrocento",
    "Quattrocento Sans",
    "Radley",
    "Raleway",
    "Redressed",
    "Rock Salt",
    "Rokkitt",
    "Roboto",
    "Ruslan Display",
    "Schoolbell",
    "Shadows Into Light",
    "Shanti",
    "Sigmar One",
    "Six Caps",
    "Slackey",
    "Smythe",
    "Sniglet",
    "Special Elite",
    "Stardos Stencil",
    "Sue Ellen Francisco",
    "Sunshiney",
    "Swanky and Moo Moo",
    "Syncopate",
    "Tangerine",
    "Tenor Sans",
    "Terminal Dosis Light",
    "The Girl Next Door",
    "Tinos",
    "Ubuntu",
    "Ultra",
    "Unkempt",
    "UnifrakturCook",
    "UnifrakturMaguntia",
    "Varela",
    "Varela Round",
    "Vibur",
    "Vollkorn",
    "VT323",
    "Waiting for the Sunrise",
    "Wallpoet",
    "Walter Turncoat",
    "Wire One",
    "Yanone Kaffeesatz",
    "Yanone Kaffeesatz",
    "Yeseva One",
    "Zeyada"
];
var string = "";
var select = document.getElementById("select");
var select2 = document.getElementById("select2");
for(var a = 0; a < fonts.length ; a++){
	var opt = document.createElement('option');
	opt.value = opt.innerHTML = fonts[a];
	opt.style.fontFamily = fonts[a];
	select.add(opt);
}

for(var a = 0; a < fonts.length ; a++){
	var opt = document.createElement('option');
	opt.value = opt.innerHTML = fonts[a];
	opt.style.fontFamily = fonts[a];
	select2.add(opt);
}
function fontChange(){
	var x = document.getElementById("select").selectedIndex;
  var y = document.getElementById("select").options;
	document.body.insertAdjacentHTML("beforeend", "<style> #text{ font-family:'"+y[x].text+"';}"+
																 "#select{font-family:'"+y[x].text+"';</style>");
     
    
    var selected = document.getElementById("select").value;
   document.querySelector('.whatcolor').innerText = selected;
}

function fontChange2(){
	var x = document.getElementById("select2").selectedIndex;
  var y = document.getElementById("select2").options;
	document.body.insertAdjacentHTML("beforeend", "<style> #text2{ font-family:'"+y[x].text+"';}"+
																 "#select2{font-family:'"+y[x].text+"';</style>");
     
    
    var selected = document.getElementById("select2").value;
   document.querySelector('.whatcolor2').innerText = selected;
}

fontChange();
fontChange2();
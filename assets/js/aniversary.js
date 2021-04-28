setTimeout(console.log.bind(console, "%c #59añosROJ %c", "background: #1471B9; font-size: 25px; color:#FFF;padding:5px;border-radius: 5px;line-height: 26px;", ""));
console.log();
function btnModal() {
    let anho=document.getElementById('numAnho').value;
    let leyenda="--";

switch(anho){
	case '1960': 
		leyenda="Se inició con la construcción del Radio Observatorio de Jicamarca (ROJ), en Lurigancho - Chosica, con la finalidad de realizar estudios sobre la Ionósfera Ecuatorial en suelo peruano. Su construcción fue financiado por la NBS (National Bureau of Standars, por sus siglas en inglés) de los Estados Unidos, bajo la dirección del Dr. Kenneth Bowles, quien fue el primer director del ROJ.";
		break;
	case '1961': 
		leyenda="Primera medición de la densidad de la ionósfera  con 1/8 de la antena del radar ionosférico de Jicamarca, herramienta principal del Radio Observatorio de Jicamarca, construido para estudiar la Ionosfera. El radar fue desarrollado para un uso de sólo 10 años. Gracias a su constante actualización tecnológica, el radar sigue vigente hasta la actualidad.";
		break;
	case '1962': 
		leyenda="Se culminó con la construcción total del radar ionosférico, instalado en el Radio Observatorio de Jicamarca, el más grande entre los radares de dispersión incoherente en el mundo. El radar está compuesto por 18,432 antenas dipolo distribuidos en un arreglo cuadrado de 300 × 300 m2 equivalentes a 10 canchas de futbol. Esta potente herramienta científica opera a 50 MHz.";
		break;
	case '1963': 
		leyenda="El radar ionosférico instalado en el Radio Observatorio de Jicamarca realizó las primeras observaciones de densidad de la magnetósfera llegando a 10,000 km de altura, las mediciones más altas realizadas desde tierra hasta la fecha.";
		break;
	case '1964': 
		leyenda="El Dr. Donald Farley, doctor en Ingeniería Física de la Universidad de Cornell (USA), asumió la dirección del Radio Observatorio de Jicamarca. Durante su estadía en Jicamarca, entre las décadas de 1960 y 1970, desarrolló los principios de la teoría de dispersión incoherente de ondas de radio para el estudio de la atmósfera superior ionizada, particularmente la ionosfera ecuatorial.";
		break;
	case '1965': 
		leyenda="Se culminó con la construcción de la antena llamada colchoneta para el estudio del Electrochorro Ecuatorial (EEJ por sus siglas en inglés). El Electrochorro Ecuatorial es un fenómeno que ocurre en la capa E de la ionósfera a 100 km de altura y consiste en un flujo horizontal de electrones a lo largo del Ecuador magnético. Gracias al EEJ es posible realizar enlaces de radiocomunicaciones vía dispersión coherente usando frecuencias en la banda VHF.";
		break;
	case '1966': 
		leyenda="El Dr. Donald Farley, director del Radio Observatorio de Jicamarca, propone incluir los efectos del campo magnético y la desigualdad de temperaturas de iones y electrones en la teoría de dispersión incoherente de ondas de radio en un plasma. La imagen nos muestra perfiles medidos al mediodía de temperatura, composición de iones y densidad de electrones que se extienden hasta la protonósfera. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/JZ071i017p04091' target='_blank'>https://doi.org/10.1029/JZ071i017p04091</a>";
		break;
	case '1967': 
		leyenda="El Dr. Tor Hagfors asume la dirección del Radio Observatorio de Jicamarca. Él fue uno de los radiocientíficos que contribuyeron con el desarrollo de la teoría de dispersión incoherente. Durante su estancia en Jicamarca, desarrolló e implementó una técnica de radar para medir la permitividad (ϵ) de la superficie de la Luna. Los resultados dieron información indirecta sobre la consistencia de la superficie lunar,  lo que contribuyó con la NASA para realizar el primer aterrizaje lunar.";
		break;
	case '1968': 
		leyenda="Se publicó el estudio sobre la “Eficiencia del calentamiento de fotoelectrones en la ionósfera”, propuesto por Robert W. B. Hanson, quien utilizó las mediciones realizadas con el radar ionosférico del Radio Observatorio de Jicamarca para dicho estudio. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/JA073i003p00831' target='_blank'>https://doi.org/10.1029/JA073i003p00831</a>";
		break;
	case '1969': 
		leyenda="El National Bureau of Standards (NBS) de los Estados Unidos realizó la transferencia de la dirección del Radio Observatorio de Jicamarca (ROJ) al Instituto Geofísico del Perú, asumiendo la dirección el Dr. Ronald Woodman. Desde la fecha, el ROJ opera con fondos del gobierno peruano y contribuciones de diversas entidades internacionales, principalmente de la National Science Foundation (EE.UU.) a través de un convenio de cooperación con la Universidad de Cornell.";
		break;
	case '1970': 
		leyenda="Se publicó la investigación sobre “La F-dispersa ecuatorial: Implicancias de las observaciones con radar VHF”, donde se analizaron las características de este fenómeno utilizando las mediciones realizadas con el radar ionosférico del Radio Observatorio de Jicamarca. Estas observaciones mostraron que las teorías de ese tiempo sobre el origen de la F-dispersa no explicaban todas las características, por lo que era importante continuar con los estudios sobre este fenómeno. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/JA075i034p07199' target='_blank'>https://doi.org/10.1029/JA075i034p07199</a>";
		break;
	case '1971': 
		leyenda="El Dr. Woodman, director del Radio Observatorio de Jicamarca, propuso una nueva técnica de observación que consistió en la medición de la inclinación del campo magnético de la Tierra en las alturas de la región F, demostrando que los modelos geomagnéticos de ese tiempo requerían mejorar su precisión. Este trabajo fue el origen de la técnica de interferometría de radar que viene siendo usada en el mundo para diferentes aplicaciones. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/JA076i001p00178' target='_blank'>https://doi.org/10.1029/JA076i001p00178</a>";
		break;
	case '1972': 
		leyenda="Las mediciones realizadas en el Radio Observatorio de Jicamarca permitieron estudiar los efectos de la variación lunar sobre el electrochorro ecuatorial y sobre el campo magnético de la Tierra. Nuevas técnicas de observación se realizaron gracias al uso de computadoras modernas de esos años, como la PB250 y la Datacraft (probablemente unas de las primeras computadoras existentes en el Perú).";
		break;
	case '1973': 
		leyenda="Se construyó la base científica de lanzamiento de cohetes, en Punta Lobos -  actual estación de CONIDA, como una iniciativa del Instituto Geofísico del Perú. El objetivo de esta base fue realizar mediciones simultáneas de la ionósfera utilizando instrumentación a bordo de cohetes y el radar de dispersión incoherente del Radio Observatorio de Jicamarca.";
		break;
	case '1974': 
		leyenda="Utilizando el radar del Radio Observatorio de Jicamarca, se desarrolló la técnica de radares atmosféricos conocida como MST (Mesosphere, Stratosphere, Troposphere) para la medición de vientos y turbulencias de aire claro en estas capas de la atmósfera. Actualmente esta técnica es utilizada por radares esparcidos por todo el mundo. En la imagen se visualiza datos obtenidos en la tropósfera. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1175/1520-0469(1974)031<0493:ROOWAT>2.0.CO;2' target='_blank'>https://doi.org/10.1175/1520-0469(1974)031<0493:ROOWAT>2.0.CO;2</a>";
		break;
	case '1975': 
		leyenda="Se construyó un nuevo arreglo de antenas tipo CO-CO, en el Radio Observatorio de Jicamarca, utilizando cables coaxiales, una técnica que se volvió muy popular en el observatorio desde entonces. El haz de este arreglo era lo suficientemente delgado en la dirección este-oeste para realizar estudios espectrales oblicuos del electrochorro ecuatorial con una resolución de altitud de hasta 1.1 km. Estas observaciones permitieron corroborar experimentalmente algunas de las teorías sobre el origen del electrochorro ecuatorial existentes en aquellos años. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/JA080i010p01307' target='_blank'>https://doi.org/10.1029/JA080i010p01307</a>";
		break;
	case '1976': 
		leyenda="Los estudios realizados con el radar ionosfério del Radio Observatorio de Jicamarca permitieron caracterizar y analizar el origen de las irregularidades en la región F conocidas como F dispersa (Spread F), los cuales ocurren sobre los 200 km de altura pudiendo extenderse más allá de los 1,000 km de altura. Estos estudios se publicaron en el artículo de Woodman & La Hoz (1976), uno de los artículos más citados por la comunidad científica internacional en lo referente a este tema. <br><br> <b class='bArt'>Artículo: </b>  <a href='https://doi.org/10.1029/JA081i031p05447' target='_blank'>https://doi.org/10.1029/JA081i031p05447</a>";
		break;
	case '1977': 
		leyenda="Se publicó la investigación sobre “Los efectos del ciclo solar en los campos eléctricos de la ionósfera ecuatorial”.  Para esta investigación se utilizaron mediciones de las derivas verticales del plasma ionosférico recolectadas con el radar ionosférico del Radio Observatorio de Jicamarca.  Particularmente, nuestro radar es reconocido internacionalmente por la gran precisión con que puede realizar este tipo de mediciones de forma remota. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/JA082i032p05257' target='_blank'>https://doi.org/10.1029/JA082i032p05257</a>";
		break;
	case '1978': 
		leyenda="El radar ionosférico del Radio Observatorio de Jicamarca se utilizó para la detección de dispersión estimulada de Brillouin en las ondas de radio recibidas por el radar. Estas observaciones demostraron que el efecto de la dispersión de Brillouin es generar un espectro de potencia asimétrico causado por la interacción no lineal entre la onda ascendente y las ondas descendentes incoherentemente dispersadas por la ionósfera a mayores alturas. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/JA083iA05p02133' target='_blank'>https://doi.org/10.1029/JA083iA05p02133</a>";
		break;
	case '1979': 
		leyenda="Se publicó el estudio sobre “Campos eléctricos ecuatoriales durante condiciones alteradas magnéticamente 2. Implicancias de mediciones aurorales y ecuatoriales simultáneas”. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/JA084iA10p05803' target='_blank'>https://doi.org/10.1029/JA084iA10p05803</a>";
		break;
	case '1980': 
		leyenda="Se publicó la investigación sobre la “Medición de ondas atmosféricas de período corto y propiedades de dispersión relacionadas a una altitud de 13-25 km sobre Jicamarca”.  Este es uno de los primeros estudios relacionados con las ondas de gravedad en la tropósfera y estratósfera utilizando el radar ionosférico del Radio Observatorio de Jicamarca. <br><br> <b class='bArt'>Artículo: </b>  <a href='https://doi.org/10.1029/RS015i002p00431' target='_blank'>https://doi.org/10.1029/RS015i002p00431</a>";
		break;
	case '1981': 
		leyenda="La técnica propuesta una década atrás para la medición del campo magnético de la Tierra fue perfeccionada y extendida para el estudio de turbulencia en las irregularidades ionosféricas, particularmente en el electrochorro ecuatorial. Está técnica conocida como interferometría de radar ha sido utilizada en múltiples aplicaciones en el Radio Observatorio de Jicamarca desde ese entonces. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/JA086iA03p01467' target='_blank'>https://doi.org/10.1029/JA086iA03p01467</a>";
		break;
	case '1982': 
		leyenda="Se publicó la investigación sobre “Irregularidades de longitud de onda larga en el electrochorro ecuatorial”. Para ello, se aplicó la técnica de interferometría utilizando el radar ionosférico del Radio Observatorio de Jicamarca con el objetivo de estudiar en detalle las irregularidades con longitudes de onda de unos pocos kilómetros generados en el plasma inestable del electrochorro ecuatorial. Estas observaciones fueron comparadas con mediciones realizadas años atrás con instrumentación in situ, durante las campañas de cohetería realizadas en el Perú. <br><br> <b class='bArt'>Artículo: </b>  <a href='https://doi.org/10.1029/GL009i006p00684' target='_blank'>https://doi.org/10.1029/GL009i006p00684</a>";
		break;
	case '1983': 
		leyenda="Se realizó la campaña de cohetería CONDOR en el Perú, un esfuerzo conjunto entre el IGP, CONIDA y la NASA. Nuestra institución fue clave en esta campaña realizando observaciones ionosféricas conjuntas, utilizando el radar ionosférico del Radio Observatorio de Jicamarca y los cohetes traídos por la NASA, lanzados desde Punta Lobos. En preparación para esta campaña, se instaló un nuevo transmisor de alta potencia para el radar de Jicamarca. Este transmisor está basado en el tetrodo Eimac 8379, el tubo de VHF más potente del mundo.";
		break;
	case '1984': 
		leyenda="Se publicó el estudio “Una relación causal entre relámpagos y la F-dispersa explosiva”. La investigación propone que la eventos repentinos de F-dispersa (o F-dispersa explosiva) se produce por inestabilidades de plasma en rápido crecimiento que se desencadenan por aumentos repentinos de los campos eléctricos ambientales de la región F debido a la penetración de campos generados por rayos eléctricos en regiones de estabilidad marginal. <br><br> <b class='bArt'>Artículo: </b>  <a href='https://doi.org/10.1029/GL011i012p01165' target='_blank'>https://doi.org/10.1029/GL011i012p01165</a>";
		break;
	case '1985': 
		leyenda="Se publica la investigación propuesta por el Dr. Woodman, director del Radio Observatorio de Jicamarca, titulado “Estimación de los momentos espectrales en radares MST”. En este trabajo se revisan las técnicas de procesamiento de señales utilizadas por los radares MST (mesosfera-estratosfera-troposfera) para la caracterización espectral de las señales medidas. Las metodologías propuestas han sido utilizadas a nivel mundial. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/RS020i006p01185' target='_blank'>https://doi.org/10.1029/RS020i006p01185</a>";
		break;
	case '1986': 
		leyenda="Se publicó la investigación titulada “The Prereversal Enhancement of the Zonal Electric Field in the equatorial Ionosphere”, liderada por el Dr. Farley - ex director del Radio Observatorio de Jicamarca. En la investigación se explica que el crecimiento de los campos eléctricos en la ionósfera antes del sunset se puede deber a vientos neutros generados en la zona. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/JA091iA12p13723' target='_blank'>https://doi.org/10.1029/JA091iA12p13723</a>";
		break;
	case '1987': 
		leyenda="El Dr. Tor Hagfors, ex director de nuestro Radio Observatorio de Jicamarca, recibe la medalla de oro URSI Balthasar van del Pol, por las contribuciones a la ingeniería de radar y a la teoría y desarrollo experimental de las técnicas de dispersión incoherente.";
		break;
	case '1988': 
		leyenda="Se publicó la investigación titulada “Observaciones de ecos de las capas mesosféricas, utilizando técnicas de interferometría de radar en el Radio Observatorio de Jicamarca”, propuesta por el Dr. Erhan Kudeki - Investigador de la University of Illinois at Urbana-Champaign (USA). La aplicación de esta técnica dio origen, años posteriores, al desarrollo de la técnica de imágenes de radar, la cual ha adquirido gran popularidad en la comunidad internacional de radares. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/JD093iD05p05413' target='_blank'>https://doi.org/10.1029/JD093iD05p05413</a>";
		break;
	case '1989': 
		leyenda="Se publicó la investigación sobre “Velocidades verticales del plasma de la región F ecuatorial durante los máximos solares”. Las mediciones realizadas por el radar de dispersión incoherente del Radio Observatorio de Jicamarca se utilizan para estudiar los efectos de los grandes flujos solares y de la actividad magnética en las derivas verticales del plasma de la región F. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/JA094iA09p12049' target='_blank'>https://doi.org/10.1029/JA094iA09p12049</a>";
		break;
	case '1990': 
		leyenda="Culminamos con la construcción e instalación del segundo transmisor de 1 MW de potencia basado en el tetrodo EIMAC 8379, para potenciar el funcionamiento del radar ionosférico instalado en el Radio Observatorio de Jicamarca. Este desarrollo tecnológico, realizado en su totalidad por nuestros profesionales, permitió realizar nuevos experimentos con el radar de Jicamarca.";
		break;
	case '1991': 
		leyenda="Científicos de Perú y de EE.UU. utilizaron el radar ionosférico de nuestro Radio Observatorio de Jicamarca para realizar los primeros experimentos donde aplicaron la técnica de imágenes de radar (Radar Imaging), con el fin de observar y estudiar las estructuras de las irregularidades ionosféricas que atraviesan el haz del radar.";
		break;
	case '1992': 
		leyenda="El Radio Observatorio de Jicamarca lideró el diseño y fabricación de un radar VHF perfilador de vientos para ser instalado en la Antártida, en la base peruana Machu-Picchu. Este radar permitió realizar estudios sobre la dinámica atmosférica en la Antártida y su relación con la destrucción de la capa de ozono. <br><br> <b class='bArt'>Artículo: </b> <a href='https://repositorio.igp.gob.pe/handle/IGP/266' target='_blank'>https://repositorio.igp.gob.pe/handle/IGP/266</a>";
		break;
	case '1993': 
		leyenda="Cientificos del Radio Observatorio de Jicamarca lideraron la instalación del primer radar MST (Mesosphere, Stratosphere, Troposphere, por sus siglas en inglés) en la estación peruana Machu Picchu en la Antártida. Las observaciones realizadas permitieron el estudio del fenómeno conocido como los Ecos Mesosféricos Polares de Verano (PMSE: Polar Mesosphere Summer Echoes). Este proyecto fue un esfuerzo conjunto del Instituto Geofísico del Perú, la Universidad de Colorado (EE.UU.), la Universidad de Piura y la Marina de Guerra del Perú. <br><br> <b class='bArt'>Artículo: </b> https://doi.org/10.1029/93EO00385";
		break;
	case '1994': 
		leyenda="Se realizaron los primeros estudios sobre meteoros utilizando el radar ionosférico de nuestro Radio Observatorio de Jicamarca. Estas observaciones marcaron el inicio de una serie de trabajos relacionados a la dinámica y física de meteoros, y además, dieron un giro a la instrumentación que se usaba para su estudio, antes con equipos ópticos, ahora con radares. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/93JA03198' target='_blank'>https://doi.org/10.1029/93JA03198</a>";
		break;
	case '1995': 
		leyenda="Se publicó el estudio propuesto por el Dr. Ronald Woodman, director del Radio Observatorio de Jicamarca, “Sobre la velocidad real en el análisis de correlaciones completo“. Los resultados de este estudio se vienen aplicando en la comunidad de de radares perfiladores de vientos para el cálculo de velocidades utilizando la técnica de radar Spaced Antenna. <br><br> <b class='bArt'>Artículo: </b>  <a href='https://doi.org/10.1029/95RS01828' target='_blank'>https://doi.org/10.1029/95RS01828</a>";
		break;
	case '1996': 
		leyenda="El Dr. Donald T. Farley, director del Radio Observatorio de Jicamarca en el período de 1963-67, recibió el Premio  Appleton por su contribución al “Desarrollo de técnicas de radar de dispersión incoherente y al estudio de radar de las inestabilidades ionosféricas“.";
		break;
	case '1997': 
		leyenda="Se publicó la investigación sobre “Medición simultánea de densidades, temperaturas y velocidades de derivas ionosféricas en Jicamarca“. Este estudio demostró que además de las mediciones de densidad y temperatura de la región F de la ionosfera también se podían utilizar los ecos de 150 km para la medición de las derivas del plasma. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/97GL02898' target='_blank'>https://doi.org/10.1029/97GL02898</a>";
		break;
	case '1998': 
		leyenda="Profesionales del Radio Observatorio de Jicamarca implementaron un radar coherente VHF que fue instalado a bordo del Buque de Investigación Científica B.I.C. Humboldt para el estudio de los Ecos Mesosféricos Polares de Verano (PMSE) en la Antártida y del electrochorro ecuatorial a lo largo de la costa sur del Perú.";
		break;
	case '1999': 
		leyenda="El Dr. Ronald F. Woodman, director del Radio Observatorio de Jicamarca por más de 20 años - durante los períodos 1969-1974 y 1980-2000, recibió el Premio URSI Appleton por  sus “Grandes contribuciones y liderazgo en estudios de radar de la ionosfera y ambiente neutral “.";
		break;
	case '2000': 
		leyenda="Profesionales de nuestro Radio Observatorio de Jicamarca culminan con la construcción del tercer transmisor de 1 MW.  El transmisor es una pieza clave para el proceso de obtención de los datos ionosféricos, ya que funciona como un amplificador de las señales que luego son enviadas a la atmósfera por la antena del radar de Jicamarca. En la actualidad, el observatorio cuenta con 4 transmisores de este tipo, 3 de los cuales fueron implementados en su totalidad en el observatorio.";
		break;
	case '2001': 
		leyenda="En nuestro Radio Observatorio de Jicamarca, se instaló, un sistema de radar biestático VHF para observación de la ionósfera ecuatorial compuesto por una estación de transmisión y, en la bahía de Paracas, una estación de recepción. Este sistema permitió la medición de la densidad de electrones de la región E de la ionosfera (entre 90 y 120 km de altura) a partir de mediciones de la rotación de Faraday de las señales de dispersión coherente del electrochorro ecuatorial.";
		break;
	case '2002': 
		leyenda="El radar atmosférico SOUSY (SOUnding SYstem) fue donado por el  Max Planck Institute für Aeronomie (Alemania) e instalado en nuestro Radio Observatorio de Jicamarca, con el objetivo de complementar los estudios sobre la ionósfera y atmósfera que se realizan con el radar de Jicamarca ";
		break;
	case '2003': 
		leyenda="Se publicó el estudio acerca de “Mediciones de densidad de plasma con el radar de dispersión incoherente de Jicamarca, utilizando un método de fase diferencial de los modos transversales de propagación“. Esta técnica permite la estimación simultánea de las derivas verticales de plasma y de los perfiles de densidad de electrones, una capacidad nueva en el observatorio. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/2002GL015496' target='_blank'>https://doi.org/10.1029/2002GL015496</a>";
		break;
	case '2004': 
		leyenda="Nuestro Radio Observatorio de Jicamarca en colaboración con SRI International (EE.UU.), instaló un prototipo del radar AMISR (Advanced Modular Incoherent Scatter Radar, por sus siglas en inglés) compuesto por 7 paneles de 16 kW de potencia pico cada uno, en las instalaciones del Observatorio, con el objetivo de estudiar fenómenos de dispersión coherente tales como: el electrochorro ecuatorial, la F-dispersa, entre otros.";
		break;
	case '2005': 
		leyenda="Se reportaron por primera vez mediciones de perfiles de densidad de la región D y E ecuatorial utilizando el radar de Jicamarca. Estas observaciones son difíciles de obtener debido a que requieren que los ecos del electrochorro ecuatorial desaparezcan, lo cual ocurre raramente. Estos estudios fueron realizados por los Dres. Jorge Chau, director del Radio Observatorio de Jicamarca, y Ronald Woodman, presidente del Instituto Geofísico del Perú. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1029/2005JA011438' target='_blank'>https://doi.org/10.1029/2005JA011438</a>";
		break;
	case '2006': 
		leyenda="Se realizaron las primeras observaciones de espectros de dispersión incoherente de las regiones D y E de la ionósfera ecuatorial utilizando el radar de Jicamarca. Estas observaciones fueron posibles gracias a que se dieron las condiciones de electrochorro ecuatorial débil y que se utilizó un moderno sistema de adquisición de radar desarrollado en nuestro Radio Observatorio de Jicamarca que permite mediciones con alta resolución. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.5194/angeo-24-1295-2006' target='_blank'>https://doi.org/10.5194/angeo-24-1295-2006</a>";
		break;
	case '2007': 
		leyenda="Se inicia con las  operaciones de la red LISN (Low-latitude Ionospheric Sensor Network, por sus siglas en inglés), bajo la supervisión de profesionales de nuestro Radio Observatorio de Jicamarca y del Instituto para Investigación Científica (ISR por sus siglas en inglés) de Boston College. LISN está conformada por instrumentos geofísicos (receptores GPS, ionosondas y magnetómetros) distribuidos en Sudamérica, con el objetivo de  estudiar la alta atmósfera en la región ecuatorial y a bajas latitudes. <br><br> <b class='bArt'>Página web: </b> <a href='http://lisn.igp.gob.pe/' target='_blank'>http://lisn.igp.gob.pe/</a> ";
		break;
	case '2008': 
		leyenda="Primeras observaciones de lluvias de meteoritos usando el radar de gran apertura y alta potencia del Radio Observatorio de Jicamarca. Este estudio se logró realizar gracias a las capacidades interferométricas del radar que permiten la discriminación de los ecos de la lluvia de meteoritos de los ecos de meteoros esporádicos mucho más frecuentes. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1016/j.icarus.2007.09.021' target='_blank'>https://doi.org/10.1016/j.icarus.2007.09.021</a>";
		break;
	case '2009': 
		leyenda="En colaboración con la Universidad de Clemson y la Universidad de illinois  (EE.UU.), se instalaron un interferómetro Fabry Perot (FPI) y una cámara de imágenes de Airglow en el Observatorio Óptico MeriHill ubicado en las cercanías del Radio Observatorio de Jicamarca. El objetivo de estos instrumentos son el estudio de los vientos de las capas altas de la atmósfera terrestre y la caracterización de los eventos de ondas de gravedad que puedan propagarse en estas regiones.";
		break;
	case '2010': 
		leyenda="Ingenieros del Radio Observatorio de Jicamarca lograron desarrollar una nueva tecnología aplicada al radar de Jicamarca para automatizar el cambio de apunte de la antena principal. Esta nueva tecnología facilitará el desarrrollo de nuevos experimentos en el observatorio. Actualmente este sistema está implementado en los cuartos norte y sur de la antena de Jicamarca.";
		break;
	case '2011': 
		leyenda="Se propuso un marco teórico para la inclusión de los efectos de colisiones de Coulomb en el modelamiento de los espectros medidos por el radar de dispersión incoherente de Jicamarca cuando este apunta perpendicular al campo geomagnético. Este marco teórico se basa en la descripción de la dinámica de las partículas cargadas en un plasma mediante ecuaciones estocásticas de Langevin y el modelo de colisiones de Fokker-Planck. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1109/TGRS.2010.2057253' target='_blank'>https://doi.org/10.1109/TGRS.2010.2057253</a>";
		break;
	case '2012': 
		leyenda="El Radio Observatorio de Jicamarca del IGP organizó el ISEA 13 (Simposio Internacional sobre Aeronomía Ecuatorial), evento científico internacional que tuvo lugar en la ciudad de Paracas (Ica). Este evento convocó a más de 150 científicos de todo el mundo interesados en estudiar la ionosfera y alta atmósfera ecuatorial.";
		break;
	case '2013': 
		leyenda="Se desarrolló una nueva técnica de radar utilizando la modularidad de la antena principal del radar instalado en el Radio Observatorio de Jicamarca, con el fin de implementar diferentes direcciones de apunte con respecto al campo magnético de la Tierrra. Así, se logró realizar mediciones simultáneas de densidades, temperaturas y derivas ionosféricas de la región F. Esta técnica se ha convertido en el modo de operación por defecto del radar de Jicamarca en la actualidad. <br><br> <b class='bArt'>Artículo: </b> <a href='https://doi.org/10.1016/j.jastp.2013.06.003' target='_blank'>https://doi.org/10.1016/j.jastp.2013.06.003</a>";
		break;
	case '2014': 
		leyenda="El Radio Observatorio de Jicamarca del IGP, en colaboración con la ALAGE, organizó la 10ma Conferencia Latinoamericana de Geofísica Espacial - X COLAGE, en Cusco donde se congregaron más de 150 científicos de diversos paises de todo el mundo. Posterior a esta conferencia, tuvo lugar la Escuela Internacional de Ciencias Espaciales (ISSS) que contó con el soporte  de SCOSTEP (Scientific Committee on Solar-Terrestrial Physics) y de ISWI (International Space Weather Initiative).";
		break;
	case '2015': 
		leyenda="Investigadores de nuestro Radio Observatorio de Jicamarca, iniciaron con la ejecución de cinco proyectos de desarrollo tecnológico financiados por INNÓVATE PERÚ y FONDECYT , los cuales fueron oriendados al desarrollo de instrumentación para el monitoreo de  diferentes fenómenos geofísicos que afecta a nuestra sociedad. Así, se desarrollló un sistema de monitoreo de huaicos, un  drone para monitoreo de volcanes, un radar SAR para monitoreo de deslizamientos, un radar perfilador de vientos para estudios de turbulencia y precipitación y un sistema de medición TEC para nanosatélites para realizar observaciones ionosféricas.";
		break;
	case '2016': 
		leyenda="El Ministerio del Ambiente (MINAM) otorgó la Condecoración de la Orden del “Árbol de la Quina” al doctor Ronald Woodman, quien ocupaba el cargo de presidente del Instituto Geofísico del Perú (IGP) y ex director del Radio Observatorio de Jicamarca, por sus grandes aportes a la física y al medio ambiente durante 60 años.";
		break;
	case '2017': 
		leyenda="El Sistema de Monitoreo de Huaicos (SMH) desarrollado por profesionales de nuestro Radio Observatorio de Jicamarca fue instalado en los cauces de las quebradas Huaycoloro y Río Seco. Durante los eventos de El Niño Costero brindó información oportuna a las autoridades pertinentes sobre los eventos de huaicos que tuvieron lugar en la zona de Cajamarquilla en el distrito de Lurigancho - Chosica.";
		break;
	case '2018': 
		leyenda="Fallecieron el Dr. Kenneth Bowles y el Dr. Donald Farley, ambos fueron los primeros directores de nuestro Radio Observatorio de Jicamarca durante el periodo 1960 -1963  y 1964-1967, respectivamente. El legado de ambos se mantendrá por siempre en las observaciones y estudios que se realizan en el observatorio. ";
		break;
	case '2019': 
		leyenda="Se instaló en el Radio Observatorio de Jicamarca, la estación de transmisión del radar de meteoros SIMONe, moderno sistema de radar multiestático que cuenta con estaciones de recepción en Santa Rosa de Quives, Huancayo, Ancón y Azpitia. El objetivo de este sistema es  la medición de las velocidades de los vientos en la mesósfera y baja termósfera sobre la costa central del Peru con una alta resolución temporal y espacial. Este es un proyecto que se realiza en colaboración con el Institute of Atmospheric Physics (IAP) de Alemania.";
		break;
	}


if (anho == "" || length.anho > 4 || anho < 1960 || anho > 2019) {
    switch (anho) {
        case "":
            document.getElementById('alertMsn').innerHTML = "No haz ingresado ning&uacute;n a&ntilde;o.";
            break;
        default:
        case "":
            document.getElementById('alertMsn').innerHTML = "<b>¡Ingresa un a&ntilde;o v&aacute;lido!</b> (Años v&aacute;lidos: Del 1960 al 2019)"
    }
    $('#igpAlert').removeClass('invisible');
    $(".close").click(function() {
        $('#igpAlert').addClass('invisible')
    })
} else {
    $('#igpAlert').addClass('invisible');
    $("#modalIGP").modal();
	document.head.innerHTML += "<meta property='og:image' content='https://www.igp.gob.pe/eventos/aniversario/2021/radio-observatorio-jicamarca/assets/img/anhos/"+anho+".jpg'>";
	document.head.innerHTML += "<meta property='twitter:image' content='https://www.igp.gob.pe/eventos/aniversario/2021/radio-observatorio-jicamarca/assets/img/anhos/"+anho+".jpg'>";
    let numran=Math.floor(Math.random() * 100000000000000);
    document.getElementById('igpAnho').innerHTML = anho;
    document.getElementById('igpLeyenda').innerHTML = leyenda;
    document.getElementById('igpImg').innerHTML = "<img class='img-fluid rounded rounded mx-auto d-block shadown' src='assets/img/anhos/" + anho + ".jpg?v="+numran+"' alt=''>";
    document.getElementById('igpDownload').innerHTML = "<a class='btn btn-primary btn-sm' download='roj-"+anho+".jpg' href='/assets/img/anhos/" + anho + ".jpg' target='_blank'>Descargar imagen</a>"
}
}


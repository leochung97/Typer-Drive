!function(){var e={9662:function(e,t,r){var n=r(7854),a=r(614),i=r(6330),o=n.TypeError;e.exports=function(e){if(a(e))return e;throw o(i(e)+" is not a function")}},9670:function(e,t,r){var n=r(7854),a=r(111),i=n.String,o=n.TypeError;e.exports=function(e){if(a(e))return e;throw o(i(e)+" is not an object")}},4326:function(e,t,r){var n=r(1702),a=n({}.toString),i=n("".slice);e.exports=function(e){return i(a(e),8,-1)}},648:function(e,t,r){var n=r(7854),a=r(1694),i=r(614),o=r(4326),s=r(5112)("toStringTag"),l=n.Object,c="Arguments"==o(function(){return arguments}());e.exports=a?o:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=l(e),s))?r:c?o(t):"Object"==(n=o(t))&&i(t.callee)?"Arguments":n}},8880:function(e,t,r){var n=r(9781),a=r(3070),i=r(9114);e.exports=n?function(e,t,r){return a.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,r){var n=r(614),a=r(8880),i=r(6339),o=r(3072);e.exports=function(e,t,r,s){s||(s={});var l=s.enumerable,c=void 0!==s.name?s.name:t;return n(r)&&i(r,c,s),s.global?l?e[t]=r:o(t,r):(s.unsafe?e[t]&&(l=!0):delete e[t],l?e[t]=r:a(e,t,r)),e}},3072:function(e,t,r){var n=r(7854),a=Object.defineProperty;e.exports=function(e,t){try{a(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},9781:function(e,t,r){var n=r(7293);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,r){var n=r(7854),a=r(111),i=n.document,o=a(i)&&a(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},8113:function(e,t,r){var n=r(5005);e.exports=n("navigator","userAgent")||""},7392:function(e,t,r){var n,a,i=r(7854),o=r(8113),s=i.process,l=i.Deno,c=s&&s.versions||l&&l.version,u=c&&c.v8;u&&(a=(n=u.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!a&&o&&(!(n=o.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/))&&(a=+n[1]),e.exports=a},7293:function(e){e.exports=function(e){try{return!!e()}catch(e){return!0}}},4374:function(e,t,r){var n=r(7293);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,r){var n=r(4374),a=Function.prototype.call;e.exports=n?a.bind(a):function(){return a.apply(a,arguments)}},6530:function(e,t,r){var n=r(9781),a=r(2597),i=Function.prototype,o=n&&Object.getOwnPropertyDescriptor,s=a(i,"name"),l=s&&"something"===function(){}.name,c=s&&(!n||n&&o(i,"name").configurable);e.exports={EXISTS:s,PROPER:l,CONFIGURABLE:c}},1702:function(e,t,r){var n=r(4374),a=Function.prototype,i=a.bind,o=a.call,s=n&&i.bind(o,o);e.exports=n?function(e){return e&&s(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},5005:function(e,t,r){var n=r(7854),a=r(614),i=function(e){return a(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(n[e]):n[e]&&n[e][t]}},8173:function(e,t,r){var n=r(9662);e.exports=function(e,t){var r=e[t];return null==r?void 0:n(r)}},7854:function(e,t,r){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(e,t,r){var n=r(1702),a=r(7908),i=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(a(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,r){var n=r(9781),a=r(7293),i=r(317);e.exports=!n&&!a((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},2788:function(e,t,r){var n=r(1702),a=r(614),i=r(5465),o=n(Function.toString);a(i.inspectSource)||(i.inspectSource=function(e){return o(e)}),e.exports=i.inspectSource},9909:function(e,t,r){var n,a,i,o=r(8536),s=r(7854),l=r(1702),c=r(111),u=r(8880),h=r(2597),p=r(5465),d=r(6200),f=r(3501),m="Object already initialized",g=s.TypeError,y=s.WeakMap;if(o||p.state){var b=p.state||(p.state=new y),v=l(b.get),w=l(b.has),k=l(b.set);n=function(e,t){if(w(b,e))throw new g(m);return t.facade=e,k(b,e,t),t},a=function(e){return v(b,e)||{}},i=function(e){return w(b,e)}}else{var x=d("state");f[x]=!0,n=function(e,t){if(h(e,x))throw new g(m);return t.facade=e,u(e,x,t),t},a=function(e){return h(e,x)?e[x]:{}},i=function(e){return h(e,x)}}e.exports={set:n,get:a,has:i,enforce:function(e){return i(e)?a(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!c(t)||(r=a(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return r}}}},614:function(e){e.exports=function(e){return"function"==typeof e}},111:function(e,t,r){var n=r(614);e.exports=function(e){return"object"==typeof e?null!==e:n(e)}},1913:function(e){e.exports=!1},2190:function(e,t,r){var n=r(7854),a=r(5005),i=r(614),o=r(7976),s=r(3307),l=n.Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=a("Symbol");return i(t)&&o(t.prototype,l(e))}},6339:function(e,t,r){var n=r(7293),a=r(614),i=r(2597),o=r(9781),s=r(6530).CONFIGURABLE,l=r(2788),c=r(9909),u=c.enforce,h=c.get,p=Object.defineProperty,d=o&&!n((function(){return 8!==p((function(){}),"length",{value:8}).length})),f=String(String).split("String"),m=e.exports=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!i(e,"name")||s&&e.name!==t)&&p(e,"name",{value:t,configurable:!0}),d&&r&&i(r,"arity")&&e.length!==r.arity&&p(e,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?o&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=u(e);return i(n,"source")||(n.source=f.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return a(this)&&h(this).source||l(this)}),"toString")},133:function(e,t,r){var n=r(7392),a=r(7293);e.exports=!!Object.getOwnPropertySymbols&&!a((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(e,t,r){var n=r(7854),a=r(614),i=r(2788),o=n.WeakMap;e.exports=a(o)&&/native code/.test(i(o))},3070:function(e,t,r){var n=r(7854),a=r(9781),i=r(4664),o=r(3353),s=r(9670),l=r(4948),c=n.TypeError,u=Object.defineProperty,h=Object.getOwnPropertyDescriptor;t.f=a?o?function(e,t,r){if(s(e),t=l(t),s(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){var n=h(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return u(e,t,r)}:u:function(e,t,r){if(s(e),t=l(t),s(r),i)try{return u(e,t,r)}catch(e){}if("get"in r||"set"in r)throw c("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},7976:function(e,t,r){var n=r(1702);e.exports=n({}.isPrototypeOf)},288:function(e,t,r){"use strict";var n=r(1694),a=r(648);e.exports=n?{}.toString:function(){return"[object "+a(this)+"]"}},2140:function(e,t,r){var n=r(7854),a=r(6916),i=r(614),o=r(111),s=n.TypeError;e.exports=function(e,t){var r,n;if("string"===t&&i(r=e.toString)&&!o(n=a(r,e)))return n;if(i(r=e.valueOf)&&!o(n=a(r,e)))return n;if("string"!==t&&i(r=e.toString)&&!o(n=a(r,e)))return n;throw s("Can't convert object to primitive value")}},4488:function(e,t,r){var n=r(7854).TypeError;e.exports=function(e){if(null==e)throw n("Can't call method on "+e);return e}},6200:function(e,t,r){var n=r(2309),a=r(9711),i=n("keys");e.exports=function(e){return i[e]||(i[e]=a(e))}},5465:function(e,t,r){var n=r(7854),a=r(3072),i="__core-js_shared__",o=n[i]||a(i,{});e.exports=o},2309:function(e,t,r){var n=r(1913),a=r(5465);(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.7",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.7/LICENSE",source:"https://github.com/zloirock/core-js"})},7908:function(e,t,r){var n=r(7854),a=r(4488),i=n.Object;e.exports=function(e){return i(a(e))}},7593:function(e,t,r){var n=r(7854),a=r(6916),i=r(111),o=r(2190),s=r(8173),l=r(2140),c=r(5112),u=n.TypeError,h=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var r,n=s(e,h);if(n){if(void 0===t&&(t="default"),r=a(n,e,t),!i(r)||o(r))return r;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),l(e,t)}},4948:function(e,t,r){var n=r(7593),a=r(2190);e.exports=function(e){var t=n(e,"string");return a(t)?t:t+""}},1694:function(e,t,r){var n={};n[r(5112)("toStringTag")]="z",e.exports="[object z]"===String(n)},6330:function(e,t,r){var n=r(7854).String;e.exports=function(e){try{return n(e)}catch(e){return"Object"}}},9711:function(e,t,r){var n=r(1702),a=0,i=Math.random(),o=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++a+i,36)}},3307:function(e,t,r){var n=r(133);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,r){var n=r(9781),a=r(7293);e.exports=n&&a((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,r){var n=r(7854),a=r(2309),i=r(2597),o=r(9711),s=r(133),l=r(3307),c=a("wks"),u=n.Symbol,h=u&&u.for,p=l?u:u&&u.withoutSetter||o;e.exports=function(e){if(!i(c,e)||!s&&"string"!=typeof c[e]){var t="Symbol."+e;s&&i(u,e)?c[e]=u[e]:c[e]=l&&h?h(t):p(t)}return c[e]}},1539:function(e,t,r){var n=r(1694),a=r(8052),i=r(288);n||a(Object.prototype,"toString",i,{unsafe:!0})}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){"use strict";r(1539);var e=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var a=n((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.level=t,this.enemyhealth=document.querySelector(".enemy-bar"),this.enemyhealth.max=10*this.level+100,this.enemyhealth.value=10*this.level+100}));function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.input=document.querySelector("#input")}var t,r;return t=e,r=[{key:"check",value:function(){var e=document.querySelector("#word");return input.value===e.innerText}},{key:"startLevel",value:function(e){return new a(e)}},{key:"addEventListeners",value:function(){this.input.addEventListener("keyup",this.check)}}],r&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(t){var r=t.position,n=t.imageSrc,a=t.scale,i=void 0===a?1:a,o=t.framesMax,s=void 0===o?1:o,l=t.framesCurrent,c=void 0===l?0:l,u=t.holdFramesFor,h=void 0===u?5:u,p=t.offset,d=void 0===p?{x:0,y:0}:p,f=t.animations;for(var m in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.position=r,this.image=new Image,this.image.src=n,this.scale=i,this.framesMax=s,this.framesCurrent=c,this.totalFrames=0,this.holdFramesFor=h,this.offset=d,this.animations=f,this.dead=!1,this.animations)f[m].image=new Image,f[m].image.src=f[m].imageSrc}var t,r;return t=e,(r=[{key:"update",value:function(e){this.draw(e),this.totalFrames+=1,this.totalFrames%this.holdFramesFor==0&&(this.framesCurrent<this.framesMax-1?this.framesCurrent+=1:this.framesCurrent=0)}},{key:"draw",value:function(e){e.drawImage(this.image,this.framesCurrent*(this.image.width/this.framesMax),0,this.image.width/this.framesMax,this.image.height,this.position.x-this.offset.x,this.position.y-this.offset.y,this.image.width/this.framesMax*this.scale,this.image.height*this.scale)}},{key:"switchAnim",value:function(e){if(this.image===this.animations.death.image&&this.framesCurrent===this.animations.death.framesMax-1&&(this.dead=!0),!(this.image===this.animations.attack.image&&this.framesCurrent<this.animations.attack.framesMax-1||this.image===this.animations.hit.image&&this.framesCurrent<this.animations.hit.framesMax-1))switch(e){case"idle":this.image!==this.animations.idle.image&&(this.image=this.animations.idle.image,this.framesMax=this.animations.idle.framesMax,this.framesCurrent=0);break;case"attack":this.image!==this.animations.attack.image&&(this.image=this.animations.attack.image,this.framesMax=this.animations.attack.framesMax,this.framesCurrent=0);break;case"death":this.image!==this.animations.death.image&&(this.image=this.animations.death.image,this.framesMax=this.animations.death.framesMax,this.framesCurrent=0);break;case"hit":this.image!==this.animations.hit.image&&(this.image=this.animations.hit.image,this.framesMax=this.animations.hit.framesMax,this.framesCurrent=0)}}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=1,h=0,p=0,d=[],f=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.input=document.querySelector("#input"),this.word=document.querySelector("#word"),this.start=document.querySelector("#start-button"),this.playerbar=document.querySelector(".player-health-bar"),this.enemybar=document.querySelector(".enemy-health-bar"),this.playerhealth=document.querySelector(".player-bar"),this.enemyhealth=document.querySelector(".enemy-bar"),this.losspop=document.querySelector("#losspopup"),this.wordsEntered=document.querySelector("#wordcount"),this.enemiesDefeated=document.querySelector("#enemycount"),this.started=!1}var r,n;return r=t,(n=[{key:"newword",value:function(){var t=e[Math.floor(Math.random()*e.length)];this.word.innerText=t}},{key:"addEventListeners",value:function(){var e=this;this.start.addEventListener("click",(function(t){e.started,e.start.innerText="Restart",e.started=!0,d.forEach(clearInterval),e.setup(),e.losspop.classList.remove("active"),g.switchAnim("idle"),y.switchAnim("idle")})),this.input.addEventListener("keyup",this.inputhandler)}},{key:"setup",value:function(){this.playerhealth.value=100,u=1,h=0,p=0,new a(1),this.newword(),this.input.placeholder="Type Here!",this.playerbar.style.display="block",this.enemybar.style.display="block",clearInterval(e);var e=setInterval(this.playerdamage.bind(this),5e3);d.push(e)}},{key:"inputhandler",value:function(t){var r=new o;if(13===t.keyCode){if(r.check()){g.switchAnim("attack"),h+=1,this.value="";var n=e[Math.floor(Math.random()*e.length)];document.querySelector("#word").innerText=n,this.enemyhealth=document.querySelector(".enemy-bar"),this.playerhealth=document.querySelector(".player-bar");var a=Math.floor(25*Math.random()+25);this.enemyhealth.value-=a,y.switchAnim("hit"),this.enemyhealth.value<=0&&(u+=1,p+=1,r.startLevel(u),this.playerhealth.value+=15,y.switchAnim("death"))}}else g.switchAnim("idle"),y.switchAnim("idle")}},{key:"playerdamage",value:function(){var e=2*u+5;this.playerhealth.value-=e,y.switchAnim("attack"),this.playerhealth.value<=0?(g.switchAnim("death"),this.losspop.classList.add("active"),this.wordsEntered.innerHTML=h,this.enemiesDefeated.innerHTML=p,d.forEach(clearInterval)):g.switchAnim("hit")}}])&&c(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}(),m=new Image;m.src="./src/images/background.png";var g=new l({position:{x:-175,y:0},imageSrc:"./src/images/player_idle.png",scale:4,framesMax:11,offset:{x:0,y:0},animations:{idle:{imageSrc:"./src/images/player_idle.png",framesMax:11},attack:{imageSrc:"./src/images/player_attack.png",framesMax:7},death:{imageSrc:"./src/images/player_death.png",framesMax:11},hit:{imageSrc:"./src/images/player_hit.png",framesMax:4}}}),y=new l({position:{x:575,y:55},imageSrc:"./src/images/enemy_idle.png",scale:4,framesMax:8,offset:{x:0,y:0},animations:{idle:{imageSrc:"./src/images/enemy_idle.png",framesMax:8},attack:{imageSrc:"./src/images/enemy_attack.png",framesMax:8},death:{imageSrc:"./src/images/enemy_death.png",framesMax:5},hit:{imageSrc:"./src/images/enemy_hit.png",framesMax:4}}});function b(){var e=document.querySelector("canvas"),t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),t.drawImage(m,-1510,-150),g.update(t),y.update(t),requestAnimationFrame(b)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var w=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.music=document.querySelector("#game-music"),this.toggle=document.querySelector("#mute-button"),this.muted=!0,this.music.volume=.01}var t,r;return t=e,(r=[{key:"addEventListeners",value:function(){var e=this;this.toggle.addEventListener("click",(function(t){e.muted?(e.music.pause(),e.toggle.innerText="Play",e.muted=!1):(e.music.currentTime=0,e.music.play(),e.toggle.innerText="Mute",e.muted=!0)}))}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var x=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.open=document.querySelector("#instructions-button"),this.close=document.querySelector("#instructions-exit"),this.instructions=document.querySelector("#instructions")}var t,r;return t=e,(r=[{key:"openPopup",value:function(e){e.classList.add("active")}},{key:"closePopup",value:function(e){e.classList.remove("active")}},{key:"addEventListeners",value:function(){var e=this;this.open.addEventListener("click",(function(t){e.openPopup(e.instructions)})),this.close.addEventListener("click",(function(t){e.closePopup(e.instructions)}))}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("canvas");e.getContext("2d"),e.width=1080,e.height=550,(new f).addEventListeners(),(new w).addEventListeners(),(new x).addEventListeners(),b()}))}()}();
//# sourceMappingURL=main.js.map
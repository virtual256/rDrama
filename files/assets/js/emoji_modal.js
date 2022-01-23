let loaded = false;

function loadEmojis(form) {
	if (loaded == false)
	{
		const xhr = new XMLHttpRequest();
		xhr.open("GET", '/marsey_list', true);
		xhr.setRequestHeader('xhr', 'xhr');
		var f = new FormData();
		xhr.onload = function() {
			const emojis = {
			'marsey': JSON.parse(xhr.response),

			'platy': ['plarsy','platyabused','platyblizzard','platyboxer','platydevil','platyfear','platygirlmagic','platygolong','platyhaes','platyking','platylove','platyneet','platyold','platypatience','platypopcorn','platyrich','platysarcasm','platysilly','platysleeping','platythink','platytired','platytuxedomask','platyblush','platybruh','platycaveman','platycheer','platydown','platyeyes','platyheart','platylol','platymicdrop','platynooo','platysalute','platyseethe','platythumbsup','platywave'],

			'tay': ['taylove','tayaaa','tayadmire','taycat','taycelebrate','taychefkiss','taychristmas','tayclap','taycold','taycrown','tayflex','tayflirt','taygrimacing','tayhappy','tayheart','tayhmm','tayhuh','tayhyperdab','tayjammin','taylaugh','taymindblown','tayno','taynod','taypeace','taypray','tayrun','tayscrunch','tayshake','tayshrug','taysilly','tayslide','taysmart','taystop','taytantrum','taytea','taythink','tayvibin','taywhat','taywine','taywine2','taywink','tayyes'],
		
			'classic': ['idhitit','2thumbsup','aliendj','ambulance','angry','angrywhip','argue','aroused','ashamed','badass','banana','band','banghead','batman','bigeyes','bite','blind','blowkiss','blush','bong','bounce','bow','breakheart','bs','cartwheel','cat','celebrate','chainsaw','cheers','clap','cold','confused','crazyeyes','cry','cthulhu','cute','laughing','daydream','ddr','deadpool','devilsmile','diddle','die','distress','disturbing','dizzy','domo','doughboy','drink','drool','dudeweedlmao','edward','electro','elephant','embarrassed','emo','emo2','evil','evilclown','evilgrin','facepalm','fap','flamethrower','flipbird','flirt','frown','gasp','glomp','go','gooby','grr','gtfo','guitar','haha','handshake','happydance','headbang','heart','heartbeat','hearts','highfive','hmm','hmph','holdhands','horny','hug','hugging','hugs','hump','humpbed','hysterical','ily','inlove','jason','jawdrop','jedi','jester','kaboom','kick','kiss','kitty','laughchair','lick','link','lol','lolbeat','loving','makeout','medal','megaman','megamanguitar','meow','metime','mooning','mummy','na','nauseous','nervous','ninja','nod','nono','omg','onfire','ooo','orly','tongueout','paddle','panda','pandabutt','paranoid','party','pat','peek','pikachu','pimp','plzdie','poke','popcorn','pout','probe','puke','punch','quote','raccoon','roar','rofl','roflmao','rolleyes','sad','sadeyes','sadhug','samurai','sarcasm','scoot','scream','shmoopy','shrug','skull','slap','slapfight','sleepy','smackfish','smackhead','smh','smile','smoke','sonic','spank','sparta','sperm','spiderman','stab','star','stare','stfu','suicide','surprisehug','suspicious','sweat','swordfight','taco','talk2hand','tantrum','teehee','thinking','threesome','throw','throwaway','tickle','typing','uhuh','vampbat','viking','violin','vulgar','wah','wat','whip','whipping','wink','witch','wizard','woah','worm','woo','work','worship','wow','xd','yay','zzz'],
		
			'rage': ['trolldespair','clueless','troll','bitchplease','spit','challengeaccepted','contentiouscereal','cryingatcuteness','derp','derpcornsyrup','derpcrying','derpcute','derpdumb','derpeuphoria','derpinahd','derpinapokerface','derpinasnickering','derpprocessing','derprealization','derpsnickering','derptalking','derpthinking','derpthumbsup','derpunimpressed','derpwhy','donotwant','epicfacefeatures','fancywithwine','fffffffuuuuuuuuuuuu','flipthetable','foreveralone','foreveralonehappy','hewillnever','idontknow','interuptedreading','iseewhatyoudidthere','killherkillher','ledesire','leexcited','legenius','lelolidk','lemiddlefinger','lemindblown','leokay','lepanicrunning','lepokerface','lepokerface2','lerageface','leseriousface','likeaboss','lolface','longwhiskers','manymiddlefingers','megusta','motherfucker','motherofgod','mysides','ohgodwhy','pervertedspiderman','picard','ragestrangle','rukiddingme','tfwyougettrolled','trollolol','truestorybro','xallthey','yuno'],
		
			'wojak': ['sciencejak','soyjakanimeglasses','soymad','boomerportrait','soycry','punchjak','seethejak','chadyes','chadno','abusivewife','ancap','bardfinn','bloomer','boomer','boomermonster','brainletbush','brainletcaved','brainletchair','brainletchest','brainletmaga','brainletpit','chad','chadarab','chadasian','chadblack','chadjesus','chadjew','chadjihadi','chadlatino','chadlibleft','chadnordic','chadsikh','chadusa','coomer','doomer','doomerfront','doomergirl','ethot','fatbrain','fatpriest','femboy','gogetter','grug','monke','nazijak','npc','npcfront','npcmaga','psychojak','ragejak','ragemask','ramonajak','soyjackwow','soyjak','soyjakfront','soyjakhipster','soyjakmaga','soyjakyell','tomboy','zoomer','zoomersoy'],
		
			'flags': ['niger','lgbt','saudi','animesexual','blacknation','blm','blueline','dreamgender','fatpride','incelpride','israel','kazakhstan','landlordlove','scalperpride','superstraight','trans','translord','transracial','usa'],
				
			'wolf': ['wolfangry','wolfbrains','wolfcry','wolfdead','wolfdevilish','wolffacepalm','wolfhappy','wolfidea','wolfkoala','wolflaugh','wolflove','wolfmeditate','wolfphone','wolfrainbow','wolfroses','wolfsad','wolfsfear','wolfsleep','wolftear','wolfthink','wolfthumbsup','wolfupsidedown','wolfvictory','wolfwave','wolfwink'],
		
			'misc': ['etika','sneed','retardedchildren','bruh','autism','doot','kylieface','queenyes','wholesomeseal','chadyescapy','gigachadglow','gigachadorthodox','gigachad','gigachad2','gigachad3']}
		
			document.getElementById('EMOJIS_favorite').setAttribute('data-form-destination', form)

			const commentBox = document.getElementById(form);
			commentBox.setAttribute('data-curr-pos', commentBox.selectionStart);
	
			if (document.getElementById('EMOJIS_favorite').innerHTML == "")
			{
				let str = ""
				const favorite_emojis = JSON.parse(localStorage.getItem("favorite_emojis"))
				if (favorite_emojis)
				{
					const sortable = Object.fromEntries(
						Object.entries(favorite_emojis).sort(([,a],[,b]) => b-a)
					);
							
					for (const emoji of Object.keys(sortable).slice(0, 25))
						str += `<button class="btn m-1 px-0 emoji2" onclick="getEmoji('${emoji}')" data-bs-toggle="tooltip" title=":${emoji}:" delay:="0"><img loading="lazy" width=50 src="/static/assets/images/emojis/${emoji}.webp" alt="${emoji}-emoji"></button>`
				
					document.getElementById('EMOJIS_favorite').innerHTML = str
				}
			}
	
			if (document.getElementById("EMOJIS_marsey").innerHTML == "")
			{
				for (const [k, v] of Object.entries(emojis)) {
					let container = document.getElementById(`EMOJIS_${k}`)
					let str = ''
					if (k == 'marsey')
						{
							for (const key of Object.keys(v)) {
								str += `<button class="btn m-1 px-0 emoji2" onclick="getEmoji('${key}')" style="background: None!important; width:60px; overflow: hidden; border: none;" data-bs-toggle="tooltip" title=":${key}:" delay:="0"><img loading="lazy" width=50 src="/static/assets/images/emojis/${key}.webp" alt="${key}-emoji"></button>`;
							}
						}
					else {
						for (let j = 0; j < v.length; j++) {
							str += `<button class="btn m-1 px-0 emoji2" onclick="getEmoji('${v[j]}')" style="background: None!important; width:60px; overflow: hidden; border: none;" data-bs-toggle="tooltip" title=":${v[j]}:" delay:="0"><img loading="lazy" width=50 src="/static/assets/images/emojis/${v[j]}.webp" alt="${v[j]}-emoji"></button>`;
						}
					}
	
					container.innerHTML = str
					document.getElementById('emoji-tab-search').innerHTML = ""
				}
			}
			loaded == true;
		}
		xhr.send(f);
	}
}


document.getElementById("emoji_search").oninput = function () {
	let str = ''
	for (let i = 0; i < emojis.length; i++) {
		let arr = emojis[i].emojis

		let container = document.getElementById(`EMOJIS_${emojis[i].type}`)
		for (let j = 0; j < arr.length; j++) {
			if (arr[j].match(search_bar.value.toLowerCase()) || search_bar.value.toLowerCase().match(arr[j])) {
				str += `<button class="btn m-1 px-0 emoji2" onclick="getEmoji('${arr[j]}')" style="background: None!important; width:60px; overflow: hidden; border: none;" data-bs-toggle="tooltip" title=":${arr[j]}:" delay:="0"><img loading="lazy" width=50 src="/static/assets/images/emojis/${arr[j]}.webp" alt="${arr[j]}-emoji"></button>`;
			}
		}
		if (i == 0)
		{
			let arr2 = emojis[i].emojis;
			for (const [key, value] of Object.entries(arr2)) {
				if (str.includes(`'${key}'`)) continue;
				if (key.match(search_bar.value.toLowerCase()) || search_bar.value.toLowerCase().match(key) || value.match(search_bar.value.toLowerCase())) {
					str += `<button class="btn m-1 px-0 emoji2" onclick="getEmoji('${key}')" data-bs-toggle="tooltip" title=":${key}:" delay:="0"><img loading="lazy" width=50 src="/static/assets/images/emojis/${key}.webp" alt="${key}-emoji"></button>`;
				}
			}
			container.innerHTML = ""
		}
	}
	document.getElementById('emoji-tab-search').innerHTML = str
}


function getEmoji(searchTerm) {
	const form = document.getElementById('EMOJIS_favorite').getAttribute('data-form-destination')
	const commentBox = document.getElementById(form);
	const old = commentBox.value;
	const curPos = parseInt(commentBox.getAttribute('data-curr-pos'));

	const firstHalf = old.slice(0, curPos)
	const lastHalf = old.slice(curPos)

	let emoji = ':' + searchTerm + ':'
	const previousChar = firstHalf.slice(-1)
	if (firstHalf.length > 0 && previousChar !== " " && previousChar !== "\n") {
		emoji = " " + emoji
	}
	if (lastHalf.length > 0 && lastHalf[0] !== " ") {
		emoji = emoji + " "
	}

	commentBox.value = firstHalf + emoji + lastHalf;

	const newPos = curPos + emoji.length

	commentBox.setAttribute('data-curr-pos', newPos.toString());

	if (typeof checkForRequired === "function") checkForRequired();

	const favorite_emojis = JSON.parse(localStorage.getItem("favorite_emojis")) || {}
	if (favorite_emojis[searchTerm]) favorite_emojis[searchTerm] += 1
	else favorite_emojis[searchTerm] = 1
	localStorage.setItem("favorite_emojis", JSON.stringify(favorite_emojis))	
}
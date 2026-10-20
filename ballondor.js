const players = [
{
rank:1,
name:"Harry Kane",
country:"England",
countryFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
club:"Bayern Munich",
clubFlag:"🇩🇪",
position:"ST",
goals:73,
assists:8
},
{
rank:2,
name:"Lamine Yamal",
country:"Spain",
countryFlag:"🇪🇸",
club:"Barcelona",
clubFlag:"🇪🇸",
position:"RW",
goals:27,
assists:23
},
{
rank:3,
name:"Kylian Mbappé",
country:"France",
countryFlag:"🇫🇷",
club:"Real Madrid",
clubFlag:"🇪🇸",
position:"ST",
goals:57,
assists:12
},
{
rank:4,
name:"Michael Olise",
country:"France",
countryFlag:"🇫🇷",
club:"Bayern Munich",
clubFlag:"🇩🇪",
position:"RW",
goals:27,
assists:34
},
{
rank:5,
name:"Khvicha Kvaratskhelia",
country:"Georgia",
countryFlag:"🇬🇪",
club:"Paris Saint-Germain",
clubFlag:"🇫🇷",
position:"LW",
goals:21,
assists:9
},
{
rank:6,
name:"Rodri",
country:"Spain",
countryFlag:"🇪🇸",
club:"Barcelona",
clubFlag:"🇪🇸",
position:"CDM",
goals:2,
assists:0
},
{
rank:7,
name:"Lionel Messi",
country:"Argentina",
countryFlag:"🇦🇷",
club:"Inter Miami",
clubFlag:"🇺🇸",
position:"CAM",
goals:53,
assists:32
},
{
rank:8,
name:"Ousmane Dembélé",
country:"France",
countryFlag:"🇫🇷",
club:"Paris Saint-Germain",
clubFlag:"🇫🇷",
position:"ST",
goals:28,
assists:14
},
{
rank:9,
name:"Erling Haaland",
country:"Norway",
countryFlag:"🇳🇴",
club:"Manchester City",
clubFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
position:"ST",
goals:58,
assists:11
},
{
rank:10,
name:"Vitinha",
country:"Portugal",
countryFlag:"🇵🇹",
club:"Paris Saint-Germain",
clubFlag:"🇫🇷",
position:"CM",
goals:7,
assists:10
},
{
rank:11,
name:"Fabián Ruiz",
country:"Spain",
countryFlag:"🇪🇸",
club:"Paris Saint-Germain",
clubFlag:"🇫🇷",
position:"CM",
goals:3,
assists:7
},
{
rank:12,
name:"Declan Rice",
country:"England",
countryFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
club:"Arsenal",
clubFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
position:"CM",
goals:7,
assists:15
},
{
rank:13,
name:"Luis Díaz",
country:"Colombia",
countryFlag:"🇨🇴",
club:"Bayern Munich",
clubFlag:"🇩🇪",
position:"LW",
goals:27,
assists:20
},
{
rank:14,
name:"Vinícius Jr.",
country:"Brazil",
countryFlag:"🇧🇷",
club:"Real Madrid",
clubFlag:"🇪🇸",
position:"LW",
goals:26,
assists:12
},
{
rank:15,
name:"Jude Bellingham",
country:"England",
countryFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
club:"Real Madrid",
clubFlag:"🇪🇸",
position:"CAM",
goals:16,
assists:6
},
{
rank:16,
name:"João Neves",
country:"Portugal",
countryFlag:"🇵🇹",
club:"Paris Saint-Germain",
clubFlag:"🇫🇷",
position:"CM",
goals:11,
assists:4
},
{
rank:17,
name:"Achraf Hakimi",
country:"Morocco",
countryFlag:"🇲🇦",
club:"Paris Saint-Germain",
clubFlag:"🇫🇷",
position:"RB",
goals:5,
assists:10
},
{
rank:18,
name:"Lautaro Martínez",
country:"Argentina",
countryFlag:"🇦🇷",
club:"Inter Milan",
clubFlag:"🇮🇹",
position:"ST",
goals:27,
assists:8
},
{
rank:19,
name:"Pau Cubarsí",
country:"Spain",
countryFlag:"🇪🇸",
club:"Barcelona",
clubFlag:"🇪🇸",
position:"CB",
goals:1,
assists:2
},
{
rank:20,
name:"Nuno Mendes",
country:"Portugal",
countryFlag:"🇵🇹",
club:"Paris Saint-Germain",
clubFlag:"🇫🇷",
position:"LB",
goals:7,
assists:8
},
{
rank:21,
name:"Bruno Fernandes",
country:"Portugal",
countryFlag:"🇵🇹",
club:"Manchester United",
clubFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
position:"CAM",
goals:14,
assists:23
},
{
rank:22,
name:"Willian Pacho",
country:"Ecuador",
countryFlag:"🇪🇨",
club:"Paris Saint-Germain",
clubFlag:"🇫🇷",
position:"CB",
goals:2,
assists:1
},
{
rank:23,
name:"Ferran Torres",
country:"Spain",
countryFlag:"🇪🇸",
club:"Paris Saint-Germain",
clubFlag:"🇫🇷",
position:"ST",
goals:24,
assists:5
},
{
rank:24,
name:"Gabriel",
country:"Brazil",
countryFlag:"🇧🇷",
club:"Arsenal",
clubFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
position:"CB",
goals:4,
assists:6
},
{
rank:25,
name:"William Saliba",
country:"France",
countryFlag:"🇫🇷",
club:"Arsenal",
clubFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
position:"CB",
goals:1,
assists:1
},
{
rank:26,
name:"Julián Quiñones",
country:"Mexico",
countryFlag:"🇲🇽",
club:"Al-Qadsiah",
clubFlag:"🇸🇦",
position:"ST",
goals:37,
assists:6
},
{
rank:27,
name:"Marquinhos",
country:"Brazil",
countryFlag:"🇧🇷",
club:"Paris Saint-Germain",
clubFlag:"🇫🇷",
position:"CB",
goals:2,
assists:0
},
{
rank:28,
name:"Sadio Mané",
country:"Senegal",
countryFlag:"🇸🇳",
club:"Al-Nassr",
clubFlag:"🇸🇦",
position:"LW",
goals:24,
assists:13
},
{
rank:29,
name:"Marc Cucurella",
country:"Spain",
countryFlag:"🇪🇸",
club:"Real Madrid",
clubFlag:"🇪🇸",
position:"LB",
goals:2,
assists:6
},
{
rank:30,
name:"Dayot Upamecano",
country:"France",
countryFlag:"🇫🇷",
club:"Bayern Munich",
clubFlag:"🇩🇪",
position:"CB",
goals:2,
assists:5
}
];

const container=document.getElementById("ranking");

players.forEach(player=>{

const card=document.createElement("div");

card.className="card";

if(player.rank<=3){
card.classList.add("top3");
}

const medal =
player.rank === 1 ? "1" :
player.rank === 2 ? "2" :
player.rank === 3 ? "3" :
player.rank;

card.innerHTML = `
<div class="rank">${medal}</div>

<div class="info">

<h2>${player.name}</h2>

<div class="country">
${player.countryFlag} ${player.country}
</div>

<div class="club">
${player.clubFlag} ${player.club}
</div>

<div class="position">
    ${player.position}
</div>

<div class="stats">

<div class="stat">
<div class="number">${player.goals}</div>
<div class="label">Goals</div>
</div>

<div class="stat">
<div class="number">${player.assists}</div>
<div class="label">Assists</div>
</div>

</div>

</div>
`;

container.appendChild(card);

});

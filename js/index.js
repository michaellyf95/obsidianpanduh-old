//LINK CLICKS
function onYoutubeClick(){
    window.open('https://www.youtube.com/channel/UCb_Vnq02CS74lnCwYt1S8HQ')
}

function onTwitchClick(){
    window.open('https://www.twitch.tv/obsidianpanduh')
}

function onTwitterClick(){
    window.open('https://twitter.com/ObsidianPanduh')
}

function onDiscordClick(){
    window.open('https://discord.gg/rM7Jqj4Tqy')
}

//ANCHOR SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const username = "ineertiaa";
const apiUrl = `https://api.github.com/users/${username}`;

async function getProfile(){
    try{
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("didnt get profile. error");

        const data = await response.json();

        document.getElementById("github").innerHTML = `
        <img src="Images/githublogo.png" style="width: 60px; height: auto;">
        <br>
        <img src="${data.avatar_url}" alt="${data.name || data.login}" style="border-radius: 50%; width: 100px; height: auto;">
        <h2>${data.name || data.login}</h2>
        <h3 style="width: 500px;">${data.bio || "No bio available."}</h3>
        <span><strong id="publicrepos">0</strong> public repos</span>
        <span>followers: <strong id="followers">0</strong></span>
        `;

        const watcher = setInterval(() => {
            const container = document.getElementById("github");
            const rect = container.getBoundingClientRect();

            const visible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (visible){
                clearInterval(watcher);

                setTimeout(() => {
                    startanim(data);
                }, 1500);
            }
        }, 200)

    } catch(error){
        document.getElementById("github").innerText = error.message;
    }
}

function startanim(data){
    let currentfollowers = 0;
    const followertarget = data.followers || 0;
        
    const followerinterval = setInterval(() => {
        currentfollowers++;
        const followerElement = document.getElementById("followers");
            
        if (followerElement) {
            followerElement.innerText = currentfollowers;
        }
            
        if (currentfollowers >= followertarget) {
            clearInterval(followerinterval);
        }

        console.log(currentfollowers)
    }, 50);

    let currentrepos = 0;
    const repotarget = data.public_repos || 0;

    const repointerval = setInterval(() => {
        currentrepos++;
        const repoElement = document.getElementById("publicrepos");

        if (repoElement) {
            repoElement.innerText = currentrepos;
        }

        if (currentrepos >= repotarget) {
            clearInterval(repointerval);
        }

        console.log(currentrepos)
    }, 50);
}

getProfile();
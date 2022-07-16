
let projectileCounter = 0;
let kills = 0; 
document.addEventListener('keypress', (event) => {
    console.log(event.key)


    if(event.keyCode === 32) {
        console.log(event.target)
        projectileCounter++
        console.log(projectileCounter)
        console.log("create projectile")
        let projectile = document.createElement('div');
        projectile.setAttribute("class", "projectile");
        projectile.setAttribute("id", projectileCounter);
        projectile.style.left = document.getElementById('player').style.left;
        projectile.style.top = document.getElementById('player').style.top;
        document.getElementById("game").appendChild(projectile);
        console.log("pre : "+ projectileCounter)
        for (let speed = 100 ; speed <= 1800; speed++) {
                document.getElementById(projectileCounter).style.left =  speed + "px";
        }

        // // if(document.getElementById(projectileCounter).getBoundingClientRect().left >= 1900 ) {
        // //     document.getElementById(projectileCounter).style.display = "none";
        // // }


    }
})

window.addEventListener('click', (event) => {
    let clientX = event.clientX;
    let clientY = event.clientY;

    for (let X = 0 ; X < clientX; X++) {
        document.getElementById('player').style.left =  X + "px";
        document.getElementById('player').style.top =  clientY + "px";
    }
    // console.log(document.getElementById('player').getBoundingClientRect().left)
    
})
// creates a random enemy

let enemiesSpawn = setInterval(() => {
    let enemy = document.createElement('div');
        enemy.setAttribute("class", "enemy");
        enemy.setAttribute("id", "enemy");
        enemy.style.left = document.getElementById('player').style.left;
        enemy.style.top = document.getElementById('player').style.top;
        document.getElementById("game").appendChild(enemy);

    var enemies = document.getElementsByClassName("enemy");

    for (let i = 0; i < enemies.length; i++) {
        enemies[i].addEventListener('click', () => {
            const killed = (callback) => {
                enemies[i].style.animation=".9s death linear";
                callback();
            }
          
                console.log("kill enemy")
                kills++;
                killed(() => {
                    setTimeout(() => {
                        enemies[i].style.display="none";
                        console.log(kills)
                    }, 1000)                    
                })
                
                document.getElementById("killCounter").textContent = "You've killed: " + kills;
                
        })
        
    }
    if (kills >= 10) {
        clearInterval(enemiesSpawn)   
        document.getElementById("killCounter").textContent = "Congratz!  " 
    }    
}, 5000)

    

// limits on the screen
// if (document.getElementById('player').getBoundingClientRect().left >= 1500) {
//     console.log(document.getElementById('player').getBoundingClientRect().left)
//     document.getElementById('player').style.left = "1800px";
// }
// window.addEventListener('mousemove', (event) => {
//     console.log("mosuse");
// })

// window.addEventListener('mouseenter', (event) => {
//     console.log(event.pageX);
// })

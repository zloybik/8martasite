tablica.hidden = true;
register.hidden = false;

function nulevoy(){
    aisha.value = 0;
    vika.value = 0;
    aytan.value = 0;
    aysel.value = 0;
    damla.value = 0;
    fatima.value = 0;
    xurma.value = 0;
    goyda.value = 0;
    nuray.value = 0;
}

async function qolosa(n){
    kotokbas = await rqst('POST',"https://9kpodarokbymen.eu.pythonanywhere.com/qolos", {"qolos":n,"nick":nick.value});
    kotokbas = JSON.parse(kotokbas);
    var choooo = kotokbas['qolosa'];
    aishaScore.textContent = choooo['aisha'];
    vikaScore.textContent = choooo['vika'];
    aytanScore.textContent = choooo['aytan'];
    ayselScore.textContent = choooo['aysel'];
    damlaScore.textContent = choooo['damla'];
    fatimaScore.textContent = choooo['fatima'];
    xurmaScore.textContent = choooo['xurma'];
    goydaScore.textContent = choooo['goyda'];
    nurayScore.textContent = choooo['nuray'];
}

nulevoy();

function rqst(method, url, jsonn) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        if (method == 'GET') {xhr.open('GET', url);xhr.send();} else {
          xhr.open('POST', url);
          xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
          xhr.send(JSON.stringify(jsonn));
        }
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };

    });
}
play.addEventListener('click', async function () {
    reg = await rqst('POST',"https://9kpodarokbymen.eu.pythonanywhere.com/reg", {"nick":nick.value,"password":password.value});
    reg = JSON.parse(reg);
    if(reg["acc"]==3){
        alert("пробел в нике");
    }
    if(reg["acc"]==2){
        alert("пароль не правильный");
    }
    if(reg["acc"]==1){ 
        register.hidden = true;
        tablica.hidden = false;
    }
    if(reg["acc"]==0){
        register.hidden = true;
        tablica.hidden = false;
    }
});

aisha.addEventListener('click', async function () {
    nulevoy();
    aisha.value = 1;
    qolosa("aisha");
    alert("не правильно все наши девочки красавицы");
});
vika.addEventListener('click', async function () {
    nulevoy();
    vika.value = 1;
    qolosa("vika");
    alert("не правильно все наши девочки красавицы");
});
aytan.addEventListener('click', async function () {
    nulevoy();
    aytan.value = 1;
    qolosa("aytan");
    alert("не правильно все наши девочки красавицы");
});
xurma.addEventListener('click', async function () {
    nulevoy();
    xurma.value = 1;
    qolosa("xurma");
    alert("не правильно все наши девочки красавицы");
});
aysel.addEventListener('click', async function () {
    nulevoy();
    aysel.value = 1;
    qolosa("aysel");
    alert("не правильно все наши девочки красавицы");
});
damla.addEventListener('click', async function () {
    nulevoy();
    damla.value = 1;
    qolosa("damla");
    alert("не правильно все наши девочки красавицы");
});
fatima.addEventListener('click', async function () {
    nulevoy();
    fatima.value = 1;
    qolosa("fatima");
    alert("не правильно все наши девочки красавицы");
});
nuray.addEventListener('click', async function () {
    nulevoy();
    nuray.value = 1;
    qolosa("nuray");
    alert("не правильно все наши девочки красавицы");
});
goyda.addEventListener('click', async function () {
    nulevoy();
    goyda.value = 1;
    qolosa("goyda");
    alert("не правильно все наши девочки красавицы");
});
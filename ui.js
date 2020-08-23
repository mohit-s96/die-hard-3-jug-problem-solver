const ul = document.querySelector('.solutions');
let b = document.querySelector('body');
let root = document.querySelector(':root');



function createUI(p, q, maxp, maxq, count){
    // console.log(p, q, maxp, maxq, count);
    let valP = 0;
    let valQ = 0;
    valP = parseInt((p/maxp)*100);
    valQ = parseInt((q/maxq)*100);
    // console.log(valP, valQ);
    

    let template = `
    <span class="step">Step ${count}</span>
    <div class="imagep"><span class="test">${p}</span><div class="water" id="p${count}"></div></div>
    <div class="imageq"><span class="test">${q}</span><div class="waters" id="q${count}"></div></div>
    `;
    let li = document.createElement('li');
    li.classList.add('solution-list');
    li.innerHTML = template;
    ul.appendChild(li);

    let test = document.querySelector(`#p${count}`);
    let test1 = document.querySelector(`#q${count}`);

    test.style.height = `${valP}%`;
    test1.style.height = `${valQ}%`;
   
    
}
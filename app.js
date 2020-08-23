const eval = document.querySelector('#form');

eval.addEventListener('submit', verify);

function verify(e){
    e.preventDefault();
    ul.innerHTML = '';
    count = 0;
    let p = Math.abs(Number(e.target.children[0].value)),
        q = Math.abs(Number(e.target.children[1].value)),
        r = Math.abs(Number(e.target.children[2].value));
    if((p === 0) || (q === 0) || (r === 0)){
        alert('Empty values');
        return;
    }
    else{
        if((p > q) && (p > r) && ((r % gcd(p, q)) === 0)){
            console.log('all good');
            if((r > q) && (p/q < 3)){
                largerToSmaller(p, q, r);
            }
            else{
                smallerToLarger(p, q, r);
            }
            e.target.children[0].value = '';
            e.target.children[1].value = '';
            e.target.children[2].value = '';
     
        }
        else{
            alert('Rule Error');
            return;
        }
    }
}











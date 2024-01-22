count = 0
function inc() {
    count++;
    document.getElementById('span').innerText = count;
    document.getElementById('span').style.color='green';

}

function res() {
    count = 0;
    document.getElementById('span').innerText = count;
    document.getElementById('span').style.color='black';


}

function dec() {
    count--;
    document.getElementById('span').innerText = count;
    document.getElementById('span').style.color='red';
}
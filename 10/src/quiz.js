import { minus, plus, avg, ran } from './quizmod';

document.getElementById('minus').innerHTML = minus(100, 2);
document.getElementById('plus').innerHTML = plus(20, 20);
document.getElementById('avg1').innerHTML = avg(1, 2);
document.getElementById('avg2').innerHTML = avg(1, 2, 3);
document.getElementById('avg3').innerHTML = avg(1, 2, 3, 4, 5, 6);
document.getElementById('avg4').innerHTML = avg(1, 'a', 2);
document.getElementById('avg5').innerHTML = avg([1, 2, 3, 4]);
document.getElementById('ran1').innerHTML = ran(0, 100);
document.getElementById('ran2').innerHTML = ran(30);
document.getElementById('ran3').innerHTML = ran(1, 'a');
document.getElementById('ran4').innerHTML = ran('hello', 3);

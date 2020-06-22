

//$ = document replace

//euro -> usd
multiplyMe = () => {
  //user typed #
  let n1 = Number(document.querySelector("#num1").value);
  //conversion amt
  let n2 = 1.08695652;
  let product1 = n1 * n2;
  document.querySelector("#product1").innerHTML = product1.toFixed(2);
}


let timesBtn1 = document.getElementById("*equals1");

timesBtn1.addEventListener("click", multiplyMe);



//usd -> euro
multiplyMe = () => {
  let n3 = Number(document.querySelector("#num3").value);
  //conversion amt
  let n4 = .92;
  let product2 = n3 * n4;
  document.querySelector("#product2").innerHTML = product2.toFixed(2);
}

let timesBtn2 = document.getElementById("*equals2");

timesBtn2.addEventListener("click", multiplyMe);

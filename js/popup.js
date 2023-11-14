const submitButton = document.getElementById('submit');
const popup = document.getElementById('popup');
const doneButton = document.getElementById('done');
const popupBackground = document.getElementById('popup-background');
const sendSelector = document.getElementById("sendCurrency");
const amount = document.getElementById('amount');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  popup.style.display = 'block';
  popupBackground.style.display = 'block';
  document.getElementById('adress').innerHTML = "Our " + sendSelector.options[sendSelector.selectedIndex].value.toUpperCase() + " adress";
  amount.innerHTML = "Amount: " + document.getElementById("sendAmount").value;

  let qr = document.getElementById("qr");
  let adress = document.getElementById("coinAdress");
  let selector = document.getElementById("sendCurrency");

  switch(selector.options[selector.selectedIndex].value){
    case 'usdt':
      adress.innerHTML = "TWq52t7vgFHEJWYSsTimQwXtaR9M9RTcpJ";
      break;
    case 'btc':
      adress.innerHTML = "bc1qxgv2kt2fa63amahvnplfw9yc2wtrudc2a8yf9f";
      break;
    case 'etc':
      adress.innerHTML = "0x62A80055994a77f6a92FeAdabf832158c1BD2c0D";
      break;
    case 'ltc':
      adress.innerHTML = "ltc1q4e7v6qntg05k2nqsmycyhaxx2eegp2mdm7hw2y";
      break;
    case 'xrp':
      adress.innerHTML = "rLmzHMPb18egSvGrngh7dxYcyYpXgpnYFi";
      break;
    case 'zec':
      adress.innerHTML = "t1UsxH8RqEPednPGwUkM9QfncATtfqgougT";
      break;
    case 'etcc':
      adress.innerHTML = "0x3565538927aDAedf3A7151e90c0CAcf94d65c3cD";
      break;
    case 'vet':
      adress.innerHTML = "0x1c64b801e4E37aB288033DF8A9b4B5fFD2486f55";
      break;
    case 'rvn':
      adress.innerHTML = "RUMX8mM6jTSLFPPFAT5fzFVxeTc2ntMbHX";
      break;
    case 'algo':
      adress.innerHTML = "GKLVLXJY6AA4MZG2EWM7VMVOC2NBWJWQGCLDVDYE3L3QANABLJ6MAFANOA";
      break;
    case 'fil':
      adress.innerHTML = "f15pfwwgsl2wfnd22xa524kmhe77bs2nxr6s5usoa";
      break;
    case 'doge':
      adress.innerHTML = "DLkWKzrZbpqFth1d1LvYxgTZccvvqs5RRe";
      break;
    case 'ada':
      adress.innerHTML = "addr1qynv890xneq5mzdxqt49tqqul0z4ga2p4vfmyjpasglkzj286j0crds0v6n6sdklz9enf7z4sn36azee7438ns8pg6hszqc8am";
      break;
  }
  qr.src = "./images/" + selector.options[selector.selectedIndex].value + ".jpg";
});

doneButton.addEventListener('click', () => {
  popup.style.display = 'none';
  popupBackground.style.display = 'none';
});

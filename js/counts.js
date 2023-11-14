const sender = document.getElementById("sendCurrency");
const receiver = document.getElementById("receiveCurrency");

const sendAmount = document.getElementById("sendAmount");
const receiveAmount = document.getElementById("receiveAmount");

function CheckAmount(){
    if(sendAmount.value <= 0){
        sendAmount.value = 1;
    }

    switch(sender.options[sender.selectedIndex].value){
        case 'usdt':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.000038;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 0.00063;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 0.064;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 0.015;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 1.95;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 0.039298;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 1.50;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 62.124626;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 67.606712;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 10.03;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 0.31;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 16.29;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 4.080;
                break;
            }
        break;
        case 'btc':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 26596.22;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 16.68;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 1746.98;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 411.74;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 52149.76;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 1037.138199;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 40088;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 1532666;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 1770893;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 287931.36;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 8089;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 433749.30;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 107957.40;
                break;
            }
        break;
        case 'eth':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 1593.30;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.000038;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 104.64;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 24.55;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 3108.95;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 62.645;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 2382.67;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 98179.75;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 108982;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 0.10;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 491.52;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 25878.39;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 6459.29;
                break;
            }
        break;
        case 'etc':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 15.24;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.00057;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 0.0096;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 0.0096;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 29.70;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 0.57;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 22.74;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 898.26;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 1003.93;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 150.35;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 4.71;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 247.26;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 61.74;
                break;
            }
        break;
        case 'ltc':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 64.56;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.0024;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 0.041;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 4.27;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 126.56;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 2.48;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 96.92;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 301424.1729985;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 4243.1565686;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 640.91;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 20.01;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 1053.18;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 263.23;
                break;
            }
        break;
        case 'xrp':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 0.51;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.000019;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 0.00032;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 0.034;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 0.0079;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 0.02;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 0.77;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 26.8811591;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 33.83;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 33.83;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 0.16;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 8.32;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 2.08;
                break;
            }
        break;
        case 'zec':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 26.72;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.00094477;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 0.016;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 1.76;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 1.76;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 52.24;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 40.00;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 1579.99;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 1768.39;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 264.62;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 8.28;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 412.823881;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 108.58;
                break;
            }
        break;
        case 'xtz':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 0.67;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.00002481;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 0.0004154;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 0.04;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 0.01;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 1.36;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 0.03;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 39.54;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 44.21;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 6.62;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 0.21;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 10.86;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 2.71;
                break;
            }
        break;
        case 'vet':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 0.017400776926458;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.00002481;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 0.0004154;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 0.0003025;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 0.00026;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 0.033058;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 0.00063;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 0.025;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 1.12;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 0.17;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 0.005239;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 0.27;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 0.068708;
                break;
            }
        break;
        case 'rvn':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 0.01523655;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.0000005645;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 0.0000005645;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 0.000962;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 0.000233;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 0.030292;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 0.00057;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 0.023;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 0.89;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 0.15;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 0.00473015;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 0.239503;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 0.059900;
                break;
            }
        break;
        case 'algo':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 0.094751288725733;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.00000356;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 0.000059;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 0.01;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 0.0016;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 0.19;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 0.0038;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 0.15;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 0.17;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 6.5926188;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 0.0250391;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 1.64;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 0.41;
                break;
            }
        break;
        case 'fil':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 3.36;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.0000023;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 0.0021;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 0.211897;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 0.05;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 6.32;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 0.12;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 4.84;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 189.73;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 211.51977176;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 31.97;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 52.41;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 13.16;
                break;
            }
        break;
        case 'doge':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 0.062;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.0000023;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 0.000039;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 0.0040;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 0.00095;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 0.12;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 0.002428;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 0.09;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 3.62;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 4.07;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 0.61;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 0.02;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value * 0.25;
                break;
            }
        break;
        case 'ada':
            switch(receiver.options[receiver.selectedIndex].value){
                case 'usdt':
                    receiveAmount.value = sendAmount.value * 0.24542975895757;
                break;
                case 'btc':
                    receiveAmount.value = sendAmount.value * 0.24542975895757;
                break;
                case 'eth':
                    receiveAmount.value = sendAmount.value * 0.00015;
                break;
                case 'etc':
                    receiveAmount.value = sendAmount.value * 0.016;
                break;
                case 'ltc':
                    receiveAmount.value = sendAmount.value * 0.0038;
                break;
                case 'xrp':
                    receiveAmount.value = sendAmount.value * 0.48;
                break;
                case 'zec':
                    receiveAmount.value = sendAmount.value * 0.01;
                break;
                case 'xtz':
                    receiveAmount.value = sendAmount.value * 0.37;
                break;
                case 'vet':
                    receiveAmount.value = sendAmount.value * 14.426;
                break;
                case 'rvn':
                    receiveAmount.value = sendAmount.value * 16.23;
                break;
                case 'algo':
                    receiveAmount.value = sendAmount.value * 2.44;
                break;
                case 'fil':
                    receiveAmount.value = sendAmount.value * 0.08;
                break;
                case 'doge':
                    receiveAmount.value = sendAmount.value * 3.99;
                break;
                case 'ada':
                    receiveAmount.value = sendAmount.value;
                break;
            }
        break;
    }
}

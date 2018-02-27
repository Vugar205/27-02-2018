var tableContent = document.querySelector(".tableContent");
var calculate = document.querySelector(".calculate");
var months = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]
calculate.addEventListener("click",function(){
    tableContent.innerHTML=""; // Kontentin icin bosalt
    var totalPrice = document.querySelector(".totalPrice").value; // Toplam odenis deyeri
    var firstPay = document.querySelector(".firstPay").value; // Toplam ilkin odenis deyeri
    var amount = document.querySelector(".amount").value; // Odenis aylarinin sayi

    var table = document.createElement("table");  // Table yaratmaq
    var headtr = document.createElement("tr");  //Basliq ucun yeni bir row yarat
    var tdAyliq = document.createElement("th"); // Aylıq ödəniş ucun th yarat
    tdAyliq.innerText = "Aylıq ödəniş"; // Aylıq ödəniş ucun th yaratdigimiz th icindeki texti = ayliq odenis
    var tdTarix = document.createElement("th");// ödəniş tarixleri  ucun th yarat
    tdTarix.innerText = "Tarix"; // ödəniş tarixleri  ucun th icindeki text = Tarix
    headtr.appendChild(tdAyliq); //Basliq ucun yaratdigimiz row-a ayliq odenis th-ni  ovlad verdik
    headtr.appendChild(tdTarix); //Basliq ucun yaratdigimiz row-a tarix  th-ni  ovlad verdik
    table.appendChild(headtr); //Yaratdigimiz table-a yaratdigimiz basliq rowunu ovlad verdik
    tableContent.appendChild(table); //Htmlde yazdigimiz tablecontent divine - yaratdigimiz table-i ovlad verdik

    for(var i=0; i<amount; i++){ //Dogunun uzunlugu odenis aylarinin sayi qeder olsun deye i<amount yazdiq
        var date = new Date(); // Hazirki gunun degeri goturmek ucun yeni Date yaratdiq 
        var bodytr = document.createElement("tr");  //table bodysinde rowlar yaradiq(dongunun sayi qeder);
        var td = document.createElement("td"); //yeni rowa qiymetin gosterilmesi ucun td (yəni columnlar) yartiq
        td.innerText = (totalPrice-firstPay)/amount + " AZN"; // qiymetin gosterilmesi ucun olan td-nin textini dustura esasen yazdirq
        var td1 = document.createElement("td"); //yeni rowa tarixin gosterilmesi ucun td (yəni columnlar) yartiq
        date.setMonth(date.getMonth()+(i+1)) // Hal hazirki gunun yeni deyeri olarq (halhazirki gunun deyeri uzerine gelinsin i+1 geldik)
        td1.innerText = date.getDate()+"-"+months[date.getMonth()]+"-"+date.getFullYear();   // tarixin gosterilmesi ucun olan td-nin textini dustura esasen yazdirq
        bodytr.appendChild(td); //yeni yaratdigimiz rowa  yeni td columunu(odenis meblegini) ovlad verdik
        bodytr.appendChild(td1);//yeni yaratdigimiz rowa  yeni td columunu (odenisi tarixini) ovlad verdik
        table.appendChild(bodytr); //Yeni rowlari da tabla ovlad verdik
    }

});
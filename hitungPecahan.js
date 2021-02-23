
//function hitungpecahan
function hitungPecahan(){
    //get value 
    var jumlahUang = document.getElementById("jumlahUang").value;
    var jumlahPecahanRatusan = document.getElementById("pecahanSeratus").value;
    var jumlahPecahanLimapuluhan = document.getElementById("pecahanLimapuluh").value;
    var jumlahPecahanDuapuluhan = document.getElementById("pecahanDuapuluh").value;

    //parse value, String to Int
    var jumlahUang = parseInt(jumlahUang);
    var jumlahRatusan = parseInt(jumlahPecahanRatusan);
    var jumlahLimapuluhan = parseInt(jumlahPecahanLimapuluhan);
    var jumlahDuapuluhan = parseInt(jumlahPecahanDuapuluhan);

   var  jumlahRatus=0;
    if(jumlahUang < 100000 ){
        jumlahRatus = 0;
    }else if(jumlahUang > jumlahRatusan*100000 ){
        jumlahRatus = jumlahRatusan;
        //jumlahUangSisa = jumlahUang - (jumlahPecahanRatusan*100000);
    } else if(jumlahUang < jumlahPecahanRatusan*100000 ){
        jumlahRatus = jumlahUang / 100000;
    } else if(jumlahUang==100000&&jumlahPecahanRatusan!=0){
      jumlahRatus=1;
    } else if(jumlahPecahanRatusan==0){
      jumlahRatus=0;
    }

  
    var jumlahUangSisaRatusan = jumlahUang - (jumlahRatus*100000);
    var jumlahlima=0;
    if(jumlahUangSisaRatusan < 50000 ){
        jumlahlima = 0;
        
    } else if(jumlahUangSisaRatusan > jumlahLimapuluhan*50000 ){
        jumlahlima = jumlahLimapuluhan;

    }else if(jumlahUangSisaRatusan < jumlahLimapuluhan*50000 ){
        jumlahlima = jumlahUangSisaRatusan/50000;
    }else if(jumlahUangSisaRatusan==50000){
       jumlahlima = 1;
    }
   var jumlahlimapuluh=parseInt(jumlahlima);
    var jumlahUangSisaLimaPuluhan = jumlahUangSisaRatusan - (jumlahlimapuluh*50000);
    var jumDuapuluhan=0;

    if(jumlahUangSisaLimaPuluhan < 20000 ){
        jumDuapuluhan = 0;
        
    } else if(jumlahUangSisaLimaPuluhan > jumlahDuapuluhan*20000 ){
        jumDuapuluhan = jumlahDuapuluhan;

    }else if(jumlahUangSisaLimaPuluhan < jumlahDuapuluhan*20000 ){
        jumDuapuluhan = jumlahUangSisaLimaPuluhan/20000;
    }else if(jumlahUangSisaRatusan==20000){
       jumDuapuluhan=1;
    }
  var jumlahduapuluh=parseInt(jumDuapuluhan);
   
    var jumlahUangSisaDuaPuluhan = jumlahUangSisaLimaPuluhan - (jumlahduapuluh*20000); 

    var totalUangSisa = jumlahUangSisaDuaPuluhan;

        document.getElementById("jumlahSeratusan").value = parseInt(jumlahRatus);
        document.getElementById("jumlahLimapuluh").value= parseInt(jumlahlima);
        document.getElementById("jumlahDuapuluh").value = parseInt(jumDuapuluhan);;
        document.getElementById("sisaUang").value = parseInt( totalUangSisa);

}
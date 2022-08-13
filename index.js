const readline = require('readline');
  const rl =readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('1. Kalkulator')
console.log('2. Menghitung Akar Kuadrat')
console.log('3. Menghitung Luas Persegi')
console.log('4. Menghitung Volume Kubus')
console.log('5. Menghitung Volume Tabung')
rl.question('Pilih : ', Option => {
  if (Option == 1){
    kalkulasi()
  }
  else if (Option == 2){
    akarkuadrat()
  }
  else if (Option == 3){
    luaspersegi()
  }
  else if (Option == 4){
    volumekubus()
  }
  else if (Option == 5){
    volumetabung()
  }
  else{
    rl.close();
  }
});

function kalkulasi(){

console.log("1. Tambah(+)")
console.log("2. Kurang(-)")
console.log("3. Kali(*)")
console.log("4. Bagi(/)")
rl.question("Pilihannya adalah : " ,function(pilihan){
  rl.question("Masukan Bilangan Pertama : " ,function(jawabanpertama){
    rl.question("Masukan Bilangan Kedua : " ,function(jawabankedua){
    
      if (pilihan==1){
       hasil =+jawabanpertama + +jawabankedua
       console.log('Hasilnya : ' +hasil);
       rl.close();
      }
      else if (pilihan==2){
       hasil =+jawabanpertama - +jawabankedua
       console.log('Hasilnya : ' +hasil);
       rl.close();
      }
      else if (pilihan==3){
        hasil =+jawabanpertama * +jawabankedua
        console.log('Hasilnya : ' +hasil);
        rl.close();
       }
      else if (pilihan==4){
       hasil =+jawabanpertama / +jawabankedua
       console.log('Hasilnya : ' +hasil);
       rl.close();
      }
    })
  })
})
}

function akarkuadrat(){
  rl.question('Masukan angka : ', jawabanpertama => {
    let akar = Math.sqrt(jawabanpertama)
    console.log(`Hasil Per akaran dari ${jawabanpertama} adalah ${akar}`)
    rl.close();
  });
}
function luaspersegi(){
  console.log('Luas Persegi Adalah Sisi*Sisi');
  rl.question('Sisi Pertama : ', jawabanpertama => {
      rl.question('Sisi Kedua : ', jawabankedua => {
        console.log('Hasil Luas persegi adalah :  '+ (jawabanpertama*jawabankedua) + ' cm²')
        rl.close();
  });
});
}

function volumekubus(){
  console.log('Volume Kubus Adalah Sisi*Sisi*Sisi');
  rl.question('Sisi Pertama : ', jawabanpertama => {
    rl.question('Sisi Kedua : ', jawabankedua => {
      rl.question('Sisi Ketiga : ', jawabanketiga => {
      console.log('Hasil dari menghitung Volume Tabung adalah :  '+ (jawabanpertama*jawabankedua*jawabanketiga) + ' cm³')
      rl.close();
      })
    });
  });
}

function volumetabung(){
  console.log('Volume Tabung Adalah phi*Jari-jari*Jari-jari*Tinggi');
    rl.question('Jari-jari : ', jawabanpertama => {
      rl.question('Tinggi : ',  jawabankedua=> {
      console.log('Hasil dari Menghitung Volume Tabung adalah :  '+ (Math.PI * +jawabanpertama * +jawabanpertama * +jawabankedua) + ' cm³')
      rl.close();
      })
  });
}
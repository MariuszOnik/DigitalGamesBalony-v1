


function Kafel(color, width, height,  callback, positionX, positionY, exit = null, enter = null){

  let k = g.rectangle()

  k.fillStyle = color; 
  k.width = width; 
  k.height = height; 
  k.x = positionX; 
  k.y = positionY; 

  k.enterFlag = false;
  k.exitFlag = false; 

  k.callback = callback

 

  k.interact = true;

  k.tap = function() {

    //k.exitFunction()
    GAMES.startScreen.kafle.visible = false; 
    //startTime = Date.now()
    //curentTime = 0; 
    if(callback != null){
      g.state = k.callback;
    }
    
     k.tap = function name(params) {
        console.log("k")
     }
     //k.enterFlag = false;   

  }

  k.enterFunction = function (enter) {

    if(k.enterFlag == false){
      if(typeof exit == "function"){
        enter()
      }
     
      k.enterFlag = true; 
    }
    

  }
  k.exitFunction = function () {
    
    
    
    

  }
  return k; 


}


 let cc = function compareNumbers(a, b) {
   
  return b.indexy.length - a.indexy.length
  
  
}

/*
Learn to create sprites that you can drag and drop
with the mouse or touch
*/

/* 
lerp(20, 80, 0)   // 20
lerp(20, 80, 1)   // 80
lerp(20, 80, 0.5) // 40 
*/
const lerp = (x, y, a) => x * (1 - a) + y * a;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


GameColors =[
  "rgb(225,81,65)", //czerwony: 
  "rgb(84,185,121)", //zielony: 
 "rgb(78,134,236)", // niebieski : 
  "rgb(247, 194, 68)", //zolty:
   "rgb(239, 121, 52)", //pomaranczowy:
   
]
const randomUnique = (range, count) => {
  let nums = new Set();
  while (nums.size < count) {
      nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
  }
  return [...nums];
}



function GetDistanceTo(a,b){

  var vx = a.x  - b.x ; 
  var vy = a.y  - b.y ; 
  return Math.sqrt(vx * vx + vy * vy);
}



function  LosujKoloryNajwiekszy(ileKolorow, balony) {

  let unikatoweIndeksyKolorow = randomUnique(balony.length, ileKolorow)

  let kolorStarowy = g.randomInt(0,5)

  //console.log(unikatoweIndeksyKolorow + " kolor startowy : "+ kolorStarowy)

  let ilosckolorow = 6
  let informator = {
    /*
      red:0, green: 1, blue: 2, yellow: 3, orange: 4, pink: 5
    */
    redIndexs: [], 
    greenIndexs: [], 
    blueIndexs: [], 
    yellowIndexs: [], 
    orangeIndexs: [], 
    pinkIndexs: []
  }

  let randomColors = [];

  let rc = kolorStarowy
  for(let c = 0 ; c < ileKolorow; c++){
    
     
      randomColors.push(rc)

      if(rc + 1 < ilosckolorow)
      {
          rc+= 1
      }else{
          rc = 0 
      }

  }

  //console.log(randomColors)

  let obiekty = []

  for (let i = 0; i < unikatoweIndeksyKolorow.length; i++) {
      if(kolorStarowy == 0){
        obiekty.push({kolor: kolorStarowy, indexy: [unikatoweIndeksyKolorow[i] -1]})
        informator.redIndexs.push(unikatoweIndeksyKolorow[i] -1)
      }
      if(kolorStarowy == 1){
        obiekty.push({kolor: kolorStarowy, indexy: [unikatoweIndeksyKolorow[i] -1]})
        informator.greenIndexs.push(unikatoweIndeksyKolorow[i] -1)
      }
      if(kolorStarowy == 2){
        obiekty.push({kolor: kolorStarowy, indexy: [unikatoweIndeksyKolorow[i] -1]})
        informator.blueIndexs.push(unikatoweIndeksyKolorow[i] -1)
      }
      if(kolorStarowy == 3){
        obiekty.push({kolor: kolorStarowy, indexy: [unikatoweIndeksyKolorow[i] -1]})
        informator.yellowIndexs.push(unikatoweIndeksyKolorow[i] -1)
      }
      if(kolorStarowy == 4){
        obiekty.push({kolor: kolorStarowy, indexy: [unikatoweIndeksyKolorow[i] -1]})
        informator.orangeIndexs.push(unikatoweIndeksyKolorow[i] -1)
      }
      if(kolorStarowy == 5){
        obiekty.push({kolor: kolorStarowy, indexy: [unikatoweIndeksyKolorow[i] -1]})
        informator.pinkIndexs.push(unikatoweIndeksyKolorow[i] -1)
      }

      if(kolorStarowy + 1 < ilosckolorow)
      {
          kolorStarowy+= 1
      }else{
          kolorStarowy = 0 
      }

  }

  //console.log(`informator Before :  red: ${informator.redIndexs}   green: ${informator.greenIndexs}  blue: ${informator.blueIndexs}  yello: ${informator.yellowIndexs}  orange: ${informator.orangeIndexs}  pink: ${informator.pinkIndexs} ` )

  for (let i = 0; i < balony.length; i++) {
    

    let canIuse = true
    for(z = 0; z<unikatoweIndeksyKolorow.length; z++){
      if(i == unikatoweIndeksyKolorow[z]-1 ){
          canIuse = false
          break; 

      }
    }

    if(canIuse == true){
      let randomColor = randomColors[g.randomInt(0, randomColors.length-1)]
      //console.log(`RANDOM COLOR : ${randomColor}`)
      if(randomColor == 0){
        informator.redIndexs.push(i)
          for(let x = 0; x< obiekty.length; x ++){
              let element = obiekty[x]; 
                if(element.kolor == randomColor){
                    element.indexy.push(i)
                }
          }

      }
      if(randomColor == 1){
        informator.greenIndexs.push(i)
        for(let x = 0; x< obiekty.length; x ++){
          let element = obiekty[x]; 
            if(element.kolor == randomColor){
                element.indexy.push(i)
            }
      }
      }
      if(randomColor == 2){
        informator.blueIndexs.push(i)
        for(let x = 0; x< obiekty.length; x ++){
          let element = obiekty[x]; 
            if(element.kolor == randomColor){
                element.indexy.push(i)
            }
      }
      }
      if(randomColor == 3){
        informator.yellowIndexs.push(i)
        for(let x = 0; x< obiekty.length; x ++){
          let element = obiekty[x]; 
            if(element.kolor == randomColor){
                element.indexy.push(i)
            }
      }
      }
      if(randomColor == 4){
        informator.orangeIndexs.push(i)
        for(let x = 0; x< obiekty.length; x ++){
          let element = obiekty[x]; 
            if(element.kolor == randomColor){
                element.indexy.push(i)
            }
      }
      }
      if(randomColor == 5){
        informator.pinkIndexs.push(i)
        for(let x = 0; x< obiekty.length; x ++){
          let element = obiekty[x]; 
            if(element.kolor == randomColor){
                element.indexy.push(i)
            }
      }
      }
    }

    
        
      
      
  }


  //console.log(`informator :  red: ${informator.redIndexs}   green: ${informator.greenIndexs}  blue: ${informator.blueIndexs}  yello: ${informator.yellowIndexs}  orange: ${informator.orangeIndexs}  pink: ${informator.pinkIndexs} ` )

  //let dlugosciTablicKolorow = [informator.redIndexs, informator.greenIndexs, informator.blueIndexs, informator.yellowIndexs, informator.orangeIndexs, informator.pinkIndexs]
 //console.log(" przed  sortowaniem  0--  "+  obiekty[0].indexy + " 1-- " + obiekty[1].indexy+ " 2-- " + obiekty[2].indexy+ " 3-- " + obiekty[3].indexy) 


  obiekty = obiekty.sort(cc)

  
  if(ileKolorow>1){


      let first = obiekty[0].indexy
      let second = obiekty[1].indexy

      //console.log(`ilosc elementow w pierszej tablicy :  ${first.length} a ilosc elementow w drugiej tablicy : ${second.length} `)
      if(first.length == second.length){

          //get random index from second

          zabracJedenindex = g.randomInt(0, second.length-1)

          //console.log("losuje index z second do zabrania  : " + zabracJedenindex )
          let wartosc = second[zabracJedenindex]
          second.splice(zabracJedenindex, 1)
          first.push(wartosc)


      }

      DominateColor = obiekty[0].kolor
      //console.log( "dominate kolor" + obiekty[0].kolor )
      

  }
  
  //console.log(" przed  po  0--  "+  obiekty[0].indexy + " 1-- " + obiekty[1].indexy+ " 2-- " + obiekty[2].indexy+ " 3-- " + obiekty[3].indexy) 

  //return obiekty; 

  //console.log(obiekty)
  for (let b = 0; b < obiekty.length; b++) {
      
    let element = obiekty[b];

    for (let p = 0; p < element.indexy.length; p++) {
        
      console.log()
        let balo = element.indexy[p];
        let colorek = element.kolor;
        balony[balo].color = colorek
        balony[balo].ChangeColor(colorek)

      
    }

}
   

}


function  LosujKolory(balony) {
    

  let pierwsze6 = randomUnique(balony.length, 6)

  console.log(pierwsze6)

  let color = 0;//red

  for (let index = 0; index < pierwsze6.length; index++) {
      balony[pierwsze6[index]-1].color = color;
      balony[pierwsze6[index]-1].graphic.show(color)
        
      console.log(" Index : " + (pierwsze6[index] -1) + "  KOLOR " + color)
      color+=1;
  }

  for (let index = 0; index < balony.length; index++) {
      
      
      if( index == pierwsze6[0]-1 ||  index == pierwsze6[1]-1 || index == pierwsze6[2]-1|| index == pierwsze6[3]-1 || index == pierwsze6[4]-1 || index == pierwsze6[5]-1  ){
        //balony[index].
    

      }else{

           let nowyKolor = g.randomInt(0,5)
           balony[index].color = nowyKolor
           balony[index].graphic.show(nowyKolor)
       }

  }

}

var  g = hexi(1920, 1080, setup, [
    "./img/czerwonyBalon.png",
      "./img/zielonyBalon.png",
      "./img/niebieskiBalon.png",
      "./img/pomaranczowyBalon.png",
      "./img/zoltyBalon.png",
      "./img/TM.png",
      "./img/touchEfect.png",
      "./img/exit.png",
      "./img/balons4.png",
      "./sound/BalloonPopping/1.mp3",
    "./sound/BalloonPopping/2.mp3",
    "./sound/BalloonPopping/3.mp3",
    "./sound/BalloonPopping/4.mp3",
    "./sound/BalloonPopping/5.mp3",
    "./sound/BalloonPopping/6.mp3",
    "./sound/BalloonPopping/7.mp3",
    "./img/puchar2.png",
    "./sound/error.mp3",
    "./img/home.png",
    "./sound/fanfary.mp3"

  ], load);
  
  function load(){
    g.loadingBar();
  }
  
  g.start();
  
  
  g.fps = 30; 
  //Set the background color and scale the canvas
  g.backgroundColor = "rgb(78, 50, 50)";
  //g.border = "2px red dashed";
  g.scaleToWindow();


  let allBallonsGroup,
        StartPositionX,
        StartPositionY,
        ALL,
        DominateColor,
        Flag, 
        licznikZbitychBalonikow = 0, 
        informatorKolorow, 
        informatorKolorowRamka, 
        licznikPunktow,
        znakFirmy,
        startTime , 
        endTime ,
        progresBarGenerator, 
        gameRune = true,
        GeneratorStart, 
        colorWynikuPlanszy = "rgb(248,194,68)",
        planszaWyniku,
        wynikGroup,
        napisKoncowy, 
        gwiazdkiKoncowe, 
        karnePunkty,
        puchar,
        czasGry,
        informatorKolorowSwich,
        homeButton,
        poziomTrudnosci,
        GAMES,
        iii,
        startButon,
        fanfary;  


  function setup(){

    GAMES = {}
    GAMES.startScreen = {
      kafelWidth: 640,
      kafelHeight: 540,
      widthInKafel : 3,
      heightInKafel: 2,
      kafle: null,

}

GAMES.colors ={
  niebieski : "rgb(78,134,236)",
  zolty: "rgb(247, 194, 68)", 
  zielony: "rgb(84,185,121)",
  czerwony: "rgb(225,81,65)",
  pomaranczowy: "rgb(239, 121, 52)",
  rozowy: "rgb(241, 157, 229)",
  progresBarColor: "rgb(84,185,121)"


}
GAMES.colorsTable = [
  "rgb(78,134,236)",
  "rgb(247, 194, 68)", 
  "rgb(84,185,121)",
  "rgb(225,81,65)",
  "rgb(239, 121, 52)",
  "rgb(241, 157, 229)"
]

GAMES.startScreen.kafle = g.group()
GAMES.callback = [balonyScreen, zoltyScreen, zielonyScreen, czerwonyScreen, ksztaltyScreen, rozowyScreen]

startX = 377;
   startY = 110; 

  for (let y = 0; y < GAMES.startScreen.heightInKafel; y++) {  
    for (let x = 0; x < GAMES.startScreen.widthInKafel ; x++) {

          let k = new Kafel(GAMES.colorsTable[x + (y * GAMES.startScreen.widthInKafel)], GAMES.startScreen.kafelWidth, GAMES.startScreen.kafelHeight, GAMES.callback[x+(y *GAMES.startScreen.widthInKafel) ], x*GAMES.startScreen.kafelWidth, y*GAMES.startScreen.kafelHeight,  )
          GAMES.startScreen.kafle.addChild(k); 
    }
  }
    fanfary = g.sound("./sound/fanfary.mp3");
    fanfary.volume =0.1
    fanfary.loop = false;

    poziomTrudnosci = 2; 
    czasGry = 60000
    wynikGroup = g.group()

    homeButton = g.sprite("./img/home.png")
    
    homeButton.setPosition(1600, 100)

    homeButton.visible = false; 

    homeButton.setPivot(0.5, 0.5)

    homeButton.tap = ()=>{
      if(homeButton.visible == true){
        window.location.reload()
      }
      
    }

    


    karnePunkty = 3; 
    //informatorKolorowSwich = 1; 
    planszaWyniku = g.rectangle(1920,1080, colorWynikuPlanszy)
    //planszaWyniku.visible = false; 

    /*



    g.createParticles(
                              element.graphic.x,                             //The particle’s starting x position
                              element.graphic.y,                             //The particle’s starting y position
                              () => g.sprite("./img/star.png"),       //Particle function
                              g.stage,                                 //The container group to add it to
                              10,                                      //Number of particles
                              0.5,                                     //Gravity
                              true,                                    //Random spacing
                              0, 6.28,                                 //Min/max angle
                              10, 20,                                  //Min/max size
                              5, 10,                                    //Min/max speed
                              0.005, 0.01,                             //Min/max scale speed
                              0.005, 0.01,                             //Min/max alpha speed
                              0.05, 0.1 )    
    */



    gwiazdkiKoncowe = g.particleEmitter(
      100,                                   //The interval, in milliseconds
      () => g.createParticles(               //The `createParticles` method
        960,
        400,
        () => g.sprite("./img/star.png"),
        g.stage,
        5,
        0.5,
        true,
        0, 6.28,                                 //Min/max angle
        15, 30,                                  //Min/max size
        5, 10,                                    //Min/max speed
        0.005, 0.01,                             //Min/max scale speed
        0.005, 0.01,                             //Min/max alpha speed
        0.05, 0.1     

      )
    );
    puchar = g.sprite("./img/puchar2.png")

    
    wynikGroup.addChild(planszaWyniku, puchar)

    puchar.setPivot(0.5, 0.5)
    puchar.setScale(0.5,0.5)
    wynikGroup.putCenter(puchar,0)
    wynikGroup.visible = false; 
    
    progresBarGenerator = function *(bar, st) {
  
      let ST = st
      let CT = Date.now() - ST
      while (CT < czasGry) {
       
        bar.inner.width =lerp(0,1920, (CT/czasGry))
        CT = Date.now() - ST
        yield 
        
      }
        gameRune = false
        //console.log( bar.inner.width)
        bar.inner.width = 0 

        g.state = pokazWynik; 
        allBallonsGroup.visible = false;
        //informatorKolorow.graphic.visible = false; 
        wynikGroup.visible = true; 
        puchar.putCenter(licznikPunktow, 20)
        //licznikPunktow.setPosition(930, 540)
        licznikPunktow.setPivot(0.5, 0.5)
        gwiazdkiKoncowe.play();
        healthBar.visible = false; 
        napisKoncowy.visible = true; 
        Flag = false; 
        g.breathe(licznikPunktow, 1.5, 1.5, 30, true, 0);
        
         
        homeButton.visible = true; 

        homeButton.visible = true; 
        homeButton.interact = true; 
        homeButton.setPivot(0.5, 0.5)
        g.breathe(homeButton, 1.5, 1.5, 30, true, 0);
        fanfary.play()
        //GeneratorStart = progresBarGenerator(bar, Date.now())

    }

    


    //PASEK CZASU
    outerBar = g.rectangle(1920, 40, "gray"),
    innerBar = g.rectangle(1920, 40, "rgb(84,185,121)");

      //Group the inner and outer bars
      healthBar = g.group(outerBar, innerBar);

      //Set the `innerBar` as a property of the `healthBar`
      healthBar.inner = innerBar;

      

      //Position the health bar
      healthBar.x = 0;
      healthBar.y = 1040;

      healthBar.inner.width = 0;


      


    znakFirmy = g.sprite("./img/TM.png")
    znakFirmy.setPivot(0.5, 0.5)
    znakFirmy.setPosition(200, 100)
    licznikPunktow = g.text("12", "bold 70px Verdana", "black", "center");

    napisKoncowy =  g.text("Brawo! Oto liczba zdobytych przez Ciebie punktów.", "bold 60px Verdana", "black");
    napisKoncowy.setPosition(120, 900)
    napisKoncowy.visible = false; 
    licznikPunktow.content  = 0
    licznikPunktow.setPosition(1650, 100)

    StartPositionX = g.canvas.width/2 - (g.canvas.width/4 ) - 60
    StartPositionY = g.canvas.height/2 - ( g.canvas.height/4)
    allBallonsGroup = g.group()
    //DominateColor = g.randomInt(0,5)

    Flag = false; 

    ALL = []


    
    //informatorKolorowRamka = g.circle(170, "white")
    //informatorKolorow = new Balon(g, DominateColor)

    //informatorKolorow.graphic.setPivot(0.5, 0.5)
    //informatorKolorow.graphic.setScale(0.5, 0.5)

    

    
    // informatorKolorowRamka.setPivot(0.5, 0.5)
    
    //setPosition(g.canvas.width - 192, 400)
    // informatorKolorow.fillStyle = GameColors[0]; 
    //informatorKolorow.graphic.setPosition(180, 250)
    //informatorKolorow.graphic.interact = false
    //g.breathe(informatorKolorow.graphic, 0.4, 0.4, 5, true, 0);

    //informatorKolorowRamka.addChild(informatorKolorow)
    

    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 5; x++) {

            //let newBalon = new Balon(g, g.randomInt(0,4))
            let newBalon = new Balon(g)
                

            newBalon.graphic.setPosition(StartPositionX + (x * newBalon.graphic.width) + (x * 40), StartPositionY + (y * newBalon.graphic.height) + (y * 40)); 
            newBalon.startX = StartPositionX + (x * newBalon.graphic.width) + (x * 40);
            newBalon.startY = StartPositionY + (y * newBalon.graphic.height) + (y * 40)
            allBallonsGroup.addChild(newBalon.graphic); 

            newBalon.graphic.rotation = 0.1;

            //let ramka = g.rectangle(newBalon.graphic.width, newBalon.graphic.height, "rgba(44,544,44,0.1)", "pink", 5)
            //ramka.x = newBalon.graphic.x
            //ramka.y = newBalon.graphic.y

            ALL.push(newBalon)

        }
    }

    

    //informatorKolorow.ChangeColor(DominateColor)
    //LosujKolory(ALL); 



/*
**************************************************************************************************
              TAP FUNCTION \/
**************************************************************************************************
*/
  g.pointer.tap = function () {
    
    let allDominatecolors = []
    let rest = []

    let licznik = 0

    ALL.forEach(element => 
      {
        if(element.color === DominateColor)
        {
          allDominatecolors.push(element)
        }else{
          rest.push(element)
        }
      });
      ALL.forEach(element => 
      {
        let randomInterval = 0
            //korekta pozycji do sprawdzania kolizji
            var test = 
            {
                width: element.graphic.width, 
                height: element.graphic.height  ,
                x: element.graphic.x + 22,
                y: element.graphic.y -20, 
                xAnchorOffset: element.graphic.xAnchorOffset,
                yAnchorOffset: element.graphic.yAnchorOffset ,
                radius : false
            }
            
            //console.log(test)
            if(g.hitTestPoint(g.pointer.position, test) && Flag == true)
            {
              if(element.color === DominateColor && element.isActive() == true)
              {
                let randomSnd = g.randomInt(1,3)
                //g.wait(randomInterval, () => {
                      element.soundEfectTable[randomSnd].play()
                rest.forEach(element => {
                    element.graphic.vy = -60
                    let kierunekX = g.randomInt(-30,30)
                    element.graphic.vx = kierunekX
                    //g.move(element.graphic)
                });
                  allDominatecolors.forEach(element => 
                    {

                             
                                    licznik += 1
                                    g.createParticles(
                                          element.graphic.x,                             //The particle’s starting x position
                                          element.graphic.y,                             //The particle’s starting y position
                                          () => g.sprite("./img/star.png"),       //Particle function
                                          g.stage,                                 //The container group to add it to
                                          5,                                      //Number of particles
                                          0.1,                                     //Gravity
                                          true,                                    //Random spacing
                                          0, 6.28,                                 //Min/max angle
                                          10, 20,                                  //Min/max size
                                          5, 10,                                    //Min/max speed
                                          0.005, 0.01,                             //Min/max scale speed
                                          0.005, 0.01,                             //Min/max alpha speed
                                          0.05, 0.1 )                             //Min/max rotation speed);
                                    //g.createParticles(element.graphic.x, element.graphic.y, function () {
                                      //return g.sprite("./img/star.png");
                                    //}, g.stage, 300);
                                    element.hide()
                                    //console.log(licznik)

                                    if(licznik == allDominatecolors.length)
                                    {


                                      //console.log(licznik)
                                      licznikPunktow.content = parseInt(licznikPunktow.content) + 1; 
                                      //allBallonsGroup.setPosition(0,1080);
                                      poziomTrudnosci = lerp(1, 6, (parseInt(licznikPunktow.content)/10))
                                      //console.log("Aktualny poziom trudnosci : " + poziomTrudnosci)
                                      //g.wait(1000, ()=>{
                                       
                                        g.wait(400, ()=>{

                                          
                                        //informatorKolorow.graphic.show(DominateColor)
                                          ALL.forEach(element => {
                                          
                                          
                                           
                                            //element.graphic.y = 2000
                                            element.reset()
                                            

                                          })

                                          allBallonsGroup.setPosition(0,2160);
                                          LosujKoloryNajwiekszy( poziomTrudnosci,ALL)


                                        })
                                        

                                        //allBallonsGroup.vy = -60


                                      
                                      //})
                                     
                                    }
                              //});
                              randomInterval += g.randomInt(100,150)

                              

                              
                    });
              }else{
                element.wrongTouch()
              }
            }
      })
  }

/*
**************************************************************************************************
            END  TAP FUNCTION ^
**************************************************************************************************
*/


    //startTime = Date.now() ;
    //endTime = startTime + 30000
    allBallonsGroup.setPosition(0,1080)
    //allBallonsGroup.vy = -120

    //GeneratorStart = progresBarGenerator(healthBar, Date.now())
    //g.state = update;
    licznikPunktow.visible = false; 
   healthBar.visible = false; 
    GAMES.startScreen.kafle.visible = true; 

    iii = g.text("TUTAJ BEDZIE INTRO ", "bold 70px Verdana", "white", "center");
    startButon = g.text("Dotknij ekranu aby rozpocząć gre ", "bold 70px Verdana", "white", "center");
    g.state = startScreen
   
  }

  function update(){

    
     ALL.forEach(element => {
        g.move(element.graphic)
        
        
    });
 
    /* ALL.forEach(element => {
    if(element.graphic.y < -100 )
        {
          console.log("DUPA")
          element.graphic.vy = 0 
          element.graphic.y = 0

        }
      }) */
        //ALL[0].iterator.next(ALL[0])
        

        /* ALL.forEach(element => {

             //ran = 0.01

           
             let p = g.randomFloat(-0.5, 0.5)
              let  ran = g.randomFloat(-0.005, 0.005)
               element.graphic.rotation += ran
               element.graphic.x +=  p ;
               element.graphic.y +=  p ;


               let distanceToStart = GetDistanceTo(element.graphic, {x: element.startX, y: element.startY })
               if (distanceToStart >= 1){
                    element.graphic.x = element.startX; 
                    element.graphic.y = element.startY
               }

          }) */


        if(allBallonsGroup.position.y > 0 ){
            g.move(allBallonsGroup)
            
            Flag = false
        }else{
          Flag = true; 
         
        }

        
        //console.log(Flag)

        GeneratorStart.next(endTime, healthBar)

        // if(informatorKolorow.graphic.visible == true   ){
        //       informatorKolorow.graphic.scale.x += 0.008 * informatorKolorowSwich
        //       informatorKolorow.graphic.scale.y += 0.008  * informatorKolorowSwich

        //         if(informatorKolorow.graphic.scale.x > 0.7){
        //            informatorKolorowSwich = informatorKolorowSwich * -1
        //         }
        //         if(informatorKolorow.graphic.scale.x < 0.5){
        //           informatorKolorowSwich = informatorKolorowSwich * -1
        //        }
        // }

  }


  function pokazWynik(){


   // if(g.pointer.isDown){
      //if(g.hitTestPoint( g.pointer.position, planszaWyniku)){
      
        //g.wait(2000, ()=>{
          
        //})
        //console.log("DUPA")
            
      //}
    //}
    
      //g.pulse(licznikPunktow, 120, 0.3);
      //g.breathe(licznikPunktow, 1.4, 1.4, 60, true, 300);


      

  }

  

  function startScreen(){

      

  }
  
  function zoltyScreen(params) {
    GAMES.startScreen.kafle.children.forEach(element => {
      element.interact = false; 
    });
  }
  
  function zielonyScreen() {
    GAMES.startScreen.kafle.children.forEach(element => {
      element.interact = false; 
    });
  }
  
  function czerwonyScreen() {
    GAMES.startScreen.kafle.children.forEach(element => {
      element.interact = false; 
    });
  }
  
  function ksztaltyScreen(params) {
    GAMES.startScreen.kafle.children.forEach(element => {
      element.interact = false; 
    });
  }
  
  function rozowyScreen(params) {
    console.log("rozowy")
    GAMES.startScreen.kafle.children.forEach(element => {
      element.interact = false; 
    });
    if(g.pointer.isDown){
      console.log("TAP IN ROZOWY")
    }
  }

  function balonyScreen(){


    

   
    iii.setPosition(100, 400)
    startButon.setPosition(100, 600)
    if(g.pointer.isDown){
      
      
      initBalony()
      GAMES.startScreen.kafle.visible = false; 
      
      
      g.state = update; 
    }


  }

  function initBalony(){

    iii.visible = false; 
    startButon.visible = false; 
    LosujKoloryNajwiekszy(poziomTrudnosci, ALL)
    startTime = Date.now() ;
    endTime = startTime + 30000
    allBallonsGroup.setPosition(0,1080)
    allBallonsGroup.vy = -120

    healthBar.visible = true; 
    licznikPunktow.visible = true; 
    GeneratorStart = progresBarGenerator(healthBar, Date.now())
    //g.state = update;
    GAMES.startScreen.kafle.visible = false;  
    GAMES.startScreen.interact = false; 
    GAMES.startScreen.kafle.children.forEach(element => {
          element.interact = false; 
    });
  }
  








if(licznik == allDominatecolors.length){
                                    
    g.wait(1500, ()=>{
      ALL.forEach(element => {
        element.reset()
    });
    })
   
}






/*

POINTER TAP 1 WERSJA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

*/
g.pointer.tap = function () {
      
    let allDominatecolors = []

    ALL.forEach(element => {
        if(element.color === DominateColor){
          allDominatecolors.push(element)
        }
    });

    let licznikWszystkichwDanymKolorze = allDominatecolors.length;

    ALL.forEach(element => {
      
      
      let randomInterval = 0
            var test = {
              width: element.graphic.width, 
              height: element.graphic.height +20 ,
              x: element.graphic.x + 22,
              y: element.graphic.y - 80 , 
              xAnchorOffset: element.graphic.xAnchorOffset,
              yAnchorOffset: element.graphic.yAnchorOffset ,
              radius : false
            }
          
            //console.log(test)
            if(g.hitTestPoint(g.pointer.position, test) && Flag == true){

              //alert(test)
                    //console.log("This color = " + element.color)
                    if(element.color === DominateColor && element.isActive() == true){

                     
                        /* allDominatecolors.forEach(element => {
                              let randomSnd = g.randomInt(1,2)
                              g.wait(randomInterval, () => {
                                    element.soundEfectTable[randomSnd].play()
                                    licznik += 1
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
                                          0.05, 0.1 )                             //Min/max rotation speed);
                                    //g.createParticles(element.graphic.x, element.graphic.y, function () {
                                      //return g.sprite("./img/star.png");
                                    //}, g.stage, 300);
                                    element.hide()
                                    console.log(licznik)

                                    if(licznik == allDominatecolors.length){
                                      console.log(licznik)

                                      allBallonsGroup.setPosition(0,1080);
                                      //g.wait(1000, ()=>{
                                        ALL.forEach(element => {
                                          LosujKolory(ALL)
                                          element.reset()
                                      })
                                      
                                      //})
                                     
                                    }
                              });
                              randomInterval += g.randomInt(100,150)

                              

                              
                        }); */

                        
                        //DominateColor = g.randomInt(0,4)
                        let randomSnd = g.randomInt(1,2)
                        element.soundEfectTable[randomSnd].play()
                        licznikZbitychBalonikow += 1; 
                        licznikPunktow.content = parseInt(licznikPunktow.content) + 1; 

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
                          0.05, 0.1 )                             //Min/max rotation speed);
                    //g.createParticles(element.graphic.x, element.graphic.y, function () {
                      //return g.sprite("./img/star.png");
                    //}, g.stage, 300);
                    element.hide()


                    //console.log(element.isActive())

                    if(licznikZbitychBalonikow == licznikWszystkichwDanymKolorze){

                      allBallonsGroup.setPosition(0,1080);

                      ALL.forEach(element => {
                        
                        element.reset()
                      })

                      LosujKoloryNajwiekszy(poziomTrudnosci, ALL)
                      //LosujKolory(ALL)

                      licznikZbitychBalonikow = 0; 

                      

                      DominateColor = g.randomInt(0,5)

                      

                      informatorKolorow.color = DominateColor; 
                      informatorKolorow.ChangeColor(DominateColor)
                      g.charm.globalTweens.length = 0; 

                      

                    }

                          //alert("JUZ ZBITO " + licznikZbitychBalonikow + " BALONIKOW")
                        //console.log("Kolor : " + DominateColor)

                        //alert("W Kolorze Czerwonym jest " + licznikWszystkichwDanymKolorze + " Balonikow a pozostalo : " + licznik)
                        
                    }else{
                        element.wrongTouch()



                        if(element.isActive()){
                          licznikPunktow.content = parseInt(licznikPunktow.content) - karnePunkty; 
                        }
                         

                    }
            }
      
    });

    
};


/*

losuj kolory wersja 1

*/

function  LosujKolory(balony) {
    

    let pierwsze5 = randomUnique(balony.length, 5)

    let color = 0;//red

    for (let index = 0; index < pierwsze5.length; index++) {
        balony[pierwsze5[index]] = color;
        color+=1; 
        
    }

    for (let index = 0; index < baony.length; index++) {
        
        
        if( index == pierwsze5[0] ||  index == pierwsze5[0] || index == pierwsze5[0] || index == pierwsze5[0] || index == pierwsze5[0] ){

        }else{
            let nowyKolor = g.randomInt(0,4)
            balony[index].color = nowyKolor
            balony[index].ChangeColor(nowyKolor)
        }

    }

}

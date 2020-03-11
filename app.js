




let teamAussie= {
    accuracy: true,
    firePower: 5,
    hull: 20,
  }
  
  let teamBossy= {
    accuracy:randomDecimal(.6,.8),
    firePower: random(2,5),
    hull: random(3,7),
  
  }
  
  function random(min, max) {
    return Math.floor(Math.random()* (max - min)+ min);
  }
  
  function randomDecimal(){
    return Math.random() * (.8-.6) + .6;
  }
   // make 6 shipBossy with a class
  
  class ShipBossy {
    constructor (number){
      this.shipNumber= (number),
      this.hull= random (3,7),
      this.firePower= random(2,5),
      this.accuracy= randomDecimal(.6,.8)
    }
  }
  // let shipBossyA= new ShipBossy(1);
  //   console.log(shipBossyA);
  
  shipBossyShips= new Array();
  
  // for(let i=1; i<7; i++) {
  //   shipBossyShips.push(new ShipBossy([i]));
  // // console.log(shipBossyShips);
  
  
  
  let shipBossy1=(new ShipBossy([1]));
  let shipBossy2=(new ShipBossy([2]));
  let shipBossy3=(new ShipBossy([3]));
  let shipBossy4=(new ShipBossy([4]));
  let shipBossy5=(new ShipBossy([5]));
  let shipBossy6=(new ShipBossy([6]));
  let teamBHull1= shipBossy1.hull;
  let teamBHull2= shipBossy2.hull;
  let teamBHull3= shipBossy3.hull;
  let teamBHull4= shipBossy4.hull;
  let teamBHull5= shipBossy5.hull;
  let teamBHull6= shipBossy6.hull;
  let updatedTeamBHull=0;
  
// console.log("Do you want to play spaceShipAttack write Yes or No.");
// process.stdin.once('data', (chunk) => {
//     let reply=chunk.toString().trim();
//     console.log("Awesome thanks for writing," +reply+ "!, lets get started. Good Luck!");
//     aattack1();
//     process.exit();
    
// });

// console.log("You are TeamA. Team A has 20 Hull points and Team B has 6 spaceship with a random amount of hull point. whichever team finish all of their hull points first lose.");
// process.stdin.once('data', (chunk) => {
//     let reply=chunk.toString().trim();
//     console.log();
//     process.exit();
// });


let play = prompt ("Do you want to play spaceShipAttack write Yes or No.");
if (play == "yes"){
  alert("You are TeamA. Team A has 20 Hull points and Team B has 6 spaceship with a random amount of hull point. whichever team finish all of their hull points first lose.");
} else {
  alert("Dont be a chicken")
}


let start= prompt ("write START to begin. GOOD LUCK!");

if (start !== "null") {
  aattack1();
} else {
  alert("no pressure");
}



//   aattack1();
  
  function aattack1() {
   
  let updatedTeamBHull= (teamBHull1)-(teamAussie.firePower)
    
  console.log("TeamA attacks TeamB ship1:",shipBossy1,"TeamB updated hull is ="+ updatedTeamBHull, "TeamB original hull ="+teamBHull1,"TeamA fire Power="+teamAussie.firePower);
  
    if (updatedTeamBHull>=1) {
        battack1();
        function battack1() {
        let teamAHull1= teamAussie.hull;
        let teamBfirePower1= shipBossy1.firePower;
        let updatedTeamAHull= (teamAussie.hull)-(shipBossy1.firePower)
        teamAussie.hull= updatedTeamAHull; 
  
        console.log("team B turn to attack with same ship1, battack", "TeamA original hull ="+teamAHull1,"TeamB fire Power="+ shipBossy1.firePower, "Teama updated hull ="+updatedTeamAHull,teamAussie.hull);
        aattack1BOld ();
  
      }
        
    } else{
      // let shipBossy2=(new ShipBossy([2]))
      let teamAHull2= teamAussie.hull;
      let teamBHull2= shipBossy2.hull;
      let teamBfirePower2= shipBossy2.firePower;
      let updatedTeamAHull= (teamAHull2)-(shipBossy2.firePower)
      teamAussie.hull= updatedTeamAHull;
  
      console.log("!Ship1 Down!It is TeamB turn to attack with ship2", shipBossy2,"Team b hull ="+ teamBHull2, "TeamA original hull ="+teamAHull2,"TeamB fire Power="+ shipBossy2.firePower, "TeamA is hit.TeamA updated hull is "+updatedTeamAHull, teamAussie.hull);
      aattack2();
  
  
    } 
  }
  
  function aattack1BOld () {
    if (true) {
      let updatedTeamBHull= (1)-(teamAussie.firePower);
      
      console.log("TeamB updated hull after  attack ="+ updatedTeamBHull, "TeamB original hull = 1","TeamA fire Power="+teamAussie.firePower,"SHIP1 DOWN!");
  
      battack1BOld();
  
      function battack1BOld() {
        // let teamAHull1= teamAussie.hull;
        // let teamBfirePower1= shipBossy1.firePower;
        let updatedTeamAHull= (teamAussie.hull)-(shipBossy1.firePower);
        teamAussie.hull= updatedTeamAHull; 
    
        console.log("team B turn to attack with new ship,"+ shipBossy2, "TeamB fire Power="+ shipBossy2.firePower, "Teama updated hull ="+updatedTeamAHull,teamAussie.hull);
  
        aattack2 ();
  
        // console.log("team B turn to attack with same ship, battack", "TeamA original hull ="+teamAHull1,"TeamB fire Power="+ shipBossy1.firePower, "Teama updated hull ="+updatedTeamAHull,teamAussie.hull);
      }
    
  
    }
  }
  
  
  
  
  
  
  
  
  function aattack2 () {
    // console.log("Im here aattack2");
  
    let updatedTeamBHull= (teamBHull2)-(teamAussie.firePower)
    
    console.log("Team A attacks TeamB second ship", shipBossy2,"TeamB original hull ="+teamBHull2,"TeamB updated hull ="+ updatedTeamBHull, "TeamA fire power="+teamAussie.firePower);
  
    if (updatedTeamBHull>=1) {
      battack2();
        function battack2() {
        let teamAHull2= teamAussie.hull;
        // let teamBfirePower2= shipBossy2.firePower;
        let updatedTeamAHull= (teamAussie.hull)-(shipBossy2.firePower);
        teamAussie.hull= updatedTeamAHull;
  
          console.log("team B turn to attack with same ship, battack", "TeamA original hull ="+teamAHull2,"TeamB fire Power="+ shipBossy2.firePower, "Teama updated hull ="+updatedTeamAHull,teamAussie.hull);
  
          aattack2BOld();}
  
        } else{
          // let shipBossy2=(new ShipBossy([2]))
          let teamAHull3= teamAussie.hull;
          let teamBHull3= shipBossy3.hull;
          let teamBfirePower3= shipBossy3.firePower;
          let updatedTeamAHull= (teamAHull3)-(shipBossy3.firePower)
          teamAussie.hull= updatedTeamAHull;
          console.log("!Ship2 Down!It is TeamB turn to attack with ship3", shipBossy3,"Team b hull ="+ teamBHull3, "TeamA original hull ="+teamAHull3,"TeamB fire Power="+ shipBossy3.firePower, "TeamA is hit.TeamA updated hull is" +updatedTeamAHull);
          aattack3();
      } 
  };
  
  
  function aattack2BOld () {
    if (true){
      let updatedTeamBHull= (teamBHull3)-(teamAussie.firePower);
      
      console.log(shipBossy2,"TeamB updated hull after attack ="+ updatedTeamBHull, "TeamB original hull ="+ teamBHull3,"TeamA fire power="+teamAussie.firePower,"SHIP2 DOWN!");
  
      battack2BOld();
  
      function battack2BOld() {
        // let teamAHull1= teamAussie.hull;
        // let teamBfirePower1= shipBossy1.firePower;
        let updatedTeamAHull= (teamAussie.hull)-(shipBossy2.firePower);
        teamAussie.hull= updatedTeamAHull; 
    
        console.log("team B turn to attack with new ship,"+ shipBossy3, "TeamB fire Power="+ shipBossy3.firePower, "TeamA updated hull ="+updatedTeamAHull,teamAussie.hull);
        aattack3 ();
  
      }
    }
  };
  
  
  function aattack3() {
    // console.log("Im here aattack3");
  
    let updatedTeamBHull= (teamBHull3)-(teamAussie.firePower)
    
    console.log("Team A attacks TeamB third ship", shipBossy3,"TeamB original hull ="+teamBHull3,"TeamB updated hull ="+ updatedTeamBHull, "TeamA fire power="+teamAussie.firePower);
  
    if (updatedTeamBHull>=1) {
      battack3();
        function battack3() {
        let teamAHull3= teamAussie.hull;
        // let teamBfirePower2= shipBossy2.firePower;
        let updatedTeamAHull= (teamAussie.hull)-(shipBossy3.firePower);
        teamAussie.hull= updatedTeamAHull;
  
          console.log("team B turn to attack with same ship, battack", "TeamA original hull ="+teamAHull3,"TeamB fire Power="+ shipBossy3.firePower, "Teama updated hull ="+updatedTeamAHull,teamAussie.hull);
  
          aattack3BOld();}
  
        } else{
          // let shipBossy2=(new ShipBossy([2]))
          let teamAHull4= teamAussie.hull;
          let teamBHull4= shipBossy4.hull;
          let teamBfirePower4= shipBossy4.firePower;
          let updatedTeamAHull= (teamAHull4)-(shipBossy4.firePower)
          teamAussie.hull= updatedTeamAHull;
          console.log("!Ship3 Down!It is TeamB turn to attack with ship4", shipBossy4,"Team b hull ="+ teamBHull4, "TeamA original hull ="+teamAHull4,"TeamB fire Power="+ shipBossy4.firePower, "TeamA is hit.TeamA updated hull is" +updatedTeamAHull);
          aattack4();
      } 
  }
  
  
  
  function aattack3BOld () {
    if (true){
      let updatedTeamBHull= (teamBHull4)-(teamAussie.firePower);
      
      console.log(shipBossy3,"TeamB updated hull after attack ="+ updatedTeamBHull, "TeamB original hull ="+ teamBHull4,"TeamA fire power="+teamAussie.firePower,"SHIP3 is DOWN!");
  
      battack3BOld();
  
      function battack3BOld() {
        // let teamAHull1= teamAussie.hull;
        // let teamBfirePower1= shipBossy1.firePower;
        let updatedTeamAHull= (teamAussie.hull)-(shipBossy3.firePower);
        teamAussie.hull= updatedTeamAHull; 
    
        console.log("team B turn to attack with new ship,"+ shipBossy4, "TeamB fire Power="+ shipBossy4.firePower, "TeamA updated hull ="+updatedTeamAHull,teamAussie.hull);
        aattack4 ();
      }
    }
  };
  
  
  
  function aattack4() {
    // console.log("Im here aattack4");
  
    let updatedTeamBHull= (teamBHull4)-(teamAussie.firePower)
    
    console.log("Team A attacks TeamB fourth ship", shipBossy4,"TeamB original hull ="+teamBHull4,"TeamB updated hull ="+ updatedTeamBHull, "TeamA fire power="+teamAussie.firePower);
  
    if (updatedTeamBHull>=1 || teamAussie.hull<0) {
      battack4();
        function battack4() {
        let teamAHull4= teamAussie.hull;
        // let teamBfirePower2= shipBossy2.firePower;
        let updatedTeamAHull= (teamAussie.hull)-(shipBossy4.firePower);
        teamAussie.hull= updatedTeamAHull;
  
          console.log("team B turn to attack with same ship, battack", "TeamA original hull ="+teamAHull4,"TeamB fire Power="+ shipBossy4.firePower, "Teama updated hull ="+updatedTeamAHull,teamAussie.hull);
  
          aattack4BOld()};
  
        } else{
          // let shipBossy2=(new ShipBossy([2]))
          let teamAHull5= teamAussie.hull;
          let teamBHull5= shipBossy5.hull;
          let teamBfirePower5= shipBossy4.firePower;
          let updatedTeamAHull= (teamAHull5)-(shipBossy5.firePower)
          teamAussie.hull= updatedTeamAHull;
          console.log("!Ship4 Down!It is TeamB turn to attack with ship5", shipBossy5,"Team b hull ="+ teamBHull5, "TeamA original hull ="+teamAHull5,"TeamB fire Power="+ shipBossy5.firePower, "TeamA is hit.TeamA updated hull is" +updatedTeamAHull);
          aattack5();
      } 
  }
  
  
  
  function aattack4BOld () {
    if (teamAussie.hull>0){
      let updatedTeamBHull= (teamBHull5)-(teamAussie.firePower);
      
      console.log(shipBossy4,"TeamB updated hull after attack ="+ updatedTeamBHull, "TeamB original hull ="+ teamBHull5,"TeamA fire power="+teamAussie.firePower,"SHIP4 is DOWN!");
  
      battack4BOld();
  
      function battack4BOld() {
        // let teamAHull1= teamAussie.hull;
        // let teamBfirePower1= shipBossy1.firePower;
        let updatedTeamAHull= (teamAussie.hull)-(shipBossy4.firePower);
        teamAussie.hull= updatedTeamAHull; 
    
        console.log("TeamB attacks with new ship:"+ shipBossy5, "TeamB fire Power="+ shipBossy5.firePower, "TeamA updated hull ="+updatedTeamAHull,teamAussie.hull);
        aattack5 ();
      }
    } else {"GAMEOVER TeamA Lost because their hull is zero or below", teamAussie.hull}
  };
  
  
  function aattack5() {
    // console.log("Im here aattack4");
  
    let updatedTeamBHull= (teamBHull5)-(teamAussie.firePower)
    
    console.log("Team A attacks TeamB fifth ship", shipBossy5,"TeamB original hull ="+teamBHull5,"TeamB updated hull ="+ updatedTeamBHull, "TeamA fire power="+teamAussie.firePower);
  
    if (updatedTeamBHull>=1 || teamAussie.hull<0) {
      battack5();
        function battack5() {
        let teamAHull5= teamAussie.hull;
        // let teamBfirePower2= shipBossy2.firePower;
        let updatedTeamAHull= (teamAussie.hull)-(shipBossy5.firePower);
        teamAussie.hull= updatedTeamAHull;
  
          console.log("team B turn to attack with same ship, battack", "TeamA original hull ="+teamAHull5,"TeamB fire Power="+ shipBossy5.firePower, "Teama updated hull ="+updatedTeamAHull,teamAussie.hull);
  
          aattack5BOld()};
  
        } else{
          // let shipBossy2=(new ShipBossy([2]))
          let teamAHull6= teamAussie.hull;
          let teamBHull6= shipBossy6.hull;
          let teamBfirePower6= shipBossy6.firePower;
          let updatedTeamAHull= (teamAHull6)-(shipBossy6.firePower)
          teamAussie.hull= updatedTeamAHull;
          console.log("!Ship5 Down!It is TeamB turn to attack with ship6", shipBossy6,"Team b hull ="+ teamBHull6, "TeamA original hull ="+teamAHull6,"TeamB fire Power="+ shipBossy6.firePower, "TeamA is hit.TeamA updated hull is" +updatedTeamAHull);
          aattack6();
      } 
  }
  
  
  function aattack5BOld () {
    if (teamAussie.hull>0){
      let updatedTeamBHull= (teamBHull6)-(teamAussie.firePower);
      
      console.log(shipBossy5,"TeamB updated hull after attack ="+ updatedTeamBHull, "TeamB original hull ="+ teamBHull6,"TeamA fire power="+teamAussie.firePower,"SHIP5 is DOWN!");
  
      battack5BOld();
  
      function battack5BOld() {
        // let teamAHull1= teamAussie.hull;
        // let teamBfirePower1= shipBossy1.firePower;
        let updatedTeamAHull= (teamAussie.hull)-(shipBossy5.firePower);
        teamAussie.hull= updatedTeamAHull; 
    
        console.log("TeamB attacks with new ship:"+ shipBossy6, "TeamB fire Power="+ shipBossy6.firePower, "TeamA updated hull ="+updatedTeamAHull,teamAussie.hull);
        aattack6 ();
      }
    } else {
      console.log("GAMEOVER TeamA Lost because their hull is zero or below", teamAussie.hull)}
  };
  
  
  
  function aattack6() {
    // console.log("Im here aattack4");
  
    let updatedTeamBHull= (teamBHull6)-(teamAussie.firePower)
    
    console.log("Team A attacks TeamB sixth ship", shipBossy6,"TeamB original hull ="+teamBHull6,"TeamB updated hull ="+ updatedTeamBHull, "TeamA fire power="+teamAussie.firePower);
  
    if (updatedTeamBHull>=1 || teamAussie.hull<=0) {
      battack6();
        function battack6() {
        let teamAHull6= teamAussie.hull;
        // let teamBfirePower2= shipBossy2.firePower;
        let updatedTeamAHull= (teamAussie.hull)-(shipBossy6.firePower);
        teamAussie.hull= updatedTeamAHull;
  
          console.log("teamB turn to attack with same ship, battack", "TeamA original hull ="+teamAHull6,"TeamB fire Power="+ shipBossy6.firePower, "Teama updated hull ="+updatedTeamAHull,teamAussie.hull);
  
          aattack6BOld()};
  
        } else{
          console.log("GAME OVER!TeamB doesnt have any more ships");
        }
          // let shipBossy2=(new ShipBossy([2]))
          // let teamAHull6= teamAussie.hull;
          // let teamBHull6= shipBossy6.hull;
          // let teamBfirePower6= shipBossy6.firePower;
          // let updatedTeamAHull= (teamAHull6)-(shipBossy6.firePower)
          // teamAussie.hull= updatedTeamAHull;
          // console.log("!Ship5 Down!It is TeamB turn to attack with ship6", shipBossy6,"Team b hull ="+ teamBHull6, "TeamA original hull ="+teamAHull6,"TeamB fire Power="+ shipBossy6.firePower, "TeamA is hit.TeamA updated hull is" +updatedTeamAHull);
          // aattack6();
      // } 
  }
  
  
  
  function aattack6BOld () {
    if (teamAussie.hull<0){
      console.log("GAMEOVER TeamA Lost because their hull is zero or below", teamAussie.hull)}
    else {
    console.log("GAME OVER!TeamB doesnt have any more ships");
    };
  }
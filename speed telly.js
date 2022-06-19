
function place(y) {
    //KeyBind.key(-99,false)
    Player.addInput(Player.createPlayerInput(-1,0,-175,y,false,false,false))
    //KeyBind.key(-99,true)
    Client.waitTick(1)

}

function jump(repeats=1) {
    for(let i =0; i < repeats; i++) {
        Player.addInput(Player.createPlayerInput(1,0,0,0,true,false,true))
        Client.waitTick(1);
    }
}

function strafe(count=1) {
    for (let i = 0; i<count; i++) {
        Player.addInput(Player.createPlayerInput(1,-1,-45,0,false,false,true))
        Client.waitTick(1)
        //KeyBind.key(-99, false)
    }
}

function forward(repeats=1) {
    for(let i =0; i < repeats; i++) {
        Player.addInput(Player.createPlayerInput(1,0,0,0,false,false,true))
        Client.waitTick(1);
    }
}

function clutch(y,jump=false) {
    Player.addInput(Player.createPlayerInput(1,0,0,y,jump,false,true))
    Client.waitTick(1)
}

function hh(firstpitch,secondpitch,twoblock=false) {
    jump()
    place(firstpitch)
    place(secondpitch)
    if (twoblock) {
        place(-35)
        place(-35)
    }
}
function eleven_blocks_init_mm(reps=1) {
    for (let i = 0; i <reps; i++) {
        hh(65,80,true)
        hh(70,-45)
        hh(65,75,true)
        hh(65,80,true)  
        hh(70,-45)   
        hh(65,80,true)
        hh(70,-45)
    }
}

forward(3)
jump(15)
place(0)
place(0)
place(0)
place(0)
//placing blocks
place(40)
place(50)
place(55)
place(55)


  //first speed  
jump()
jump()
//strafe(2)
forward(2)
place(45)
place(45)
place(55)
place(65)
place(80)

  // second speed    
jump()
jump()
forward(3)
//strafe(3)
place(55)
place(55)
place(65)
place(75)

//third speed
jump()
jump()
forward(3)
//strafe(3)
place(50)
place(50)
place(55)
place(70)

//fourth speed
//jump()
//jump()
//strafe(3)
//place(50)
//place(50)
//place(55)
//place(60)
//place(60)

jump()
jump()
strafe()
strafe(50)

Client.waitTick(1)

var canvas = new fabric.Canvas("myCanvas");
person_image_width= 30;
person_image_height = 30;

player_x = 10;
player_y = 10;

var player_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToWidth(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    }
}

if(keyPressed == "70" )
{
    new_image("ironman_face.png");
    console.log("f");
}

if(keyPressed == "66")
{
    new_image("spiderman_body.png");
    console.log("b");
}

if(keyPressed == "76" )
{
    new_image("hulk_legs.png");
    console.log("l");
}

if(keyPressed == "82")
{
    new_image("thor_right_hand.png");
    console.log("r");
}

if(keyPressed == "72")
{
    new_image("captain_left_hand.png");
    console.log("h");
}

if(keyPressed == "38")
{
   function up();
   console.log("up");
}

if(keyPressed == "40")
{
   function down();
    console.log("down");
}

if(keyPressed == "37")
{
    function left();
    console.log("left");
}

if(keyPressed == "39")
{
    function right();
    console.log("right");
}





















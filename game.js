/**
 * game.js
 * This JavaScript file is a template file that can be used to 
 * begin a new game using the Phaser engine.
 * (c) 2015 Senn Coding Club
 */

	// the entirety of the game module should be wrapped in the window.onload() event
window.onload = function() {
	
	// GLOBAL VARIABLE SETUP
	// The HTML file that contains the game should have a
	// div element whose is "game"
var gameCanvas = document.getElementById("game");	// capture the canvas where the game is to be rendered

	// instantiate a new Phaser game
	// use the actual canvas width and height
	// set the background transparency to true and use the CSS file to adjust
var game = new Phaser.Game(600, 600, Phaser.AUTO, gameCanvas,{ preload: preload, create: create, render : render, update:update }, true);

	/** 
	 * preload()
	 * This function is tied to the preload game state in the Phaser framework.
	 * It is called when the game first load.
	 * All of the assets (images, sounds, etc.), should be loaded here.
	 */                        
function preload() {
    // load all game assets here
  game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

    
} 

	/**
	 * create()
	 * This function is tied to the create game state in the Phaser framework.
	 * It is called when the game is first created. The initial game 
	 * should be rendered out here.
	 */
function create() {
  // create the game world here
    game.add.sprite(0, 0 , 'star');
}
  
	/**
	 * update()
	 * This function is tied to the update game state in the Phaser framework.
	 * It is called at 60 times per second (60 FPS). All the redraw happens within this area.
	 */
function update() {

}


  	/**
  	 * render()
  	 * This function is tied to the render game state in the Phaser framework.
  	 * 
  	 */
function render(){ 


}
  
};
//////////////////////////////////////////////////////////////////////
// main
//////////////////////////////////////////////////////////////////////
var main = new Item("jklim1253@trusthouse :/");
var running = new Item("Running");
var working = new Item("Working");

main.append(running);
main.append(working);

//////////////////////////////////////////////////////////////////////
// main-running
//////////////////////////////////////////////////////////////////////
{
var cpp = new Item("cpp");
var js = new Item("js");

running.append(cpp);
running.append(js);
//////////////////////////////////////////////////////////////////////
// main-running-cpp
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// main-running-js
//////////////////////////////////////////////////////////////////////
} // main-running

//////////////////////////////////////////////////////////////////////
// main-working
//////////////////////////////////////////////////////////////////////
{
var cpp = new Item("cpp");
var js = new Item("js");

working.append(cpp);
working.append(js);

//////////////////////////////////////////////////////////////////////
// main-working-cpp
//////////////////////////////////////////////////////////////////////
cpp.append(new Item(
			"Character Transform",
			"In console, one character filled by dot transform to another",
			"working.cpp.character_transform",
			"img/charactertransform.png"
			));

//////////////////////////////////////////////////////////////////////
// main-working-js
//////////////////////////////////////////////////////////////////////
js.append(new Item(
			"Game Of Life",

			"<h3>Death and Alive of Cell, How long do your cell alive?</h3><br/>"+
			"&nbsp;<br/>"+
			"Mouse Click : Cell Insert/Remove Toggle<br/>"+
			"Enter : Run/Stop Toggle<br/>"+
			"&nbsp;<br/>"+
			"<h3>Rule</h3><br/>"+
			"- 검정은 살아있는 세포, 그렇지 않는 건 죽어 있는 세포<br/>"+
			"- 살아있는 세포 주변에 2,3개의 살아있는 세포가 있으면 산다.<br/>"+
			"- 그렇지 않은 살아있는 세포는 죽는다.<br/>"+
			"- 죽어있는 세포 주변에 정확하게 3개의 살아있는 세포가 있으면 살아난다.<br/>"+
			"- 그렇지 않은 죽어있는 세포는 여전히 죽어있는다.<br/>"+
			"&nbsp;<br/>"+
			"<h3>추가 개발 사항</h3><br/>"+
			"- blink, block 을 정지로 인식하여 자동으로 멈추도록 하는 기능<br/>"+
			"- 시작 상태를 이미지로 저장할 수 있도록 하는 기능<br/>"+
			"- 시작 세포 수 대비 가장 오래동안 진행된 모형을 랭킹하는 기능(서버 필요)<br/>",
			"working.js.game_of_life",
			"img/gameoflife.png"
			));
js.append(new Item(
			"Maze Maker",

			"<h3>Make Maze to go to the goal hardly.</h3><br>"+
			"&nbsp;<br>"+
			"Mouse Click/Drag : toggle block insert/delete<br>"+
			"Esc : clear map<br>"+
			"V : verify map(if verified, maze id created.)<br>"+
			"C : create maze id<br>"+
			"&nbsp;<br>"+
			"<h3>Rule</h3><br>"+
			"....<br>"+
			"&nbsp;<br>"+
			"<h3>추가 개발 사항</h3><br>"+
			"- <div class='done'>미로 적합성 검사 기능</div><br>"+
			"- 미로 찾기 봇(bot) 기능<br>"+
			"- 미로 찾는 시간 표시 기능<br>"+
			"- 새로운 미로를 등록하는 기능(서버 필요)<br>",

			"working.js.maze_maker",
			"img/mazemaker.png"
			));

} // main-working

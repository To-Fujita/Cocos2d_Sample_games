# Cocos2dJS Sample Games
Cocos2d.JS is one of Game Engine based on JavaScript. I had tried to create some games on 2D based. These games are puzzle type and maze type.
## Description:
This is one of tutrial for creating some games based on cocos2d.js. In this document, to try creating 2D based breakout games with pazzle and maze. 
## Demo:
I will show you same samples to create 2D based games of pazzle type step by step.  
These demonstrations are confirmed by Microsoft Edge (Ver. 11.0.17763.379), Firefox (Ver. 65.0.2/64 bit) and Google Chrome (Ver. 73.0.3683.86/64 bit) under the condition of Windows 10. Then, some of Android are also available to work it.  
[index.html](https://to-fujita.github.io/Cocos2d_Sample_games/index.html) : Menu for Demo Games  
The files and folders are as follows:  
- Cocos2d.js_Sample_01 - Cocos2d.js_Sample_07: Each folders is corresponding to each step below.  
-> Cocos2d_Sample_xx.html : HTML file for each step. All html files have similar contents.  
-> main_xx.js : It is given by Cocos2d.js.  
-> project.json : It is also given by Cocos2d.js. In this file, it is assigned to load files.  
-> src/app_xx.js : This is main program file.  
-> src/loading.js : It is also given by Cocos2d.js.  
-> src/resource_xx.js : In this file, it is assigned resources that are image files, sound files, and etc.  
->src/stages_01.js: It is some data for puzzle game.  
-> src/maze_02.js : It is a program for creating maze for Step-7.  
- frameworks: It is a folder for cocos2d.js and their modules.  
- res: It is a folder for providing the background image, tile images, character's graphics and sound files.    

In these games, some graphics are downloaded from  [pikasgame](https://dorapika.wixsite.com/pikasgame) and [pipoya](http://blog.pipoya.net/). Then, files for sound effect are downloaded from [soundeffect-lab](https://soundeffect-lab.info/).  
### Step-1
As a first step, let's try to display a static character's graphic at center of window.  
[Cocos2d_Sample_01.html](https://to-fujita.github.io/Cocos2d_Sample_games/Cocos2d_Sample_01.html) : Demo for Step-1
### Step-2
Next is to try moving a static character by arrow keys or mouse click.  
[Cocos2d_Sample_02.html](https://to-fujita.github.io/Cocos2d_Sample_games/Cocos2d_Sample_02.html) : Demo for Step-2
### Step-3
At the Step-3, try to display a active character's graphic at center of window.  
[Cocos2d_Sample_03.html](https://to-fujita.github.io/Cocos2d_Sample_games/Cocos2d_Sample_03.html) : Demo for Step-3
### Step-4
At the Step-4, try to display a walking animation for 4 directions by arrow keys or mouse click.  
[Cocos2d_Sample_04.html](https://to-fujita.github.io/Cocos2d_Sample_games/Cocos2d_Sample_04.html) : Demo for Step-4
### Step-5
At the Step-5, display tiles of walls and boxes. Then, to set the limit of walking at walls.  
[Cocos2d_Sample_05.html](https://to-fujita.github.io/Cocos2d_Sample_games/Cocos2d_Sample_05.html) : Demo for Step-5
### Step-6
At the Step-6, to set pushing a box. It is 2 type of 2D based game samples, that is without sound effect and with sound effect. If you try again same stage, please click the "A" tile.  
[Cocos2d_Sample_06.html](https://to-fujita.github.io/Cocos2d_Sample_games/Cocos2d_Sample_06.html) : Demo for Step-6 without sound effect  
[Cocos2d_Sample_06_with_sound_effect.html](https://to-fujita.github.io/Cocos2d_Sample_games/Cocos2d_Sample_06_with_sound_effect.html) : Demo for Step-6 with sound effect
### Step-7
In this step, try to create game for 2D type of maze with small chang of the sample in Step-6. The algorithm for making maze is based on [Algoful](http://algoful.com/Archive/Algorithm/MazeDig).  
[Cocos2d_Sample_07.html](https://to-fujita.github.io/Cocos2d_Sample_games/Cocos2d_Sample_07.html) : Demo for Step-7

## Reference:
1. [Cocos2d-x](https://www.cocos.com/en/) : Home Page of Cocos2d-x  
2. [Cocos2d-x](https://cocos2d-x.org/filecenter/jsbuilder/) : Download page for Cocos2d-JS
2. [pikasgame](https://dorapika.wixsite.com/pikasgame) : Home Page of PIKA's GAME  
3. [pipoya](http://blog.pipoya.net/) : Home Page of Pipoya  
4. [Algoful](http://algoful.com/Archive/Algorithm/MazeDig) : Algorithm for making a maze  
5. [soundeffect-lab](https://soundeffect-lab.info/) : Download for Sound Effect Data   
## Licence:
[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)
## Author:
[T. Fujita](https://github.com/T-Fujita)


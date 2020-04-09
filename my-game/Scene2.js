let _const2=360;
let ballNumber2 = 9;
let status2 = 0;



class Scene2 extends Phaser.Scene{

    constructor() {
        super('Scene2');
    }

    preload() {
        this.load.image('backGround', 'assets/images/backGround.png')
        this.load.image('frameWork', 'assets/images/frameWork.png')
        this.load.image('redBall', 'assets/images/redBall.png')

        this.load.image('nextButton', 'assets/images/nextButton.png')
        this.load.image('backButton', 'assets/images/backButton.png')

        this.load.image('home_0', 'assets/images/home_0.png')
        this.load.image('home_1', 'assets/images/home_1.png')
        this.load.image('home_2', 'assets/images/home_2.png')
        this.load.image('tree', 'assets/images/79.png')

        this.load.image('cat', 'assets/images/cat.png')
        this.load.image('bird', 'assets/images/bird.png')
        this.load.image('squirrel', 'assets/images/squirrel.png')
        this.load.image('mouse', 'assets/images/mouse.png')
        this.load.image('turtle', 'assets/images/turtle.png')
        this.load.image('chicken', 'assets/images/chicken.png')
        this.load.image('frog', 'assets/images/frog.png')

        this.load.image('ok1', 'assets/images/ok1.png')
        this.load.image('ok2', 'assets/images/ok2.png')

        this.load.image('lesson', 'assets/images/lesson.png')
    }   

    create(){
        // Object of the game;
        this.background = this.add.image(0, 0, "backGround").setOrigin(0, 0);
        this.framework = this.add.image(233, 115, "frameWork").setOrigin(0, 0);

        this.backButton = this.add.sprite(245, 117, 'backButton').setOrigin(0,0);

        this.backButton.setInteractive().on('pointerdown', () => this.scene.start('Menu'))

        // this.timer = this.time.events();

        this.input.on('gameobjectover', function(pointer, gameObject){
            gameObject.setTint(0x8EEDE2);
        })

        this.input.on('gameobjectout', function(pointer, gameObject){
            gameObject.clearTint();
        })

        // ball;
        arr = new Array("redBall");
        for(var i = 0; i < ballNumber2; i++){
            arr[i] = this.add.image(_const2 += 70, 137, "redBall").setOrigin(0, 0);
        }

       
        this.phase_1()

    }

    phase_1() {

        this.tree = this.add.image(250, 250, "tree").setOrigin(0, 0);
        this.cat = this.add.sprite(250, 230, "cat").setOrigin(0, 0);
        this.bird = this.add.sprite(340, 545, "bird").setOrigin(0, 0).setAlpha(0.5);
        this.squirrel = this.add.sprite(350, 400, "squirrel").setOrigin(0, 0);
        
        // Question
        this.question = this.add.text(630, 270, "Which one is true?" + "\n", {font: "50px Arial", fill: "black"});

        // Answers
        this.answer_1 = this.add.text(580, 360, 'The cat is above the squirrel.', {font: "40px Arial", fill: "black" });
        // this.answer_1.setInteractive();

        this.answer_2 = this.add.text(580, 420, 'The cat is below the squirrel.', {font: "40px Arial", fill: "black" });
        // this.answer_2.setInteractive();

        this.ok1 = this.add.sprite(1105, 362, "ok1").setOrigin(0, 0)

        this.ok1.setInteractive().on('pointerdown', () => {

            this.destroyBall()
            this.ok1.destroy()
            this.ok2.destroy()
            this.answer_2.setText("")
            // this.add(Phaser.Timer.SECOND*1, phase_2, this)
            this.phase_2()

        });

        this.ok2 = this.add.sprite(1105, 420, "ok2").setOrigin(0, 0);

        this.ok2.setInteractive().on('pointerdown', () => {

            this.ok2.setTint('red')

        })

        this.input.on('gameojectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })


    }

    phase_2(){
        
        this.cat.setAlpha(0.5)
        this.bird.setAlpha(1)
        this.answer_1.setText('The squirrel is below the bird.');
        this.answer_2.setText('The squirrel is above the bird.'); 

        var ok1 = this.add.sprite(1105, 362, "ok1").setOrigin(0, 0)

        ok1.setInteractive().on('pointerdown', () => {

            ok1.setTint('red')

        })

        var ok2 = this.add.sprite(1105, 420, "ok2").setOrigin(0, 0);

       
        ok2.setInteractive().on('pointerdown', () => {

            this.destroyBall()
            ok1.destroy()
            ok2.destroy()
            this.phase_3()

        });

        this.input.on('gameojectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })

    }

    phase_3() {

        this.cat.setAlpha(1)
        this.squirrel.setAlpha(0.5)
        this.answer_1.setText('The bird is above the cat.');
        this.answer_2.setText('The bird is below the cat.'); 

        var ok1 = this.add.sprite(1105, 362, "ok1").setOrigin(0, 0)

        ok1.setInteractive().on('pointerdown', () => {

            ok1.setTint('red')

        })

        var ok2 = this.add.sprite(1105, 420, "ok2").setOrigin(0, 0);

       
        ok2.setInteractive().on('pointerdown', () => {

            this.destroyBall()
            ok1.destroy()
            ok2.destroy()
            this.tree.destroy()
            this.cat.destroy()
            this.squirrel.destroy()
            this.bird.destroy()
            this.phase_4()

        });

        this.input.on('gameojectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })

    }

    phase_4() {

        this.home_0 = this.add.sprite(265, 250, 'home_0').setOrigin(0,0)
        this.mouse = this.add.sprite(300, 250, 'mouse').setOrigin(0,0)
        this.turtle = this.add.sprite(290, 455, 'turtle').setOrigin(0,0)

        this.answer_1.setText('The turtle is above the mouse.')
        this.answer_2.setText('The turtle is below the mouse.')

        var ok1 = this.add.sprite(1120, 362, 'ok1').setOrigin(0,0)

        ok1.setInteractive().on('pointerdown', () => {

            
            ok1.setTint('red')

        })

        var ok2 = this.add.sprite(1120, 420, 'ok2').setOrigin(0,0)

        ok2.setInteractive().on('pointerdown', () =>{

            this.destroyBall()
            this.turtle.destroy()
            this.mouse.destroy()
            ok2.destroy()
            ok1.destroy()
            this.phase_5()


        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint(

            )
        })
 
    }

    phase_5() {

        // this.home_0 = this.add.sprite(265, 250, 'home_0').setOrigin(0,0)
        this.chicken = this.add.sprite(295, 250, 'chicken').setOrigin(0,0)
        this.frog = this.add.sprite(287, 455, 'frog').setOrigin(0,0)

        this.answer_1.setText('The chicken is above the frog.')
        this.answer_2.setText('The chicken is below the frog.')

        var ok1 = this.add.sprite(1120, 362, 'ok1').setOrigin(0,0)

        ok1.setInteractive().on('pointerdown', () => {

            this.destroyBall()
            this.chicken.destroy()
            ok2.destroy()
            ok1.destroy()
            this.phase_6()

        })

        var ok2 = this.add.sprite(1120, 420, 'ok2').setOrigin(0,0)

        ok2.setInteractive().on('pointerdown', () =>{

            ok2.setTint('red')

        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint(

            )
        })
 
    }

    phase_6() {

        // this.home_0 = this.add.sprite(265, 250, 'home_0').setOrigin(0,0)
        this.turtle = this.add.sprite(300, 250, 'turtle').setOrigin(0,0)
        // this.frog = this.add.sprite(287, 455, 'frog').setOrigin(0,0)

        this.answer_1.setText('The frog is above the turtle.')
        this.answer_2.setText('The frog is below the turtle.')

        var ok1 = this.add.sprite(1120, 362, 'ok1').setOrigin(0,0)

        ok1.setInteractive().on('pointerdown', () => {

            ok1.setTint('red')

        })

        var ok2 = this.add.sprite(1120, 420, 'ok2').setOrigin(0,0)

        ok2.setInteractive().on('pointerdown', () =>{

            this.destroyBall()
            this.home_0.destroy()
            this.frog.destroy()
            this.turtle.destroy()
            this.question.destroy()
            this.answer_1.destroy()
            this.answer_2.destroy()
            ok2.destroy()
            ok1.destroy()
            this.phase_7()

        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint(

            )
        })
 
    }

    phase_7() {

        this.home_1 = this.add.sprite(850, 250, 'home_1').setOrigin(0, 0)
        this.home_2 = this.add.sprite(1070, 250, 'home_2').setOrigin(0, 0)
        this.mouse = this.add.sprite(882, 295, 'mouse').setOrigin(0, 0)
        this.chicken = this.add.sprite(1095, 425, 'chicken').setOrigin(0, 0)

        // Question
        this.question = this.add.text(275, 300, 'Which one is true?', {

            font: '50px Arial',
            fill: 'black'

        })

        // Answers

        this.answer_1 = this.add.text(265, 390, 'The mouse is above the chicken.', {

            font: '40px Arial',
            fill: 'black'

        })

        this.answer_2 = this.add.text(265, 490, 'The mouse is below the chicken', {

            font: '40px Arial',
            fill: 'black'

        })

        var ok1 = this.add.sprite(265, 440, 'ok1').setOrigin(0, 0)

        ok1.setInteractive().on('pointerdown', () => {

            this.destroyBall()
            ok1.destroy()
            ok2.destroy()
            this.home_1.destroy()
            this.home_2.destroy()
            this.mouse.destroy()
            this.chicken.destroy()
            this.phase_8()
            
        })

        var ok2 = this.add.sprite(265, 550, 'ok2').setOrigin(0, 0)

        ok2.setInteractive().on('pointerdown', () => {

            ok2.setTint('red')

        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })
    }

    phase_8() {

        this.home_1 = this.add.sprite(1070, 250, 'home_1').setOrigin(0, 0)
        this.home_2 = this.add.sprite(850, 250, 'home_2').setOrigin(0, 0)
        this.frog = this.add.sprite(1095, 295, 'frog').setOrigin(0, 0)
        this.turtle = this.add.sprite(882, 430, 'turtle').setOrigin(0, 0)

        this.answer_1.setText('The turtle is below the frog.')
        this.answer_2.setText('The frog is below the turtle.')

        var ok1 = this.add.sprite(265, 440, 'ok1').setOrigin(0, 0)

        ok1.setInteractive().on('pointerdown', () => {

            this.destroyBall()
            ok1.destroy()
            ok2.destroy()
            this.home_1.destroy()
            this.frog.destroy()
            this.turtle.destroy()
            this.phase_9()
            
        })

        var ok2 = this.add.sprite(265, 550, 'ok2').setOrigin(0, 0)

        ok2.setInteractive().on('pointerdown', () => {

            ok2.setTint('red')

        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })


    }

    phase_9() {

        this.home_0 = this.add.sprite(1070, 250, 'home_0').setOrigin(0, 0)
        this.frog = this.add.sprite(1095, 255, 'frog').setOrigin(0, 0)
        this.cat = this.add.sprite(882, 460, 'cat').setOrigin(0, 0)
        this.mouse = this.add.sprite(1105, 450, 'mouse').setOrigin(0, 0)

        this.answer_1.setText('The mouse is below the cat.')
        this.answer_2.setText('The frog is above the cat.')

        var ok1 = this.add.sprite(265, 440, 'ok1').setOrigin(0, 0)

        ok1.setInteractive().on('pointerdown', () => {

            ok1.setTint('red')
            
        })

        var ok2 = this.add.sprite(265, 550, 'ok2').setOrigin(0, 0)

        ok2.setInteractive().on('pointerdown', () => {

            this.destroyBall()
            ok1.destroy()
            ok2.destroy()
            this.question.destroy()
            this.answer_1.destroy()
            this.answer_2.destroy()
            this.home_0.destroy()
            this.home_2.destroy()
            this.frog.destroy()
            this.cat.destroy()
            this.mouse.destroy()

            this.end_scene()

        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })


    }

    end_scene() {

        this.backButton.destroy()
        
        this.nofication = this.add.text(475, 145, 'Well done! You completed the card!', {

            font: '35px Arial',
            fill: 'red'

        })

        var lesson = this.add.sprite(650, 400, 'lesson').setOrigin(0, 0)

        lesson.setInteractive().on('pointerdown', () => {

            this.scene.start('Menu')

        })

        this.input.on('gameobjectover', function(pointer, gameObject) {

            gameObject.setTint(0x8EEDE2)

        })

        this.input.on('gameobjectout', function(pointer, gameObject) {

            gameObject.clearTint()

        })
    }
    
    
    destroyBall(){

        arr[ballNumber2 - 1].destroy()
        ballNumber2 --

    }

    update() {

        
    }

}
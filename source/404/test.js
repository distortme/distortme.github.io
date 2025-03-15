// chrome-dino-bundle.js
(function () {
    // 清除原有页面内容
    document.documentElement.innerHTML = '';
    document.head.innerHTML = '';
    document.body.innerHTML = '';

    // 创建基础页面结构
    const style = document.createElement('style');
    style.innerHTML = `
        div{ max-width: 600px; margin: 0 auto; }
        #myCanvas { max-width: 552px; height: 150px; }
        #image { display: none; }
    `;

    const container = document.createElement('div');
    const canvas = document.createElement('canvas');
    canvas.id = 'myCanvas';
    canvas.width = 552;
    canvas.height = 150;

    document.head.appendChild(style);
    document.body.appendChild(container);
    container.appendChild(canvas);

    // 图片资源Base64编码（需替换为实际图片的Base64）
    const imgSrc = 'data:image/png;base64,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';

    // 地面
    let _groundImg = {
        x: 2,
        y: 52,
        width: 1200,
        height: 16
    }
    // 恐龙移动
    let _dino_1 = {
        x: 848,
        y: 2,
        wm: 28,
        hm: 30,
        width: 44,
        height: 46
    }
    let _dino_2 = {
        x: 936,
        y: 2,
        wm: 28,
        hm: 30,
        width: 44,
        height: 46
    }
    let _dino_3 = {
        x: 980,
        y: 2,
        wm: 28,
        hm: 30,
        width: 44,
        height: 46
    }
    // 恐龙蹲下
    let _dino_squat_1 = {
        x: 1112,
        y: 19,
        wm: 0,
        hm: 0,
        width: 59,
        height: 30
    }
    let _dino_squat_2 = {
        x: 1171,
        y: 19,
        wm: 0,
        hm: 0,
        width: 59,
        height: 30
    }
    // 恐龙跳
    let _dino_jump = {
        x: 848,
        y: 2,
        wm: 28,
        hm: 30,
        width: 44,
        height: 46
    }
    // 恐龙死亡
    let _dino_dead = {
        x: 1024,
        y: 2,
        width: 44,
        height: 47
    }

    // 仙人掌 小
    let cactus_s_1 = {
        x: 228,
        y: 2,
        width: 17,
        height: 35
    }
    let cactus_s_2 = {
        x: 245,
        y: 2,
        width: 17,
        height: 35
    }
    let cactus_s_3 = {
        x: 262,
        y: 2,
        width: 17,
        height: 35
    }
    let cactus_s_4 = {
        x: 279,
        y: 2,
        width: 17,
        height: 35
    }
    let cactus_s_5 = {
        x: 296,
        y: 2,
        width: 17,
        height: 35
    }
    let cactus_s_6 = {
        x: 313,
        y: 2,
        width: 17,
        height: 35
    }

    // 仙人掌 大
    let cactus_b_1 = {
        x: 332,
        y: 2,
        width: 25,
        height: 48
    }
    let cactus_b_2 = {
        x: 357,
        y: 2,
        width: 25,
        height: 48
    }
    let cactus_b_3 = {
        x: 382,
        y: 2,
        width: 25,
        height: 48
    }
    // 翼龙
    let pterosaur_1 = {
        x: 134,
        y: 2,
        width: 46,
        height: 35, // 40
    }
    let pterosaur_2 = {
        x: 180,
        y: 2,
        width: 46,
        height: 35,
    }
    // 计分板
    let score = {
        "0": {
            x: 655,
            y: 2,
            width: 9,
            height: 11
        },
        "1": {
            x: 666,
            y: 2,
            width: 8,
            height: 11
        },
        "2": {
            x: 675,
            y: 2,
            width: 9,
            height: 11
        },
        "3": {
            x: 685,
            y: 2,
            width: 9,
            height: 11
        },
        "4": {
            x: 695,
            y: 2,
            width: 9,
            height: 11
        },
        "5": {
            x: 705,
            y: 2,
            width: 9,
            height: 11
        },
        '6': {
            x: 715,
            y: 2,
            width: 9,
            height: 11
        },
        "7": {
            x: 725,
            y: 2,
            width: 9,
            height: 11
        },
        "8": {
            x: 735,
            y: 2,
            width: 9,
            height: 11
        },
        "9": {
            x: 745,
            y: 2,
            width: 9,
            height: 11
        },
        "hi": {
            x: 755,
            y: 2,
            width: 19,
            height: 11

        }
    }
    // game over
    let game_over = {
        x: 655,
        y: 15,
        width: 191,
        height: 11,
    }

    // 路面
    function Ground(originX, originY, width, height, img, ctx) {
        this.originX = originX
        this.width = width
        this.ctx = ctx
        this.ground = _groundImg
        this.drawImage = (x) => {
            this.x = this.originX + x
            this.y = height - this.ground.height

            this.ctx.drawImage(img,
                this.ground.x, this.ground.y, this.ground.width, this.ground.height,
                this.x, this.y, this.width, this.ground.height)
            return x
        }
    }
    // 小仙人掌
    function Cactus_small(originX, originY, width, height, img, ctx) {
        this.originX = originX
        this.ctx = ctx
        this.cactusArray = [cactus_s_1, cactus_s_2, cactus_s_3]
        this.cactus = this.cactusArray[random(2)]
        this.x = this.originX
        this.y = height - this.cactus.height

        this.drawImage = (x) => {
            this.x = this.originX + x
            this.y = height - this.cactus.height

            this.ctx.drawImage(img,
                this.cactus.x, this.cactus.y, this.cactus.width, this.cactus.height,
                this.x, this.y, this.cactus.width, this.cactus.height)
        }
        this.getColl = function () {
            return {
                x: this.x,
                y: this.y,
                width: this.cactus.width,
                height: this.cactus.height
            }
        }

    }
    // 大仙人掌
    function Cactus_big(originX, originY, width, height, img, ctx) {
        this.originX = originX
        this.ctx = ctx
        this.cactusArray = [cactus_b_1, cactus_b_2, cactus_b_3]
        this.cactus = this.cactusArray[random(2)]
        this.x = this.originX
        this.y = height - this.cactus.height

        this.drawImage = (x) => {
            this.x = this.originX + x
            this.y = height - this.cactus.height

            this.ctx.drawImage(img,
                this.cactus.x, this.cactus.y, this.cactus.width, this.cactus.height,
                this.x, this.y, this.cactus.width, this.cactus.height)
        }
        this.getColl = function () {
            return {
                x: this.x,
                y: this.y,
                width: this.cactus.width,
                height: this.cactus.height
            }
        }

    }
    // 翼龙
    function Pterosaur(originX, originY, width, height, img, ctx) {
        this.pterArr = [pterosaur_1, pterosaur_1, pterosaur_1, pterosaur_1, pterosaur_1, pterosaur_1, pterosaur_2, pterosaur_2, pterosaur_2, pterosaur_2, pterosaur_2, pterosaur_2]
        this.ctx = ctx
        this.originX = originX
        this.originY = originY
        this.x = originX
        this.getHeight = function (height, pter) {
            let _pter = pter
            let _height = height - _pter.height - 5 - 20
            let mathRandom = Math.random()
            return _height * mathRandom + 20
        }
        this.y = this.getHeight(height, this.pterArr[0])
        this.num = 0
        this.drawImage = function (x) {
            this.x = originX + x
            this.pter = this.pterArr[this.num]
            this.numChange(this.pterArr.length)
            this.ctx.drawImage(img,
                this.pter.x, this.pter.y, this.pter.width, this.pter.height,
                this.x, this.y, this.pter.width, this.pter.height
            )
        }
        this.getColl = function () {
            return {
                x: this.x,
                y: this.y,
                width: this.pter.width,
                height: this.pter.height
            }
        }

        this.numChange = function (length) {
            let len = length
            this.num++
            if (this.num >= len) {
                this.num = 0
            }

        }

    }
    // 恐龙
    function Dino(originX, originY, width, height, img, ctx) {
        this.num = 0
        this.ctx = ctx
        this.state = 'walk'
        this.jumping = false
        this.dino_walk_array = [_dino_1, _dino_1, _dino_1, _dino_2, _dino_2, _dino_2, _dino_3, _dino_3, _dino_3]
        this.dino_jump = _dino_jump
        this.dino_squat_array = [_dino_squat_1, _dino_squat_1, _dino_squat_1, _dino_squat_2, _dino_squat_2, _dino_squat_2]
        this.dino_dead = _dino_dead
        this.dino = this.dino_walk_array[0]
        this.x = originX
        this.y = height - this.dino_walk_array[0].height
        this.originY = null
        this.btn = true
        this.arr = []

        this.getWalk = function () {
            if (this.jumping) return
            this.state = 'walk'
        }
        this.getJump = function () {
            this.state = 'jump'
        }
        this.getSquat = function () {
            if (this.jumping) return
            this.state = 'squat'
        }
        this.getDead = function () {
            this.state = 'dead'
        }

        // 行走
        this.drawWalk = function () {
            this.numChange(this.dino_walk_array.length)
            this.dino = this.dino_walk_array[this.num]
            this.originY = height - this.dino.height
            this.y = height - this.dino.height

            this.ctx.drawImage(img,
                this.dino.x, this.dino.y, this.dino.width, this.dino.height,
                this.x, this.y, this.dino.width, this.dino.height)
        }
        // 跳跃
        this.drawJump = function () {
            this.dino = this.dino_jump
            this.y = this.jumpSpeed()
            this.ctx.drawImage(img,
                this.dino.x, this.dino.y, this.dino.width, this.dino.height,
                this.x, this.y, this.dino.width, this.dino.height)
        }
        // 蹲下
        this.drawSquat = function () {
            this.numChange(this.dino_squat_array.length)
            this.dino = this.dino_squat_array[this.num]
            // this.originY = height - this.dino.height
            this.y = height - this.dino.height

            this.ctx.drawImage(img,
                this.dino.x, this.dino.y, this.dino.width, this.dino.height,
                this.x, this.y, this.dino.width, this.dino.height)
        }
        // 死亡
        this.drawDead = function () {
            this.dino = this.dino_dead
            if (this.y > height - this.dino_dead.height) this.y = height - this.dino_dead.height
            this.ctx.drawImage(img,
                this.dino.x, this.dino.y, this.dino.width, this.dino.height,
                this.x, this.y, this.dino.width, this.dino.height)
        }
        //
        this.drawImage = function () {
            switch (this.state) {
                case 'walk':
                    this.drawWalk()
                    break;
                case 'jump':
                    this.drawJump()
                    break;
                case 'squat':
                    this.drawSquat()
                    break;
                case 'dead':
                    this.drawDead()
                    break;
                default:
                    break;
            }
        }
        // 
        this.getColl = function () {
            return {
                x: this.x,
                y: this.y,
                wm: this.dino.wm,
                hm: this.dino.hm,
                width: this.dino.width,
                height: this.dino.height
            }
        }

        // 工具 
        this.numChange = function (length) {
            let len = length
            this.num++
            if (this.num >= len) {
                this.num = 0
            }

        }
        this.jumpSpeed = function () {
            let max = 0 + 10
            let min = this.originY
            let y = this.y

            this.jumping = true
            // 匀减速
            if (this.btn) {

                let dis = y - max
                y -= dis * 0.18
                this.arr.unshift(y)
            } else if (!this.btn) {
                y = this.arr[0]
                this.arr.shift()
            }

            // !
            if (Math.floor(y) <= max + 3) {
                this.btn = false
            } else if (this.arr.length === 0) {
                this.btn = true
                this.jumping = false
                this.getWalk()
                return y
            }
            return y
        }

    }
    // 计分板
    function ScoreBoard(originX, originY, img, ctx) {
        this.score = score
        this.Hi_X = originX
        this.Hi_Y = originY
        this.Score_X = this.Hi_X + this.score["hi"].width + 10
        this.Score_Y = originY
        this.Time_X = this.Score_X + (this.score["1"].width * 5) + 20
        this.Time_Y = originY

        let hi = new HI(this.Hi_X, this.Hi_Y, img, ctx)
        let _score = new Score(this.Score_X, this.Score_Y, img, ctx)
        let _time = new Score(this.Time_X, this.Time_Y, img, ctx)

        this.drawImage = function (best, time) {
            hi.drawImage()
            _score.drawImage(best)
            _time.drawImage(time)
        }
    }
    // HI
    function HI(originX, originY, img, ctx) {
        this.data = score.hi
        this.img = img
        this.ctx = ctx
        this.originX = originX
        this.originY = originY
        this.x = this.data.x
        this.y = this.data.y
        this.width = this.data.width
        this.height = this.data.height

        this.drawImage = function () {
            this.ctx.drawImage(this.img,
                this.x, this.y, this.width, this.height,
                this.originX, this.originY, this.width, this.height)

        }

        this.getColor = function () {

        }
    }
    // 分数
    function Score(originX, originY, img, ctx) {
        this.numArr = []

        // 初始化每个数字
        for (let i = 0; i < 5; i++) {
            this.numArr.push(new Num(originX + i * 10, originY, img, ctx))
        }

        // 绘制
        this.drawImage = function (number) {
            this.num = number.toString()
            this.len = this.num.length - 1
            for (let i = 4; i > -1; i--) {
                if (this.len > -1) {
                    let num = this.num[this.len]
                    this.len -= 1
                    this.numArr[i].drawImage(num)
                } else {
                    this.numArr[i].drawImage("0")
                }

            }



        }

    }
    // 单个数字
    function Num(originX, originY, img, ctx) {
        this.score = score
        this.img = img
        this.ctx = ctx
        this.x = originX
        this.y = originY

        this.drawImage = function (num) {
            let _num = this.score[num]

            this.ctx.drawImage(this.img,
                _num.x, _num.y, _num.width, _num.height,
                this.x, this.y, _num.width, _num.height)
        }
    }
    // 游戏结束
    function GameOver(originX, originY, img, ctx) {
        this.image = game_over
        this.originX = originX
        this.originY = originY
        this.x = this.image.x
        this.y = this.image.y
        this.width = this.image.width
        this.height = this.image.height
        this.img = img
        this.ctx = ctx



        this.drawImage = function () {
            this.ctx.drawImage(this.img,
                this.x, this.y, this.width, this.height,
                this.originX, this.originY, this.width, this.height
            )
        }


    }

    /**************************
     ******   实例图画   *******
     **************************/

    /**
    * 实例化路面
    * @param {Number} originX 初始位置
    * @param {Number} width 路面长度
    * @returns {Array} 
    */
    function createGround(originX, width, height, img, ctx) {
        let arr = []

        arr.push(new Ground(originX, null, width, height, img, ctx))
        return arr
    }
    /**
     * 实例化仙人掌堆
     * @param {Number} originX 初始位置 
     * @returns {Array} 
     */
    function createCactus(originX, height, time, img, ctx) {
        let arr = []
        let num = random(1) // 决定是大还是小


        if (time > 200) {
            // 翼龙
            if (Math.random() > 0.7) {
                let pter = new Pterosaur(originX, null, null, height, img, ctx)
                arr.push(pter)
                // 仙人掌
            } else {
                // small
                if (num === 1) {
                    let num = random(1) // 决定是一个还是两个
                    while (num < 2) {
                        let cactus = new Cactus_small(originX + num * 17, null, null, height, img, ctx)
                        arr.push(cactus)
                        num++
                    }
                }
                //big
                if (num === 0) {
                    let cactus = new Cactus_big(originX, null, null, height, img, ctx)
                    arr.push(cactus)
                }
            }
        } else {
            // small
            if (num === 1) {
                let num = random(1) // 决定是一个还是两个
                while (num < 2) {
                    let cactus = new Cactus_small(originX + num * 17, null, null, height, img, ctx)
                    arr.push(cactus)
                    num++
                }
            }
            //big
            if (num === 0) {
                let cactus = new Cactus_big(originX, null, null, height, img, ctx)
                arr.push(cactus)
            }
        }


        return arr
    }



    // 绘制背景
    /**
     * 
     * @param {Number} originX 初始位置 
     * @param {Number} width  背景宽度
     * @param {Number} height  背景高度
     * @param {Boolean} btn 是否开启景观
     * @param {Number} time 游戏时间 进行难度升级 待定
     */
    function createBackground(originX, width, height, btn, time, img, ctx) {
        let arr = []
        let _btn = btn
        if (typeof _btn === 'undefined') _btn = true

        // 路面
        arr = arr.concat(createGround(originX, width, height, img, ctx))

        if (_btn) {
            // 仙人掌
            arr = arr.concat(createCactus(width * 0.3, height, time, img, ctx))
            arr = arr.concat(createCactus(width * 0.6, height, time, img, ctx))
            arr = arr.concat(createCactus(width * 0.9, height, time, img, ctx))
        }

        return arr
    }




    /**
     * 初始化坐标X
     * @param {Number} originX    初始化X轴位置 
     */
    function XAxis(originX) {
        this.originX = originX
        this.x = this.originX

        this.getXAxis = function (x) {
            this.x = x
            return this.x
        }
        this.setXAxis = function (speed) {
            this.x -= speed
            return this.x
        }
    }
    /**
    * 初始化坐标Y
    * @param {Number} origin      初始化Y轴位置 
    */
    function YAxis(origin) {
        this.originX = origin
        this.min = 0 + 10
        this.max = origin
        this.y = this.originX
        this.getYAxis = function (speed) {
            this.speed = speed
            this.y -= this.speed

            if (this.y <= this.min) {
                this.speed = -this.speed
            }
            if (this.y >= this.max) {
                this.y = this.originX
            }


            return this.y
        }
        this.setYAxis = function (y) {
            this.y = y
            return this.y
        }
    }


    function random(maxNum) {
        let num = Math.random() * maxNum
        if (num / maxNum > 0.5) {
            return Math.ceil(num)
        } else {
            return Math.floor(num)
        }
    }


    function ChromeDino(el, imgSrc) {
        this.el = el
        this.src = imgSrc

        this.img = null
        this.ctx = null
        this.width = null
        this.height = null

        this.timer = null
        this.x1 = null
        this.x2 = null
        this.bgArr1 = null
        this.bgArr2 = null
        this.dino = null
        this.over = null
        this.bg_coll_Arr = []

        this.start = true
        this.time = 0
        this.speed = 5
        this.score = 0
        // 执行
        this.createCanvas()

    }
    /**
     * 
     */
    ChromeDino.prototype.createCanvas = function () {
        // el
        if (typeof this.el === 'string') {
            this.el = document.querySelector(this.el)
        } else if (typeof this.el === 'object') {
            this.el = el
        } else {
            console.log('el输入错误')
            return
        }
        this.ctx = this.el.getContext('2d')
        this.ctx.fillStyle = "orange"
        this.width = this.el.clientWidth
        this.height = this.el.height
        this.img = new Image()
        this.img.src = this.src
        // 绑定事件
        this.addEvent()
        this.img.onload = this.initData.bind(this)
    }
    //
    ChromeDino.prototype.initData = function () {
        // 初始化时间
        this.start = true
        this.time = 0
        this.speed = 5
        this.aTime = 0
        // 初始化坐标
        this._x1 = new XAxis(0)
        this._x2 = new XAxis(1200)
        // 初始化场景
        this.bgArr1 = createBackground(0, 1200, this.height, false, this.time, this.img, this.ctx)
        this.bgArr2 = createBackground(0, 1200, this.height, true, this.time, this.img, this.ctx)
        this.dino = new Dino(10, null, null, this.height, this.img, this.ctx)
        this.over = new GameOver(this.width / 2 - 95, 40, this.img, this.ctx)
        // 初始化场景坐标数组
        this.bg_coll_Arr = []
        this.bgArr2.forEach(val => {
            if (val.getColl) {
                this.bg_coll_Arr.push(val)
            }
        })
        // 初始化计分板
        this.scoreBoard = new ScoreBoard(400, 10, this.img, this.ctx)

        // 执行动画
        this.animate()
    }
    // 添加事件
    ChromeDino.prototype.addEvent = function () {
        window.addEventListener('keydown', this.keyDownEvent.bind(this))
        window.addEventListener('keyup', this.keyUpEvent.bind(this))
    }
    // 移除事件
    ChromeDino.prototype.removeEvent = function () {
        window.removeEventListener('keydown', this.keyDownEvent.bind(this))
        window.removeEventListener('keyup', this.keyUpEvent.bind(this))
    }
    // 运行动画
    ChromeDino.prototype.animate = function () {
        this.timer = requestAnimationFrame((e) => {
            this.animate()
            if (!this.aTime) this.aTime = Date.now()
            this.time = this.getTime(Date.now() - this.aTime)
        })
        this.controller()
    }
    // 终止动画
    ChromeDino.prototype.cancelAnimate = function () {
        window.cancelAnimationFrame(this.timer)
    }
    // 坐标控制
    ChromeDino.prototype.controller = function () {
        this.XAxis()
        this.collision()
        this.addDiff()
        this.draw()

    }
    // 坐标
    ChromeDino.prototype.XAxis = function () {
        // 坐标移动
        if (this.x1 < -1200) {
            this._x1.getXAxis(1200)
            this.x1 = this._x1.setXAxis(this.speed)
            this.bgArr1 = createBackground(0, 1200, this.height, true, this.time, this.img, this.ctx)
            this.bgArr1.forEach(val => {
                if (val.getColl) {
                    this.bg_coll_Arr.push(val)
                }
            })
        } else if (this.x2 < -1200) {
            this._x2.getXAxis(1200)
            this.x2 = this._x2.setXAxis(this.speed)
            this.bgArr2 = createBackground(0, 1200, this.height, true, this.time, this.img, this.ctx)
            this.bgArr2.forEach(val => {
                if (val.getColl) {
                    this.bg_coll_Arr.push(val)
                }
            })
        } else {
            this.x1 = this._x1.setXAxis(this.speed)
            this.x2 = this._x2.setXAxis(this.speed)
        }
    }
    // 碰撞检测
    ChromeDino.prototype.collision = function () {
        let dino = this.dino.getColl()
        let bg = this.bg_coll_Arr[0].getColl()

        if (bg.x < 0) {
            this.bg_coll_Arr.shift()
            bg = this.bg_coll_Arr[0].getColl()
        }
        let dino_up = {
            x: dino.x,
            y: dino.y,
            width: dino.width,
            height: dino.hm
        }
        let dino_dowm = {
            x: dino.x,
            y: dino.y,
            width: dino.wm,
            height: dino.height - dino.hm
        }

        // 检测碰撞
        if (this.getCollide(dino_up, bg)) {
            console.log('YYYYYYY')
            this.start = false
        } else if (this.getCollide(dino_dowm, bg)) {

            this.start = false
            console.log('XXXXXXXX')
        }

    }
    // 绘画
    ChromeDino.prototype.draw = function () {
        this.ctx.clearRect(0, 0, this.width, this.height)
        // 游戏结束 
        if (!this.start) {
            this.gameOver()
        }
        // 恐龙
        this.dino.drawImage()
        this.bgArr1.forEach(val => {
            val.drawImage(this.x1)
        })
        // 障碍物
        this.bgArr2.forEach(val => {
            val.drawImage(this.x2)
        })
        // 计分板
        this.scoreBoard.drawImage(this.score, this.time)

    }

    // 游戏结束
    ChromeDino.prototype.gameOver = function () {
        // 算出最高分
        if (this.time > this.score) this.score = this.time
        this.over.drawImage()
        this.dino.getDead()
        this.cancelAnimate()
    }


    /*****************************************/
    /**
     * 检测两矩形是否重叠
     * @param {Object} 小恐龙
     * @param {Object} 背景
     * @return {Boolean} 是否重叠
     */
    ChromeDino.prototype.getCollide = function (dino, bg) {

        if (bg.x > dino.x + dino.width ||
            bg.x + bg.width < dino.x ||
            bg.y > dino.y + dino.height ||
            bg.y + bg.height < dino.y) {
            return false
        }
        return true


    }
    /**
     * 获取毫秒数
     * @param {Number} e 毫秒数
     * @return {Number} 毫秒
     */
    ChromeDino.prototype.getTime = function (e) {
        let time = e / 100
        if (time < 0) return 0
        return Math.round(time)
    }
    // 增加速度
    ChromeDino.prototype.addDiff = function () {
        this.speed = Math.floor(this.time / 100) * 0.5 + 5
    }

    ChromeDino.prototype.keyDownEvent = function (e) {
        if (e.code === 'Space' || e.code === 'ArrowUp') {
            if (!e.repeat) {
                if (!this.start) {
                    this.initData()
                    this.start = true
                }
                if (this.time == 0) return
                // e.time = Date.now()
                this.dino.getJump()
            }
        } else if (e.code === 'ArrowDown') {
            if (!e.repeat) {
                this.dino.getSquat()
            }
        }

    }
    ChromeDino.prototype.keyUpEvent = function (e) {
        if (e.code === 'Space' || e.code === 'ArrowUp') {
            if (!e.repeat) {
                // let time = Date.now() - e.time
            }
        } else if (e.code === 'ArrowDown') {
            if (!e.repeat) {
                this.dino.getWalk()
            }
        }
    }


    // 初始化游戏
    setTimeout(() => {
        new ChromeDino('#myCanvas', imgSrc);
    }, 100);
})();
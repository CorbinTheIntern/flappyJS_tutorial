var s_bird,
    s_bg,
    s_fg,
    s_pipeNorth,
    s_pipeSouth,
    s_text,
    s_score,
    s_splash,
    s_buttons,
    s_numberS,
    s_numberB;

function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
    
    this.draw = function(ctx, x, y) {
	   ctx.drawImage(this.img, this.x, this.y, this.width, this.height, 
                  x, y, this.width, this.height);
    }
};

function initSprites(img) {

    s_bird = [
		new Sprite(img, 312, 230, 34, 24),
		new Sprite(img, 312, 256, 34, 24),
		new Sprite(img, 312, 282, 34, 24)
	];
	
	s_bg = new Sprite(img,   0, 0, 276, 228);
    s_bg.color = "#70C5CF";
	s_fg = new Sprite(img, 276, 0, 224,  112);
	
	s_pipeNorth = new Sprite(img, 502, 0, 52, 400);
	s_pipeSouth = new Sprite(img, 554, 0, 52, 400);
	
	s_text = {
		FlappyBird: new Sprite(img, 118, 228, 192, 44),
		GameOver:   new Sprite(img, 118, 272, 188, 38),
		GetReady:   new Sprite(img, 118, 310, 174, 44)
	}
    
	s_buttons = {
		Rate:  new Sprite(img,  158, 354, 80, 28),
		Menu:  new Sprite(img, 238, 354, 80, 28),
		Share: new Sprite(img, 318, 354, 80, 28),
		Score: new Sprite(img,  158, 382, 80, 28),
		Ok:    new Sprite(img, 238, 382, 80, 28),
		Start: new Sprite(img, 318, 382, 80, 28)
	}
    
    s_medals = {
        gold: new Sprite(img, 694, 546, 92, 92),
        silver: new Sprite(img, 694, 546, 92, 92),
        bronze: new Sprite(img, 694, 546, 92, 92)
    }

	s_score  = new Sprite(img, 276,  112, 226, 116);
	s_splash = new Sprite(img,   0, 228,  118, 98);

	s_numberS = new Sprite(img, 0, 354, 12,  14);
	s_numberB = new Sprite(img, 0, 376, 14, 20);

	s_numberS.draw = s_numberB.draw = function(ctx, x, y, num, center, offset) {
		num = num.toString();
		var step = this.width + 2;
        
        if (center) {
            x = center - (num.length*step-2)/2;
        }

        if (offset) {
            x += step*(offset - num.length) - 2;
        }

		for (var i = 0, len = num.length; i < len; i++) {
			var n = parseInt(num[i]);
			ctx.drawImage(img, step*n, this.y, this.width, this.height,
				x, y, this.width, this.height)
			x += step;
		}
	}
}
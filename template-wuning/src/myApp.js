/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var MyLayer = cc.LayerColor.extend({
    plane:null,
    init:function () {

        //////////////////////////////
        // 1. super init first
        this._super();

        this.setColor(cc.c4(225,225,225,225));

        var winSize = cc.Director.getInstance().getWinSize();
        var origin = cc.Director.getInstance().getVisibleOrigin();

        this.plane = cc.Sprite.create(s_Plane,cc.rect(0,0,60,60));
        //设置图片中心点的位置
        this.plane.setPosition(cc.p(origin.x + winSize.width/2, origin.y +this.plane.getContentSize().height/2));

        this.setTouchEnabled(true);
        this.addChild(this.plane,1);
        return true;
    },
    onTouchesMoved: function(touches,event){
        var touch = touches[0];
        var location = touch.getLocation();
        if(this.onClickFlag){
            this.plane.setPosition(location);
        }
    },
    onTouchesEnded: function(touches,event){
        this.onclickFrag = false;
    },
    onTouchesBegan: function(touches,event){
        var touch = touches[0];
        var location = touch.getLocation();
        //判断图片是否超出边界
        if(cc.rectContainsPoint(this.plane.getBoundingBox(),location)){
            this.onClickFlag = true;
        }
    }
});

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MyLayer();
        this.addChild(layer);
        layer.init();
    }
});

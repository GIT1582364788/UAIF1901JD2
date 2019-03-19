window.onload = function () {
    // 北京移入移出效果
    let bj = document.querySelector(".nav-left-beijing")
    let bjSlide = document.querySelector(".bjSlide")
    bj.onmouseenter = function () {
        bjSlide.style.display = "block";
    }
    bj.onmouseleave = function () {
        bjSlide.style.display = "none";
    }
    //我的京东移入移出效果
    //  let myjd = document.querySelector("nav-right-list .shortcut_btn .cw-icon a");
    //  let loginSlide1 = document.querySelector(".loginSlide1");
    //  myjd.onmouseenter = function () {
    //      loginSlide1.style.display = "block";
    //  }
    //  myjd.onmouseleave = function () {
    //      loginSlide1.style.display = "none";
    //  }

    //企业采购移入移出效果
    //  let company = document.querySelector(".company");
    //  let loginSlide2 = document.querySelector(".loginSlide2");
    //  company.onmouseenter = function () {
    //      loginSlide2.style.display = "block";
    //  }
    //  company.onmouseleave = function () {
    //      loginSlide2.style.display = "none";
    //  }

    // 客户服务移入移出效果
    //  let clientService = document.querySelector(".clientService");
    //  let loginSlide3 = document.querySelector(".loginSlide3");
    //  clientService.onmouseenter = function () {
    //      loginSlide3.style.display = "block";
    //  }
    //  clientService.onmouseleave = function () {
    //      loginSlide3.style.display = "none";
    //  }

    // 网站导航移入移出效果
    //  let website = document.querySelector(".website");
    //  let loginSlide4 = document.querySelector(".loginSlide4");
    //  website.onmouseenter = function () {
    //      loginSlide4.style.display = "block";
    //  }
    //  website.onmouseleave = function () {
    //      loginSlide4.style.display = "none";
    //  }

    // 手机京东移入移出效果
    //  let mobile = document.querySelector(".mobile");
    //  let mobileItems = document.querySelector(".mobile-items");
    //  mobile.onmouseenter = function () {
    //      mobileItems.style.display = "block";
    //  }
    //  mobile.onmouseleave = function () {
    //      mobileItems.style.display = "none";
    //  }

    // 侧边选项卡移入移出效果
    let bannerListItem = document.querySelectorAll(".cate-menu-item")
    let bannerSlide = document.querySelectorAll(".cate_pop")
    // console.dir(bannerListItem)
    // console.dir(bannerSlide)
    bannerListItem.forEach(function (v, i) {
        v.onmouseenter = function () {
            bannerSlide[i].style.display = "block"
        }
        v.onmouseleave = function () {
            bannerSlide[i].style.display = "none"
        }
    })

    // 轮播图效果开始
    let index = 0       //执行定义
    let pages = document.querySelectorAll(".grid-two .gird-two-img a")
    let banner = document.querySelector(".gird-two-img")
    let pre = document.querySelector(".grid-two .slider-left")
    let next = document.querySelector(".grid-two .rrr")
    let dot = document.querySelectorAll(".dot")
    banner.onmouseenter = function () {         //事件，异步，触发的时候才调用
        clearInterval(t)
    }
    banner.onmouseleave = function () {
        t = setInterval(run, 3000)
    }
    function run(status = 'next') {
        // 轮播一次
        // console.log("轮播")
        if (status == 'next') {
            index += 1
        } else if (status == 'pre') {
            index -= 1
        }
        if (index > 7) {
            index = 0
        }
        if (index < 0) {
            index = 7
        }
        pages.forEach(function (item, i) {
            item.classList.remove("active")
        })
        pages[index].classList.add("active")
        dot.forEach(function (item, i) {
            item.classList.remove("active")
        })
        dot[index].classList.add("active")
    }
    let t = setInterval(run, 3000)    //异步

    next.onclick = function () {
        run()
    }
    pre.onclick = function () {
        run('pre')
    }
    // 轮播点和图对应
    dot.forEach(function (item, i) {
        item.onmouseenter = function () {
            pages.forEach(function (item, i) {
                item.classList.remove("active")
            })
            pages[i].classList.add("active")
            dot.forEach(function (item, i) {
                item.classList.remove("active")
            })
            dot[i].classList.add("active")
        }
    })
    // 轮播图效果结束

    //秒杀小轮播图开始
    let pages1 = document.querySelectorAll(".spike-right .spike-right-box a")
    let dot1 = document.querySelectorAll(".point")
    let prev = 0;
    let now = 0;
    pages1.forEach(function(item,i) {
        if (i == 0) {
            return;
        }
        item.style.left = "180px";
    })
    // 切换
    function run1() {
        now += 1;
        if (now > 1) {
            now = 0;
        }
        pages1[now].style.left = '180px';
        animate(pages1[now], { 'left': 0 });
        animate(pages1[prev], { 'left': -180});
        dot1.forEach(function (item) {
            item.classList.remove("active")
        })
        dot1[now].classList.add("active")
        prev = now;
    }
    setInterval(run1, 3000);
    // 轮播点和图对应
    dot1.forEach(function (item, i) {
        item.onmouseenter = function () {
            if (i > now) {
                pages1[i].style.left = '180px';
                animate(pages1[i], { 'left': 0 });
                animate(pages1[prev], { 'left': -180 });
                dot1.forEach(function (item) {
                    item.classList.remove("active")
                })
                dot1[i].classList.add("active")
                prev = i;
                now = i;
            } else {
                pages1[i].style.left = '-180px';
                animate(pages1[i], { 'left': 0 });
                animate(pages1[prev], { 'left': 180 });
                dot1.forEach(function (item) {
                    item.classList.remove("active")
                })
                dot1[i].classList.add("active")
                prev = i;
                now = i;
            }
        }
    })
    //秒杀小轮播图结束

    // 会买专辑轮播图开始
    let pages2 = document.querySelectorAll(".pai-body .li-box .pai-body-li")
    let dot2 = document.querySelectorAll(".pai-body .two-dots .two-dots-left")
    let dot22 = document.querySelectorAll(".pai-body .two-dots .inn")
    let pre2 = document.querySelector(".pai-body .ll") 
    let next2 = document.querySelector(".pai-body .rr") 
    let prev2 = 0;
    let now2 = 0;
    pages2.forEach(function(item,i){
        if(i == 0){
            return;
        }
        item.style.left = "350px";
    })
    // 切换
    function run2(status = "next"){
        if(status == "next"){
            now2 += 1;
            if(now2>2){
                now2 = 0;
            }
            pages2[now2].style.left = '350px';
            animate(pages2[now2],{'left':0});
            animate(pages2[prev2],{'left':-350});
            dot2.forEach(function(item){
                item.classList.remove("active")
            })
            dot2[now2].classList.add("active")
            dot22.forEach(function(item){
                item.classList.remove("active")
            })
            dot22[now2].classList.add("active")
        }else if(status == "pre"){
            now2 -= 1;
            if(now2<0){
                now2 = 2;
            }
            pages2[now2].style.left = '-350px';
            animate(pagec[now2],{'left':0});
            animate(pagec[prev2],{'left':350});
            dot2.forEach(function(item){
                item.classList.remove("active")
            })
            dot2[now2].classList.add("active")
            dot22.forEach(function(item){
                item.classList.remove("active")
            })
            dot22[now2].classList.add("active")
        }
        prev2 = now2;
    }
    setInterval(run2,3000);
    // 箭头
    pre2.onclick = function(){
        run2("pre")
    }
    next2.onclick = function(){
        run2()
    }
    // 轮播点点击事件
    dot2.forEach(function(item,i){
        item.onmouseenter = function(){
            if(i>now2){
                pages2[i].style.left = '350px';
                animate(pages2[i],{'left':0});
                animate(pages2[prev2],{'left':-350});
                dot2.forEach(function(item){
                    item.classList.remove("active")
                })
                dot2[i].classList.add("active")
                prev2 = i;
                now2 = i;
            }else{
                pages2[i].style.left = '-350px';
                animate(pages2[i],{'left':0});
                animate(pages2[prevc],{'left':350});
                dot2.forEach(function(item){
                    item.classList.remove("sactive")
                })
                dot2[i].classList.add("active")
                prev2 = i;
                now2 = i;
            }
        }
    })
    // 会买专辑轮播图结束

    // 特色轮播
    let pages3 = document.querySelectorAll(".special .special-box .special-bd")
    let dot3 = document.querySelectorAll(".special .slider .slider-dot")
    let pre3 = document.querySelector(".special .control-prev")
    let next3 = document.querySelector(".special .control-next")
    let prev3 = 0;
    let now3 = 0;
    pages3.forEach(function(item,i){
        if(i == 0){
            return;
        }
        item.style.left = "1190px";
    })
    // 切换
    function run3(status = 'next'){
        if(status == "next"){
            now3 += 1;
            if(now3>4){
                now3 = 0;
            }
            pages3[now3].style.left = '1190px';
            animate(pages3[now3],{'left':0});
            animate(pages3[prev3],{'left':-1190});
            dot3.forEach(function(item){
                item.classList.remove("active")
            })
            dot3[now3].classList.add("active")
        }else if(status == "pre"){
            now3 -= 1;
            if(now3<0){
                now3 = 3;
            }
            pages3[now3].style.left = '-1190px';
            animate(pages3[now3],{'left':0});
            animate(pages3[prev3],{'left':1190});
            dot3.forEach(function(item){
                item.classList.remove("active")
            })
            dot3[now3].classList.add("active")
        }
        prev3 = now3;
    }
    setInterval(run3,4000);
    pre3.onclick = function(){
        run3("pre")
    }
    next3.onclick = function(){
        run3()
    }
    // 轮播点点击事件
    dot3.forEach(function(item,i){
        item.onmouseenter = function(){
            if(i>now3){
                pages3[i].style.left = '1190px';
                animate(pages3[i],{'left':0});
                animate(pages3[prev3],{'left':-1190});
                dot3.forEach(function(item){
                    item.classList.remove("active")
                })
                dot3[i].classList.add("active")
                prev3 = i;
                now3 = i;
            }else{
                pages3[i].style.left = '-1190px';
                animate(pages3[i],{'left':0});
                animate(pages3[prevs],{'left':1190});
                dot3.forEach(function(item){
                    item.classList.remove("sdot-active")
                })
                dot3[i].classList.add("sdot-active")
                prev3 = i;
                now3 = i;
            }
        }
    })
}
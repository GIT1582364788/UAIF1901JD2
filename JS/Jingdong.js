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
     banner.onmouseenter = function(){         //事件，异步，触发的时候才调用
         clearInterval(t)
     }
     banner.onmouseleave = function(){            
         t = setInterval(run,3000)
     }
     function run(status='next'){
         // 轮播一次
         // console.log("轮播")
         if(status=='next'){
             index+=1
         }else if(status=='pre'){
             index-=1
         } 
         if(index>7){
             index = 0
         }
         if(index<0){
             index = 7
         }
         pages.forEach(function(item,i){
             item.classList.remove("active")
         })
         pages[index].classList.add("active")
         dot.forEach(function(item,i){
             item.classList.remove("active")
         })
         dot[index].classList.add("active")
     }
     let t = setInterval(run,3000)    //异步
 
     next.onclick = function(){
         run()
     }
     pre.onclick = function(){
         run('pre')
     }
     // 轮播点和图对应
     dot.forEach(function(item,i){
         item.onmouseenter = function(){
             pages.forEach(function(item,i){
                 item.classList.remove("active")
             })
             pages[i].classList.add("active")
             dot.forEach(function(item,i){
                 item.classList.remove("active")
             })
             dot[i].classList.add("active")
         }
     })
    // 轮播图效果结束
}
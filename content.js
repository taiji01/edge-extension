// content_script.js  

document.addEventListener("mousedown", function(event) {
  

  const video = document.querySelector("video");
  
  if (video) {
    if (event.button==3) {
      event.preventDefault();  
      video.currentTime += 5; // 快进10秒
      
    } else if (event.button==4) {
      event.preventDefault();  
      video.currentTime -= 5; // 后退10秒
    }
  }
  else{
    document.addEventListener('mousedown', function(event) {  
      // 假设鼠标侧边下键的button值为4  
      if (event.button === 4) {  
        // 阻止默认行为，防止页面选中或执行其他默认动作  
        event.preventDefault();  
      
        // 滚动页面，参数可以根据需要调整  
        window.scrollBy(0, -500); // 垂直滚动100像素  
      }
      else if(event.button===3) {
        event.preventDefault(); 
        window.scrollBy(0, 500);
      }
      
       
     
    });
  }
});

document.addEventListener("click", function(event) {
  const searchInput = document.querySelector("input[type='search']");
  console.log(searchInput);
  
    // 鼠标点击搜索框，显示英文键盘
    searchInput.setAttribute("inputmode","none");
    searchInput.setAttribute("type","text");
  
});

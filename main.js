onload = () => {
      const titles = ("   Chúc mừng Hằng xinh gái cute siêu giỏi 20😽-10😽").split('')
      const titleElement = document.getElementsByClassName('title');
      let index = 0;
      console.log("loaded")
      function appendTitle() {
        if (index < titles.length) {
            console.log(index)
            document.querySelector("body > h1").innerHTML  = (document.querySelector("body > h1").innerHTML  + titles[index]);
            index++;
            setTimeout(appendTitle, 300); // 1000ms delay
        }
      }
      appendTitle();
};

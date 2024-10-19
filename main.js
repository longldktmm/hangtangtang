onload = () => {
      const titles = ("   Chúc Hằng của t  20😽-10😽 xinh đẹp cute giỏi giang").split('')
      const titleElement = document.getElementsByClassName('title');
      let index = 0;
      function appendTitle() {
        if (index < titles.length) {
            document.querySelector("body > h1").innerHTML  = (document.querySelector("body > h1").innerHTML  + titles[index]);
            index++;
            setTimeout(appendTitle, 300); // 1000ms delay
        }
      }
      appendTitle();
};

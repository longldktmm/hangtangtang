onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
  
      const titles = ('Happy Minh Hang"s day 20😽-10😽').split('')
      const titleElement = document.getElementsByClassName('title');
      let index = 0;
  
      function appendTitle() {
        if (index < titles.length) {
          titleElement.innerText  += titles[index];
          index++;
          setTimeout(appendTitle, 300); // 1000ms delay
        }
      }
  
      appendTitle();
  
      clearTimeout(c);
    }, 1000);
  };

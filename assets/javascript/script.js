function decrement() {
    var count = document.getElementById("count");
    var currentCount = parseInt(count.innerHTML);
    count.innerHTML = currentCount - 1;
    if(currentCount - 1 < 0){
      count.classList.remove("text-indigo-500");
      count.classList.add("text-red-500");
    }else if(currentCount - 1 > 0){
      count.classList.remove("text-indigo-500");
      count.classList.add("text-green-500");
    }else{
      count.classList.remove("text-red-500");
      count.classList.remove("text-green-500");
      count.classList.add("text-indigo-500");
    }
  }
  function increment() {
    var count = document.getElementById("count");
    var currentCount = parseInt(count.innerHTML);
    count.innerHTML = currentCount + 1;
    if(currentCount + 1 < 0){
      count.classList.remove("text-indigo-500");
      count.classList.add("text-red-500");
    }else if(currentCount + 1 > 0){
      count.classList.remove("text-indigo-500");
      count.classList.add("text-green-500");
    }else{
      count.classList.remove("text-red-500");
      count.classList.remove("text-green-500");
      count.classList.add("text-indigo-500");
    }
  }
  function reset() {
    var count = document.getElementById("count");
    count.innerHTML = 0;
    count.classList.remove("text-red-500");
    count.classList.remove("text-green-500");
    count.classList.add("text-indigo-500");
  }
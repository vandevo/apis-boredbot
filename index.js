document.getElementById('getActivity').addEventListener("click", function(){


  fetch('https://apis.scrimba.com/bored/api/activity')
  .then(response => response.json())
  .then(data => {
    
    document.getElementById('activity').textContent = data.activity
    document.getElementById('title').textContent = "Happy Bots"
    document.body.classList.add('fun')
  });

})



 fetch("https://jsonplaceholder.typicode.com/albums")
   .then((response) => response.json())
   .then((json) => json.map((val)=>{
     let tbody = document.getElementById("tableBody");
     tbody.innerHTML += '<tr class="border"><td class="border">'+val.userId+'</td><td class="border">'+val.id+'</td><td class="border">'+val.title+'</td></tr>'
 }));








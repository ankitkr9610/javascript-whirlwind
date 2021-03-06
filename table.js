  
{/* <h1>Mountains</h1>
<div id="mountains"></div> */}

{/* <script> */}
const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  
  function createTable() {
    var c, r, t;
    t = document.createElement('table');
    //thead
    	const keys = Object.keys(MOUNTAINS[0]);
    	r = t.insertRow(0);
    	r.style.textTransform = "capitalize"
    	r.style.fontWeight = "bold";
        c = r.insertCell(0);
        c.innerHTML = keys[0];
        c = r.insertCell(1);
        c.innerHTML = keys[1];
      	c = r.insertCell(2);
        c.innerHTML = keys[2];
    
    
    //tbody
    for (let i=0; i<MOUNTAINS.length; i++) {
      	r = t.insertRow(i+1);
        c = r.insertCell(0);
        c.innerHTML = MOUNTAINS[i].name;
        c = r.insertCell(1);
        c.innerHTML = MOUNTAINS[i].height;
      	c.style.textAlign = "right";
      	c = r.insertCell(2);
        c.innerHTML = MOUNTAINS[i].place;
    }
    document.getElementById("mountains").appendChild(t);
};
  createTable();
// </script>
var array =[
{
    dp:"https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
},

{
    dp:"https://images.unsplash.com/photo-1462804993656-fac4ff489837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
},

{
    dp:"https://images.unsplash.com/photo-1503001831666-8f3cf3a24544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
},

{
    dp:"https://images.unsplash.com/photo-1502163140606-888448ae8cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1583766395091-2eb9994ed094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
},

{
    dp:"https://images.unsplash.com/photo-1604459848804-6748722073cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxtb2RlbHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
]
var storiya =document.querySelector("#insta-storiyan")
var clutter =""
array.forEach(function(elm,idx){
    clutter+= ` <div class="insta-story">
                 <img  id="${idx}" src= ${elm.dp} alt="">
                  </div>`
})
storiya.innerHTML = clutter

storiya.addEventListener("click",function(dets){
   document.querySelector("#full-screen").style.display = "block"
   document.querySelector("#full-screen").style.backgroundImage =`url(${array[dets.target.id].story})`

   setTimeout(function() {
    document.querySelector("#full-screen").style.display = "none"
   }, 3000);

});
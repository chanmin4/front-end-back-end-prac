const images=[
    "github.png",
    "apple.jpg"
]
const chosenimage=images[Math.floor(Math.random()*images.length)];
const bgimage=document.createElement("img");
bgimage.src=`img file/${chosenimage}`;
document.body.appendChild(bgimage);
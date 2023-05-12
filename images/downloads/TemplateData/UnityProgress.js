function UnityProgress(dom)
{this.progress=0.0;this.barProgress=0;this.message="";this.dom=dom;var parent=dom.parentNode;progressDiv=document.createElement("div");progressDiv.style.position="absolute";progressDiv.id='progress'
parent.appendChild(progressDiv);this.progressDiv=progressDiv;this.Init=function()
{console.log("UnityProgress:Init");this.interval=window.setInterval(this.Update.bind(this),100);}
this.SetProgress=function(progress)
{if(this.progress<progress)
{this.progress=progress;this.Update();}}
this.SetMessage=function(message)
{}
this.Clear=function()
{this.progressDiv.style.display="none";}
this.Update=function()
{if(this.barProgress<220)
{this.barProgress+=20;}
document.getElementById("barMask").style.left=(this.barProgress+ 380)+"px";if(this.progress>0.8)
{document.getElementById("splashWrapper").style.display="none";window.clearInterval(this.interval);}}
this.Init();}
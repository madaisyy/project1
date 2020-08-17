const inpFile = document.getElementById("inpfile");
const previewContainer = document.getElementById("imagePreview");

const previewImage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");


inpFile.addEventListener("change", function (){
   const file = this.files[0]; //get corresponding file object for selected file
    
    console.log(file);
    
    if (file) { 
        const reader = new FileReader();
        //const downloadFile = new FileDownload();
        var download = document.getElementById('button-generate');         
       
        
        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";
        
        reader.addEventListener("load", function (){ 
            console.log(this);
            previewImage.setAttribute("src", this.result);
            previewImage.setAttribute("download", this.result);
            
            download.addEventListener("click", function (e){ 
                download.setAttribute("download", file);
                download.click();
                //alert("fdfda");
            });
  
            
        });
        
        
        reader.readAsDataURL(file);
    } else { 
        
        previewDefaultText.style.display = null;
        previewImage.style.display = null;
        
        previewImage.setAttribute("src", "");
        
    }
});
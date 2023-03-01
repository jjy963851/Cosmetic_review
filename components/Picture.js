import Image from "next/legacy/image";

export default function Picture({data}){
return(
    <div className="project-card">
        <Image
        className = "rounded-t-xl"
        src = "/suncream.jpg"
        alt ="cover image"
        width = "100%"
        height = "60%"
        layout = "responsive"
       objectFit="cover"
        quality = {100}
        
        />
    </div>




);
}
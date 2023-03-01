import Image from "next/legacy/image";

export default function Search(){
    return(
        <>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Look around other people's Products</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Find any interesting products?</p>
                </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                        <svg className ="w-full object-cover h-full object-center block" 
                        alt="gallery"
                        src ="/images/pc1.jpg"
                        height ="60%"
                        width="100%"
                        layout="responsive"
                        objectFit="cover"
                        />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                        <Image className ="w-full object-cover h-full object-center block" 
                        alt="gallery"
                        src ="/images/pc2.jpg"
                        height ="60%"
                        width="100%"
                        layout="responsive"
                        objectFit="cover"
                        />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                        <Image className ="w-full object-cover h-full object-center block" 
                        alt="gallery"
                        src ="/images/pc3.jpg"
                        height ="60%"
                        width="100%"
                        layout="responsive"
                        objectFit="cover"
                        />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                        <Image className =" object-cover  object-center block" 
                        alt="gallery"
                        src ="/images/pc4.jpg"
                        height ="100%"
                        width="100%"
                        layout="responsive"
                        objectFit="cover"
                        />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                        <Image className ="w-full object-cover h-full object-center block" 
                        alt="gallery"
                        src ="/images/pc5.jpg"
                        height ="60%"
                        width="100%"
                        layout="responsive"
                        objectFit="cover"
                        />
                    
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        </>
    );
}
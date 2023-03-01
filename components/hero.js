import Picture from "./Picture";
import Link from "next/link";

export default function Hero(){
    return(
        <div >
          <Link href ="/step" legacyBehavior>
            <a className ="button-1">
            <div className = " grid grid-cols-1 md:grid-cols-1 m-6 gap-8 " >
            <Picture />
            </div>
            </a>
          </Link>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Charcoal Black Foam Cleanser</h1>
      <p class="mb-8 leading-relaxed">Starter cleanser. Works well after washing your face in cold water. This is primarily a foam based cleansor that deeply penetrates the pores.</p>
      <div class="flex justify-center">
        <button class="inline-flex  text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">sports</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">sun sports</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">sports</button>
      </div>
    </div>
  </div>
</section>
</div>
    );
}
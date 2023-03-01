import Link
 from "next/link";

export default function Header(){
    return(
    <div >
          <header className="text-gray-600 body-font justify-center">
            <Link href = "/Side_Button_Menu" legacyBehavior>
            <a>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
             </svg>
            </button>
            </a>

            </Link>
        <div className="flex flex-col items-center justify-center">
            <a className="flex-center title-font font-medium items-center text-gray-900 my-px">
             <h1 className="text-xl font-bold">Cleanse</h1>
            </a>
        </div>
        </header>
        
    </div>
    );
}
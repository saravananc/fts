 const MobileSidebar =() =>
 {
    return(
        <>
       
 
 {/* sidebar-mobile-starts */}
 <div className="lg:hidden relative max-w-sm overflow-y-scroll bg-white border border-gray-100  dark:bg-gray-700 dark:border-gray-600 rounded-xl h-96">
 <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t rounded-t-xl border-gray-200 dark:bg-gray-700 dark:border-gray-600">
   <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
     <button
       type="button"
       onClick={() => {
        window.location.pathname = "/";
      }}
       className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
     >
       <img
         width="35"
         height="35"
         src="https://img.icons8.com/3d-fluency/40/home.png"
         alt="home"
         
       />
       <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
         Home
       </span>
     </button>

     <button
       type="button"
       onClick={() => {
        window.location.pathname = "/about";
      }}
       className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
     >
       <img
         width="35"
         height="35"
         src="https://img.icons8.com/3d-fluency/35/conference-call--v1.png"
         alt="conference-call--v1"
       />
       <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
         About
       </span>
     </button>
     <button
       type="button"
       onClick={() => {
        window.location.pathname = "/courses";
      }}
       className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
     >
       <img
         width="35"
         height="35"
         src="https://img.icons8.com/3d-fluency/35/training.png"
         alt="training"
       />
       <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
         Courses
       </span>
     </button>
     <button
       type="button"
       onClick={() => {
        window.location.pathname = "/benefits";
      }}
       className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
     >
       <img
         width="35"
         height="35"
         src="https://img.icons8.com/3d-fluency/35/trust.png"
         alt="trust"
       />
       <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
         Benefits
       </span>
     </button>
     <button
       type="button"
       onClick={() => {
        window.location.pathname = "/contact";
      }}
       className="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
     >
       <img
         width="35"
         height="35"
         src="https://img.icons8.com/3d-fluency/35/phone-disconnected.png"
         alt="phone-disconnected"
       />
       <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
         Contacts
       </span>
     </button>
   </div>
 </div>
</div>
{/* sidebar-mobile-ends */}
        </>
    );
 };

 export default MobileSidebar;
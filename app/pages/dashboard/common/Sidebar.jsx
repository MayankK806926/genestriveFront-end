export default function SideBar(){
    return(
          <aside className="w-[300px] bg-[#001e32] text-white flex flex-col">
            <div className="px-6 py-16">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-[18px] mb-4">
                GRADE
              </h2>
              <select className="w-[150px] h-[35px] bg-white text-[#2f2f68] [font-family:'Inter',Helvetica] font-medium text-xl">
                <option value="">select grade</option>
                {/* Add other grade options here */}
              </select>

              <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-[18px] mt-16 mb-4">
                Competetive exams
              </h2>
              <select className="w-[150px] h-[35px] bg-white text-[#2f2f68] [font-family:'Inter',Helvetica] font-medium text-xl">
                <option value="">Exams</option>
                {/* Add other exam options here */}
              </select>
            </div>
            
            <div className="mt-auto border-t border-white p-4 flex justify-center">
              <img
                className="w-[180px] h-[104px] object-cover"
                alt="Image"
                src="https://c.animaapp.com/mb5dlfq96PJ4GF/img/image-52.png"
              />
            </div>
          </aside>
    )
}
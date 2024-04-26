import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const sendEmail = () => {

  }

  return (
    <>
      <div className="show h-[20vh]">
        <div className="diff aspect-[16/9] h-[20vh]">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
              CALL ME
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-200 text-9xl font-black grid place-content-center">
              EMAIL ME
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>

      <form className="flex mt-5">
        <div className="mail h-[60vh] flex flex-col gap-2  w-[50%]  justify-around ">
          <label className="input input-bordered flex items-center gap-2 h-[10vh]">
            Name :
            <input type="text" className="grow" placeholder="Your name here" />
          </label>
          <label className="input input-bordered flex items-center gap-2  h-[10vh]">
            Email :
            <input
              type="text"
              className="grow"
              placeholder="youremail@gmail.com"
            />
          </label>

          <textarea
            type="text"
            className="h-[30vh] w-full p-5 bg-base-200 rounded-lg"
            placeholder="write your message here ... "
          />

          <button className="btn btn-secondary" onSubmit={sendEmail}>Send</button>
        </div>
        <div className="call h-[60vh]  w-[50%] flex items-center justify-center">
          <button className="btn btn-primary h-[80%] w-[80%] ">
            <a href="tel:+917366928995">Call me </a>
            </button>
        </div>
</form>
        {/* ----------------------ad  here --------------------------
      
      */}

        <div className="ad flex justify-center items-center mt-5">
          <div className="collapse bg-base-200  w-[70%]">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Developed by <b>Suman Yadav</b>
            </div>
            <a
              href="http://google.com"
              target="_blank"
              rel="nooppener noreferrer"
              className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
            >
              <div className="font-bold">Check My Portfolio</div>
            </a>
          </div>
        </div>
      
    </>
  );
}

export default App;

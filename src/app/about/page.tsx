import { Button } from "../home/page";

export default function About() {
  return (
    <div className="flex flex-col text-sm font-light bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 m-7">
          <h2 className="font-semibold m-5 text-lg text-gray-800">
            Essentials of Work Place and the Environment We Keep
          </h2>
          <p className="m-5 text-gray-700">
            Various ridiculous things do not hinder the delicate balance of the structure, which is why one should remain attentive to the consequences. The portal leads to a space where one can find unity amidst diverse interactions.
          </p>
          <p className="m-5 text-gray-700">
            The bond is significant; through discourse, one can explore various experiences, even amidst life's complexities and challenges.
          </p>
          <p className="m-5 text-gray-700">
            In the beginning, one should engage with the environment without fear of judgment and remain committed to personal growth and development. A structured approach helps navigate through life's unpredictable nature.
          </p>
          <p className="ml-5 text-xl font-medium text-gray-800">Want to come and join our Team?</p>
          <p className="ml-5 text-base text-gray-600">Check out the current vacancies here</p>
        </div>
        <div className="m-5 flex justify-center">
          <img className="rounded-lg shadow-lg" width={400} src="assest/about.jpg" alt="About Us" />
        </div>
      </div>

      <div className="bg-gray-200 w-full p-10 flex justify-center items-center flex-col text-center">
        <div className="m-5 flex flex-col md:flex-row items-center">
          <h1 className="text-4xl font-bold text-gray-800">Career</h1>
          <p className="text-2xl ml-3 mt-1.5 font-semibold text-gray-700">Opportunities</p>
        </div>
        <p className="m-5 text-gray-700">
          Vestibulum dui lorem pharetra montes id scelerisque suspendisse quam libero non faucibus cum natoque condimentum taciti leo in a. Morbi mi vestibulum nullam eu sem consequat penatibus arcu torquent natoque non a iaculis integer tincidunt curabitur. Dis pretium suspendisse a vestibulum nec feugiat semper ipsum sagittis.
        </p>
        <Button >Our Career Portal</Button>
      </div>

      <div className="flex p-20 text-center justify-center items-center flex-col md:flex-row">
        <div className="flex flex-col text-center justify-center items-center mx-4">
          <svg
            fill="#8157b5"
            width={50}
            viewBox="0 0 16 16"
            focusable="false"
            className="chakra-icon css-e3a7mo"
            strokeWidth=".1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"></path>
          </svg>
          <h3 className="font-semibold text-lg mt-2">SHARE OUR KNOWLEDGE</h3>
          <p className="text-gray-600 mt-1">
            Vestibulum vivamus parturient hendrerit consectetur faucibus facilisi natoque luctus posuere duis.
          </p>
          <Button >FIND INSIGHT</Button>
        </div>

        <div className="flex flex-col text-center justify-center items-center mx-4 mt-10 md:mt-0">
          <svg
            fill="#8157b5"
            width={50}
            viewBox="0 0 24 24"
            focusable="false"
            className="chakra-icon css-hfpm65"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11 3h10v8h-3l-4 2v-2h-3z"></path>
            <path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2"></path>
            <path d="M10 18v.01"></path>
          </svg>
          <h3 className="font-semibold text-lg mt-2">GET HELP FROM EXPERTS</h3>
          <p className="text-gray-600 mt-1 ">
            Vestibulum vivamus parturient hendrerit consectetur faucibus facilisi natoque luctus posuere duis.
          </p>
          <Button >FIND INSIGHT</Button>
        </div>

        <div className="flex flex-col text-center justify-center items-center mx-4 mt-10 md:mt-0">
          <svg
            fill="#8157b5"
            width={50}
            xmlns="http://www.w3.org/2000/svg"
            className="bi bi-tools"
            viewBox="0 0 16 16"
          >
            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 1.5 1.5 1.5L12.5 2 10 4.5l1.5 1.5 2-2z"></path>
          </svg>
          <h3 className="font-semibold text-lg mt-2">HAVE A THOUGHT?</h3>
          <p className="text-gray-600 mt-1">
            Vestibulum vivamus parturient hendrerit consectetur faucibus facilisi natoque luctus posuere duis.
          </p>
          <Button>FIND INSIGHT</Button>
        </div>
      </div>
    </div>
  );
}

export default function Message() {
    return (
        <div className="bg-customPurple w-full p-1.5 flex justify-between text-white text-xs">
            <div className="flex justify-between w-full px-4 md:px-10">
                <div className="flex">
                    <svg
                        viewBox="0 0 24 24"
                        color="white"
                        width={15}
                        focusable="false"
                        className="chakra-icon"
                    >
                        <g fill="currentColor">
                            <path d="M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"></path>
                            <path d="M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"></path>
                        </g>
                    </svg>
                    <label className="ml-1">info@gmail.com</label>
                </div>

                <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                        <svg viewBox="0 0 24 24" fill="white" width={15} focusable="false" className="chakra-icon">
                            <path d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0-3.124 3.074-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zm-5.657 8.195c-.668 0-1.295-.26-1.768-.732-.975-.975-.975-2.561 0-3.536.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732c.975.975.975 2.562 0 3.536-.472.472-1.1.732-1.768.732z"></path>
                        </svg>
                        <p className="ml-1">Branches</p>
                    </div>
                    <div className="h-4 w-0.5 bg-white"></div>

                    <div className="flex items-center">
                        <svg viewBox="0 0 576 512" fill="white" width={15} focusable="false" className="chakra-icon">
                            <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                        </svg>
                        <p className="ml-1">Store</p>
                    </div>
                    <div className="h-4 w-0.5 bg-white"></div>

                    <div className="flex items-center">
                        <svg viewBox="0 0 24 24" fill="white" width={15} focusable="false" className="chakra-icon">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path>
                        </svg>
                        <p className="ml-1">Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

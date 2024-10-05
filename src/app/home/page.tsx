import BestServices from "@/components/BestServices";
import RelationShip from "@/components/RelationShip";
import Services from "@/components/Services";
import Team from "@/components/Team";

export default function HomePage() {
    return (
        <div className="flex flex-col">
            <div className="relative  ">
                <img width='100%' src="/assest/home-bg-image.jpeg" alt="" />
                <div className="bg-black opacity-55 text-xl absolute bottom-28 p-4 text-white text-center w-full">
                    <p>
                        First Slide
                    </p>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                </div>
            </div>
            <div className='bg-cusomBlue w-full p-10 flex font-extralight'>

                <div className="flex-1 m-10 ">
                    <h1 className='font-extrabold text-lg mb-5'>The Best Agency for your Business</h1>
                    <p>Our strategy is dependent on your world and your goals. Moving towards your goal empowers us too!</p>
                    <ConsultBtn />
                </div>
                <div className="flex justify-center items-center flex-col flex-1 m-10  ">
                    <svg className=" mt-4 mb-5" viewBox="60 60 910 910" width={100} focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M952 474H829.8C812.5 327.6 696.4 211.5 550 194.2V72c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v122.2C327.6 211.5 211.5 327.6 194.2 474H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h122.2C211.5 696.4 327.6 812.5 474 829.8V952c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V829.8C696.4 812.5 812.5 696.4 829.8 550H952c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM512 756c-134.8 0-244-109.2-244-244s109.2-244 244-244 244 109.2 244 244-109.2 244-244 244z"></path><path d="M512 392c-32.1 0-62.1 12.4-84.8 35.2-22.7 22.7-35.2 52.7-35.2 84.8s12.5 62.1 35.2 84.8C449.9 619.4 480 632 512 632s62.1-12.5 84.8-35.2C619.4 574.1 632 544 632 512s-12.5-62.1-35.2-84.8C574.1 404.4 544.1 392 512 392z"></path></svg>
                    <h1 className='font-bold text-lg'>Engrossing content</h1>
                    <p className="mt-5 text-center">The content delivery needs to be original & engrossing to hold the attention of the visitors.</p>
                </div>
                <div className=" flex justify-center items-center flex-col flex-1 m-10 ">
                    <svg className="mb-7" viewBox="65 25 380 470" width={80} focusable="false" xmlns="http://www.w3.org/2000/svg" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M151 32v247h18V32h-18zm247 9.574l-13.428 7.59c-31.626 17.876-61.492 12.267-93.138 4.356-31.647-7.912-64.83-18.84-97.946-4.807L188 51.039V166.588l12.512-5.3c25.883-10.968 54.201-2.396 86.554 5.692 32.354 8.089 68.988 14.98 106.362-6.144l4.572-2.584V41.574zM73 297v67.271l32 32V487h302v-90.729l32-32V297h-46v39h-18v-39h-46v39h-18v-39h-46v39h-18v-39h-46v39h-18v-39h-46v39h-18v-39H73z"></path></svg>
                    <h1 className='font-bold text-lg'>Engaging copy nails!</h1>
                    <p className="mt-5 text-center">When the visitor is impressed with the content, the retention is likely to be longer in the site.</p>
                </div>
                <div className="flex-1 m-10 flex justify-center flex-col items-center ">
                    <svg className=" mt-2 mb-5" viewBox="2.5 1.5 19 21" width={100} focusable="false" xmlns="http://www.w3.org/2000/svg" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.43 18.75c.37-.46.94-.75 1.57-.75.63 0 1.19.29 1.56.75.39-.09.76-.21 1.12-.36l-1.42-3.18a3.522 3.522 0 01-2.56-.02l-1.43 3.19c.38.16.76.29 1.16.37zM5.15 10a7.06 7.06 0 00.08 4c.63.05 1.22.4 1.56.99.33.57.35 1.23.11 1.79.27.27.56.53.87.76l1.52-3.39c-.47-.58-.75-1.32-.75-2.13 0-1.89 1.55-3.41 3.46-3.41s3.46 1.53 3.46 3.41c0 .82-.29 1.57-.78 2.16l1.5 3.35c.32-.24.62-.5.9-.79-.22-.55-.2-1.2.12-1.75.33-.57.9-.92 1.52-.99a7.025 7.025 0 00.09-4.02c-.64-.04-1.26-.39-1.6-1-.36-.62-.35-1.36-.03-1.95-.91-.98-2.1-1.71-3.44-2.05C13.39 5.6 12.74 6 12 6s-1.39-.41-1.74-1.01a7.053 7.053 0 00-3.44 2.03c.33.6.35 1.35-.02 1.98-.35.62-.99.97-1.65 1zm-1.3-.42c-.78-.6-1.02-1.7-.51-2.58.51-.88 1.58-1.23 2.49-.85a8.53 8.53 0 014.18-2.42C10.15 2.75 10.99 2 12 2s1.85.75 1.98 1.73c1.63.39 3.07 1.24 4.18 2.42a1.99 1.99 0 012.49.85c.51.88.27 1.98-.51 2.58.23.77.35 1.58.35 2.42s-.12 1.65-.35 2.42c.78.6 1.02 1.7.51 2.58-.51.88-1.58 1.23-2.49.85-.4.43-.85.81-1.34 1.15l1.34 3H16.3l-.97-2.17c-.43.18-.88.33-1.34.44-.14.98-.98 1.73-1.99 1.73s-1.85-.75-1.98-1.73c-.48-.12-.94-.27-1.38-.46L7.66 22H5.78l1.36-3.03a8.72 8.72 0 01-1.3-1.12c-.92.38-1.99.03-2.5-.85s-.27-1.98.51-2.58c-.23-.77-.35-1.58-.35-2.42s.12-1.65.35-2.42z"></path></svg>
                    <h1 className='font-bold text-lg'>Retaining the visitor</h1>
                    <p className="mt-5">When the copy nails it, the call to action appears like a shadow intending to trigger a move.</p>
                </div>

            </div>
            <div>
                <Services />
            </div>
            <div >
                <BestServices />
            </div>
            <div>
                <RelationShip />
            </div>
            <div>
                <Team/>
            </div>
        </div>
    )
}



export function ConsultBtn() {
    return (
        <button className="bg-customPurple text-white mt-7 p-2 w-40 h-12 m-1">Consult Now</button>

    )
}
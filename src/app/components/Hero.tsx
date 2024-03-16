import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="hero w-screen h-screen relative bg-primary-dark flex  ">
        <div className="w-1/2 2xl:w-[51%]  h-full relative">
          {/* <Image with clip path */}
          <Image
            src="/images/bridge.png"
            layout="fill"
            objectFit="cover"
            alt="bridge"
            className="[clip-path:polygon(0_0,100%_0,80%_100%,0%_100%)]"
          />
        </div>

        {/* Header */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <h1 className=" text-[150px] lg:text-[200px] 2xl:text-[300px] josefin-sans ">
            <span className="text-white">tail</span>
            <span className="text-primary-green">road</span>
          </h1>
        </div>

        {/* Scroll down */}
        <div className=" w-full flex justify-center absolute bottom-0 ">
          <div className="w-[95%] flex justify-end h-16 items-center">
            <button className="text-white">scroll down</button>
          </div>
        </div>
      </section>
    </>
  );
}

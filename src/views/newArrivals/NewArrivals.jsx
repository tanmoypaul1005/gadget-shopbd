import ShopCard from "@/(components)/card/ShopCard";
import { BaseUrlSrc } from "@/Utility/Url";
import axios from "axios";

async function getData() {
  const res = await axios.post(`${BaseUrlSrc}/product`, { status: "New Arrivals" });
  return res?.data
}

export default async function NewArrivals() {
  const data = await getData();

  // console.log("data", data)

  return <main>
    <div>
      <section className="md:h-full flex justify-center items-center text-gray-600">
        <div className=" px-[20px] py-[20px] ">
          <div className="text-center mb-[20px]">
            <h1 className="text-2xl md:text-4xl text-gray-700 font-semibold">New Arrivals Cards</h1>
          </div>
          <div className="flex  flex-wrap">
            {data?.data?.length > 0 ?
              data?.data?.map((item, index) => (
                <ShopCard
                  title={item?.name}
                  image={item?.image}
                  index={index} key={index}
                />
              ))
              : 'No Product'}
          </div>
        </div>
      </section>
    </div>

  </main>;
}
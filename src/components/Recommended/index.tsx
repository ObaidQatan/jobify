import { camelCase, startCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { ArrowRight, MapPin } from "tabler-icons-react";

const GetStarted = ({ className }: { className?: string }) => {
  const { t: tCommon } = useTranslation("common");

  return (
    <div
      className={`flex flex-col justify-center items-center w-full ${className}`}
    >
      <div className="title text-start w-full font-bold p-5">
        <h1>{startCase(tCommon(camelCase("Recommended Jobs")))}</h1>
      </div>

      <div className="jobs-section flex justify-start md:justify-center w-full overflow-x-auto py-5">
        {[
          {
            id: 1,
            title: "Delivery Driver",
            party: "Domino's Pizza",
            location: "London, UK",
            icon: "/img/parties/dominos.svg",
            salary: { quantity: 800, currency: "£" },
          },
          {
            id: 2,
            title: "Barista",
            party: "Starbucks",
            location: "India, Bangalore",
            icon: "/img/parties/starbucks.svg",
            salary: { quantity: 12000, currency: "₹" },
          },
          {
            id: 3,
            title: "Cashier",
            party: "Walmart",
            location: "United States, New York",
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
            salary: { quantity: 1000, currency: "$" },
          },
          {
            id: 4,
            title: "Delivery Driver",
            party: "Amazon",
            location: "Saudi Arabia, Riyadh",
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            salary: { quantity: 900, currency: "SR" },
          },
          {
            id: 5,
            title: "Sales Person",
            party: "Reliance Digital",
            location: "India, Mumbai",
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Reliance_Digital.svg",
            salary: { quantity: 15000, currency: "₹" },
          },
        ].map(
          (
            recommendedJob: {
              id: number;
              title: string;
              party: string;
              location: string;
              icon: string;
              salary: { quantity: number; currency: string };
            },
            i
          ) => (
            <div
              key={i}
              className="card bg-white p-5 mx-2 rounded-md flex flex-col items-center shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-[#F372B6] hover:to-[#a247f8] hover:text-white"
            >
              <div className="image w-[80px] h-[80px] m-8 bg-white rounded-full relative">
                <Image
                  src={recommendedJob.icon}
                  alt={recommendedJob.party}
                  layout="fill"
                  objectFit="fill"
                />
              </div>

              <div className="divider bg-black bg-opacity-10 h-[1.5px] rounded-md min-w-[200px]"></div>

              <div
                className="body flex flex-col justify-start w-full"
                style={{
                  transition: "0s",
                }}
              >
                <div
                  className="title pt-2 pb-3 font-[Montserrat-Bold]"
                  style={{
                    transition: "0s",
                  }}
                >
                  <h3
                    style={{
                      transition: "0s",
                    }}
                  >
                    {startCase(tCommon(camelCase(`${recommendedJob.title}`)))}
                  </h3>
                </div>

                <div
                  className="party text-[15px] font-bold"
                  style={{
                    transition: "0s",
                  }}
                >
                  <h3
                    style={{
                      transition: "0s",
                    }}
                  >
                    {startCase(
                      tCommon(`brands.${camelCase(recommendedJob.party)}`)
                    )}
                  </h3>
                </div>

                <div
                  className="location flex justify-start items-center py-1 px-2 rounded-md bg-opacity-5 bg-white w-fit"
                  style={{
                    transition: "0s",
                  }}
                >
                  <div
                    className="icon"
                    style={{
                      transition: "0s",
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <p
                    className="text-[14px]"
                    style={{
                      transition: "0s",
                    }}
                  >
                    {startCase(tCommon(camelCase(recommendedJob.location)))}
                  </p>
                </div>
              </div>

              <div
                className="footer flex justify-between mt-10 w-full p-2 bg-white bg-opacity-5"
                style={{
                  transition: "0s",
                }}
              >
                <div
                  className="salary text-[18px] font-bold"
                  style={{
                    transition: "0s",
                  }}
                >
                  {recommendedJob.salary.currency}{" "}
                  {recommendedJob.salary.quantity}
                </div>
                <div
                  className="icon rounded-full p-2 cursor-pointer mx-2 text-white shadow-md shadow-[#00000050]"
                  style={{
                    background: "linear-gradient(90deg, #ffd400, #fb7401)",
                  }}
                >
                  <ArrowRight className="w-[20px] h-[20px]" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GetStarted;

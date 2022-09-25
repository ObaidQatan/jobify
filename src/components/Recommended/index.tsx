import useTranslation from "next-translate/useTranslation";
import { ArrowsRight, Search } from "tabler-icons-react";

const GetStarted = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col justify-center items-center w-full ${className}`}
    >
      <div className="title">
        <h1></h1>
      </div>

      <div className="jobs-section flex">
        {[].map(
          (
            recommendedJob: {
              id: number;
              title: string;
              body: string;
              location: string;
              icon: string;
              salary: { quantity: number; currency: string };
            },
            i
          ) => (
            <div key={i} className="card">
              <div className="image">
                <img src={recommendedJob.icon} alt={recommendedJob.body} />
              </div>

              <div className="divider"></div>

              <div className="title">
                <h3></h3>
              </div>

              <div className="body">
                <h3></h3>
              </div>

              <div className="location">
                <p></p>
              </div>

              <div className="footer flex">
                <div className="salary">
                  {recommendedJob.salary.currency}
                  {recommendedJob.salary.quantity}
                </div>
                <div className="button">
                  <ArrowsRight />
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

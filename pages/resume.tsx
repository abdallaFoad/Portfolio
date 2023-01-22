import Bar from "../components/Bar";
import { languages } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* Education */}
      <div className="grid gap-6 md:grid-cols-1">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Information Systems
            </h5>
            <p className="font-semibold">From Tanta (2016-2020)</p>
            <p className="my-3">
              I graduated in Information Systems from Tanta in 2020. 
            </p>
          </div>
        </div>
      </div>

      {/*Languages */}
      <div className="grid gap-9 md:grid-cols-1">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

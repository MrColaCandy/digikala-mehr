import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import Layout from "@components/Layout";
import Slider from "@components/Slider";
import Slide from "@components/Slide";
import { requestAllProjects } from "@services/http";


import "./style.css";

const ChoosePlan = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    setLoading(true);
    requestAllProjects()
    .then(data=>setAllProjects(data))
    .catch(()=>{
      setError(true);
      setAllProjects([])
    })
    .finally(setLoading(false));
  }, []);
  function handleSlideButtonClick(project)
  {
    navigate("/choose-price/"+project.id)
  }
  if(loading)
  {
    return <div>Loading . . .</div>
  }
  if(error)
  {
    return null;
  }

  return (
    <Layout>
      <section className="choosePlan">
        <div className="choosePlan__header">
          <div className="choosePlan__currentPhase">مرحله ۲ از ۳</div>
          <div className="choosePlan__headerTextGreen">
            از اینکه تصمیم گرفتی با ما همراه باشی ازت ممنونیم.
          </div>
          <div className="choosePlan__headerText">
            حالا تو این مرحله باید انتخاب کنی کمک‌ات صرف چه{" "}
            <span className="choosePlane_TextGreen">کار خیری</span> بشه.
          </div>
        </div>
      </section>
      <Slider
        slideHeight={420}
        slideWidth={360}
        viewPortWidth={390 * 2.5}
        gap={40}
      >
        {allProjects?.map((project) => {
          return (
            <Slide
              key={project.id}
              project={project}
              variant="choosePlan"
              onClick={()=>handleSlideButtonClick(project)}
            />
          );
        })}
      </Slider>
    </Layout>
  );
};

export default ChoosePlan;

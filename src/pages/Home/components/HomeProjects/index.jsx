import { FaChevronLeft } from "react-icons/fa6";
import Slider from "@components/Slider";
import Card from "@components/Card";
import './style.css'
import { useEffect, useState } from "react";
import {  requestAllProjects } from "./requests";





function HomeProjects({ onStartButtonClick }) {
  const [projects, setProjects] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
  useEffect(() => {
    async function getProjects() {
      setIsLoading(true);
     
        try {
          const {data} = await requestAllProjects();
          setProjects([...data]);
        } catch (error) {
          setProjects(null);
        }
        finally{
          setIsLoading(false);
        }
      
    }
    getProjects();
  }, [])

  return (
    <section className="homeProjects">
      <section className="homeProjects__header">
        <h3 className="homeProjects__title">حالا چه پروژه‌هایی؟</h3>
        <h4 className="homeProjects__description">پروژه‌هایی که تو این فاز منتظر کمک شما هستن</h4>
      </section>
      <Slider isLoading={isLoading}  slideWidth={390} slideHeight={450} viewPortWidth={1250} gap={40}>
        {
          projects?.map((project) => {
            return <Card
              key={project.id}
              project={project}
              textBoxVariant={1}
            />

          })
        }
      </Slider>
      <button onClick={onStartButtonClick} className="homeProjects__button">
        <span>برای شروع کلیک کن</span>
        <FaChevronLeft className="homeProjects__icon" />
      </button>
    </section>
  )
}

export default HomeProjects;
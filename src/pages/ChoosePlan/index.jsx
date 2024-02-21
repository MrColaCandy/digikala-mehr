import Layout from "@components/Layout"
import ChoosePlaneHeader from "./components/choosePlanHeader"
import "./style.css"
import Slider from "@components/Slider"
import Card from "@components/Card"
import Button from "@components/Button"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { requestAllProjects } from "./requests"
import { serialize } from "cookie"


const ChoosePlan = () => {

  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function getProjects() {
      setIsLoading(true);

      try {
        const { data } = await requestAllProjects();
        console.log(data);
        setProjects([...data]);
      } catch (error) {
        setProjects(null);
      }
      finally {
        setIsLoading(false);
      }

    }
    getProjects();
  }, [])
  async function handleCardButtonClick(project) {
    document.cookie = serialize("project", JSON.stringify(project.id));
    navigate("/choose-price");

  }
  return (
    <Layout>
      <ChoosePlaneHeader />
      <Slider isLoading={isLoading} slideHeight={450} slideWidth={360} viewPortWidth={360 * 2.5} gap={40} >
        {
          projects?.map((project) => {
            return <Card
              key={project.id}
              project={project}
              cardButton={
                <Button isLoading={isLoading} text={"انتخاب کنید"} onClick={() => {
                  handleCardButtonClick(project)
                }} />
              }
            />
          })
        }
      </Slider>
    </Layout>
  )
}

export default ChoosePlan
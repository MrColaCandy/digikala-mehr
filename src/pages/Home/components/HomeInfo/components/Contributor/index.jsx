import {BsPersonHeart} from "react-icons/bs"

const Contributor = ({person}) => {
    return (
        <div className="homeInfo__lastMembersWrapper">
            <div className="homeInfo__lastMembersIcon"><BsPersonHeart /></div>
            <p className="homeInfo__lastMembersName">
                {person}
            </p>
        </div>
    )
}

export default Contributor
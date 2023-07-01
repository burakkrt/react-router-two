import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Loading = () => {

    return (
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-center">
                <FontAwesomeIcon icon="fa-solid fa-spinner" size="4x" spin color="gray"/>
                <p className="text-4xl mt-6">Loading</p>
            </div>
        </div>
    );
}

export default Loading
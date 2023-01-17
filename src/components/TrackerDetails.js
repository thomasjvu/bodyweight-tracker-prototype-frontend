// buttons
// import UpdateButton from "../components/UpdateButton";
import DeleteButton from "../components/DeleteButton";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import format from "date-fns/format";

const TrackerDetails = ({ tracker }) => {

    console.log('trackerdetails', tracker)

    // Date format
    function formatTheDate(date) {
        const [year, month, day] = date.substr(0, 10).split("-");
        return format(new Date(year, month - 1, day), "MMMM dd, yyyy");
    }

    // console.log('tracker', tracker)
    return (
        <div className="tracker-details">
            <p className="tracker-weight">
                <strong>Weight (lbs):</strong> {tracker.weight}
            </p>
            <p className="tracker-date">
                <strong>Date:</strong> {formatTheDate(tracker.date)}
            </p>
            <p className="tracker-created">
                <strong>Created: </strong>{" "}
                {formatDistanceToNow(new Date(tracker.createdAt), {
                    addSuffix: true,
                })}
            </p>
            <p className="tracker-updated">
                <strong>Updated: </strong>{" "}
                {formatDistanceToNow(new Date(tracker.updatedAt), {
                    addSuffix: true,
                })}
            </p>
            <br />
            <p className="tracker-id">
                <strong>ID:</strong> {tracker._id}
            </p>
            <section className="tracker-modify">
            {/* <UpdateButton tracker={tracker} />*/}
                <DeleteButton tracker={tracker} />
            </section>
        </div>
    );
};

export default TrackerDetails;

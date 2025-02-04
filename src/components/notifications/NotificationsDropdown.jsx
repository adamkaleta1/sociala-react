import PropTypes from "prop-types"

export const NotificationsDropdown = ({ onClose }) => {

    const notificationsCard = [
        {
            name: "Hendrix Stamp",
            sentence: "There are many variations of pass..",
            lastUpdate: "3 min"
        },
        {
            name: "Goria Coast",
            sentence: "Mobile Apps UI Designer is require..",
            lastUpdate: "2 min"
        },
        {
            name: "Surfiya Zakir",
            sentence: " Mobile Apps UI Designer is require..",
            lastUpdate: "1 min"
        },
        {
            name: "Victor Exrixon",
            sentence: "There are many variations of pass..",
            lastUpdate: "30 sec"
        },
    ]

    return (
        <div
            className={`dropdown-menu p-3 right-0 rounded-xxl border-0 shadow-lg show`}
            aria-labelledby="dropdownMenu3"
        >
            <div className="flex justify-between items-center">
                <h4 className="fw-700 font-xss mb-3">Notifications</h4>
                <button className="cursor-pointer" onClick={onClose}>X</button>
            </div>
            {notificationsCard.map((notificationCard) => (
                <div
                    key={notificationCard.name}
                >
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img
                            src="assets/images/user.png"
                            className="w40 position-absolute left-0"
                            alt="user"
                        />
                        <h5
                            className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block"
                        >
                            {notificationCard.name}
                        </h5>
                        <span
                            className="text-grey-400 font-xsssss fw-600 float-right mt-1"
                        >
                            {notificationCard.lastUpdate}
                        </span>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                            {notificationCard.sentence}
                        </h6>
                    </div>
                </div>
            ))}
        </div >
    )
}

// poniższy kod nie jest potrzebny do poprawnego działania apki, ale dobrze go dodać, 
// aby zdefiniować sobie 
NotificationsDropdown.propTypes = {
    onClose: PropTypes.func.isRequired,
};
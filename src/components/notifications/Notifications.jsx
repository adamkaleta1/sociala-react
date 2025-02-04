import { useState } from "react";
import { NotificationsDropdown } from "./NotificationsDropdown";

export const Notifications = () => {
    const [hasNotifications, setHasNotifications] = useState(false);


    // poniższa funkcja tworzy nam nowy, odwrotny stan na podstawie dotychczasowego stanu
    const toggleHasNotifications = () => {
        setHasNotifications((prevHasNoti) => !prevHasNoti)
    };

    const handleClose = (event) => {
        console.log(event);
        // poniższe dwa kody służą do tego, aby zapobiec podwójnemu kliknięciu, 
        // np w przypadku takim, jak mamy dwa elementy nałożone na siebie
        event.preventDefault();
        event.stopPropagation();
        setHasNotifications(false);
    }

    const notiClass = `${hasNotifications ? "show" : ""}`;

    return (
        <>
            <span
                className={`p-2 cursor-pointer text-center ms-auto menu-icon ${notiClass}`}
                id="dropdownMenu3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={toggleHasNotifications}
            >
                <span className="dot-count bg-warning"></span>
                <i className="feather-bell font-xl text-current"></i>

            </span>
            {/* {hasNotifications === true && <NotificationsDropdown />} */}

            {/* poniższy kod, to podobny do JS if, tzn if (hasNotifications) {NotificationsDropdown} */}
            {hasNotifications && <NotificationsDropdown onClose={handleClose} />}
        </>
    )
}
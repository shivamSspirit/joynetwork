import { flatMap } from "lodash";
import { useState } from "react";

function useModal() {
    const [modal, setModal] = useState(false);
    console.log('modal value from hoook', modal)

    const modalOperation = () => {
        if (modal === false) {
            setModal(true)
        }  if (modal === true) {
            setModal(false)
        }
    }

    return {
        modal,
        setModal,
        modalOperation
    }
}

export { useModal } 
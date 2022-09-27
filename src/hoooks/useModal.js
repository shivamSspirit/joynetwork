import { useState } from "react";

function useModal() {
    const [modal, setModal] = useState(false);
    function modelOperation () {
        setModal(!modal)
    }
    return {
        modelOperation,
        modal,
        setModal
    }
}

export default useModal
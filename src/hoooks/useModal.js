import { useState } from "react";

function useModal() {
    const [modal, setModal] = useState(false);
    async function modelOperation () {
       await setModal(true)
        console.log('status:',modal)
    }
    return {
        modelOperation,
        modal,
        setModal
    }
}

export default useModal
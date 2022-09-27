import { useState } from "react";

function useModal() {
    const [modal, setModal] = useState(false);
    const modelOperation = () => {
        console.log('modal', modal)
        setModal(!modal)
    }
    return {
        modelOperation,
        modal
    }
}

export default useModal
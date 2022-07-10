import { useState } from "react";

const useModal = (initialMode:boolean = true) => {
    const [isOpened, setIsOpened] = useState(initialMode);
    const toggle = () => setIsOpened(!isOpened);
    return [isOpened, setIsOpened, toggle];
}

export default useModal;
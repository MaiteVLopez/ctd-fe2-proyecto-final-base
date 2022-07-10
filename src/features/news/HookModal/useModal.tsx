import { useState } from "react";

const useModal = (initialMode :boolean) => {
    const [isOpened, setIsOpened] = useState(initialMode);
    const [data, setData] = useState(null);
    const toggle = () => 
    {
      setIsOpened(!isOpened);
      setData(data);
    };
    return [isOpened, data, setData, toggle];
}
export default useModal;
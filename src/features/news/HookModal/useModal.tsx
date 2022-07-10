import { useState } from "react";

<<<<<<< HEAD
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
=======
const useModal = (initialMode:boolean = true) => {
    const [isOpened, setIsOpened] = useState(initialMode);
    const toggle = () => setIsOpened(!isOpened);
    return [isOpened, setIsOpened, toggle];
}

>>>>>>> b93a72dd1f5e41df48705ca4eb967d42a8a06bdc
export default useModal;
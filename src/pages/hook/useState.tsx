import { useState } from "react"

const useStateDemo = () => {



    const [count, setCount] = useState<number>(0);



    return (
        <div>
            useState
        </div>
    )
}

export default useStateDemo 
/*
 * @Author: rocco.liu 2863433495@qq.com
 * @Date: 2023-06-11 12:32:38
 * @LastEditors: rocco.liu 2863433495@qq.com
 * @LastEditTime: 2023-06-12 10:36:09
 * @FilePath: /learing-hook/src/pages/useState/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useState } from "react"

const useStateDemo = () => {



    const [count, setCount] = useState<number>(0);

    useEffect(() => {

    }, [])



    return (
        <div >
            <h1>useState</h1>
        </div>
    )
}

export default useStateDemo 
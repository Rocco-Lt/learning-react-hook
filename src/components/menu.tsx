import { Link } from "umi"

/*
 * @Author: rocco.liu 2863433495@qq.com
 * @Date: 2023-06-11 00:40:58
 * @LastEditors: rocco.liu 2863433495@qq.com
 * @LastEditTime: 2023-06-12 11:05:51
 * @FilePath: /learing-hook/src/components/menu.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE 
 */
const MenuList = () => {
    return (
        <div style={{ width: '10%', height: '100%', borderRight: '1px solid #ccc', padding: '5px' }}>
            <Link to={'/useState'} >useState</Link>
            <Link to={'/useEffect'} >useEffect</Link>
        </div >

    )
}

export default MenuList
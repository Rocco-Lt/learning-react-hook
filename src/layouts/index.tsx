/*
 * @Author: rocco.liu 2863433495@qq.com
 * @Date: 2023-06-10 23:34:27
 * @LastEditors: rocco.liu 2863433495@qq.com
 * @LastEditTime: 2023-06-12 11:05:42
 * @FilePath: /learing-hook/src/layouts/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Link, Outlet } from 'umi';
import styles from './index.less';
import MenuList from '@/components/menu';
export default function Layout() {
  return (
    <div style={{ display: 'flex', height: "100%" }}>
      < MenuList />
      <div style={{ width: '100%', padding: '20px' }}>
        <Outlet />
      </div>
    </div>

  );
}

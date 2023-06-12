/*
 * @Author: rocco.liu 2863433495@qq.com
 * @Date: 2023-06-11 00:31:23
 * @LastEditors: rocco.liu 2863433495@qq.com
 * @LastEditTime: 2023-06-11 01:28:38
 * @FilePath: /learing-hook/src/config/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "umi";
import routes from './routes';
export default defineConfig({
    routes,
    npmClient: 'yarn',
    alias: {
        '@': '/src'
    }
});
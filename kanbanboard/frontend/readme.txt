ex02 : Component Styling

1) Inline Styling : src/01

2) Normal CSS
    - css-loader options: {module: false}
    - [ex02]$ npm run debug src=02 css-module=false

3) CSS Module I
    - css-loader options: {module: true}
    - [ex03]$ npm run debug src=03 (css-module=true)

4) CSS Module II
    - css-loader options: {module: true}
    - [ex04]$ npm run debug src=04 (css-module=true)
    
5)
6)
7)






=====================================================================
1. 설치
    [kanbanboard/frontend]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-syntax-throw-expressions @babel/plugin-transform-runtime
    [kanbanboard/frontend]$ npm i react react-dom prop-types react-addons-update

2. 설정
    babel.config.json
    webpack.config.js

3. npm scripting

4. 애플리케이션 실행(개발 서버 실행)
    [ex08]$ npm run debug src=(01|02|03|04|05|06|07|08)

    [ex08]$ npx webpack serve --progress --env src=01

5. 빌드
    [emaillist/forntend]$ npm num build

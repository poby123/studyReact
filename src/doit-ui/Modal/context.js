//컨텍스트를 이용하여 모달을 제어할 수 있도록 공급자와 소비자를 생성한다.
//context.js 파일을 이용해서 순환 참조 문제를 해결한다.

import React from 'react';
export const { Provider, Consumer } = React.createContext({});

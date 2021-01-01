import React, { useState } from 'react';

/* interface Sub {
    name: string,
    last: string
}
interface Props {
    text:string,
    ok: boolean,
    i?: number, //i is optional
    fn: () => {},
    fn2: (a:string, b: string) =>string;
    obj: {
        name: string
    },
    okay: Sub
} */

interface Props {
    text:string
}

export const TextField: React.FC<Props> = () => {
    const [count, setCount] = useState<number | null>(5);
    setCount(1);
    return (
    <div>{count}</div>)
}
 
export default TextField
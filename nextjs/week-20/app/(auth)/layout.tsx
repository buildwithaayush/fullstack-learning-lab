import { ReactNode } from "react";

export default function Rootlayout({children}: {children: ReactNode}){
    return(<>
    <div>header</div>
    {children}
    <div>footer</div>
    </>)
}
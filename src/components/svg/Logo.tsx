import React, { FC, useState } from "react";

interface LogoProps {

}

export const Logo: FC<LogoProps> = (props) => {
  const [active, setActive] = useState<boolean>(false);
  const colorActive = active ? 'green' : 'blue';
  return (
    <svg viewBox={"0 0 200 200"} width={50} height={50}>
      <rect onClick={() => setActive(prevActive => !prevActive)} fill={colorActive} width={200} height={200}/>
    </svg>);
}
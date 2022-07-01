import React, { FC } from "react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { useMouseMove } from "../hooks/useMouseMove";

interface TestUseSyncExternalStoreProps {

}

export const TestUseSyncExternalStore: FC<TestUseSyncExternalStoreProps> = (props) => {
  const onLine = useOnlineStatus();
  useMouseMove();
  return <h1>
    {onLine ? "je suis en ligne" : "je ne suis pas en ligne"}
  </h1>;
}
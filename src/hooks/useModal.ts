"use client";

import { useCallback, useState } from "react";

const useModal = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const open = useCallback(() => {
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
  }, []);

  return {
    toggle,
    visible,
    open,
    close,
  };
};

export default useModal;

import React, { useRef } from 'react';

function useScrollToOld<T extends HTMLElement>(ref: React.RefObject<T>): [() => void, () => void] {
  const oldScrollTopRef = useRef(0);
  const oldScrollHeightRef = useRef(0);

  const scrollToOld = () => {
    if (ref.current) {
      const oldScrollTop = oldScrollTopRef.current;
      const oldScrollHeight = oldScrollHeightRef.current;
      const scrollTop = oldScrollTop + ref.current.scrollHeight - oldScrollHeight;
      ref.current.scrollTop = scrollTop;
    }
  };

  const recordScroll = () => {
    if (ref.current) {
      oldScrollTopRef.current = ref.current.scrollTop;
      oldScrollHeightRef.current = ref.current.scrollHeight;
    }
  };

  return [scrollToOld, recordScroll];
}

export default useScrollToOld;

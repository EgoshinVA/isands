import React, { type ReactNode, useState, useEffect } from 'react';
import s from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mousePosition?: { x: number; y: number } | null;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, mousePosition }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && mousePosition) {
      const modalWidth = 421;
      const modalHeight = 336;
      const margin = 10;

      let left = mousePosition.x;
      let top = mousePosition.y;

      if (left + modalWidth > window.innerWidth) {
        left = mousePosition.x - modalWidth - margin;
      }

      if (top + modalHeight > window.innerHeight) {
        top = mousePosition.y - modalHeight - margin;
      }

      setPosition({
        top: Math.max(margin, top),
        left: Math.max(margin, left),
      });
    }
  }, [isOpen, mousePosition]);

  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay} onClick={onClose}>
      <div
        className={s.modalContent}
        onClick={e => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

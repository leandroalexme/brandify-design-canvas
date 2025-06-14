
import React from 'react';
import { Pen, Brush, Pencil } from 'lucide-react';
import { ToolSubmenu } from './ToolSubmenu';

interface PenSubmenuProps {
  isOpen: boolean;
  onClose: () => void;
  onToolSelect: (toolId: string) => void;
  position: { x: number; y: number };
  selectedTool?: string;
}

export const PenSubmenu = (props: PenSubmenuProps) => {
  const penTools = [
    { id: 'pen', icon: Pen, label: 'Caneta' },
    { id: 'vector-brush', icon: Brush, label: 'Pincel Vetorial' },
    { id: 'pencil', icon: Pencil, label: 'Lápis' },
  ];

  return (
    <ToolSubmenu
      {...props}
      tools={penTools}
      title="Ferramentas de Desenho"
    />
  );
};

import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';

// Draggable wrapper for a single item (sortable)
type DraggableItemProps = {
  id: string;
  children: React.ReactNode;
};

function DraggableItem({ id, children }: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useSortable({ id });
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    // Remove pointerEvents and cursor from wrapper
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
  
  };

  // Drag handle style
  const handleStyle: React.CSSProperties = {
    cursor: 'grab',
    userSelect: 'none',
    padding: '0.15rem',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <span style={handleStyle} {...listeners}>
        {/* Simple drag icon (≡) */}
        <img src="/images/pin-png-24.png" alt="Drag Handle" className="w-4 h-4" />
      </span>
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}

// Example usage: wrap Profile in DraggableItem
export default DraggableItem;

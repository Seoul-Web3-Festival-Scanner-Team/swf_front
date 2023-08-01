import styled from '@emotion/styled';
import React, { useState, useRef, useEffect } from 'react';

const AccordionItemWrapper = styled.div`
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  padding: 8px;
  background: ${(props) => (props.expanded ? '#f0f0f0' : 'transparent')};
  transition: background 0.3s ease;
`;

const AccordionContent = styled.div`
  padding: 8px;
  max-height: ${(props) => (props.expanded ? `100px` : '0')};
  overflow: hidden;
  transition: max-height 3s ease;
`;

const AccordionList = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const items = [
    { id: 1, title: '항목 1', content: '항목 1의 내용' },
    { id: 2, title: '항목 2', content: '항목 2의 내용' },
    { id: 3, title: '항목 3', content: '항목 3의 내용' },
  ];

  useEffect(() => {
    // 내부 컨텐츠의 높이를 계산하여 contentHeight 상태 업데이트
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [expandedItem]);

  const handleItemClick = (itemId) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };

  return (
    <div>
      {items.map((item) => (
        <AccordionItemWrapper
          key={item.id}
          expanded={expandedItem === item.id}
          onClick={() => handleItemClick(item.id)}
        >
          {item.title}
          <AccordionContent expanded={expandedItem === item.id} contentHeight={contentHeight}>
            <div ref={contentRef}>
              {item.content}
            </div>
          </AccordionContent>
        </AccordionItemWrapper>
      ))}
    </div>
  );
};

export default AccordionList;

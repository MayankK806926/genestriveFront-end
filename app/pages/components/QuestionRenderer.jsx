import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const QuestionRenderer = ({ content }) => {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          div: ({node, ...props}) => <div {...props} />,
          span: ({node, ...props}) => <span {...props} />,
        }}
      />
    </div>
  );
};

export default QuestionRenderer; 

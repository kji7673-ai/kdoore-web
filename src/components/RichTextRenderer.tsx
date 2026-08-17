import React from 'react';

const TextNode = ({ node }: { node: any }) => {
  let text = node.text;
  if (node.format & 1) text = <strong>{text}</strong>;
  if (node.format & 2) text = <em>{text}</em>;
  if (node.format & 8) text = <u>{text}</u>;
  if (node.format & 16) text = <code>{text}</code>;
  return <>{text}</>;
};

const NodeRenderer = ({ node }: { node: any }) => {
  if (node.type === 'text') return <TextNode node={node} />;
  
  const children = node.children?.map((child: any, i: number) => (
    <NodeRenderer key={i} node={child} />
  ));

  switch (node.type) {
    case 'paragraph':
      // 빈 단락(줄바꿈) 처리
      if (!children || children.length === 0) return <br />;
      return <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>;
    case 'heading':
      const Tag = node.tag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      const classes = {
        h1: 'text-3xl font-bold mb-6 mt-8 text-gray-900',
        h2: 'text-2xl font-bold mb-4 mt-6 text-gray-900',
        h3: 'text-xl font-bold mb-4 mt-6 text-gray-900',
        h4: 'text-lg font-bold mb-2 mt-4 text-gray-900',
        h5: 'text-base font-bold mb-2 mt-4 text-gray-900',
        h6: 'text-sm font-bold mb-2 mt-4 text-gray-900',
      };
      return <Tag className={classes[Tag] || classes.h2}>{children}</Tag>;
    case 'quote':
      return <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic my-6 text-gray-600 bg-gray-50">{children}</blockquote>;
    case 'list':
      if (node.listType === 'number') {
        return <ol className="list-decimal list-outside ml-6 mb-6 space-y-2">{children}</ol>;
      }
      return <ul className="list-disc list-outside ml-6 mb-6 space-y-2">{children}</ul>;
    case 'listitem':
      return <li className="text-gray-700 leading-relaxed">{children}</li>;
    case 'link':
      return <a href={node.fields?.url} className="text-blue-600 hover:underline" target={node.fields?.newTab ? '_blank' : undefined}>{children}</a>;
    default:
      return <>{children}</>;
  }
};

export const RichTextRenderer = ({ content }: { content: any }) => {
  if (!content?.root?.children) {
    if (typeof content === 'string') {
      return <p className="mb-4 text-gray-700 leading-relaxed whitespace-pre-wrap">{content}</p>;
    }
    return null;
  }
  
  return (
    <div className="w-full break-words">
      {content.root.children.map((child: any, i: number) => (
        <NodeRenderer key={i} node={child} />
      ))}
    </div>
  );
};

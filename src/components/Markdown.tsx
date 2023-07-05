import React from "react";
import MarkdownImpl, { MarkdownToJSX } from "markdown-to-jsx";

const markdownOptions: MarkdownToJSX.Options = {
  overrides: {
    a: (props) => <a {...props} target="_blank" />,
  },
  forceBlock: true,
  wrapper: React.Fragment,
};

export default function Markdown({ children }: { children: string }) {
  return (
    <div className="prose prose-sm">
      <MarkdownImpl options={markdownOptions}>{children}</MarkdownImpl>
    </div>
  );
}

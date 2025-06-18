import React, { memo } from "react";
import parse, { DOMNode, Element } from "html-react-parser";
import DOMPurify from "dompurify";

// Define props interface
interface ReplaceDescriptionProps {
  description: string;
}

// Define custom component props
interface CustomComponentProps {
  children: React.ReactNode;
}

// Custom components with proper typing
const TFTBonusComponent: React.FC<CustomComponentProps> = ({ children }) => {
  return <span className="text-yellow-400">{children}</span>;
};

const MagicDamageComponent: React.FC<CustomComponentProps> = ({ children }) => {
  return <span className="text-teal-400">{children}</span>;
};

// Component with TypeScript
const ReplaceDescription: React.FC<ReplaceDescriptionProps> = ({ description }) => {
  // Sanitize input
  const sanitizedDescription = DOMPurify.sanitize(description);

  // Parser options with proper typing
  const options = {
    replace: (domNode: DOMNode) => {
      if (domNode.type === "tag") {
        const element = domNode as Element;
        // Handle tftbonus tag
        if (element.name === "tftbonus" && element.children) {
          return (
            <TFTBonusComponent>
              {parse(element.children.map(child => child.toString()).join(""))}
            </TFTBonusComponent>
          );
        }
        // Handle magicdamage tag
        if (element.name === "magicdamage" && element.children) {
          return (
            <MagicDamageComponent>
              {parse(element.children.map(child => child.toString()).join(""))}
            </MagicDamageComponent>
          );
        }
      }
      return undefined;
    },
  };

  return <>{parse(sanitizedDescription, options)}</>;
};

// Memoize component to prevent unnecessary re-renders
export default memo(ReplaceDescription);
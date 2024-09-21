"use client";
import React, { useState, } from "react";
import {
  Card as CardComponent,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "./button";
import { Code } from "lucide-react";



interface CardSnippetProps {
  title?: string;
  children: React.ReactNode
  code?: string;
}
const Card = ({ title, code, children }: CardSnippetProps) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <CardComponent>
      <CardHeader className="flex flex-row items-center pb-0">
        {title && (
          <CardTitle className="flex-1 leading-normal"> {title}</CardTitle>
        )}
        {code && (
          <div className="flex-none">
           <Button color="secondary" size="icon" variant={show?"solid":"ghost"}  onClick={toggle}>
            <Code className="w-4 h-4" />
           </Button>
          </div>
        )}
      </CardHeader>
      <CardContent >
        {children}
        <Collapsible open={show}>
          <CollapsibleContent className="CollapsibleContent">
            <SyntaxHighlighter
              language="javascript"
              className=" rounded-md  text-sm mt-6 px-2"
              style={atomOneDark}
            >
              {`${code}`}
            </SyntaxHighlighter>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </CardComponent>
  );
};

export default Card;
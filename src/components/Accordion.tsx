import * as RadixAccordion from "@radix-ui/react-accordion";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion.primitives";
import Markdown from "./Markdown";

interface AccordionProps {
  /**
   * An array of `Item`s where `Item` is an object with the following properties:
   * - `Item.title`: string
   * - `Item.content`: string
   *
   * > `Item.content` may contain _markdown syntaxes_ and/or _html markups_.
   *
   */
  items: Item[];
  /**
   * Should the first item be expanded when the component is rendered for the first time?
   */
  openFirstItemOnMount?: boolean;
}

type Item = {
  title: string;
  content: string;
};

export function Accordion({
  items,
  openFirstItemOnMount = false,
}: AccordionProps) {
  return (
    <RadixAccordion.Root
      type="single"
      collapsible
      defaultValue={openFirstItemOnMount ? "item-0" : ""}
    >
      {items.map((item, idx) => {
        return (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <Markdown>{item.content}</Markdown>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </RadixAccordion.Root>
  );
}

import { Node } from "@tiptap/core";
/**
 * Protected HTML block node. Stores raw HTML in an attribute and does not
 * allow TipTap to reinterpret the markup. Use for advanced layouts (e.g.
 * custom divs, flex/grid) so editor.getHTML() preserves the content.
 *
 * Architecture: atomic block; never inject arbitrary HTML into the editor
 * without wrapping it in this node.
 */
export declare const HtmlBlock: Node<any, any>;

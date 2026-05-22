import type { Editor } from "@tiptap/core";
/** True when editor exists and is safe to call .commands / chain on. */
export declare function isEditorActive(editor: Editor | null | undefined): editor is Editor;
export declare function safeSetContent(editor: Editor | null | undefined, html: string): boolean;
export declare function runEditorCommand(editor: Editor | null | undefined, fn: (activeEditor: Editor) => void): void;

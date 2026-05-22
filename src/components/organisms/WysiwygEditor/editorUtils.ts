import type { Editor } from "@tiptap/core";

/** True when editor exists and is safe to call .commands / chain on. */
export function isEditorActive(
  editor: Editor | null | undefined
): editor is Editor {
  if (!editor) return false;
  if (
    "isDestroyed" in editor &&
    (editor as Editor & { isDestroyed?: boolean }).isDestroyed
  ) {
    return false;
  }
  return true;
}

export function safeSetContent(
  editor: Editor | null | undefined,
  html: string
): boolean {
  if (!isEditorActive(editor)) return false;
  try {
    editor.commands.setContent(html);
    return true;
  } catch {
    return false;
  }
}

export function runEditorCommand(
  editor: Editor | null | undefined,
  fn: (activeEditor: Editor) => void
): void {
  if (!isEditorActive(editor)) return;
  try {
    fn(editor);
  } catch {
    // Ignore teardown races (React 19 Strict Mode / remount)
  }
}

import React, { useCallback, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Placeholder from '@tiptap/extension-placeholder';
import Highlight from '@tiptap/extension-highlight';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import { Button } from '../../atoms/Button';
import { Tooltip } from '../../atoms/Tooltip';
import { Icon } from '../../atoms/Icons/Icons';
import { Dialog, DialogTitle, DialogBody, DialogActions } from '../../atoms/Dialog';
import { Input } from '../../atoms/Input';
import { Checkbox } from '../../atoms/CheckBox';
import { cn } from '../../../utils/cn';

export type OutputFormat = 'json' | 'markdown' | 'html';

export interface ImageSize {
  width: number;
  height: number;
  label: string;
}

export interface WysiwygEditorProps {
  /** Initial content in HTML format */
  initialContent?: string;
  /** Callback when content changes */
  onChange?: (content: string, format: OutputFormat) => void;
  /** Output format for onChange callback */
  outputFormat?: OutputFormat;
  /** Placeholder text */
  placeholder?: string;
  /** Custom image upload handler */
  handleUploadImage?: (file: File) => Promise<string>;
  /** Whether the editor is editable */
  editable?: boolean;
  /** View-only mode: hides toolbar and shows content as preview */
  viewOnly?: boolean;
  /** Custom CSS classes */
  className?: string;
  /** Minimum height of the editor */
  minHeight?: string;
  /** Maximum height of the editor; content will scroll inside when exceeded */
  maxHeight?: string;
}

const COMMON_IMAGE_SIZES: ImageSize[] = [
  { width: 1920, height: 1080, label: 'Full HD (1920x1080)' },
  { width: 1280, height: 720, label: 'HD (1280x720)' },
  { width: 1024, height: 768, label: 'Standard (1024x768)' },
  { width: 800, height: 600, label: 'Medium (800x600)' },
  { width: 640, height: 480, label: 'Small (640x480)' },
  { width: 400, height: 300, label: 'Thumbnail (400x300)' },
];

const WysiwygEditor: React.FC<WysiwygEditorProps> = ({
  initialContent = '',
  onChange,
  outputFormat = 'html',
  placeholder = 'Start typing...',
  handleUploadImage,
  editable = true,
  viewOnly = false,
  className,
  minHeight = '400px',
  maxHeight,
}) => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageWidth, setImageWidth] = useState<number | ''>('');
  const [imageHeight, setImageHeight] = useState<number | ''>('');
  const [selectedSize, setSelectedSize] = useState<ImageSize | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [tableDialogOpen, setTableDialogOpen] = useState(false);
  const [tableRows, setTableRows] = useState<number | ''>(3);
  const [tableCols, setTableCols] = useState<number | ''>(3);
  const [tableWithHeader, setTableWithHeader] = useState(true);
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [isEditingLink, setIsEditingLink] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Color,
      TextStyle,
      Underline,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader.configure({
        HTMLAttributes: {
          style: 'font-weight: normal;',
        },
      }),
      TableCell,
      Placeholder.configure({
        placeholder,
      }),
      Highlight.configure({
        multicolor: true,
      }),
      Subscript,
      Superscript,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: initialContent,
    editable: viewOnly ? false : editable,
    onUpdate: ({ editor }) => {
      if (onChange) {
        let content = '';
        switch (outputFormat) {
          case 'json':
            content = JSON.stringify(editor.getJSON());
            break;
          case 'markdown':
            // Tiptap doesn't have built-in markdown export, using HTML as fallback
            // For markdown support, you would need to install @tiptap/extension-markdown
            content = editor.getHTML();
            break;
          case 'html':
          default:
            content = editor.getHTML();
            break;
        }
        onChange(content, outputFormat);
      }
    },
  });

  // Keep editor's editable state in sync with props (editable, viewOnly)
  React.useEffect(() => {
    if (!editor) return;
    editor.setEditable(!viewOnly && editable);
  }, [editor, editable, viewOnly]);

  const handleImageUpload = useCallback(async () => {
    if (!editor || !handleUploadImage) return;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      setIsUploading(true);
      try {
        const url = await handleUploadImage(file);
        editor.chain().focus().setImage({ src: url }).run();
      } catch (error) {
        console.error('Failed to upload image:', error);
      } finally {
        setIsUploading(false);
      }
    };
    input.click();
  }, [editor, handleUploadImage]);

  const handleImageUrl = useCallback(() => {
    if (!editor) return;

    const widthNum = selectedSize?.width || (typeof imageWidth === 'number' ? imageWidth : undefined);
    const heightNum = selectedSize?.height || (typeof imageHeight === 'number' ? imageHeight : undefined);

    const imageAttrs: { src: string; width?: number; height?: number } = {
      src: imageUrl,
    };

    if (widthNum) {
      imageAttrs.width = widthNum;
    }
    if (heightNum) {
      imageAttrs.height = heightNum;
    }

    editor.chain().focus().setImage(imageAttrs).run();

    setImageDialogOpen(false);
    setImageUrl('');
    setImageWidth('');
    setImageHeight('');
    setSelectedSize(null);
  }, [editor, imageUrl, imageWidth, imageHeight, selectedSize]);

  const handleInsertLink = useCallback(() => {
    if (!editor || !linkUrl) return;

    const { from, to } = editor.state.selection;
    const hasSelection = from !== to;

    if (linkText) {
      // Insert link with custom text
      if (hasSelection) {
        // Replace selected text with link
        editor
          .chain()
          .focus()
          .deleteSelection()
          .insertContent(`<a href="${linkUrl}">${linkText}</a>`)
          .run();
      } else {
        // Insert link at cursor position
        editor
          .chain()
          .focus()
          .insertContent(`<a href="${linkUrl}">${linkText}</a>`)
          .run();
      }
    } else {
      // Use selected text or URL as link text
      if (hasSelection) {
        // Apply link to selected text
        editor.chain().focus().setLink({ href: linkUrl }).run();
      } else {
        // Insert URL as link text
        editor
          .chain()
          .focus()
          .insertContent(`<a href="${linkUrl}">${linkUrl}</a>`)
          .run();
      }
    }

    setLinkDialogOpen(false);
    setLinkUrl('');
    setLinkText('');
    setIsEditingLink(false);
  }, [editor, linkUrl, linkText]);

  const handleRemoveLink = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().unsetLink().run();
    setLinkDialogOpen(false);
    setLinkUrl('');
    setLinkText('');
    setIsEditingLink(false);
  }, [editor]);

  const handleInsertTable = useCallback(() => {
    if (!editor) return;

    const rows = typeof tableRows === 'number' ? tableRows : 3;
    const cols = typeof tableCols === 'number' ? tableCols : 3;

    editor
      .chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: tableWithHeader })
      .run();

    setTableDialogOpen(false);
    setTableRows(3);
    setTableCols(3);
    setTableWithHeader(true);
  }, [editor, tableRows, tableCols, tableWithHeader]);

  const ToolbarButton: React.FC<{
    onClick: () => void;
    isActive?: boolean;
    disabled?: boolean;
    icon: string;
    tooltip: string;
  }> = ({ onClick, isActive = false, disabled = false, icon, tooltip }) => (
    <button
      type="button"
      title={tooltip}
      onClick={onClick}
      disabled={disabled || !editor}
      className={cn(
        'p-2 rounded-md transition-colors',
        isActive
          ? 'bg-primary text-white p-2 rounded-full'
          : 'text-gray-700 hover:bg-gray-100',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      <Icon icon={icon} className="w-5 h-5" />
    </button>
  );

  if (!editor) {
    return null;
  }

  const previewContent = editor.getHTML();

  return (
    <div
      className={cn(
        'rounded-lg overflow-hidden',
        !viewOnly && 'border border-gray-200',
        className,
      )}
    >
      {/* Toolbar */}
      {!viewOnly && (
        <div className="border-b border-gray-200 bg-gray-50 p-2 flex flex-wrap gap-2">
          {/* Text Formatting */}
          <div className="flex gap-1 border-r border-gray-300 pr-1 mr-1">
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              icon="mdi:format-bold"
              tooltip="Bold"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              icon="mdi:format-italic"
              tooltip="Italic"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              icon="mdi:format-underline"
              tooltip="Underline"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              icon="mdi:format-strikethrough"
              tooltip="Strikethrough"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              icon="mdi:code-tags"
              tooltip="Inline Code"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleHighlight().run()}
              icon="mdi:format-color-highlight"
              tooltip="Highlight"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleSubscript().run()}
              icon="mdi:format-subscript"
              tooltip="Subscript"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleSuperscript().run()}
              icon="mdi:format-superscript"
              tooltip="Superscript"
            />
          </div>

          {/* Headings */}
          <div className="flex gap-1 border-r border-gray-300 pr-1 mr-1">
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              icon="mdi:format-header-1"
              tooltip="Heading 1"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              icon="mdi:format-header-2"
              tooltip="Heading 2"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              icon="mdi:format-header-3"
              tooltip="Heading 3"
            />
          </div>

          {/* Lists */}
          <div className="flex gap-1 border-r border-gray-300 pr-1 mr-1">
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              icon="mdi:format-list-bulleted"
              tooltip="Bullet List"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              icon="mdi:format-list-numbered"
              tooltip="Numbered List"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              icon="mdi:format-list-checks"
              tooltip="Task List"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              icon="mdi:format-quote-close"
              tooltip="Blockquote"
            />
          </div>

          {/* Alignment */}
          <div className="flex gap-1 border-r border-gray-300 pr-1 mr-1">
            <ToolbarButton
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              icon="mdi:format-align-left"
              tooltip="Align Left"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              icon="mdi:format-align-center"
              tooltip="Align Center"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              icon="mdi:format-align-right"
              tooltip="Align Right"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().setTextAlign('justify').run()}
              icon="mdi:format-align-justify"
              tooltip="Justify"
            />
          </div>

          {/* Text Color */}
          <div className="flex gap-1 border-r border-gray-300 pr-1 mr-1">
            <Tooltip content="Text Color" placement="top">
              <input
                type="color"
                onInput={(e) =>
                  editor.chain().focus().setColor((e.target as HTMLInputElement).value).run()
                }
                value={editor.getAttributes('textStyle').color || '#000000'}
                className="w-8 h-8 cursor-pointer rounded border border-gray-300"
              />
            </Tooltip>
          </div>

          {/* Insert Elements */}
          <div className="flex gap-1 border-r border-gray-300 pr-1 mr-1">
            <ToolbarButton
              onClick={() => {
                const { from, to } = editor.state.selection;
                const selectedText = editor.state.doc.textBetween(from, to);

                // Check if we're in a link
                const linkAttributes = editor.getAttributes('link');
                const existingUrl = linkAttributes.href || '';
                const isLink = editor.isActive('link');

                setLinkText(selectedText || '');
                setLinkUrl(existingUrl);
                setIsEditingLink(isLink);
                setLinkDialogOpen(true);
              }}
              icon="mdi:link"
              tooltip={editor.isActive('link') ? 'Edit Link' : 'Insert Link'}
            />
            <ToolbarButton
              onClick={() => setImageDialogOpen(true)}
              icon="mdi:image"
              tooltip="Insert Image"
            />
            <ToolbarButton
              onClick={() => {
                setTableRows(3);
                setTableCols(3);
                setTableWithHeader(true);
                setTableDialogOpen(true);
              }}
              icon="mdi:table"
              tooltip="Insert Table"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              icon="mdi:minus"
              tooltip="Horizontal Rule"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              icon="mdi:code-braces"
              tooltip="Code Block"
            />
          </div>

          {/* Table Controls */}
          {editor.isActive('table') && (
            <div className="flex gap-1 border-r border-gray-300 pr-1 mr-1">
              <ToolbarButton
                onClick={() => editor.chain().focus().addColumnBefore().run()}
                icon="mdi:table-column-plus-before"
                tooltip="Add Column Before"
              />
              <ToolbarButton
                onClick={() => editor.chain().focus().addColumnAfter().run()}
                icon="mdi:table-column-plus-after"
                tooltip="Add Column After"
              />
              <ToolbarButton
                onClick={() => editor.chain().focus().deleteColumn().run()}
                icon="mdi:table-column-remove"
                tooltip="Delete Column"
              />
              <ToolbarButton
                onClick={() => editor.chain().focus().addRowBefore().run()}
                icon="mdi:table-row-plus-before"
                tooltip="Add Row Before"
              />
              <ToolbarButton
                onClick={() => editor.chain().focus().addRowAfter().run()}
                icon="mdi:table-row-plus-after"
                tooltip="Add Row After"
              />
              <ToolbarButton
                onClick={() => editor.chain().focus().deleteRow().run()}
                icon="mdi:table-row-remove"
                tooltip="Delete Row"
              />
              <ToolbarButton
                onClick={() => editor.chain().focus().deleteTable().run()}
                icon="mdi:table-remove"
                tooltip="Delete Table"
              />
            </div>
          )}

          {/* Undo/Redo */}
          <div className="flex gap-1 border-r border-gray-300 pr-1 mr-1">
            <ToolbarButton
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
              icon="mdi:undo"
              tooltip="Undo"
            />
            <ToolbarButton
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
              icon="mdi:redo"
              tooltip="Redo"
            />
          </div>

          {/* Preview/Edit Toggle */}
          <div className="flex gap-1 ml-auto">
            <Button
              leftIcon={isPreviewMode ? 'mdi:pencil' : 'mdi:eye'}
              variant="ghost"
              onClick={() => setIsPreviewMode(!isPreviewMode)}
            >
              {/* {isPreviewMode ? 'Edit' : 'Preview'} */}
            </Button>
          </div>
        </div>
      )}

      {/* Editor Content */}
      <div
        className="bg-white"
        style={{
          minHeight,
          ...(maxHeight
            ? {
              maxHeight,
              overflowY: 'auto',
            }
            : {}),
        }}
      >
        {viewOnly || isPreviewMode ? (
          <div
            className="p-4 ProseMirror max-w-none"
            dangerouslySetInnerHTML={{ __html: previewContent }}
          />
        ) : (
          <EditorContent editor={editor} className="p-4" />
        )}
      </div>

      {/* Image Dialog */}
      <Dialog isOpen={imageDialogOpen} onClose={() => setImageDialogOpen(false)} size="md">
        <DialogTitle>Insert Image</DialogTitle>
        <DialogBody>
          <div className="space-y-4">
            {handleUploadImage && (
              <div>
                <Button
                  onClick={handleImageUpload}
                  disabled={isUploading}
                  variant="outline"
                  fullWidth
                >
                  {isUploading ? 'Uploading...' : 'Upload Image'}
                </Button>
                <p className="text-sm text-gray-500 mt-2 text-center">or</p>
              </div>
            )}
            <Input
              label="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              fullWidth
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Common Sizes
              </label>
              <div className="grid grid-cols-2 gap-2">
                {COMMON_IMAGE_SIZES.map((size) => (
                  <button
                    key={size.label}
                    type="button"
                    onClick={() => {
                      setSelectedSize(size);
                      setImageWidth(size.width);
                      setImageHeight(size.height);
                    }}
                    className={cn(
                      'p-2 text-sm border rounded-md text-left transition-colors',
                      selectedSize?.label === size.label
                        ? 'border-primary bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    )}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Width (px)"
                type="number"
                value={imageWidth}
                onChange={(e) => {
                  setImageWidth(e.target.value ? parseInt(e.target.value) : '');
                  setSelectedSize(null);
                }}
                placeholder="Auto"
              />
              <Input
                label="Height (px)"
                type="number"
                value={imageHeight}
                onChange={(e) => {
                  setImageHeight(e.target.value ? parseInt(e.target.value) : '');
                  setSelectedSize(null);
                }}
                placeholder="Auto"
              />
            </div>
          </div>
        </DialogBody>
        <DialogActions>
          <Button variant="ghost" onClick={() => setImageDialogOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleImageUrl}
            disabled={!imageUrl || isUploading}
          >
            Insert Image
          </Button>
        </DialogActions>
      </Dialog>

      {/* Link Dialog */}
      <Dialog isOpen={linkDialogOpen} onClose={() => setLinkDialogOpen(false)} size="md">
        <DialogTitle>{isEditingLink ? 'Edit Link' : 'Insert Link'}</DialogTitle>
        <DialogBody>
          <div className="space-y-4">
            <Input
              label="URL"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              fullWidth
              required
            />
            <Input
              label="Link Text (optional)"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              placeholder="Leave empty to use selected text or URL"
              fullWidth
              helperText="If empty, will use selected text or the URL itself"
            />
          </div>
        </DialogBody>
        <DialogActions>
          <div className="flex justify-between w-full">
            {isEditingLink && (
              <Button variant="danger" onClick={handleRemoveLink}>
                Remove Link
              </Button>
            )}
            <div className="flex gap-2 ml-auto">
              <Button variant="ghost" onClick={() => setLinkDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleInsertLink}
                disabled={!linkUrl}
              >
                {isEditingLink ? 'Update Link' : 'Insert Link'}
              </Button>
            </div>
          </div>
        </DialogActions>
      </Dialog>

      {/* Table Dialog */}
      <Dialog isOpen={tableDialogOpen} onClose={() => setTableDialogOpen(false)} size="sm">
        <DialogTitle>Insert Table</DialogTitle>
        <DialogBody>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Rows"
                type="number"
                value={tableRows}
                onChange={(e) => {
                  const value = e.target.value ? parseInt(e.target.value) : '';
                  setTableRows(value);
                }}
                min={1}
                max={20}
                fullWidth
              />
              <Input
                label="Columns"
                type="number"
                value={tableCols}
                onChange={(e) => {
                  const value = e.target.value ? parseInt(e.target.value) : '';
                  setTableCols(value);
                }}
                min={1}
                max={20}
                fullWidth
              />
            </div>
            <Checkbox
              label="Include header row"
              checked={tableWithHeader}
              onChange={(e) => setTableWithHeader(e.target.checked)}
            />
          </div>
        </DialogBody>
        <DialogActions>
          <Button variant="ghost" onClick={() => setTableDialogOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleInsertTable}
            disabled={
              !tableRows ||
              !tableCols ||
              (typeof tableRows === 'number' && (tableRows < 1 || tableRows > 20)) ||
              (typeof tableCols === 'number' && (tableCols < 1 || tableCols > 20))
            }
          >
            Insert Table
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WysiwygEditor;

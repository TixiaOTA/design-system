import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import WysiwygEditor from './WysiwygEditor';
import { Button } from '../../atoms/Button';
import type { OutputFormat } from './WysiwygEditor';

const meta: Meta<typeof WysiwygEditor> = {
  title: 'Organisms/WysiwygEditor',
  component: WysiwygEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    // Explicit no-op for onChange to avoid implicit Storybook actions warning
    onChange: () => { },
  },
  argTypes: {
    outputFormat: {
      control: 'select',
      options: ['html', 'json', 'markdown'],
      description: 'Output format for the onChange callback',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the editor',
    },
    editable: {
      control: 'boolean',
      description: 'Whether the editor is editable',
    },
    viewOnly: {
      control: 'boolean',
      description: 'View-only mode: hides toolbar and shows content as preview',
    },
    minHeight: {
      control: 'text',
      description: 'Minimum height of the editor',
    },
    maxHeight: {
      control: 'text',
      description: 'Maximum height of the editor; content scrolls inside when exceeded',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Example component that demonstrates onChange functionality
const EditorWithOutput = ({ outputFormat = 'html' }: { outputFormat?: OutputFormat }) => {
  const [content, setContent] = useState('');
  const [format, setFormat] = useState<OutputFormat>(outputFormat);

  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center">
        <span className="text-sm font-medium">Output Format:</span>
        <Button
          variant={format === 'html' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFormat('html')}
        >
          HTML
        </Button>
        <Button
          variant={format === 'json' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFormat('json')}
        >
          JSON
        </Button>
        <Button
          variant={format === 'markdown' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFormat('markdown')}
        >
          Markdown
        </Button>
      </div>
      <WysiwygEditor
        outputFormat={format}
        onChange={(newContent, fmt) => {
          setContent(newContent);
          console.log('Content changed:', { content: newContent, format: fmt });
        }}
      />
      {content && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-semibold mb-2">Output ({format.toUpperCase()}):</h3>
          <pre className="text-xs overflow-auto max-h-64 whitespace-pre-wrap break-words">
            {content}
          </pre>
        </div>
      )}
    </div>
  );
};

export const Default: Story = {
  args: {
    placeholder: 'Start typing...',
    editable: true,
    minHeight: '400px',
    maxHeight: '600px',
  },
};

export const WithInitialContent: Story = {
  args: {
    initialContent: `
      <h1>Welcome to the WYSIWYG Editor</h1>
      <p>This is a <strong>rich text editor</strong> built with <em>Tiptap</em>.</p>
      <h2>Features</h2>
      <ul>
        <li>Format text with <strong>bold</strong>, <em>italic</em>, and <u>underline</u></li>
        <li>Create headings and lists</li>
        <li>Insert images and links</li>
        <li>Add tables and code blocks</li>
      </ul>
      <blockquote>
        <p>This is a blockquote example.</p>
      </blockquote>
      <p>Try editing this content!</p>
    `,
    placeholder: 'Start typing...',
    editable: true,
    minHeight: '400px',
    maxHeight: '600px',
  },
};

export const WithImageUpload: Story = {
  args: {
    placeholder: 'Start typing...',
    editable: true,
    minHeight: '400px',
    handleUploadImage: async (file: File) => {
      // Simulate image upload
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          // In a real app, you would upload to a server and return the URL
          // For demo purposes, we'll use a data URL
          setTimeout(() => {
            resolve(e.target?.result as string);
          }, 1000);
        };
        reader.readAsDataURL(file);
      });
    },
  },
};

export const ReadOnly: Story = {
  args: {
    initialContent: `
      <h1>Read-Only Mode</h1>
      <p>This editor is in <strong>view-only</strong> mode. You cannot edit the content.</p>
      <p>This is useful for displaying formatted content without allowing edits.</p>
    `,
    viewOnly: true,
    minHeight: '200px',
    maxHeight: '400px',
  },
};

export const ViewOnlyLongContent: Story = {
  args: {
    initialContent: `
      <h1>Long Content in View-Only Mode</h1>
      ${'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'.repeat(20)}
    `,
    viewOnly: true,
    minHeight: '200px',
    maxHeight: '300px',
  },
};

export const WithOutputDisplay: Story = {
  render: () => <EditorWithOutput />,
};

export const WithHTMLOutput: Story = {
  render: () => <EditorWithOutput outputFormat="html" />,
};

export const WithJSONOutput: Story = {
  render: () => <EditorWithOutput outputFormat="json" />,
};

export const WithMarkdownOutput: Story = {
  render: () => <EditorWithOutput outputFormat="markdown" />,
};

export const FullFeatured: Story = {
  args: {
    initialContent: `
      <h1>Full-Featured Editor</h1>
      <p>This editor includes all available features:</p>
      <h2>Text Formatting</h2>
      <p>You can make text <strong>bold</strong>, <em>italic</em>, <u>underlined</u>, <s>strikethrough</s>, and <code>inline code</code>.</p>
      <p>You can also use <mark>highlighting</mark>, <sub>subscript</sub>, and <sup>superscript</sup>.</p>
      <h2>Lists</h2>
      <ul>
        <li>Bullet list item 1</li>
        <li>Bullet list item 2</li>
        <li>Bullet list item 3</li>
      </ul>
      <ol>
        <li>Numbered list item 1</li>
        <li>Numbered list item 2</li>
        <li>Numbered list item 3</li>
      </ol>
      <h2>Table</h2>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
          </tr>
        </tbody>
      </table>
      <h2>Code Block</h2>
      <pre><code>function example() {
  return "Hello, World!";
}</code></pre>
      <h2>Blockquote</h2>
      <blockquote>
        <p>This is a blockquote. Use it to highlight important information or quotes.</p>
      </blockquote>
      <hr>
      <p>Try using the preview mode to see how your content will look!</p>
    `,
    placeholder: 'Start typing...',
    editable: true,
    minHeight: '500px',
    handleUploadImage: async (file: File) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setTimeout(() => {
            resolve(e.target?.result as string);
          }, 1000);
        };
        reader.readAsDataURL(file);
      });
    },
  },
};

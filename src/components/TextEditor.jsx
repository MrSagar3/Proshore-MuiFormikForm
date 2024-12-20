import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor,
    Autoformat,
    AutoImage,
    Autosave,
    BlockQuote,
    Bold,
    CKBox,
    CKBoxImageEdit,
    CloudServices,
    Essentials,
    Heading,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    PictureEditing,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    TodoList,
    Underline
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

const LICENSE_KEY = 'GPL';

const TextEditor = () => {
    const editorContainerRef = useRef(null);
    const editorRef = useRef(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);


    useEffect(() => {
        setIsLayoutReady(true);
        return () => setIsLayoutReady(false);
    }, []);

    // CKEditor configuration
    const { editorConfig } = useMemo(() => {
        if (!isLayoutReady) {
            return {};
        }

        return {
            editorConfig: {
                toolbar: {
                    items: [
                        'heading', '|', 'bold', 'italic', 'underline', '|', 'link',
                        'ckbox', 'insertTable', 'blockQuote', '|', 'bulletedList',
                        'numberedList', 'todoList', 'outdent', 'indent'
                    ],
                    shouldNotGroupWhenFull: false
                },
                plugins: [
                    Autoformat, AutoImage, Autosave, BlockQuote, Bold, CKBox, CKBoxImageEdit, CloudServices,
                    Essentials, Heading, ImageBlock, ImageCaption, ImageInline, ImageInsert, ImageInsertViaUrl,
                    ImageResize, ImageStyle, ImageTextAlternative, ImageToolbar, ImageUpload, Indent, IndentBlock,
                    Italic, Link, LinkImage, List, ListProperties, MediaEmbed, Paragraph, PasteFromOffice,
                    PictureEditing, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties,
                    TableToolbar, TextTransformation, TodoList, Underline
                ],
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                        { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                        { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                        { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
                    ]
                },
                image: {
                    toolbar: [
                        'toggleImageCaption', 'imageTextAlternative', '|', 'imageStyle:inline',
                        'imageStyle:wrapText', 'imageStyle:breakText', '|', 'resizeImage', '|', 'ckboxImageEdit'
                    ]
                },
                initialData: '<h2>Congratulations on setting up CKEditor 5! </h2>',
                licenseKey: LICENSE_KEY,
                link: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: 'https://',
                    decorators: {
                        toggleDownloadable: {
                            mode: 'manual',
                            label: 'Downloadable',
                            attributes: { download: 'file' }
                        }
                    }
                },
                list: {
                    properties: { styles: true, startIndex: true, reversed: true }
                },
                placeholder: 'Type or paste your content here!',
                table: {
                    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
                }
            }
        };
    }, [isLayoutReady]);

    return (
        <div className="editor-container" ref={editorContainerRef}>
            <div className="editor-container__editor">
                <div ref={editorRef}>
                    {editorConfig && <CKEditor editor={ClassicEditor} config={editorConfig} />}
                </div>
            </div>
        </div>
    );
};

export default TextEditor;
